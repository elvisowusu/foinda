export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay },
    }),
  };
  
  export const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  
  export const slideRight = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  