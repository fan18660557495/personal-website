import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  textAlign?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  textAlign = 'center',
  style,
}) => {
  const letters = text.split('');

  return (
    <p
      className={`split-parent ${className}`}
      style={{ 
        textAlign, 
        display: 'block', 
        margin: 0,
        padding: 0,
        ...style,
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          style={{
            display: 'inline-block',
            ...style,
          }}
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
  );
};

export default SplitText; 