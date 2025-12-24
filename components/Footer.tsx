import Link from 'next/link';
import { Facebook, Mail, MapPin, Phone, Anchor } from 'lucide-react';

const footerNavigation = {
  club: [
    { name: 'About Us', href: '/about' },
    { name: 'Membership', href: '/membership' },
    { name: 'Directors', href: '/directors' },
    { name: 'Past Commodores', href: '/past-commodores' },
  ],
  events: [
    { name: 'Calendar', href: '/events' },
    { name: 'AYC Events', href: '/ayc-events' },
    { name: 'I-LYA Events', href: '/ilya-events' },
    { name: 'Ships Log', href: '/ships-log' },
  ],
  resources: [
    { name: 'Docking Info', href: '/docking' },
    { name: 'Photo Gallery', href: '/gallery' },
    { name: 'Regalia', href: '/regalia' },
    { name: 'Links', href: '/resources' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nautical-navy-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Anchor className="h-8 w-8 text-nautical-gold-400" />
              <div>
                <h3 className="text-lg font-serif font-bold">Sun Parlour Boat Club</h3>
                <p className="text-sm text-nautical-navy-300">Est. 1960s</p>
              </div>
            </div>
            <p className="text-sm text-nautical-navy-300 leading-relaxed">
              The Friendliest Club On The Lake. A premier power boating organization serving Southwest Ontario.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/groups/810620342327085/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nautical-navy-300 hover:text-nautical-gold-400 transition-colors duration-200"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-nautical-gold-400">
              Club
            </h3>
            <ul className="space-y-3">
              {footerNavigation.club.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-nautical-navy-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-nautical-gold-400">
              Events
            </h3>
            <ul className="space-y-3">
              {footerNavigation.events.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-nautical-navy-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-nautical-gold-400">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-nautical-navy-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-nautical-navy-300">
                  2406 Front Road<br />
                  LaSalle, Ontario<br />
                  Canada N9J 2C4
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-nautical-navy-400 flex-shrink-0" />
                <a
                  href="tel:+15197346679"
                  className="text-sm text-nautical-navy-300 hover:text-white transition-colors duration-200"
                >
                  (519) 734-6679
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-nautical-navy-400 flex-shrink-0" />
                <a
                  href="mailto:spbc2005@bell.net"
                  className="text-sm text-nautical-navy-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-nautical-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-nautical-navy-400">
              &copy; {currentYear} Sun Parlour Boat Club. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-nautical-navy-400">
              <span>Member of I-LYA, AYC & IOBG</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
