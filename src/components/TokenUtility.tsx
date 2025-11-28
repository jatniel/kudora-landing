import { motion } from "framer-motion";
import { Fuel, Shield, Vote, Gift, Coins, ArrowRight } from "lucide-react";

export function TokenUtility() {
  const utilities = [
    {
      icon: Gift,
      title: "Builder Rewards",
      description:
        "Earn KUD for meaningful contributions to the ecosystem. Recognition translates to tangible rewards for builders.",
      highlight: "Recognition System",
    },
    {
      icon: Fuel,
      title: "Project Activity Fuel",
      description:
        "Use KUD to power each project activities within the Kudora ecosystem. Task creation, Task execution, and more require KUD.",
      highlight: "Ecosystem Fuel",
    },
    {
      icon: Shield,
      title: "Support Project Lifecycle",
      description:
        "Invest KUD into projects who share our vision. Support projects from initial development to long-term sustainability.",
      highlight: "Project Support",
    },
    {
      icon: Vote,
      title: "Governance",
      description:
        "Participate in on-chain governance decisions. KUD holders shape the future of the protocol through proposals and voting.",
      highlight: "Community Driven",
    },
  ];

  return (
    <section className="py-24 bg-[#0F0F12] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] -top-48 -left-48" />
        <div className="absolute w-[500px] h-[500px] bg-teal-600/5 rounded-full blur-[100px] -bottom-48 -right-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
            <Coins className="w-4 h-4" />
            <span>Native Token</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            KUD Token Utility
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The KUD token is the native currency of the Kudora ecosystem,
            designed to power transactions, secure the network, and reward
            meaningful contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {utilities.map((utility, index) => (
            <motion.div
              key={utility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-teal-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <utility.icon className="w-7 h-7 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {utility.title}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {utility.highlight}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {utility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-600/10 via-gray-800/50 to-teal-600/10 border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to explore KUD?
                </h3>
                <p className="text-gray-400">
                  Learn more about tokenomics, staking, and governance in our
                  documentation.
                </p>
              </div>
              <a
                href="https://kudora.org/white-paper/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 whitespace-nowrap"
              >
                Read White Paper
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
