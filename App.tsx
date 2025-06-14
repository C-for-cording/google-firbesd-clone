
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Background Glows */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-3/4 opacity-20 pointer-events-none 
                   bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-600 via-red-700 to-transparent blur-[120px] -translate-x-1/4 -translate-y-1/4"
      ></div>
      <div 
        className="absolute top-0 right-0 w-1/2 h-3/4 opacity-20 pointer-events-none 
                   bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-600 via-fuchsia-700 to-transparent blur-[120px] translate-x-1/4 -translate-y-1/4"
      ></div>
      
      {/* A more focused glow at the very bottom as per image */}
       <div 
        className="absolute bottom-[-30%] left-[10%] w-[80%] h-[50%] opacity-40 pointer-events-none 
                   bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-800/50 via-purple-900/30 to-black/0 blur-[150px]"
      ></div>


      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 z-10">
        <Hero />
      </main>
      {/* Invisible spacer to push content up if footer was present or to ensure scroll if content is short */}
      <div className="h-20"></div> 
    </div>
  );
};

export default App;
