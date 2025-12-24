import Link from 'next/link';
import { Calendar, MapPin, ExternalLink, Anchor } from 'lucide-react';

const ilyaEvents2025 = [
  {
    event: 'Spring Meeting',
    dates: 'April 4 - 5, 2025',
    location: 'Westlake, Ohio',
  },
  {
    event: 'Junior Bay Week',
    dates: 'July 13 - 17, 2025',
    location: 'Put-In-Bay, Ohio',
  },
  {
    event: 'Power Regatta',
    dates: 'July 23 - 27, 2025',
    location: 'Put-In-Bay, Ohio',
  },
  {
    event: 'Sail Regatta',
    dates: 'July 30 - August 3, 2025',
    location: 'Put-In-Bay, Ohio',
  },
  {
    event: 'Fall Meeting',
    dates: 'December 5 - 6, 2025',
    location: 'TBD',
  },
];

export default function ILYAEventsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Anchor className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">I-LYA Events</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Inter-Lake Yachting Association events bring together boating enthusiasts from across the Great Lakes 
              for premier regattas, meetings, and social gatherings.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">2025 I-LYA Event Schedule</h2>
              <p className="text-body max-w-2xl mx-auto">
                The Inter-Lake Yachting Association hosts prestigious events throughout the year, 
                including competitive regattas and important organizational meetings.
              </p>
            </div>

            <div className="space-y-6">
              {ilyaEvents2025.map((event, index) => (
                <div
                  key={index}
                  className="card p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-serif font-semibold text-nautical-navy-900">
                        {event.event}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center space-x-3 text-nautical-navy-600">
                          <Calendar className="w-5 h-5 text-nautical-ocean-500 flex-shrink-0" />
                          <span className="text-base">{event.dates}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-nautical-navy-600">
                          <MapPin className="w-5 h-5 text-nautical-ocean-500 flex-shrink-0" />
                          <span className="text-base">{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nautical-ocean-500 to-nautical-ocean-600 flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <div className="flex items-start space-x-4">
                <ExternalLink className="w-6 h-6 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    More I-LYA Information
                  </h3>
                  <p className="text-body">
                    For complete details on all Inter-Lake Yachting Association events, including registration information, 
                    race schedules, and event updates, visit the official I-LYA website.
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
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="heading-lg mb-4">Event Information</h2>
              <p className="text-body">
                Important details about participating in I-LYA events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  General Information
                </h3>
                <ul className="space-y-3 text-body">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Events range from 1-day outings to 3-day events</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Formats vary by event type</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Photo coverage on most events</span>
                  </li>
                </ul>
              </div>

              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Event Booking
                </h3>
                <p className="text-body">
                  Event fees vary according to the event. For example, the Commodore's Ball is typically priced per couple.
                </p>
                <p className="text-body">
                  To book an event, contact the person in charge by phone or email.
                </p>
                <Link href="/directors" className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200">
                  View Directors Contact Info →
                </Link>
              </div>
            </div>

            <div className="card p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-nautical-ocean-600" />
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Clubhouse Location
                </h3>
              </div>
              <p className="text-body">
                The Clubhouse is located at Holiday Harbour Marina in LaSalle, Ontario
              </p>
              <p className="text-nautical-navy-700">
                Phone: <a href="tel:+15197346679" className="hover:text-nautical-ocean-600 transition-colors duration-200">(519) 734-6679</a>
              </p>
            </div>

            <div className="text-center pt-8">
              <Link href="/events" className="btn-primary">
                View Full SPBC Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
