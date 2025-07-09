// import React from 'react';

// const Loading = () => {
//     return (
//         <div className='min-h-screen flex items-center justify-center'>
//             <div className='w-16 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin'>

//             </div>
//         </div>
//     );
// };

// export default Loading;

import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Multi-colored orb spinner */}
      <div className="relative w-20 h-20 mb-6">
        {/* Glowing base circle */}
        <div className="absolute inset-0 rounded-full bg-blue-100/70 animate-pulse"></div>
        
        {/* Animated segments */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 left-1/2 w-2 h-10 -ml-1 origin-bottom"
            style={{
              transform: `rotate(${i * 45}deg)`,
              animation: 'pulse-opacity 1.5s ease infinite',
              animationDelay: `${i * 0.1}s`
            }}
          >
            <div className={`w-full h-full rounded-full ${
              i % 2 === 0 ? 'bg-blue-500' : 'bg-indigo-400'
            }`}></div>
          </div>
        ))}
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full bg-white z-10"></div>
      </div>

      {/* Text with fading animation */}
      <div className="text-center">
        <p className="text-gray-600 font-medium text-lg mb-1">Loading</p>
        <div className="flex justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;