import { AlertTriangle, Ship, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function NoWakeZonesPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <AlertTriangle className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Detroit River No Wake Zones</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Important information about no wake zones along the Detroit River. 
              Know before you go to ensure safe and responsible boating.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-nautical-navy-900">
                    Important Safety Information
                  </h2>
                  <p className="text-body">
                    Before heading out on the Detroit River, it's essential to familiarize yourself with the 
                    designated no wake zones. These areas are established to protect shorelines, docks, and 
                    other vessels, as well as to ensure the safety of all water users.
                  </p>
                  <p className="text-body">
                    Operating at no wake speed means traveling at the slowest speed possible while maintaining 
                    steerage, typically 5 mph or less, producing minimal wake.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h2 className="heading-lg">No Wake Zone Map</h2>
              <p className="text-body max-w-2xl mx-auto">
                View the official no wake zones map for the Detroit River to plan your route and ensure 
                compliance with local regulations.
              </p>
              <div className="card p-8 bg-nautical-sand-50">
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-nautical-ocean-600" />
                  </div>
                  <p className="text-body">
                    The no wake zones map shows all designated areas along the Detroit River where reduced 
                    speed is required. This includes areas near marinas, residential shorelines, and other 
                    sensitive zones.
                  </p>
                  <p className="text-sm text-nautical-navy-600">
                    Map courtesy of Sun Parlour Boat Club
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Ship className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Why No Wake Zones Matter
                  </h3>
                </div>
                <ul className="space-y-3 text-body">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Protect shorelines from erosion</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Prevent damage to docks and moored vessels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Ensure safety of swimmers and small craft</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Reduce noise in residential areas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Comply with local boating regulations</span>
                  </li>
                </ul>
              </div>

              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Boating Responsibly
                  </h3>
                </div>
                <ul className="space-y-3 text-body">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Always observe posted no wake zone signs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Reduce speed well before entering zones</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Maintain proper lookout at all times</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Be courteous to other boaters</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Report violations to authorities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card p-8 bg-nautical-sand-50">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Additional Resources
                </h3>
                <p className="text-body">
                  For more information about boating regulations, safety guidelines, and navigation rules 
                  on the Detroit River and Great Lakes, visit these helpful resources:
                </p>
                <ul className="space-y-3 text-body">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Canadian Coast Guard - Fisheries and Oceans Canada</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>U.S. Coast Guard Navigation Center</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Windsor Power & Sail Squadron</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/resources" className="btn-secondary">
                    View All Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="heading-lg text-white">Safe Boating Starts With You</h2>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Sun Parlour Boat Club promotes safe and responsible boating practices. 
              By respecting no wake zones and following navigation rules, we all contribute 
              to a safer, more enjoyable boating environment.
            </p>
            <div className="pt-4">
              <Link href="/about" className="btn-primary bg-white text-nautical-navy-900 hover:bg-nautical-sand-50">
                Learn More About SPBC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
