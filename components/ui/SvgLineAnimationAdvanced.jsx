import { useEffect, useRef } from "react";

const SvgLineAnimationAdvanced = ({
  svgPath,
  className,
  strokeColor = "#000",
  strokeWidth = 2,
  duration = 2,
  delay = 0.2,
  sequential = true,
  fillColor = "none",
  easing = "ease-in-out",
  reverse = false,
  loop = false,
}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Select all path elements in the SVG
    const paths = svgRef.current.querySelectorAll("path");

    // Reset any previous animations
    paths.forEach((path) => {
      if (path.style) {
        path.style.strokeDasharray = "";
        path.style.strokeDashoffset = "";
        path.style.animation = "";
        path.style.stroke = strokeColor;
        path.style.strokeWidth = `${strokeWidth}px`;
        path.style.fill = fillColor;
      }
    });

    // Apply animation to each path
    paths.forEach((path, index) => {
      try {
        // Get the length of the path
        const length = path.getTotalLength();

        // Set up the starting position
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = reverse ? -length : length;

        // Create a unique animation name for this path
        const animationName = `drawLine${index}`;

        // Create the keyframes for the animation
        const keyframes = `
          @keyframes ${animationName} {
            to {
              stroke-dashoffset: 0;
            }
          }
        `;

        // Add the keyframes to the document
        const styleElement = document.createElement("style");
        styleElement.textContent = keyframes;
        document.head.appendChild(styleElement);

        // Determine delay based on whether the animation should be sequential
        const pathDelay = sequential ? index * delay : delay;

        // Set animation properties
        const animationDuration =
          typeof duration === "function" ? duration(index, path) : duration;

        const animationIteration = loop ? "infinite" : "1";
        const animationDirection = loop ? "alternate" : "normal";

        // Apply the animation to the path
        path.style.animation = `${animationName} ${animationDuration}s ${pathDelay}s ${animationIteration} ${animationDirection} ${easing}`;
      } catch (e) {
        console.error("Error animating path:", e);
      }
    });

    // Cleanup function to remove the added style elements
    return () => {
      const styles = document.querySelectorAll("style");
      styles.forEach((style) => {
        if (style.textContent.includes("drawLine")) {
          style.remove();
        }
      });
    };
  }, [
    svgPath,
    strokeColor,
    strokeWidth,
    duration,
    delay,
    sequential,
    fillColor,
    easing,
    reverse,
    loop,
  ]);

  return (
    <div className={className}>
      <div
        ref={svgRef}
        dangerouslySetInnerHTML={{ __html: svgPath }}
        className="svg-container"
      />
      <style jsx>{`
        .svg-container {
          width: 100%;
          height: 100%;
        }
        .svg-container svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default SvgLineAnimationAdvanced;
