'use client'
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

export default function CursorBlinker() {
    const [scope, animate] = useAnimate()
    useEffect(() => {
        animate(scope.current, {opacity: [0, 0, 1, 1]},{duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
            
          })
      })
      
    return (
        <div ref={scope}
        className="inline-block h-8 w-[2px] translate-y-1 bg-slate-900"
        ></div>
    );
}