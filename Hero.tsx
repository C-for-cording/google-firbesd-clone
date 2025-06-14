
import React from 'react';
import CodeBracketsIcon from './icons/CodeBracketsIcon';

const Hero: React.FC = () => {
  return (
    <div className="text-center py-16 md:py-24 lg:py-32 flex flex-col items-center">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 max-w-4xl">
        The full{' '}
        <CodeBracketsIcon className="inline-block h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 mx-1 align-middle relative transform -translate-y-1 sm:-translate-y-1 lg:-translate-y-2" />
        stack
        <br />
        AI workspace
      </h1>
      <p className="text-neutral-300 text-lg sm:text-xl lg:text-2xl max-w-2xl mb-10">
        Firebase Studio accelerates your entire development lifecycle with AI agents. Build backends, front ends, and mobile apps, all in one place.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3.5 px-8 rounded-lg text-lg transition-colors">
        Try Firebase Studio
      </button>
    </div>
  );
};

export default Hero;
