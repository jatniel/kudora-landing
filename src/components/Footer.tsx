import { Github, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  const links = {
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Block Explorer', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'Cosmos Directory', href: '#' },
    ],
    community: [
      { name: 'Discord', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Telegram', href: '#' },
      { name: 'Forum', href: '#' },
    ],
    developers: [
      { name: 'API Reference', href: '#' },
      { name: 'Developer Tools', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Grant Programs', href: '#' },
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Kudora-Labs', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/KudoraChain', label: 'X' },
    { icon: MessageCircle, href: 'https://discord.gg/tRzeP4Cy', label: 'Discord' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              {links.developers.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">

            <img
              src="/logo_dark_v1.svg"
              alt="Kudora Logo"
              className="w-12 h-12 border-white border rounded-full"
            />
            <div>
              <div className="text-white font-bold">Kudora</div>
              <div className="text-gray-500 text-xs">Layer-1 Blockchain</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-gray-500 text-sm">
            © 2024 Kudora. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
