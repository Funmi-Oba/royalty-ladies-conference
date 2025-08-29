import React from 'react';

const FallingPetals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 opacity-50 animate-petal-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;