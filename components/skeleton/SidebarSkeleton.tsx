import React from 'react';

const SidebarSkeleton = () => {
  return (
    <>
      {/* Mobile Skeleton */}
      <div className="md:hidden w-full">
        <div className="flex items-center gap-4 p-4">
          <div className="w-[60px] h-[60px] rounded-full bg-gray-200 dark:bg-zinc-800 animate-pulse" />
          <div className="flex-1">
            <div className="h-6 w-32 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse mb-2" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-800 animate-pulse" />
        </div>
      </div>

      {/* Desktop Skeleton */}
      <div className="hidden max-h-[700px] md:flex flex-col gap-6 w-full md:w-[30%] bg-white p-8 dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        {/* Avatar Skeleton */}
        <div className="w-[150px] h-[150px] rounded-full bg-gray-200 dark:bg-zinc-800 animate-pulse mx-auto" />

        {/* Name Skeleton */}
        <div className="h-8 w-48 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse mx-auto" />

        {/* Title Skeleton */}
        <div className="h-4 w-36 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse mx-auto" />

        {/* Divider */}
        <div className="border-gray-300 dark:border-gray-600 w-[90%] mx-auto" />

        {/* Contact Info Skeletons */}
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex items-center gap-3 mx-auto">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-800 animate-pulse" />
              <div className="h-4 w-32 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Social Media Section Title Skeleton */}
        <div className="h-4 w-28 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse mx-auto" />

        {/* Social Media Links Skeleton */}
        <div className="flex flex-row gap-6 justify-center">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarSkeleton;