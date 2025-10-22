'use client';

import React, { useRef } from 'react';
import { CheckCircle2, Award, Star, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';

const icons = {
  CheckCircle2,
  Award,
  Star,
  Clock,
};

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = '',
  duration = 2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const StatsBar: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative -mt-20 z-20 bg-white rounded-3xl shadow-3xl mx-4 lg:mx-auto max-w-7xl"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-100">
        {STATS.map((stat, index) => {
          const Icon = icons[stat.icon as keyof typeof icons];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 text-center group hover:bg-primary-50 transition-all duration-500 first:rounded-tl-3xl first:rounded-tr-3xl lg:first:rounded-tr-none lg:first:rounded-tl-3xl lg:first:rounded-bl-3xl last:rounded-bl-3xl last:rounded-br-3xl lg:last:rounded-bl-none lg:last:rounded-tr-3xl"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
                </div>
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-primary mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
