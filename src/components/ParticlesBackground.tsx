import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "transparent" }
        },
        fpsLimit: 120,
        smooth: true,
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              width: 1920,
              height: 1080
            }
          },
          color: {
            value: ["#8B5CF6", "#a78bfa", "#c4b5fd", "#14B8A6", "#2dd4bf"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: {
              min: 0.3,
              max: 0.9
            },
            animation: {
              enable: true,
              speed: 1.5,
              sync: false,
              startValue: "random"
            }
          },
          size: {
            value: {
              min: 2,
              max: 8
            },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
              startValue: "random"
            }
          },
          shadow: {
            enable: true,
            blur: 8,
            color: {
              value: "#8B5CF6"
            },
            offset: {
              x: 0,
              y: 0
            }
          },
          stroke: {
            width: 1,
            color: {
              value: "#8B5CF6"
            },
            opacity: 0.3
          },
          links: {
            enable: true,
            distance: 180,
            color: "#8B5CF6",
            opacity: 0.25,
            width: 1,
            shadow: {
              enable: true,
              blur: 3,
              color: "#8B5CF6"
            },
            triangles: {
              enable: false
            }
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            },
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200
              }
            },
            decay: 0
          },
          reduceDuplicates: true
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: false
              }
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: {
              enable: true,
              delay: 0.5
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.4,
                blink: false
              }
            },
            push: {
              quantity: 3
            }
          }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        autoPlay: true,
        detectRetina: true
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
