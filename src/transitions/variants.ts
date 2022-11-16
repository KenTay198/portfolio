const variants = {
  home: {
    out: {
      opacity: 1,
      y: "100vh",
      transition: {
        duration: 0.5,
      },
      backgroundColor: "#092937",
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
      backgroundColor: "#092937",
    },
    exit: {
      opacity: 1,
      y: "-100vh",
      transition: {
        duration: 0.5,
      },
      backgroundColor: "#EAD1A9",
    },
  },
  about: {
    out: {
      opacity: 1,
      y: "100vh",
      transition: {
        duration: 0.5,
      },
      backgroundColor: "#092937",
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
      backgroundColor: "#EAD1A9",
    },
    exit: {
      opacity: 1,
      y: "-100vh",
      transition: {
        duration: 0.5,
      },
      backgroundColor: "#EAD1A9",
    },
  },
};

export default variants;
