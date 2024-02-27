import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import animationData from '@/json/success.json';

interface LottieAnimationProps {
  loop?: boolean;
  autoplay?: boolean;
  width?: number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  loop = false,
  autoplay = true,
  width = 200
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData,
      });

      return () => {
        if (animationInstance.current) {
          animationInstance.current.destroy();
        }
      };
    }
  }, [loop, autoplay]);

  return <div ref={animationContainer} style={{ width }} />;
};

export default LottieAnimation;