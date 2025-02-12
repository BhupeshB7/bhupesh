import React from 'react';

const AboutSkeleton = () => {
  return (
    <div className="p-3 max-w-4xl mx-auto space-y-6">
      {/* Title Skeleton */}
      <div className="flex justify-center">
        <div className="h-8 md:h-10 w-64 md:w-96 bg-gray-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
      </div>

      {/* Description Skeleton */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-4 w-full max-w-3xl bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-full max-w-3xl bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-3/4 max-w-3xl bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
      </div>

      {/* Image Section Skeleton */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        {/* Skills Icon Placeholder */}
        <div className="w-full md:w-1/3 h-48 bg-gray-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
        
        {/* Main Image Placeholder */}
        <div className="w-full md:w-2/3 h-64 bg-gray-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
      </div>

      {/* Expertise Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div 
            key={item}
            className="bg-gray-50 dark:bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-gray-300 dark:border-white/20"
          >
            {/* Icon Placeholder */}
            <div className="w-8 h-8 bg-gray-200 dark:bg-zinc-800 rounded-lg animate-pulse mb-3" />
            
            {/* Title Placeholder */}
            <div className="h-6 w-32 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse mb-2" />
            
            {/* Description Placeholder */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Technical Skills Section Skeleton */}
      <div className="space-y-6">
        {/* Section Title */}
        <div className="flex justify-center">
          <div className="h-8 w-48 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
        </div>

        {/* Skills Carousel Skeleton */}
        <div className="w-full max-w-3xl mx-auto px-8">
          <div className="flex justify-between gap-4">
            {/* Carousel Items */}
            <div className="flex-1 flex justify-between">
              {[1, 2, 3, 4, 5].map((item) => (
                <div 
                  key={item}
                  className="w-20 h-24 bg-gray-100 dark:bg-white/10 rounded-xl animate-pulse flex flex-col items-center justify-center p-4"
                >
                  <div className="w-10 h-10 bg-gray-200 dark:bg-zinc-800 rounded-lg animate-pulse mb-2" />
                  <div className="w-12 h-3 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;