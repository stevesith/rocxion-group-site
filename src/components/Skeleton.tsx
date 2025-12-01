import React from 'react';

interface SkeletonProps {
  className?: string;
  count?: number;
  height?: string | number;
  width?: string | number;
  circle?: boolean;
  variant?: 'text' | 'rectangular' | 'circular';
}

export function Skeleton({
  className = '',
  count = 1,
  height,
  width,
  circle = false,
  variant = 'rectangular',
}: SkeletonProps) {
  const defaultHeight = height || (variant === 'text' ? '1rem' : '100%');
  const defaultWidth = width || '100%';

  const baseClasses = 'bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-pulse rounded';

  const variantClasses = {
    text: 'h-4 rounded',
    rectangular: `rounded-lg`,
    circular: 'rounded-full',
  };

  const circleClass = circle ? 'rounded-full' : '';

  const skeletonClass = `${baseClasses} ${variantClasses[variant]} ${circleClass} ${className}`;

  if (count > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={skeletonClass}
            style={{
              height: defaultHeight,
              width: defaultWidth,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={skeletonClass}
      style={{
        height: defaultHeight,
        width: defaultWidth,
      }}
    />
  );
}

// Skeleton for gallery card
export function GalleryCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
      {/* Image skeleton */}
      <div className="aspect-square relative overflow-hidden bg-neutral-100">
        <Skeleton variant="rectangular" className="w-full h-full" />
      </div>

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <Skeleton variant="text" height="1.5rem" width="70%" />
        <Skeleton variant="text" height="1rem" width="90%" />
      </div>
    </div>
  );
}

// Skeleton grid for gallery
export function GalleryGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {Array.from({ length: count }).map((_, i) => (
        <GalleryCardSkeleton key={i} />
      ))}
    </div>
  );
}
