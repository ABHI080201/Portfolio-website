import React, { useEffect, useState } from "react";

const TorchLightCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Trigger animation only after component mounts
    setIsMounted(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering until fully mounted
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          left: position.x - 250,
          top: position.y - 250,
          backgroundImage: `radial-gradient(
            circle farthest-side at ${position.x}px ${position.y}px,
            #3a4a6a 0%,  /* Lighter shade of your background */
            #111d39 100%  /* Your background color */
          )`,
          mixBlendMode: "screen",
          transition: "transform 0.05s ease-out", // Smooth transition for better effect
        }}
      />
    </div>
  );
};

export default TorchLightCursor;
