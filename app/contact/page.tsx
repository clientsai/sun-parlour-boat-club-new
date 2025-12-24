import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Clock, Anchor, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Mail className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Contact Us</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              We're here to help. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="heading-md mb-6">Get In Touch</h2>
                  <p className="text-body mb-8">
                    Have a question about membership? Want to know more about our events? 
                    Need help with docking? We're happy to help.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-nautical-ocean-50 flex items-center justify-center">
                          <Mail className="w-6 h-6 text-nautical-ocean-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-nautical-navy-900 mb-2">
                          Email Us
                        </h3>
                        <p className="text-sm text-nautical-navy-600 mb-3">
                          Send us an email and we'll get back to you soon.
                        </p>
                        <a
                          href="mailto:spbc2005@bell.net"
                          className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                        >
                          spbc2005@bell.net
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-nautical-ocean-50 flex items-center justify-center">
                          <Phone className="w-6 h-6 text-nautical-ocean-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-nautical-navy-900 mb-2">
                          Call Us
                        </h3>
                        <p className="text-sm text-nautical-navy-600 mb-3">
                          Call Holiday Harbour Marina where we're located.
                        </p>
                        <a
                          href="tel:+15197346679"
                          className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                        >
                          (519) 734-6679
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-nautical-ocean-50 flex items-center justify-center">
                          <Facebook className="w-6 h-6 text-nautical-ocean-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-nautical-navy-900 mb-2">
                          Facebook
                        </h3>
                        <p className="text-sm text-nautical-navy-600 mb-3">
                          Join our Facebook group to connect with members.
                        </p>
                        <a
                          href="https://www.facebook.com/groups/810620342327085/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                        >
                          Visit Our Group →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="card p-8 space-y-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-8 h-8 text-nautical-ocean-600" />
                    <h3 className="text-xl font-semibold text-nautical-navy-900">
                      Visit Us
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-nautical-navy-900 mb-2">
                        Holiday Harbour Marina
                      </p>
                      <p className="text-nautical-navy-700">
                        2406 Front Road<br />
                        LaSalle, Ontario<br />
                        Canada N9J 2C4
                      </p>
                    </div>
                    <div className="pt-4">
                      <a
                        href="https://www.holidayharbourmarina.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full text-center"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card p-8 space-y-6">
                  <div className="flex items-center space-x-3">
                    <Anchor className="w-8 h-8 text-nautical-ocean-600" />
                    <h3 className="text-xl font-semibold text-nautical-navy-900">
                      Club Officers
                    </h3>
                  </div>
                  <p className="text-body">
                    Want to speak with a club officer? See our full list of directors 
                    and their contact information.
                  </p>
                  <Link href="/directors" className="btn-secondary w-full text-center">
                    View Directors
                  </Link>
                </div>

                <div className="card p-8 space-y-4 bg-nautical-sand-50">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-nautical-ocean-600" />
                    <h3 className="text-lg font-semibold text-nautical-navy-900">
                      Response Time
                    </h3>
                  </div>
                  <p className="text-sm text-nautical-navy-700">
                    We usually respond to emails within 24-48 hours. During busy 
                    boating season, it may take a bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Common Questions</h2>
              <p className="text-body">
                Looking for quick answers? Check our FAQ page.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/faq" className="card p-6 hover:shadow-lg transition-all duration-300 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nautical-ocean-50">
                  <Send className="w-6 h-6 text-nautical-ocean-600" />
                </div>
                <h3 className="font-semibold text-nautical-navy-900">
                  Membership FAQ
                </h3>
                <p className="text-sm text-nautical-navy-600">
                  Questions about joining
                </p>
              </Link>

              <Link href="/docking" className="card p-6 hover:shadow-lg transition-all duration-300 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nautical-ocean-50">
                  <Anchor className="w-6 h-6 text-nautical-ocean-600" />
                </div>
                <h3 className="font-semibold text-nautical-navy-900">
                  Docking Info
                </h3>
                <p className="text-sm text-nautical-navy-600">
                  Visiting our marina
                </p>
              </Link>

              <Link href="/getting-started" className="card p-6 hover:shadow-lg transition-all duration-300 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nautical-ocean-50">
                  <Clock className="w-6 h-6 text-nautical-ocean-600" />
                </div>
                <h3 className="font-semibold text-nautical-navy-900">
                  Getting Started
                </h3>
                <p className="text-sm text-nautical-navy-600">
                  New member guide
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
