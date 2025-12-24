import Link from 'next/link';
import { Anchor, Calendar, Users, Ship, Award, MapPin } from 'lucide-react';
import { HeroSVG } from '@/components/HeroSVG';

export default function Home() {
  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-nautical-navy-900 via-nautical-navy-800 to-nautical-ocean-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <HeroSVG />
        </div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-6">
              <Anchor className="w-10 h-10 text-nautical-gold-400" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-balance">
              Sun Parlour Boat Club
            </h1>
            <p className="text-xl md:text-2xl text-nautical-navy-100 font-light tracking-wide">
              The Friendliest Club On The Lake
            </p>
            <p className="text-lg text-nautical-navy-200 max-w-2xl mx-auto leading-relaxed">
              A premier power boating organization serving Southwest Ontario since the 1960s. 
              Member of Inter-Lake Yachting Association, Associated Yacht Clubs, and International Order of Blue Gavel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/membership" className="btn-primary">
                Become a Member
              </Link>
              <Link href="/events" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Events
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center space-y-4 group hover:border-nautical-ocean-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-ocean-50 group-hover:bg-nautical-ocean-100 transition-colors duration-300">
                <Calendar className="w-8 h-8 text-nautical-ocean-600" />
              </div>
              <h3 className="heading-sm">Events & Activities</h3>
              <p className="text-body">
                From weekend cruises to social gatherings, we offer year-round activities for members and their families.
              </p>
              <Link href="/events" className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200">
                View Calendar →
              </Link>
            </div>

            <div className="card p-8 text-center space-y-4 group hover:border-nautical-ocean-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-ocean-50 group-hover:bg-nautical-ocean-100 transition-colors duration-300">
                <Ship className="w-8 h-8 text-nautical-ocean-600" />
              </div>
              <h3 className="heading-sm">Reciprocal Docking</h3>
              <p className="text-body">
                Access approximately 132 clubs on Lake Erie, Detroit River, and Lake St. Clair through our affiliations.
              </p>
              <Link href="/docking" className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200">
                Learn More →
              </Link>
            </div>

            <div className="card p-8 text-center space-y-4 group hover:border-nautical-ocean-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-ocean-50 group-hover:bg-nautical-ocean-100 transition-colors duration-300">
                <Users className="w-8 h-8 text-nautical-ocean-600" />
              </div>
              <h3 className="heading-sm">Community</h3>
              <p className="text-body">
                Join a welcoming community of boating enthusiasts. No boat required to be an active member.
              </p>
              <Link href="/membership" className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200">
                Join Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-nautical-gold-100 rounded-full">
                <span className="text-sm font-semibold text-nautical-gold-800 uppercase tracking-wide">
                  Commodore's Message
                </span>
              </div>
              <h2 className="heading-lg">Welcome to SPBC</h2>
              <div className="space-y-4 text-body">
                <p>
                  Welcome to Sun Parlour Boat Club! We started in the 1960s as a group of friends who loved boats. Today, we're based at Holiday Harbour Marina in LaSalle, Ontario.
                </p>
                <p>
                  Here's what we do: We help you visit 132 other boat clubs on Lake Erie, the Detroit River, and Lake St. Clair. You can join poker runs, go to dinners, race sailboats, and meet great people. Many friendships you make here last a lifetime.
                </p>
                <p>
                  We're a family club. Kids and grandkids are welcome. We plan fun things to do on the water and on land all year long.
                </p>
                <p>
                  You don't need a boat to join. Big boat, small boat, or no boat - everyone is welcome here. We're just a group of people who enjoy being on the water and having a good time together.
                </p>
                <p>
                  Come join us. You'll be glad you did.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-lg font-serif font-semibold text-nautical-navy-900">
                  Sincerely,
                </p>
                <p className="text-lg font-serif text-nautical-navy-700">
                  Scott Pillon
                </p>
                <p className="text-sm text-nautical-navy-600">
                  2025 Commodore
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-8 h-8 text-nautical-ocean-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-nautical-navy-900">Our Location</h3>
                    <p className="text-sm text-nautical-navy-600">Holiday Harbour Marina</p>
                  </div>
                </div>
                <div className="space-y-2 text-body">
                  <p>2406 Front Road</p>
                  <p>LaSalle, Ontario, Canada</p>
                  <p>N9J 2C4</p>
                  <p className="pt-2">
                    <a href="tel:+15197346679" className="text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium">
                      (519) 734-6679
                    </a>
                  </p>
                </div>
                <Link 
                  href="https://www.holidayharbourmarina.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                >
                  Visit Holiday Harbour →
                </Link>
              </div>

              <div className="card p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Award className="w-8 h-8 text-nautical-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-nautical-navy-900">Affiliations</h3>
                    <p className="text-sm text-nautical-navy-600">Proud member of</p>
                  </div>
                </div>
                <ul className="space-y-3 text-body">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-nautical-gold-500 rounded-full" />
                    <span>Inter-Lake Yachting Association (I-LYA)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-nautical-gold-500 rounded-full" />
                    <span>Associated Yacht Clubs (AYC)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-nautical-gold-500 rounded-full" />
                    <span>International Order of Blue Gavel (IOBG)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="heading-lg">Ready to Join?</h2>
            <p className="text-xl text-nautical-navy-700 leading-relaxed">
              Whether you're an experienced boater or just starting out, Sun Parlour Boat Club welcomes you. 
              Experience the camaraderie, adventure, and lasting friendships that come with being part of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/membership" className="btn-primary">
                Learn About Membership
              </Link>
              <Link href="/directors" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
