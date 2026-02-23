import React from 'react';

export function HeroSkeleton() {
  return (
    <div className="min-h-screen bg-[#0B1020] flex items-center pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left space-y-6 animate-pulse">
            <div className="h-8 w-48 bg-white/10 rounded-full mx-auto lg:mx-0" />
            <div className="space-y-4">
              <div className="h-12 bg-white/10 rounded-lg w-full" />
              <div className="h-12 bg-white/10 rounded-lg w-5/6" />
            </div>
            <div className="h-6 bg-white/10 rounded-lg w-full" />
            <div className="h-6 bg-white/10 rounded-lg w-4/5" />
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <div className="h-12 w-40 bg-[#DBFE01]/20 rounded-full" />
              <div className="h-12 w-40 bg-white/10 rounded-full" />
            </div>
          </div>
          <div className="animate-pulse">
            <div className="aspect-square bg-white/5 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionSkeleton({ height = "h-96" }) {
  return (
    <div className={`${height} bg-gray-50 animate-pulse`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="space-y-4 w-full max-w-2xl">
          <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto" />
          <div className="h-4 bg-gray-200 rounded-lg w-full" />
          <div className="h-4 bg-gray-200 rounded-lg w-5/6 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export function DarkSectionSkeleton({ height = "h-96" }) {
  return (
    <div className={`${height} bg-[#0B1020] animate-pulse`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="space-y-4 w-full max-w-2xl">
          <div className="h-8 bg-white/10 rounded-lg w-3/4 mx-auto" />
          <div className="h-4 bg-white/10 rounded-lg w-full" />
          <div className="h-4 bg-white/10 rounded-lg w-5/6 mx-auto" />
        </div>
      </div>
    </div>
  );
}