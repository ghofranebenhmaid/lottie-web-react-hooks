export const Container = {
   hidden: { opacity: 1, scale: 0 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         delayChildren: 1.3,
         staggerChildren: 0.5,
      },
   },
};

export const item = {
   hidden: { y: -20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
   },
};
