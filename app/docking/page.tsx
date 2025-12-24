import Link from 'next/link';
import { Anchor, Ship, Phone, Mail, AlertCircle, CheckCircle } from 'lucide-react';

const dockMasters = [
  {
    role: 'Primary',
    name: 'PC Dan Fitzpatrick',
    email: 'dgfitz01@gmail.com',
    phone: '(519) 817-0747',
  },
  {
    role: 'Backup',
    name: 'Ken Porter',
    email: 'marykenp@yahoo.com',
    phone: '(519) 966-1613',
  },
];

const protocolSteps = [
  {
    step: 1,
    title: 'Advance Notification',
    description: 'An I-LYA or AYC affiliated Club Member shall notify SPBC that they are requesting a reciprocal well in advance of their arrival date.',
  },
  {
    step: 2,
    title: 'Contact Holiday Harbour',
    description: 'The I-LYA or AYC affiliated Club Member shall contact HH Marina to book transient dockage as per the Marina\'s policy and shall provide the vessel details, arrival date and estimated time.',
  },
  {
    step: 3,
    title: 'Customs Clearance',
    description: 'Visiting guest shall ensure that they have cleared Canada Customs and Immigration upon or prior to arrival as per governmental regulations.',
  },
  {
    step: 4,
    title: 'Marina Registration',
    description: 'The visiting guest shall register with HH as per any normal transient boater. They shall fill out the marina\'s transient dockage rental contract upon arrival at the marina office.',
  },
  {
    step: 5,
    title: 'Follow Marina Rules',
    description: 'Visiting guests shall abide by all the rules and regulations of the Marina in addition to those of SPBC.',
  },
  {
    step: 6,
    title: 'SPBC Reciprocal Card',
    description: 'SPBC shall meet the visiting guest and provide them with SPBC Reciprocal Card that the guest will turn into HH while the guest completes the HH registration.',
  },
  {
    step: 7,
    title: 'Payment Process',
    description: 'SPBC (Chris Amlin) shall meet with HH at the end of each month during the boating season and pay the marina for the wells that were provided to our reciprocal guests and the rate agreed upon between SPBC and HH.',
  },
];

export default function DockingPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Ship className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Transient Docking</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Welcome visiting boaters! Learn about our reciprocal docking privileges and the protocol 
              for requesting a well at our home marina, Holiday Harbour.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-nautical-navy-900">
                    Important Information
                  </h2>
                  <div className="space-y-3 text-body">
                    <p>
                      SPBC shall <strong>ONLY OFFER (2) RECIPROCAL WELLS</strong> at any given time, and only if available.
                    </p>
                    <p>
                      Visiting guests may use the reciprocal privilege <strong>(1) time per year</strong> unless approved by SPBC.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-center mb-12">
                <h2 className="heading-lg mb-4">Reciprocal Well Protocol</h2>
                <p className="text-body max-w-2xl mx-auto">
                  The following protocol shall be used when a visiting guest of Sun Parlour Boat Club has 
                  requested a reciprocal well at our home marina, Holiday Harbour (HH).
                </p>
              </div>

              <div className="space-y-6">
                {protocolSteps.map((item) => (
                  <div
                    key={item.step}
                    className="card p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-nautical-ocean-500 to-nautical-ocean-600 flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-bold text-white">{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                          {item.title}
                        </h3>
                        <p className="text-body">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="heading-lg mb-4">Contact Information</h2>
              <p className="text-body">
                Get in touch with Holiday Harbour Marina or our SPBC Dock Masters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <Anchor className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Holiday Harbour Marina
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-body">
                    Contact Holiday Harbour directly to arrange dockage.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+15197346679"
                      className="flex items-center space-x-3 text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                    >
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">(519) 734-6679</span>
                    </a>
                    <a
                      href="http://www.holidayharbourmarina.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                    >
                      Visit Marina Website →
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <Ship className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    SPBC Dock Masters
                  </h3>
                </div>
                <div className="space-y-6">
                  {dockMasters.map((master) => (
                    <div key={master.email} className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-nautical-gold-600 uppercase tracking-wide">
                          {master.role}
                        </p>
                        <p className="text-lg font-medium text-nautical-navy-900">{master.name}</p>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={`mailto:${master.email}`}
                          className="flex items-center space-x-3 text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          <span className="break-all">{master.email}</span>
                        </a>
                        <a
                          href={`tel:${master.phone.replace(/\D/g, '')}`}
                          className="flex items-center space-x-3 text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                        >
                          <Phone className="w-4 h-4 flex-shrink-0" />
                          <span>{master.phone}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Purpose of This Protocol
                  </h3>
                  <p className="text-body">
                    The purpose of this protocol is to ensure that the marina owner (HH) is aware of any incoming guest, 
                    to ensure that they are assigned a well, if available, at a location suitable to HH, and to ensure 
                    that SPBC compensates HH accordingly.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-serif text-nautical-navy-900 mb-6">
                Thank you for choosing Sun Parlour Boat Club!
              </p>
              <Link href="/membership" className="btn-primary">
                Learn About Membership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
