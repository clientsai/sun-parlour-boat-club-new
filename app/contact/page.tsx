import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Send className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Get In Touch</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              We're here to help. Reach out anytime with questions about membership, events, or boating.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="heading-lg mb-6">Contact Information</h2>
                  <p className="text-body mb-8">
                    The best way to reach us is by contacting one of our officers directly. Everyone is friendly and responds quickly.
                  </p>
                </div>

                <div className="card p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-nautical-navy-900">Our Location</h3>
                      <p className="text-body">
                        Holiday Harbour Marina<br />
                        2406 Front Road<br />
                        LaSalle, Ontario<br />
                        Canada N9J 2C4
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-nautical-navy-900">Marina Phone</h3>
                      <a href="tel:+15197346679" className="text-body text-nautical-ocean-600 hover:text-nautical-ocean-700">
                        (519) 734-6679
                      </a>
                      <p className="text-sm text-nautical-navy-600">
                        Call Holiday Harbour Marina for general information
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-nautical-navy-900">Response Time</h3>
                      <p className="text-body">
                        We usually respond within 24 hours. If you need faster help, call one of our officers directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="card p-8 space-y-6">
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Who Should I Contact?
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-nautical-navy-900">New Members</h4>
                      <p className="text-body text-sm">
                        Contact our Membership Chairperson, P/C Izzie Dulmage
                      </p>
                      <div className="flex flex-col gap-2 text-sm">
                        <a href="mailto:izzied2017@gmail.com" className="text-nautical-ocean-600 hover:text-nautical-ocean-700">
                          izzied2017@gmail.com
                        </a>
                        <a href="tel:+15197357345" className="text-nautical-ocean-600 hover:text-nautical-ocean-700">
                          (519) 735-7345
                        </a>
                      </div>
                    </div>

                    <div className="h-px bg-nautical-sand-200" />

                    <div className="space-y-2">
                      <h4 className="font-semibold text-nautical-navy-900">General Questions</h4>
                      <p className="text-body text-sm">
                        Contact our Commodore, Scott Pillon
                      </p>
                      <div className="flex flex-col gap-2 text-sm">
                        <a href="mailto:moldlogic@gmail.com" className="text-nautical-ocean-600 hover:text-nautical-ocean-700">
                          moldlogic@gmail.com
                        </a>
                        <a href="tel:+15199806357" className="text-nautical-ocean-600 hover:text-nautical-ocean-700">
                          (519) 980-6357
                        </a>
                      </div>
                    </div>

                    <div className="h-px bg-nautical-sand-200" />

                    <div className="space-y-2">
                      <h4 className="font-semibold text-nautical-navy-900">Events & Activities</h4>
                      <p className="text-body text-sm">
                        Contact our Fleet Captain, Kari McMahon
                      </p>
                      <div className="flex flex-col gap-2 text-sm">
                        <a href="mailto:k.mcmahon74@hotmail.com" className="text-nautical-ocean-600 hover:text-nautical-ocean-700">
                          k.mcmahon74@hotmail.com
                        </a>
                        <a href="tel:+15199194817" className="text-nautical-ocean-600 hover:text-nautical-ocean-700">
                          (519) 919-4817
                        </a>
                      </div>
                    </div>

                    <div className="h-px bg-nautical-sand-200" />

                    <div className="space-y-2">
                      <h4 className="font-semibold text-nautical-navy-900">Docking & Marina</h4>
                      <p className="text-body text-sm">
                        Contact our Dock Master, PC Dan Fitzpatrick
                      </p>
                      <div className="flex flex-col gap-2 text-sm">
                        <a href="mailto:dgfitz01@gmail.com" className="text-nautical-ocean-600 hover:text-nautical-ocean-700">
                          dgfitz01@gmail.com
                        </a>
                        <a href="tel:+15198170747" className="text-nautical-ocean-600 hover:text-nautical-ocean-700">
                          (519) 817-0747
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/directors" className="btn-secondary w-full text-center">
                      View All Officers
                    </Link>
                  </div>
                </div>

                <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200 space-y-4">
                  <h3 className="text-lg font-semibold text-nautical-navy-900">
                    Visit Us
                  </h3>
                  <p className="text-body">
                    Stop by Holiday Harbour Marina anytime during boating season. Our members are usually around on weekends. We'd love to show you around and answer your questions in person.
                  </p>
                  <a
                    href="https://www.holidayharbourmarina.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium"
                  >
                    Visit Marina Website →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 text-center space-y-6">
              <h2 className="heading-md">Ready to Join?</h2>
              <p className="text-body max-w-2xl mx-auto">
                Don't wait. The best time to join is now. Download a membership application or contact us to get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/membership" className="btn-primary">
                  Membership Info
                </Link>
                <Link href="/faq" className="btn-secondary">
                  Read FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
