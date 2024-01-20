'use client'
import {useMotionValue, useTransform,  animate, LazyMotion, m, domAnimation} from "framer-motion";
import {ReactNode, useEffect} from "react";
import CursorBlinker from "./Cursor";

type prop ={
    children:string,
    className:string
}

export default function TypingText({children, className}:prop) {
    type ReactChild = string | number | HTMLElement 
    const baseText = children;
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <span className="">
        <LazyMotion features={domAnimation}>
            <m.span className={className}>{displayText}</m.span>
        </LazyMotion>
      <CursorBlinker />
    </span>
  );
}
