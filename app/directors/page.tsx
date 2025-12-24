import { Mail, Phone, Anchor } from 'lucide-react';
import { formatPhoneNumber } from '@/lib/utils';

const flagOfficers = [
  {
    title: 'Commodore',
    name: 'PC Chris Amlin',
    email: 'spbc2005@bell.net',
    phone: '(519) 818-7050',
  },
  {
    title: 'Vice-Commodore',
    name: 'Scott Pillon',
    email: 'moldlogic@gmail.com',
    phone: '(519) 980-6357',
  },
  {
    title: 'Rear-Commodore',
    name: 'PC Jerry Taylor',
    email: 'jtaylorspbc2012@gmail.com',
    phone: '(519) 919-3487',
  },
  {
    title: 'Fleet Captain',
    name: 'Kari McMahon',
    email: 'k.mcmahon74@hotmail.com',
    phone: '(519) 919-4817',
  },
  {
    title: 'Immediate Past Commodore',
    name: 'PC Marilyn St Pierre',
    email: 'marilynstpierre@hotmail.ca',
    phone: '(519) 988-9695',
  },
];

const directors = [
  {
    title: 'Assistant Fleet Captain',
    name: 'Greg Rocheleau',
    email: 'grush@live.ca',
    phone: '(519) 796-1001',
  },
  {
    title: 'Secretary',
    name: 'PC Susan LaPorte',
    email: 'addictiontrsport@yahoo.ca',
    phone: '(519) 738-1147',
  },
  {
    title: 'Treasurer',
    name: 'Lady Margart Bowers',
    email: 'bowersm3357@yahoo.com',
    phone: '(226) 246-1392',
  },
  {
    title: 'Membership Chairperson',
    name: 'P/C Izzie Dulmage',
    email: 'izzied2017@gmail.com',
    phone: '(519) 735-7345',
  },
  {
    title: 'Communications Officer',
    name: 'P/C Rick Ingalls',
    email: 'spbccommunications@gmail.com',
    phone: '(519) 735-7345',
  },
  {
    title: 'Fleet Chaplain',
    name: 'Fr. Stan Fraser & Lady Joan',
    email: 'padre@mnsi.ca',
    phone: '(519) 734-1744',
  },
  {
    title: 'Web Master',
    name: 'P/C Doug Potier',
    email: 'djpotier@gmail.com',
    phone: '(519) 564-5550',
  },
];

const holidayHarbour = {
  contact: 'Brianna',
  phone: '(519) 734-6679',
  spbcContact: {
    name: 'P/C Jerry Taylor',
    phone: '(519) 919-3487',
  },
};

const delegates = [
  {
    title: 'IOBG Delegate',
    name: 'P/C Bill Woods & Lady Connie',
    email: 'grizzlywoods@hotmail.com',
    phone: '(519) 800-1626',
  },
  {
    title: 'I-LYA Delegate',
    name: 'PC Marilyn St Pierre',
    email: 'marilynstpierre@hotmail.ca',
    phone: '(519) 988-9695',
  },
  {
    title: 'Alt I-LYA Delegate',
    name: 'PC Chris Amlin',
    email: 'spbc2005@bell.net',
    phone: '(519) 818-7050',
  },
];

const aycDelegates = [
  {
    title: 'AYC Head Delegate',
    name: 'P/C Patrica Brough',
    email: 'patriciabrough@outlook.com',
    phone: '(226) 345-0101',
  },
  {
    title: 'AYC Delegate',
    name: 'P/C Gerry Veerman',
    email: 'veerman.gerry@hotmail.com',
    phone: '(519) 819-8890',
  },
  {
    title: 'AYC Delegate',
    name: 'FC Kari McMahon',
    email: 'k.mcmahon74@hotmail.com',
    phone: '(519) 919-4817',
  },
  {
    title: 'AYC 1st Alternate Delegate',
    name: 'VC Scott Pillon',
    email: 'Zipndryscott@gmail.com',
    phone: '',
  },
  {
    title: 'AYC 2nd Alternate Delegate',
    name: 'PC Rick Ingalls',
    email: 'spbccommunications@gmail.com',
    phone: '(519) 735-7345',
  },
  {
    title: 'AYC 3rd Alternate Delegate',
    name: 'PC 2020 Bill Deans',
    email: 'wtdeans@bell.net',
    phone: '(519) 978-9183',
  },
];

interface ContactCardProps {
  title: string;
  name: string;
  email?: string;
  phone?: string;
}

function ContactCard({ title, name, email, phone }: ContactCardProps) {
  return (
    <div className="card p-6 space-y-4 hover:shadow-lg transition-all duration-300">
      <div className="space-y-2">
        <h3 className="text-lg font-serif font-semibold text-nautical-navy-900">
          {title}
        </h3>
        <p className="text-base font-medium text-nautical-navy-700">{name}</p>
      </div>
      <div className="space-y-3 pt-2">
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center space-x-3 text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200 group"
          >
            <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <span className="break-all">{email}</span>
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="flex items-center space-x-3 text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200 group"
          >
            <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <span>{phone}</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function DirectorsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Anchor className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Club Leadership</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Meet the dedicated officers and directors who guide Sun Parlour Boat Club. 
              Feel free to reach out with any questions or to learn more about our club.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom space-y-16">
          <div>
            <div className="mb-12 text-center">
              <h2 className="heading-lg mb-4">Flag Officers</h2>
              <p className="text-body max-w-2xl mx-auto">
                Our flag officers provide strategic leadership and oversee the club's operations and activities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flagOfficers.map((officer) => (
                <ContactCard key={officer.email} {...officer} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12 text-center">
              <h2 className="heading-lg mb-4">Directors</h2>
              <p className="text-body max-w-2xl mx-auto">
                Our directors manage specific areas of club operations and member services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {directors.map((director) => (
                <ContactCard key={director.email} {...director} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12 text-center">
              <h2 className="heading-lg mb-4">Holiday Harbour Marina</h2>
              <p className="text-body max-w-2xl mx-auto">
                Our home marina contact information and SPBC liaison.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="card p-6 space-y-4">
                <h3 className="text-lg font-serif font-semibold text-nautical-navy-900">
                  Holiday Harbour Contact
                </h3>
                <p className="text-base font-medium text-nautical-navy-700">
                  {holidayHarbour.contact}
                </p>
                <a
                  href={`tel:${holidayHarbour.phone.replace(/\D/g, '')}`}
                  className="flex items-center space-x-3 text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{holidayHarbour.phone}</span>
                </a>
              </div>
              <div className="card p-6 space-y-4">
                <h3 className="text-lg font-serif font-semibold text-nautical-navy-900">
                  SPBC Contact
                </h3>
                <p className="text-base font-medium text-nautical-navy-700">
                  {holidayHarbour.spbcContact.name}
                </p>
                <a
                  href={`tel:${holidayHarbour.spbcContact.phone.replace(/\D/g, '')}`}
                  className="flex items-center space-x-3 text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{holidayHarbour.spbcContact.phone}</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-12 text-center">
              <h2 className="heading-lg mb-4">Organization Delegates</h2>
              <p className="text-body max-w-2xl mx-auto">
                Our representatives to affiliated boating organizations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {delegates.map((delegate) => (
                <ContactCard key={delegate.email} {...delegate} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12 text-center">
              <h2 className="heading-lg mb-4">AYC Delegates</h2>
              <p className="text-body max-w-2xl mx-auto">
                Our representatives to the Associated Yacht Clubs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aycDelegates.map((delegate) => (
                <ContactCard key={delegate.email || delegate.name} {...delegate} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="card p-12 text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="heading-md">Club Address</h2>
            <div className="space-y-2 text-body">
              <p className="font-semibold text-nautical-navy-900">Sun Parlour Boat Club</p>
              <p>2406 Front Road</p>
              <p>LaSalle, Ontario, Canada</p>
              <p>N9J 2C4</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-nautical-navy-600">
                For general inquiries, please contact any of our flag officers listed above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
