import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonWrapper = ({
  children,
  isLoading,
  fullWith = true,
}: {
  children: React.ReactNode;
  isLoading: boolean;
  fullWith?: boolean;
}) => {
    if (!isLoading) return children
  return <Skeleton className="{cn(fullWith && 'w-full')}">
    <div className="opacity-0">
        {children}
    </div>
  </Skeleton>;
};

export default SkeletonWrapper;
