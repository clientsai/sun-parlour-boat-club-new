import Link from 'next/link';
import { Calendar, MapPin, Clock, ExternalLink, Phone } from 'lucide-react';

const events2025 = [
  { month: 'January', events: [] },
  { month: 'February', events: [] },
  {
    month: 'March',
    events: [
      { name: 'First Friday of March', date: 'Mar 07', location: 'SPBC Club House' },
      { name: "St. Patty's Day Party", date: 'Mar 16', location: 'SPBC Clubhouse' },
      { name: 'Games/Burger Night', date: 'Mar 28', location: 'SPBC Club House' },
    ],
  },
  {
    month: 'April',
    events: [
      { name: 'I-LYA Spring Meeting', date: 'Apr 4 - 6', location: 'Westlake, Ohio' },
      { name: 'General Membership Meeting', date: 'Apr 10', location: 'SPBC Club House' },
      { name: 'Good Friday Fish Fry', date: 'Apr 18', location: 'SPBC Club House' },
      { name: 'Games/Peameal Burger', date: 'Apr 25', location: 'SPBC Club House' },
      { name: 'AYC Bowling', date: 'Apr 27', location: 'Monroe Sports Centre, Monroe MI' },
    ],
  },
  {
    month: 'May',
    events: [
      { name: 'Cinco de Mayo / Kentucky Derby', date: 'May 3', location: 'SPBC Club House' },
      { name: "SPBC PC Mother's Day Brunch", date: 'May 11', location: 'SPBC Club House' },
      { name: 'Shakedown Cruise', date: 'May 16 to 18', location: 'Swan Boat Club' },
      { name: 'Opening of Ports', date: 'May 24', location: 'Maumee River Yacht Club' },
      { name: 'Blessing of the Fleet', date: 'May 25', location: 'SPBC Club House' },
      { name: 'HH Opening of the Harbour Party', date: 'May 31', location: 'Holiday Harbour' },
    ],
  },
  {
    month: 'June',
    events: [
      { name: 'Opening of the Islands', date: 'Jun 7', location: 'Ford Yacht Club' },
      { name: 'Sunday Funday', date: 'June 22', location: 'SPBC Club House' },
      { name: 'Canada Day Rendezvous', date: 'Jun 27 to Jun 29', location: 'Monroe Club cancelled' },
    ],
  },
  {
    month: 'July',
    events: [
      { name: 'Swan Boat Club (Regatta/Rendezvous)', date: 'Jul 4 to 6', location: 'Swan Boat Club' },
      { name: 'Sunday Funday', date: 'Jul 6', location: 'SPBC Club House' },
      { name: 'Christmas in July / Burger Night', date: 'Jul 19', location: 'SPBC Club House' },
    ],
  },
  {
    month: 'August',
    events: [
      { name: 'GLSPBC Rendezvous', date: 'Aug 1 - 4', location: 'Great Lakes Steel BC' },
      { name: 'Dinghy Poker Run / Burger Night', date: 'Aug 16', location: 'SPBC Club House' },
      { name: 'Sunday Funday', date: 'Aug 19', location: 'SPBC Club House' },
      { name: 'Lobsterfest', date: 'Aug 29 - Sep 1', location: 'Toledo Sailing Club' },
      { name: 'Labour Day Weekend', date: 'Aug 30 - Sep 1', location: 'TBD' },
    ],
  },
  {
    month: 'September',
    events: [
      { name: 'General Membership Meeting', date: 'Sept 4', location: 'SPBC Clubhouse' },
      { name: 'SPBC Regatta / BBQ', date: 'Sep 12 - 14', location: 'Holiday Harbour' },
      { name: 'HH Closing of Marina', date: 'Sep 27', location: 'Holiday Harbour' },
    ],
  },
  {
    month: 'October',
    events: [
      { name: 'Lions Watch Party', date: 'Oct 5', location: 'SPBC Club House' },
      { name: 'Closing of Marina', date: 'Oct 11', location: 'Marina' },
      { name: 'Lions Watch Party', date: 'Oct 12', location: 'SPBC Club House' },
      { name: 'Celebration - PC Gary Frowly', date: 'Oct 18', location: 'SPBC Club House' },
      { name: 'Lions Watch Party', date: 'Oct 20', location: 'SPBC Club House' },
      { name: 'Chili Cookoff', date: 'Oct 25', location: 'SPBC Club House' },
    ],
  },
  {
    month: 'November',
    events: [
      { name: 'Membership Appreciation Night', date: 'Nov 1', location: 'SPBC Club House' },
      { name: 'Lions Watch Party', date: 'Nov 2', location: 'SPBC Club House' },
      { name: 'Lions Watch Party', date: 'Nov 9', location: 'SPBC Club House' },
      { name: 'Pre-Commodore Party', date: 'Nov 14', location: 'Hampton Inn' },
      { name: 'SPBC Commodore Ball', date: 'Nov 15', location: 'Caboto Club' },
      { name: 'Lions Watch Party', date: 'Nov 16', location: 'SPBC Club House' },
      { name: 'Lions Watch Party', date: 'Nov 23', location: 'SPBC Club House' },
      { name: 'Lions Watch Party', date: 'Nov 27', location: 'SPBC Club House' },
    ],
  },
  {
    month: 'December',
    events: [
      { name: 'Lions Watch Party', date: 'Dec 4', location: 'SPBC Club House' },
      { name: 'I-LYA Fall Meeting', date: 'Dec 5 - 7', location: 'TBD' },
      { name: 'SPBC Change of Watch', date: 'Dec 11', location: 'SPBC Club House' },
      { name: 'Lions Watch Party', date: 'Dec 14', location: 'SPBC Club House' },
      { name: 'Lions Watch Party', date: 'Dec 21', location: 'SPBC Club House' },
    ],
  },
];

interface EventCardProps {
  name: string;
  date: string;
  location: string;
}

function EventCard({ name, date, location }: EventCardProps) {
  return (
    <div className="card p-6 space-y-4 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-nautical-navy-900">{name}</h3>
      <div className="space-y-2">
        <div className="flex items-center space-x-3 text-sm text-nautical-navy-600">
          <Clock className="w-4 h-4 flex-shrink-0 text-nautical-ocean-500" />
          <span>{date}</span>
        </div>
        <div className="flex items-start space-x-3 text-sm text-nautical-navy-600">
          <MapPin className="w-4 h-4 flex-shrink-0 text-nautical-ocean-500 mt-0.5" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Calendar className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Events Calendar</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Join us for exciting events throughout the year. From cruises and regattas to social gatherings and watch parties, 
              there's always something happening at SPBC.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 p-6 bg-nautical-ocean-50 rounded-lg border border-nautical-ocean-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-nautical-navy-900 mb-2">2025 Event Calendar</h2>
                <p className="text-sm text-nautical-navy-600">
                  Events are subject to change. Please check back regularly for updates.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/ayc-events" className="btn-secondary text-sm py-2 px-4">
                  AYC Events
                </Link>
                <Link href="/ilya-events" className="btn-secondary text-sm py-2 px-4">
                  I-LYA Events
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {events2025.map((monthData) => (
              <div key={monthData.month} id={monthData.month.toLowerCase()}>
                <div className="mb-8">
                  <h2 className="heading-md text-nautical-navy-900 mb-2">{monthData.month}</h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-nautical-ocean-500 to-nautical-ocean-300 rounded-full" />
                </div>
                {monthData.events.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {monthData.events.map((event, index) => (
                      <EventCard key={`${event.name}-${index}`} {...event} />
                    ))}
                  </div>
                ) : (
                  <div className="card p-8 text-center">
                    <p className="text-nautical-navy-500">No events scheduled for this month</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="heading-lg mb-4">Event Information</h2>
              <p className="text-body">
                Important details about Sun Parlour Boat Club events and activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Event Guidelines
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
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Check back monthly for updates</span>
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
                  To book an event, contact the person in charge by phone or email. Contact information can be found on our Directors page.
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
              <div className="flex items-center space-x-2 text-nautical-navy-700">
                <Phone className="w-4 h-4 text-nautical-ocean-500" />
                <a href="tel:+15197346679" className="hover:text-nautical-ocean-600 transition-colors duration-200">
                  (519) 734-6679
                </a>
              </div>
            </div>

            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <div className="flex items-start space-x-4">
                <ExternalLink className="w-6 h-6 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Detroit River No Wake Zones
                  </h3>
                  <p className="text-body">
                    Before heading out on the water, familiarize yourself with the no wake zones along the Detroit River to ensure safe and responsible boating.
                  </p>
                  <Link href="/no-wake-zones" className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200">
                    View No Wake Zones Map →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
