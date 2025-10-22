'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/lib/constants';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeProject, setActiveProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const project = PROJECTS[activeProject];

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'mousemove') return;

    const container = e.currentTarget.getBoundingClientRect();
    let clientX: number;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - container.left;
    const percentage = (x / container.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % PROJECTS.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    setSliderPosition(50);
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-h2 text-primary mb-6">
            Nos <span className="text-accent">Réalisations</span>
          </h2>
          <p className="text-body-large text-gray-600">
            Des transformations impressionnantes qui parlent d'elles-mêmes.
            Découvrez le résultat de notre expertise.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Slider Container */}
            <div
              className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-3xl cursor-col-resize select-none"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleMove}
            >
              {/* Before Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.beforeImage}
                  alt={`${project.title} - Avant`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold">
                  AVANT
                </div>
              </div>

              {/* After Image */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={project.afterImage}
                  alt={`${project.title} - Après`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold">
                  APRÈS
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="flex gap-1">
                    <ChevronLeft className="w-4 h-4 text-primary" />
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              {/* Metric Badge */}
              {project.metric && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-3 rounded-full font-bold text-lg shadow-glow">
                  {project.metric}
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="font-semibold text-accent">
                      {project.service}
                    </span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevProject}
                    className="w-10 h-10 bg-primary-50 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label="Projet précédent"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="w-10 h-10 bg-primary-50 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label="Projet suivant"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            {/* Project Selector */}
            <div className="flex justify-center gap-2 mt-6">
              {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveProject(index);
                    setSliderPosition(50);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeProject
                      ? 'w-8 bg-accent'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Voir projet ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
