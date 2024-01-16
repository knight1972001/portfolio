"use client";

import LoadingCanvas from "./canvas/LoadingCanvas";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#050816]">
      <LoadingCanvas />
    </div>
  );
};

export default Loading;
