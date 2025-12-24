import Link from 'next/link';
import { Anchor, Award, Users, Ship, Calendar, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Anchor className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">About SPBC</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Discover the rich history and vibrant community of Sun Parlour Boat Club, 
              serving Southwest Ontario boaters since the 1960s.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="heading-lg mb-6">Our History</h2>
              </div>
              <div className="space-y-6 text-body">
                <p className="text-xl leading-relaxed">
                  Sun Parlour Boat Club was organized in the 1960s by a group of local boating enthusiasts 
                  with a common interest in family size outboard motor racing. Although the exact date of 
                  the Club's beginning is uncertain, our first recorded meeting was in March of 1968 with 
                  our 1st Commodore being Jerry Rice who served two terms.
                </p>
                <p>
                  Over the years the Club has evolved and currently resides at Holiday Harbour Marina in 
                  LaSalle, Ontario. What began as a racing-focused organization has grown into a comprehensive 
                  boating club that welcomes all types of vessels and boating enthusiasts.
                </p>
                <p>
                  Today SPBC is a proud Member of Inter-Lake Yachting Association, the Associated Yacht Club 
                  and the International Order of Blue Gavel. We promote safe boating, camaraderie among the 
                  boating community and provide activities for our members, both on the water and land.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-ocean-50">
                  <Calendar className="w-8 h-8 text-nautical-ocean-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-nautical-navy-900">1960s</h3>
                <p className="text-sm text-nautical-navy-600">Founded</p>
              </div>

              <div className="card p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-ocean-50">
                  <Users className="w-8 h-8 text-nautical-ocean-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-nautical-navy-900">132+</h3>
                <p className="text-sm text-nautical-navy-600">Affiliated Clubs</p>
              </div>

              <div className="card p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-ocean-50">
                  <Ship className="w-8 h-8 text-nautical-ocean-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-nautical-navy-900">All</h3>
                <p className="text-sm text-nautical-navy-600">Vessels Welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="heading-lg mb-6">Our Mission</h2>
              <p className="text-xl text-nautical-navy-700 leading-relaxed max-w-3xl mx-auto">
                Sun Parlour Boat Club offers its membership the ability to access approximately 132 Clubs 
                that reside on Lake Erie, the Detroit River and Lake St Clair. These activities include 
                various sail racing events, poker runs, dining and entertainment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Ship className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Safe Boating
                  </h3>
                </div>
                <p className="text-body">
                  We promote safe boating practices and provide education and support for boaters of all 
                  experience levels, ensuring everyone can enjoy the water responsibly.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Community Building
                  </h3>
                </div>
                <p className="text-body">
                  We foster camaraderie among the boating community, creating lasting friendships that 
                  extend beyond our club to our affiliated organizations.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Year-Round Activities
                  </h3>
                </div>
                <p className="text-body">
                  We provide activities for our members both on the water and land, ensuring engagement 
                  throughout the entire year, not just the boating season.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Family Friendly
                  </h3>
                </div>
                <p className="text-body">
                  We are a family friendly club working on activities that can be enjoyed by children and 
                  grandchildren, ensuring boating continues to grow for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="heading-lg mb-6">Our Affiliations</h2>
              <p className="text-body max-w-2xl mx-auto">
                Sun Parlour Boat Club is proud to be affiliated with prestigious boating organizations 
                across the Great Lakes region.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card p-8 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-nautical-gold-100 flex items-center justify-center">
                      <Award className="w-6 h-6 text-nautical-gold-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                      Inter-Lake Yachting Association (I-LYA)
                    </h3>
                    <p className="text-body">
                      One of the oldest and most prestigious yachting associations on the Great Lakes, 
                      I-LYA brings together yacht clubs from across the region for competitive racing 
                      and social events.
                    </p>
                    <a
                      href="http://www.i-lya.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                    >
                      Visit I-LYA Website →
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-8 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-nautical-gold-100 flex items-center justify-center">
                      <Award className="w-6 h-6 text-nautical-gold-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                      Associated Yacht Clubs (AYC)
                    </h3>
                    <p className="text-body">
                      A network of yacht clubs in the Detroit River and Lake St. Clair region, AYC 
                      coordinates events including the popular poker run series and social gatherings.
                    </p>
                    <a
                      href="https://www.associatedyachtclubs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                    >
                      Visit AYC Website →
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-8 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-nautical-gold-100 flex items-center justify-center">
                      <Award className="w-6 h-6 text-nautical-gold-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                      International Order of Blue Gavel (IOBG)
                    </h3>
                    <p className="text-body">
                      A distinguished fraternal organization of past commodores and flag officers from 
                      yacht clubs across North America, dedicated to fellowship and boating traditions.
                    </p>
                    <a
                      href="http://www.iobg.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                    >
                      Visit IOBG Website →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 space-y-8">
              <div className="flex items-center justify-center">
                <MapPin className="w-12 h-12 text-nautical-ocean-600" />
              </div>
              <div className="text-center space-y-4">
                <h2 className="heading-md">Our Home</h2>
                <p className="text-body">
                  Sun Parlour Boat Club is proudly located at Holiday Harbour Marina in LaSalle, Ontario, 
                  providing our members with excellent facilities and access to the Detroit River and Lake St. Clair.
                </p>
              </div>
              <div className="text-center space-y-2 text-nautical-navy-700">
                <p className="font-semibold">Holiday Harbour Marina</p>
                <p>2406 Front Road</p>
                <p>LaSalle, Ontario, Canada N9J 2C4</p>
                <p className="pt-2">
                  <a href="tel:+15197346679" className="text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium">
                    (519) 734-6679
                  </a>
                </p>
              </div>
              <div className="text-center pt-4">
                <a
                  href="http://www.holidayharbourmarina.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit Holiday Harbour Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="heading-lg text-white">Join Our Community</h2>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Whether you own a small or large vessel, run power or sail, or have no boat at all, 
              Sun Parlour Boat Club offers great value to its membership and to the community we reside in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/membership" className="btn-primary bg-white text-nautical-navy-900 hover:bg-nautical-sand-50">
                Become a Member
              </Link>
              <Link href="/past-commodores" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Our Legacy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
