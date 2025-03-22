"use client";

import { useState, useEffect } from "react";
import SvgLineAnimation from "../../components/ui/SvgLineAnimation";
import { loadSvg } from "../../utils/loadSvg";

const SvgAnimationDemo = () => {
  const [svgContent, setSvgContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        SVG Line Tracing Animation
      </h1>

      {isLoading ? (
        <div className="text-center">Loading SVG...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl h-[600px] border border-gray-300 rounded-lg p-4 bg-white mb-6">
            <SvgLineAnimation svgPath={svgContent} className="w-full h-full" />
          </div>

          <button
            onClick={handleRestartAnimation}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Restart Animation
          </button>
        </div>
      )}

      <div className="mt-10 text-center text-gray-600">
        <h2 className="text-xl font-semibold mb-4">How it works</h2>
        <p className="max-w-2xl mx-auto">
          This demonstration uses SVG stroke animation techniques to create a
          line drawing effect. The animation works by setting the
          stroke-dasharray and stroke-dashoffset CSS properties and animating
          them to create the drawing effect.
        </p>
      </div>
    </div>
  );
};

export default SvgAnimationDemo;
