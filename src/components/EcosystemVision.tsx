import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Award, Users, Sparkles, Target } from "lucide-react";

export function EcosystemVision() {
  const principles = [
    {
      icon: Award,
      title: "Recognition as Currency",
      description:
        "Developers receive recognition for contributing real value to the ecosystem",
    },
    {
      icon: Users,
      title: "Builder Community",
      description:
        "A thriving community of developers building the future together",
    },
    {
      icon: Sparkles,
      title: "Sustainable Development",
      description:
      "Not oriented toward hype, but toward long-term sustainable growth",
    },
    {
      icon: Target,
      title: "Meaningful dApps",
      description:
        "Focus on creating impactful applications, infrastructure, and tools",
    },
  ];

  return (
    <section className="py-24 bg-[#0F0F12] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-teal-600/10 rounded-full blur-3xl top-1/2 left-1/4 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl top-1/3 right-1/4 animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ecosystem Vision
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
            <p>
              Kudora aims to build an ecosystem where developers receive
              recognition for contributing value. We believe in rewarding those
              who build meaningful infrastructure, applications, and tools that
              advance the entire ecosystem.
            </p>
            <p>
              Our focus is on creating meaningful dApps, robust infrastructure,
              and powerful development tools. We're not oriented toward hype or
              speculation—we're committed to sustainable development that
              delivers real utility and long-term value.
            </p>
            <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text">
              Build with purpose. Earn recognition. Shape the future.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 hover:border-teal-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-teal-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <principle.icon className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <InteractiveVisualization />
      </div>
    </section>
  );
}

function InteractiveVisualization() {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const particles = useMemo(() => {
    const count = isMobile ? 50 : 100;
    return [...Array(count)].map((_, i) => {
      const isShootingStar = i < 2; // Only 2 shooting stars
      const isPlanet = !isShootingStar && Math.random() > 0.99;
      const colorIndex = Math.floor(Math.random() * 3);
      const colors = [
        "from-purple-400 to-teal-400",
        "from-blue-400 to-indigo-400",
        "from-teal-400 to-emerald-400",
      ];

      return {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: isPlanet
          ? Math.random() * 15 + 8
          : isShootingStar
          ? 2
          : Math.random() * 2 + 1,
        isPlanet,
        isShootingStar,
        brightness: isPlanet ? 1 : Math.random(),
        color: isPlanet ? colors[colorIndex] : "bg-white",
        delay: isShootingStar ? Math.random() * 3 : Math.random() * 5,
        duration: isShootingStar
          ? Math.random() * 1 + 1
          : Math.random() * 20 + 20,
        moveX: isShootingStar
          ? (Math.random() - 0.5) * 300
          : Math.random() * 100 - 50,
        moveY: isShootingStar
          ? (Math.random() - 0.5) * 300
          : Math.random() * 100 - 50,
      };
    });
  }, [isMobile]);

  // Generate flyby comets with random directions
  const flybyComets = useMemo(() => {
    const count = isMobile ? 2 : 5;
    return [...Array(count)].map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 700;
      return {
        id: i,
        targetX: Math.cos(angle) * distance,
        targetY: Math.sin(angle) * distance,
        delay: i * 4 + Math.random() * 2,
        duration: 2 + Math.random() * 1,
        repeatDelay: 15 + Math.random() * 10,
      };
    });
  }, [isMobile]);

  // Fixed large planets with different colors
  // Scale factor for mobile: reduce planet sizes by 50%
  const sizeScale = isMobile ? 0.5 : 1;

  const fixedPlanets = useMemo(
    () => [
      {
        id: "planet-1",
        left: 15,
        top: 25,
        size: 35 * sizeScale,
        label: "Nova",
        link: "https://kudora.org",
        gradient: "from-purple-500 to-indigo-600",
        glowColor: "rgba(139, 92, 246, 0.6)",
      },
      {
        id: "planet-2",
        left: 75,
        top: 20,
        size: 25 * sizeScale,
        label: "Pulse",
        link: "https://kudora.org/white-paper/",
        gradient: "from-teal-400 to-emerald-500",
        glowColor: "rgba(45, 212, 191, 0.6)",
      },
      {
        id: "planet-3",
        left: 85,
        top: 65,
        size: 45 * sizeScale,
        label: "Astra",
        link: "https://github.com/Kudora-Labs",
        gradient: "from-blue-400 to-cyan-500",
        glowColor: "rgba(56, 189, 248, 0.6)",
      },
      {
        id: "planet-4",
        left: 10,
        top: 70,
        size: 20 * sizeScale,
        label: "Lumen",
        link: "https://kudora.org/builders-manifesto/",
        gradient: "from-pink-400 to-rose-500",
        glowColor: "rgba(244, 114, 182, 0.6)",
      },
      {
        id: "planet-5",
        left: 60,
        top: 80,
        size: 30 * sizeScale,
        label: "Core",
        link: "https://cosmos.directory/kudora",
        gradient: "from-amber-400 to-orange-500",
        glowColor: "rgba(251, 191, 36, 0.6)",
      },
    ],
    [sizeScale]
  );

  function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
    rectRef.current = event.currentTarget.getBoundingClientRect();
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!rectRef.current) return;
    // Use cached rect
    const { left, top, width, height } = rectRef.current;
    const xPct = event.clientX - left - width / 2;
    const yPct = event.clientY - top - height / 2;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    rectRef.current = null;
  }

  const backgroundX = useTransform(mouseX, [-300, 300], [-40, 40]);
  const backgroundY = useTransform(mouseY, [-300, 300], [-40, 40]);
  const planetsX = useTransform(mouseX, [-300, 300], [-12, 12]);
  const planetsY = useTransform(mouseY, [-300, 300], [-12, 12]);
  const contentX = useTransform(mouseX, [-300, 300], [-10, 10]);
  const contentY = useTransform(mouseY, [-300, 300], [-10, 10]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-16 relative perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
        }}
        className="aspect-[4/5] md:aspect-video rounded-3xl bg-gradient-to-br from-purple-900/20 to-teal-900/20 border border-gray-700/50 overflow-hidden flex items-center justify-center transition-colors hover:border-teal-500/30"
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              x: backgroundX,
              y: backgroundY,
              scale: 1.1,
              transformStyle: "preserve-3d",
            }}
          >
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className={`absolute rounded-full ${
                  p.isPlanet
                    ? `bg-gradient-to-br ${p.color} shadow-lg`
                    : "bg-white"
                }`}
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: p.size,
                  height: p.size,
                  // Simplified shadow logic
                  boxShadow: p.isPlanet
                    ? `0 0 20px 2px rgba(171, 137, 250, 0.5)`
                    : p.isShootingStar
                    ? `0 0 5px 1px rgba(255, 255, 255, 0.8)`
                    : "none",
                  z: p.isShootingStar ? 10 : -50,
                  willChange: "transform, opacity",
                }}
                animate={{
                  scale: p.isPlanet
                    ? [1, 1.05, 1]
                    : p.isShootingStar
                    ? [0.5, 3]
                    : [1, 1.5, 0.5],
                  opacity: p.isPlanet
                    ? [0.8, 1, 0.8]
                    : p.isShootingStar
                    ? [0, 1, 0]
                    : [0.1, 1, 0.1],
                  x: [0, p.moveX],
                  y: [0, p.moveY],
                }}
                transition={{
                  scale: {
                    duration: p.isShootingStar
                      ? p.duration
                      : p.isPlanet
                      ? 8
                      : 3,
                    delay: p.delay,
                    repeat: Infinity,
                    repeatDelay: p.isShootingStar ? 3 : 0,
                    ease: p.isShootingStar ? "easeIn" : "linear",
                  },
                  opacity: {
                    duration: p.isShootingStar
                      ? p.duration
                      : p.isPlanet
                      ? 6
                      : Math.random() * 3 + 1,
                    delay: p.delay,
                    repeat: Infinity,
                    repeatDelay: p.isShootingStar ? 3 : 0,
                    ease: p.isShootingStar ? "easeInOut" : "linear",
                  },
                  x: {
                    duration: p.duration,
                    repeat: Infinity,
                    repeatDelay: p.isShootingStar ? 3 : 0,
                    repeatType: p.isShootingStar ? "loop" : "reverse",
                    ease: "linear",
                  },
                  y: {
                    duration: p.duration,
                    repeat: Infinity,
                    repeatDelay: p.isShootingStar ? 3 : 0,
                    repeatType: p.isShootingStar ? "loop" : "reverse",
                    ease: "linear",
                  },
                }}
              />
            ))}
          </motion.div>

          {/* Flyby comets - comes from center and flies past camera */}
          {flybyComets.map((comet) => (
            <motion.div
              key={`comet-${comet.id}`}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                left: "50%",
                top: "50%",
                width: 3,
                height: 3,
                boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.9)",
                willChange: "transform, opacity",
              }}
              animate={{
                x: [0, comet.targetX],
                y: [0, comet.targetY],
                scale: [0.1, 1, 7, 2],
                opacity: [0, 0.2, 0.2, 0.3],
              }}
              transition={{
                duration: comet.duration,
                delay: comet.delay,
                repeat: Infinity,
                repeatDelay: comet.repeatDelay,
                ease: "easeIn",
                times: [0, 0.3, 0.8, 1],
              }}
            />
          ))}

          {/* Fixed large planets */}
          <motion.div
            className="absolute inset-0"
            style={{
              x: planetsX,
              y: planetsY,
            }}
          >
            {/* Universal thread connecting planets - using exact planet centers */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="threadGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                  <stop offset="50%" stopColor="rgba(45, 212, 191, 0.6)" />
                  <stop offset="100%" stopColor="rgba(251, 191, 36, 0.6)" />
                </linearGradient>
                {/* Removed complex glow filter for performance */}
              </defs>
              {/* 
                Planet centers (adjusted for position + half size in viewport units):
                Planet 1 (purple): left=15, top=25
                Planet 2 (teal): left=75, top=20
                Planet 3 (blue): left=85, top=65
                Planet 4 (pink): left=10, top=70
                Planet 5 (amber): left=60, top=80
              */}
              {/* Main constellation path connecting all planets */}
              <motion.path
                d="M 15 25 L 75 20 L 85 65 L 60 80 L 10 70 Z"
                fill="none"
                stroke="url(#threadGradient)"
                strokeWidth="0.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.45 }}
                transition={{
                  pathLength: { duration: 3, ease: "easeInOut" },
                  opacity: { duration: 1 },
                }}
              />
              {/* Cross connections for more organic network feel */}
              <motion.line
                x1="15"
                y1="25"
                x2="85"
                y2="65"
                stroke="url(#threadGradient)"
                strokeWidth="0.06"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.line
                x1="75"
                y1="20"
                x2="10"
                y2="70"
                stroke="url(#threadGradient)"
                strokeWidth="0.06"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
              <motion.line
                x1="15"
                y1="25"
                x2="60"
                y2="80"
                stroke="url(#threadGradient)"
                strokeWidth="0.06"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                transition={{ duration: 2, delay: 2 }}
              />
            </svg>

            {fixedPlanets.map((planet) => (
              <motion.a
                key={planet.id}
                href={planet.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${planet.label} destination`}
                className="absolute flex flex-col items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                style={{
                  left: `calc(${planet.left}% - ${planet.size / 2}px)`,
                  top: `calc(${planet.top}% - ${planet.size / 2}px)`,
                  width: planet.size,
                  textDecoration: "none",
                }}
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.15 },
                  pressed: { scale: 0.95 },
                }}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="pressed"
              >
                <motion.div
                  className={`rounded-full bg-gradient-to-br ${planet.gradient} opacity-30`}
                  style={{
                    width: planet.size,
                    height: planet.size,
                  }}
                  variants={{
                    rest: {
                      opacity: 0.3,
                      filter: "brightness(1)",
                      boxShadow: `0 0 ${planet.size * 0.5}px 2px ${
                        planet.glowColor
                      }`,
                    },
                    hover: {
                      opacity: 1,
                      filter: "brightness(2.0) saturate(1.3)",
                      boxShadow: `0 0 ${planet.size * 2.5}px 20px ${
                        planet.glowColor
                      }, 0 0 ${planet.size * 4}px 30px ${planet.glowColor}`,
                    },
                    pressed: {
                      opacity: 1,
                      filter: "brightness(2.5) saturate(1.4)",
                      boxShadow: `0 0 ${planet.size * 2.5}px 18px ${
                        planet.glowColor
                      }`,
                    },
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
                <motion.span
                  className="pt-3 text-[11px] uppercase tracking-[0.35em] text-gray-200/70 font-mono text-center"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  {planet.label}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="relative text-center"
            style={{
              x: contentX,
              y: contentY,
              z: 50,
              transformStyle: "preserve-3d",
            }}
          >
            <Network className="w-24 h-24 text-purple-400/30 mx-auto mb-4" />
            <p className="text-gray-500 font-mono text-sm">
              Ecosystem Visualization
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Network({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="5" fill="currentColor" />
      <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="80" cy="20" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="80" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="80" cy="80" r="4" fill="currentColor" opacity="0.6" />
      <line
        x1="50"
        y1="50"
        x2="20"
        y2="20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <line
        x1="50"
        y1="50"
        x2="80"
        y2="20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <line
        x1="50"
        y1="50"
        x2="20"
        y2="80"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <line
        x1="50"
        y1="50"
        x2="80"
        y2="80"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}
