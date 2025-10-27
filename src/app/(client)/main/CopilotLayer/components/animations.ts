export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };
  
  export const fadeSide = (direction: "left" | "right" = "left", delay = 0) => ({
    hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
  });
  
  export const fadeChild = (index: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  });
  