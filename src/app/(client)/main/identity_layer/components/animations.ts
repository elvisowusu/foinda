export const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true },
  });
  
  export const slide = (dir = "left", delay = 0) => ({
    initial: { opacity: 0, x: dir === "left" ? -40 : 40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true },
  });
  