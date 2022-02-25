const ParticleConfig = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#636e72",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.6,
      anim: {
        speed: 1,
        opacity_min: 0.1,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        speed: 40,
        size_min: 0.1,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
      shadow: {
        enable: true,
        color: "#e74c3c",
        blur: 5,
      },
    },
    move: {
      enable: true,
      random: true,
      speed: 1.5,
      attract: {
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 325,
        line_linked: {
          opacity: 0.5,
          color: {
            value: "#e74c3c",
          },
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default ParticleConfig;
