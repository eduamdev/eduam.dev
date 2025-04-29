'use client';

import * as motion from 'motion/react-client';
import { useInView } from 'motion/react';
import React, { useRef } from 'react';

interface TextFadeProps {
  text: string;
  className?: string;
  transitionTiming?: number;
}

export default function TextFade({
  text,
  className = '',
  transitionTiming = 0.07,
}: TextFadeProps) {
  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * transitionTiming },
    }),
  };

  const letters = text.split('');
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={variants}
      viewport={{ once: true }}
      className={` ${className}`}
    >
      {letters.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
