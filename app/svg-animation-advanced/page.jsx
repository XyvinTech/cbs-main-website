"use client";

import { useState, useEffect } from "react";
import SvgLineAnimationAdvanced from "../../components/ui/SvgLineAnimationAdvanced";
import { loadSvg } from "../../utils/loadSvg";

const SvgAnimationAdvancedDemo = () => {
  const [svgContent, setSvgContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Animation settings
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [duration, setDuration] = useState(2);
  const [delay, setDelay] = useState(0.2);
  const [sequential, setSequential] = useState(true);
  const [fillColor, setFillColor] = useState("none");
  const [easing, setEasing] = useState("ease-in-out");
  const [reverse, setReverse] = useState(false);
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        setIsLoading(true);
        const svg = await loadSvg("/images/Front Panel-2.svg");
        setSvgContent(svg);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load SVG");
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchSvg();
  }, []);

  const handleRestartAnimation = () => {
    // Force re-render of the component to restart animation
    setSvgContent("");
    setTimeout(() => {
      loadSvg("/images/Front Panel-2.svg").then((svg) => {
        setSvgContent(svg);
      });
    }, 100);
  };

  const easingOptions = [
    "ease",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "linear",
    "cubic-bezier(0.6, 0.2, 0.1, 1)",
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Advanced SVG Line Animation
      </h1>

      {isLoading ? (
        <div className="text-center">Loading SVG...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 border border-gray-300 rounded-lg p-4 bg-white">
            <div className="w-full h-[600px]">
              <SvgLineAnimationAdvanced
                svgPath={svgContent}
                className="w-full h-full"
                strokeColor={strokeColor}
                strokeWidth={strokeWidth}
                duration={duration}
                delay={delay}
                sequential={sequential}
                fillColor={fillColor}
                easing={easing}
                reverse={reverse}
                loop={loop}
              />
            </div>
          </div>

          <div className="lg:col-span-1 p-6 bg-gray-50 rounded-lg border border-gray-300">
            <h2 className="text-xl font-bold mb-6">Animation Controls</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stroke Color
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                    className="h-8 w-8"
                  />
                  <input
                    type="text"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                    className="border border-gray-300 px-3 py-1 rounded-md text-sm w-24"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fill Color
                </label>
                <div className="flex items-center space-x-3">
                  <select
                    value={fillColor}
                    onChange={(e) => setFillColor(e.target.value)}
                    className="border border-gray-300 px-3 py-1 rounded-md text-sm w-full"
                  >
                    <option value="none">None</option>
                    <option value="transparent">Transparent</option>
                    <option value="#ffffff">White</option>
                    <option value="#000000">Black</option>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stroke Width: {strokeWidth}px
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={strokeWidth}
                  onChange={(e) => setStrokeWidth(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration: {duration}s
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delay: {delay}s
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={delay}
                  onChange={(e) => setDelay(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Easing
                </label>
                <select
                  value={easing}
                  onChange={(e) => setEasing(e.target.value)}
                  className="border border-gray-300 px-3 py-1 rounded-md text-sm w-full"
                >
                  {easingOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sequential"
                  checked={sequential}
                  onChange={(e) => setSequential(e.target.checked)}
                  className="h-4 w-4"
                />
                <label
                  htmlFor="sequential"
                  className="text-sm font-medium text-gray-700"
                >
                  Sequential Animation
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="reverse"
                  checked={reverse}
                  onChange={(e) => setReverse(e.target.checked)}
                  className="h-4 w-4"
                />
                <label
                  htmlFor="reverse"
                  className="text-sm font-medium text-gray-700"
                >
                  Reverse Direction
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="loop"
                  checked={loop}
                  onChange={(e) => setLoop(e.target.checked)}
                  className="h-4 w-4"
                />
                <label
                  htmlFor="loop"
                  className="text-sm font-medium text-gray-700"
                >
                  Loop Animation
                </label>
              </div>

              <button
                onClick={handleRestartAnimation}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4"
              >
                Restart Animation
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 text-center text-gray-600">
        <h2 className="text-xl font-semibold mb-4">How it works</h2>
        <p className="max-w-2xl mx-auto">
          This demonstration uses the stroke-dasharray and stroke-dashoffset SVG
          properties to create a drawing animation effect. By adjusting these
          properties and animating them, we can control exactly how the SVG
          paths are drawn.
        </p>
      </div>
    </div>
  );
};

export default SvgAnimationAdvancedDemo;
