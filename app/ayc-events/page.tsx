import Link from 'next/link';
import { Calendar, MapPin, ExternalLink, Anchor } from 'lucide-react';

const pokerRunSchedule = [
  {
    location: 'Point Place Boat Club',
    dates: '5/30/25 - 5/31/25',
  },
  {
    location: 'Riverview Yacht Club',
    dates: '7/18/25 - 7/19/25',
  },
  {
    location: 'Nugents Canal Yacht Club',
    dates: '8/01/25 - 8/02/25',
  },
  {
    location: 'Ford Yacht Club',
    dates: '8/08/25 - 8/09/25',
  },
  {
    location: 'Detroit Beach Boat Club',
    dates: '9/05/25 - 9/06/25',
  },
];

export default function AYCEventsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Anchor className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">AYC Events</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Associated Yacht Clubs events and poker run schedule. Join fellow boating enthusiasts 
              from clubs across the region for exciting competitions and social gatherings.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">2025 AYC Poker Run Schedule</h2>
              <p className="text-body max-w-2xl mx-auto">
                The AYC Poker Run series offers exciting opportunities to cruise to different yacht clubs, 
                meet fellow boaters, and compete for prizes. Each event is a weekend celebration of boating culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pokerRunSchedule.map((event, index) => (
                <div
                  key={index}
                  className="card p-8 space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold text-nautical-navy-900 mb-3">
                        {event.location}
                      </h3>
                      <div className="flex items-center space-x-3 text-nautical-navy-600">
                        <Calendar className="w-5 h-5 text-nautical-ocean-500 flex-shrink-0" />
                        <span className="text-base">{event.dates}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-12 h-12 rounded-full bg-nautical-ocean-50 flex items-center justify-center">
                        <span className="text-lg font-bold text-nautical-ocean-600">
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
                    More AYC Events
                  </h3>
                  <p className="text-body">
                    For a complete listing of all Associated Yacht Clubs events, including additional poker runs, 
                    regattas, and social gatherings, visit the official AYC website.
                  </p>
                  <a
                    href="https://www.associatedyachtclubs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                  >
                    Visit AYC Website →
                  </a>
                  <br />
                  <a
                    href="https://www.associatedyachtclubs.com/event-list"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                  >
                    View Full Event List →
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
                Important details about participating in AYC events.
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
