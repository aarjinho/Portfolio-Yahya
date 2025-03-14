import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Props {
  children: JSX.Element;
  className?: string;
  id?: string;
}

export const Reveal = ({ children, className, id }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Vérifie si l'élément est visible
  const mainControls = useAnimation(); // Contrôle l'animation principale
  const slideControls = useAnimation(); // Contrôle l'animation de glissement

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <motion.div
    className={className}
    id={id}
      ref={ref}
      style={{overflow: 'hidden' }}
      variants={{
        hidden: { opacity: 0, y: 75 }, // État initial (hors de vue et transparent)
        visible: { opacity: 1, y: 0 }, // État final (apparaît avec le mouvement vertical)
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}


    </motion.div>
  );
};
