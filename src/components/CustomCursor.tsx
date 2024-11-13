import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickEffect, setClickEffect] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleClick = () => {
      setClickEffect(true);
      setTimeout(() => setClickEffect(false), 500); // Effect duration
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-5 h-5 bg-transparent pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {clickEffect && (
        <div
          className="fixed w-20 h-20 bg-blue-300 rounded-full opacity-75 pointer-events-none animate-ping"
          style={{ left: `${position.x - 40}px`, top: `${position.y - 40}px` }}
        />
      )}
    </>
  );
};

export default CustomCursor;