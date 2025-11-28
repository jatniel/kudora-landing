import { motion } from 'framer-motion';
import { Rocket, Users, Scale, Wrench, Handshake } from 'lucide-react';

export function Roadmap() {
  const quarters = [
    {
      quarter: 'Step 1',
      title: 'Ecosystem Launch',
      icon: Rocket,
      items: [
        'Launch Kudora Mainnet',
        'Network Decentralization',
        'Network Decurity Enhancements',
      ],
    },
    {
      quarter: 'Step 2',
      title: 'Program Task Deployments',
      icon: Users,
      items: [
        'Project Community Validations',
        'Owner & Builder Board Views',
        'System Rewards Integration',
      ],
    },
    {
      quarter: 'Step 3',
      title: 'Recognition & Reputation',
      icon: Scale,
      items: [
        'Contributor Traceability',
        'Mentorship & Sponsorship Mechanisms',
        'Governance Reputation Oriented',
      ],
    },
    {
      quarter: 'Step 4',
      title: 'Dispute Resolution',
      icon: Wrench,
      items: [
        'Jury Selection System',
        'Judgment & Appeals Process',
        'Rewards & Penalties Implementation',
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-[#0F0F12] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LDkyLDI0NiwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building the future of developer-focused blockchain infrastructure
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-teal-600 to-purple-600 opacity-20" />

          <div className="space-y-12">
            {quarters.map((quarter, index) => (
              <motion.div
                key={quarter.quarter}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse lg:justify-end' : 'lg:justify-start'
                    }`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-teal-600/20 flex items-center justify-center">
                        <quarter.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-purple-400 font-semibold">{quarter.quarter}</div>
                        <h3 className="text-2xl font-bold text-white">{quarter.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {quarter.items.map((item) => (
                        <li key={item} className="text-gray-400 flex items-center gap-2">
                          <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                            {item}
                          </div>
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-teal-600 flex-shrink-0 items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-600/30 z-10">
                  {quarter.quarter}
                </div>

                <div className="flex-1 w-full lg:opacity-0" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600/10 to-teal-600/10 border border-purple-500/20">
            <Handshake className="w-5 h-5 text-teal-400" />
            <span className="text-gray-300">Ongoing: Partnerships & Integrations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
