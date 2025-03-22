import { useEffect, useRef } from "react";

const SvgLineAnimation = ({ svgPath, className }) => {
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
      }
    });

    // Apply animation to each path
    paths.forEach((path, index) => {
      // Get the length of the path
      const length = path.getTotalLength();

      // Set up the starting position
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

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

      // Apply the animation to the path with delay based on index for sequential animation
      path.style.animation = `${animationName} 2s ${
        index * 0.2
      }s forwards ease-in-out`;
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
  }, [svgPath]);

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
        .svg-container path {
          fill: none;
          stroke: #000;
          stroke-width: 2;
          transition: stroke-dashoffset 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SvgLineAnimation;
