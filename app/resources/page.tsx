import Link from 'next/link';
import { ExternalLink, Anchor, Ship, Award, BookOpen } from 'lucide-react';

const advertisers = [
  { name: "Bull's Eye Pizza", email: 'obladiblada@msn.com', url: null },
  { name: "Dan's Nautical", url: 'http://www.dansnautical.com' },
  { name: 'SS Canvas & Upholstery', url: 'https://www.facebook.com/search/top?q=ss%20canvas%20%26%20upholstery' },
  { name: 'Holiday Harbour', url: 'http://www.holidayharbourmarina.com' },
  { name: 'Island View Marina', url: 'http://www.islandviewmarina.com' },
  { name: 'Simply Swimwear', url: 'http://www.simply-swimwear.com' },
  { name: 'Zumba Gold', email: 'joanne@rockwithjoanne.com', url: null },
];

const affiliatedOrganizations = [
  { name: 'Associated Yacht Clubs (AYC)', url: 'http://www.associatedyachtclubs.com' },
  { name: 'International Order of the Blue Gavel', url: 'http://www.iobg.org' },
  { name: 'International Order of the Blue Gavel Auxiliary', url: 'http://www.iobga.org' },
  { name: 'International Order of the Blue Gavel District #25', url: 'http://www.iobg25.org' },
  { name: 'Inter-lake Yachting Association', url: 'http://www.i-lya.org' },
];

const reciprocalClubs = [
  { name: 'Bay View Yacht Club', url: 'http://www.bvyc.org/' },
  { name: 'Cooley Canal Yacht Club', url: 'https://www.facebook.com/pages/Cooley-Canal-Yacht-Club/172294256152267' },
  { name: 'Elba-Mar Boat Club', url: 'http://www.elba-mar.com' },
  { name: 'Ford Yacht Club', url: 'http://www.fordyachtclub.com' },
  { name: 'Great Lakes Steel Boat Club', url: 'http://www.glsbc.com' },
  { name: 'Jolly Roger Sailing Club', url: 'http://www.jollyrogersailingclub.com' },
  { name: 'Maumee River Yacht Club', url: 'http://mryc.us' },
  { name: 'Middle Bass Island Yacht Club', url: 'http://www.mbiyc.com' },
  { name: 'Monroe Boat Club', url: 'http://www.monroeboatclub.org' },
  { name: 'North Cape Yacht Club', url: 'http://www.ncyc.net' },
  { name: 'Point Place Boat Club', url: 'http://www.pointplaceboatclub.com' },
  { name: 'River View Yacht Club', url: 'http://www.riverviewyachtclub.com' },
  { name: 'Seaway Boat Club', url: 'http://www.seawayboatclub.com' },
  { name: "SunSeeker's Boating Club", url: 'http://www.sunseekersboatingclub.org' },
  { name: 'Swan Boat Club', url: 'http://www.swanboatclub.com' },
  { name: 'Toledo Sailing Club', url: 'http://www.toledosailingclub.com' },
  { name: 'Wyandotte Yacht Club', url: 'http://www.wyandotteyachtclub.com' },
];

const otherClubs = [
  { name: 'Bay Point Yacht Club', url: 'http://www.bpyc.org' },
  { name: 'Detroit Beach Boat Club', url: 'http://www.detroitbeachboatclub.com' },
  { name: 'Detroit Yacht Club', url: 'http://www.dyc.com' },
  { name: 'Port Clinton Yacht Club', url: 'http://www.portclintonyachtclub.com' },
  { name: 'Toledo Yacht Club', url: 'http://mi6657.wix.com/toledo-yacht-club' },
];

const informativeSites = [
  { name: 'Nexus Information', url: 'http://www.nexus.gc.ca' },
  { name: 'BoaterEd', url: 'http://www.boatered.com/forum/' },
  { name: 'Great Lakes Cruiser', url: 'http://www.mondotimes.com/1/world/us/22/all/3177' },
  { name: 'Great Lakes and Seaway Shipping', url: 'http://www.boatnerd.com/' },
  { name: 'The Lake St. Clair Network', url: 'http://www.lscn.net/' },
  { name: 'Boat US', url: 'http://www.boatus.com' },
  { name: 'Yacht Club Burgees', url: 'http://www.burgees.com' },
  { name: 'Fisheries and Oceans Canada', url: 'http://www.ccg-gcc.gc.ca' },
  { name: 'Windsor Power & Sail Squadron', url: 'http://windsor.cps-ecp.org' },
  { name: 'Canadian Safety Boat Council', url: 'http://www.csbc.ca' },
  { name: 'City of Windsor, Ontario', url: 'http://www.citywindsor.ca' },
  { name: 'Lakevision', url: 'http://www.lakevision.com' },
  { name: 'Detroit Army Corps of Engineers', url: 'http://www.lre.usace.army.mil' },
];

const weatherSites = [
  { name: 'Detroit MI Radar & Forecast', url: 'http://wxug.us/1a6of' },
  { name: 'Lake Erie Open Water Forecast', url: 'http://weather.noaa.gov/pub/data/raw/fz/fzus61.kcle.glf.le.txt' },
  { name: 'Lake Erie Michigan Waters Forecast', url: 'http://weather.noaa.gov/cgi-bin/fmtbltn.pl?file=forecasts/marine/near_shore/le/lez444.txt' },
  { name: 'National Data Buoy Center - Great Lakes', url: 'http://www.ndbc.noaa.gov/Maps/EastGL.shtml' },
];

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <BookOpen className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Resources & Links</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Helpful links to affiliated clubs, boating organizations, weather resources, and our valued advertisers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-16">
            <div>
              <div className="text-center mb-12">
                <h2 className="heading-lg mb-4">Our Advertisers</h2>
                <p className="text-body max-w-2xl mx-auto">
                  Please patronize the following businesses who advertise in our Ship's Log.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advertisers.map((advertiser, index) => (
                  <div key={index} className="card p-6 space-y-3 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg font-semibold text-nautical-navy-900">{advertiser.name}</h3>
                    {advertiser.url ? (
                      <a
                        href={advertiser.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    ) : advertiser.email ? (
                      <a
                        href={`mailto:${advertiser.email}`}
                        className="inline-flex items-center text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                      >
                        {advertiser.email}
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-nautical-gold-600" />
                  <h2 className="heading-lg">Affiliated Boating Organizations</h2>
                </div>
                <p className="text-body max-w-2xl mx-auto">
                  Organizations we are proud to be affiliated with.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {affiliatedOrganizations.map((org, index) => (
                  <div key={index} className="card p-6 space-y-3 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg font-semibold text-nautical-navy-900">{org.name}</h3>
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-16">
            <div>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Anchor className="w-8 h-8 text-nautical-ocean-600" />
                  <h2 className="heading-lg">Reciprocal Clubs</h2>
                </div>
                <p className="text-body max-w-2xl mx-auto">
                  Yacht clubs where SPBC members can enjoy reciprocal docking privileges.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reciprocalClubs.map((club, index) => (
                  <div key={index} className="card p-6 space-y-3 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-base font-semibold text-nautical-navy-900">{club.name}</h3>
                    <a
                      href={club.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Ship className="w-8 h-8 text-nautical-ocean-600" />
                  <h2 className="heading-lg">Other Clubs</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherClubs.map((club, index) => (
                  <div key={index} className="card p-6 space-y-3 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-base font-semibold text-nautical-navy-900">{club.name}</h3>
                    <a
                      href={club.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-16">
            <div>
              <div className="text-center mb-12">
                <h2 className="heading-lg mb-4">Interesting and Informative Sites</h2>
                <p className="text-body max-w-2xl mx-auto">
                  Helpful resources for boaters and Great Lakes enthusiasts.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {informativeSites.map((site, index) => (
                  <div key={index} className="card p-6 space-y-3 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-base font-semibold text-nautical-navy-900">{site.name}</h3>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-12">
                <h2 className="heading-lg mb-4">Weather and Related Sites</h2>
                <p className="text-body max-w-2xl mx-auto">
                  Stay informed about weather conditions on the Great Lakes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {weatherSites.map((site, index) => (
                  <div key={index} className="card p-6 space-y-3 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-base font-semibold text-nautical-navy-900">{site.name}</h3>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-nautical-ocean-600 hover:text-nautical-ocean-700 transition-colors duration-200"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 text-center space-y-6">
              <h2 className="heading-md">More Information</h2>
              <p className="text-body max-w-2xl mx-auto">
                For additional resources or to suggest a link, please contact our Communications Officer or Web Master.
              </p>
              <div className="pt-4">
                <Link href="/directors" className="btn-primary">
                  Contact Club Officers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
