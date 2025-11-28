import { motion } from "framer-motion";
import { Play, Maximize2, X } from "lucide-react";
import { useState } from "react";
import createNftGif from "../assets/Create NFT.gif";
import takeNftGif from "../assets/Take nft.gif";

function GifCard({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="group rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden">
        <div className="relative aspect-[9/16] sm:aspect-video max-h-[70vh] mx-auto bg-black">
          <img src={src} alt={title} className="w-full h-full object-contain" />
          {/* Bouton agrandir visible uniquement sur mobile */}
          <button
            onClick={openFullscreen}
            className="sm:hidden absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 bg-purple-600/90 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-colors backdrop-blur-sm"
          >
            <Maximize2 className="w-4 h-4" />
            Agrandir
          </button>
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Modal plein écran pour mobile */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="w-full h-full flex items-center justify-center p-4">
            <img
              src={src}
              alt={title}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            Tapez sur × pour fermer
          </p>
        </div>
      )}
    </>
  );
}

export function OnboardingProject() {
  const tutorials = [
    {
      title: "As Owner - Create Task",
      description:
        "Create and manage your Project Tasks. Reward Builders for their contributions.",
      src: createNftGif,
    },
    {
      title: "As Builder - Take Task",
      description:
        "Claim and work on Project Tasks that interest you. Get rewarded upon completion.",
      src: takeNftGif,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0F0F12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 sm:mb-6">
            <Play className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">
              Web3 Project Management
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Onboarding Project
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300">
            Manage your projects efficiently using Kudora's decentralized
            platform. Create tasks, collaborate with builders, and track
            progress seamlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GifCard
                title={tutorial.title}
                description={tutorial.description}
                src={tutorial.src}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
