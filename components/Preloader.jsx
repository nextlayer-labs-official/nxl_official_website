import React from "react";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/logo-primary.svg"
          alt="NextLayer Labs"
          width={160}
          height={64}
          priority
          className="h-14 sm:h-16 w-auto opacity-90"
        />

        <div className="w-40 h-[2px] bg-slate-800 overflow-hidden rounded-full">
          <div className="h-full w-1/2 bg-slate-300 animate-loader" />
        </div>

        <p className="text-sm text-slate-500 tracking-[0.2em] uppercase">
          Loading
        </p>
      </div>

      <style jsx>{`
        @keyframes loader {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }

        .animate-loader {
          animation: loader 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;