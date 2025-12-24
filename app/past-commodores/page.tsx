import { Award, Star } from 'lucide-react';

const pastCommodores = [
  { name: 'Jerry Taylor', year: '2012', deceased: false },
  { name: 'Reg Major', year: '2010', deceased: false },
  { name: 'Marty Zamparo', year: '2008', deceased: false },
  { name: 'John Bowers', year: '2007', deceased: true },
  { name: 'Bill Woods', year: '2006', deceased: true },
  { name: 'Chris Amlin', year: '2005', deceased: false },
  { name: 'Jim Cyrowski', year: '2001', deceased: false },
  { name: 'Don Gullick', year: '2000', deceased: false },
  { name: 'John Taylor', year: '1999', deceased: true },
  { name: 'Sue Laporte', year: '1998', deceased: true },
  { name: 'Bob Coulter', year: '1997', deceased: false },
  { name: 'Bill Fairlie', year: '1996', deceased: false },
  { name: 'Steve Willing', year: '1995', deceased: false },
  { name: 'Drew Paupst', year: '1994', deceased: false },
  { name: 'Brian Hale', year: '1993', deceased: false },
  { name: 'John Glover', year: '1992', deceased: true },
  { name: 'Jack Robertson', year: '1991', deceased: true },
  { name: 'Vera Haller', year: '1990', deceased: false },
  { name: 'Gerry Murphy', year: '1989', deceased: false },
  { name: 'Al Kersey', year: '1988', deceased: true },
  { name: 'Murray Byer', year: '1987', deceased: true },
  { name: 'Bob Walker', year: '1985/86', deceased: false },
  { name: 'Ken Thoms', year: '1983/84', deceased: false },
  { name: 'Mike Martin', year: '1981/82', deceased: true },
  { name: 'Jack Northwood', year: '1980', deceased: true },
  { name: 'George McKee', year: '1978', deceased: false },
  { name: 'Bob Morely', year: '1977', deceased: false },
  { name: 'Orv Mackey', year: '1976', deceased: false },
  { name: 'Shad Richards', year: '1972/73', deceased: true },
  { name: 'Lyle Blonde', year: '1970/71', deceased: true },
];

export default function PastCommodoresPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Award className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Past Commodores</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Honoring the distinguished leaders who have guided Sun Parlour Boat Club throughout its history. 
              Their dedication and service have shaped our club into what it is today.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">Gallery of Leadership</h2>
              <p className="text-body max-w-2xl mx-auto">
                Since our founding in the 1960s, Sun Parlour Boat Club has been led by exceptional individuals 
                who have dedicated their time and passion to our boating community.
              </p>
            </div>

            <div className="card p-6 bg-nautical-sand-50 border-nautical-sand-200">
              <div className="flex items-center justify-center space-x-2 text-sm text-nautical-navy-600">
                <Star className="w-4 h-4 text-nautical-gold-500" />
                <span>Indicates deceased</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastCommodores.map((commodore, index) => (
                <div
                  key={index}
                  className="card p-6 space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-serif font-semibold text-nautical-navy-900 mb-1">
                        {commodore.name}
                        {commodore.deceased && (
                          <Star className="inline-block w-4 h-4 ml-2 text-nautical-gold-500 fill-nautical-gold-500" />
                        )}
                      </h3>
                      <p className="text-sm text-nautical-navy-600">
                        Commodore {commodore.year}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nautical-navy-600 to-nautical-navy-700 flex items-center justify-center shadow-md">
                        <Award className="w-6 h-6 text-nautical-gold-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Our First Commodore
                </h3>
                <p className="text-body max-w-2xl mx-auto">
                  Sun Parlour Boat Club's first recorded meeting was in March of 1968, with our 1st Commodore 
                  being <strong>Jerry Rice</strong> who served two terms. His leadership established the foundation 
                  for what would become a thriving boating community.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-nautical-navy-900">
                A Legacy of Service
              </h3>
              <p className="text-body max-w-2xl mx-auto">
                Each Past Commodore has contributed to the growth and success of Sun Parlour Boat Club. 
                Their leadership, vision, and dedication continue to inspire our current members and guide 
                our club's future.
              </p>
              <p className="text-body max-w-2xl mx-auto">
                We honor their memory and celebrate their achievements, recognizing that our club's strength 
                comes from the collective efforts of all who have served in leadership roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 text-center space-y-6">
              <div className="flex items-center justify-center">
                <Award className="w-16 h-16 text-nautical-gold-600" />
              </div>
              <h2 className="heading-md">Join Our Legacy</h2>
              <p className="text-body max-w-2xl mx-auto">
                Become part of Sun Parlour Boat Club's continuing story. Whether you aspire to leadership 
                or simply want to enjoy the camaraderie of fellow boaters, we welcome you to our community.
              </p>
              <div className="pt-4">
                <a href="/membership" className="btn-primary">
                  Learn About Membership
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
