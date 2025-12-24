import { BookOpen, Download, Calendar } from 'lucide-react';
import Link from 'next/link';

const shipLogs = [
  { month: 'November 2025', url: 'http://sunparlourboatclub.com/logs/SPBC%20Nov%202025%20Log.pdf' },
  { month: 'October 2025', url: 'http://sunparlourboatclub.com/logs/SPBC%20Oct%202025%20Log.pdf' },
  { month: 'September 2025', url: 'http://sunparlourboatclub.com/logs/SPBC%20Sep%202025%20Log.pdf' },
  { month: 'August 2025', url: 'http://sunparlourboatclub.com/logs/SPBC%20Aug%202025%20Log.pdf' },
  { month: 'July 2025', url: 'http://sunparlourboatclub.com/logs/SPBC%20Jul%202025%20Log.pdf' },
  { month: 'June 2025', url: 'http://sunparlourboatclub.com/logs/SPBC%20Jun%202025%20Log.pdf' },
  { month: 'May 2025', url: 'http://sunparlourboatclub.com/logs/SPBC%20May%202025%20Log.pdf' },
  { month: 'April 2025', url: 'http://sunparlourboatclub.com/logs/SPBC%20Apr%202025%20Log.pdf' },
  { month: 'March 2025', url: 'http://sunparlourboatclub.com/logs/SPBC%20Mar%202025%20Log.pdf' },
  { month: 'January/February 2025', url: 'http://sunparlourboatclub.com/logs/SPBC%20Feb%202025%20Log.pdf' },
  { month: 'December 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20Dec%202024%20Log.pdf' },
  { month: 'November 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20Nov%202024%20Log.pdf' },
  { month: 'October 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20Oct%202024%20Log.pdf' },
  { month: 'September 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20Sep%202024%20Log.pdf' },
  { month: 'August 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20Aug%202024%20Log.pdf' },
  { month: 'July 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20Jul%202024%20Log.pdf' },
  { month: 'June 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20Jun%202024%20Log.pdf' },
  { month: 'May 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20May%202024%20Log.pdf' },
  { month: 'April 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20Apr%202024%20Log.pdf' },
  { month: 'March 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20Mar%202024%20Log.pdf' },
  { month: 'January/February 2024', url: 'http://sunparlourboatclub.com/logs/SPBC%20Feb%202024%20Log.pdf' },
];

export default function ShipsLogPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <BookOpen className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Ship's Log</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Stay informed with our monthly newsletter featuring club news, upcoming events, 
              member stories, and important announcements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <div className="flex items-start space-x-4">
                <Calendar className="w-8 h-8 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-nautical-navy-900">
                    About the Ship's Log
                  </h2>
                  <p className="text-body">
                    The Ship's Log is our monthly newsletter that keeps members informed about club activities, 
                    upcoming events, and important announcements. Each issue includes event recaps, photos, 
                    member spotlights, and information about our affiliated organizations.
                  </p>
                  <p className="text-body">
                    You will require Adobe PDF Reader or another PDF viewer installed on your device to view the logs.
                  </p>
                  <a
                    href="http://www.adobe.com/products/acrobat/readstep2.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                  >
                    Download Adobe Acrobat Reader →
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h2 className="heading-lg">Monthly Archives</h2>
              <p className="text-body max-w-2xl mx-auto">
                Click on any month below to view, save, or print that issue of the Ship's Log.
              </p>
              <p className="text-sm text-nautical-navy-600">
                Always visit the <Link href="/events" className="text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium">Events page</Link> for any last minute changes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shipLogs.map((log, index) => (
                <a
                  key={index}
                  href={log.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 space-y-4 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-nautical-ocean-50 group-hover:bg-nautical-ocean-100 flex items-center justify-center transition-colors duration-300">
                        <BookOpen className="w-6 h-6 text-nautical-ocean-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-nautical-navy-900 group-hover:text-nautical-ocean-700 transition-colors duration-200">
                          {log.month}
                        </h3>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-nautical-navy-400 group-hover:text-nautical-ocean-600 transition-colors duration-200" />
                  </div>
                </a>
              ))}
            </div>

            <div className="card p-8 bg-nautical-sand-50">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Submit Content
                </h3>
                <p className="text-body">
                  Members are encouraged to submit photos, stories, and articles for inclusion in the Ship's Log. 
                  Share your boating adventures, event experiences, or club-related news with fellow members.
                </p>
                <p className="text-body">
                  Please submit your flyers and content directly to the Communications Officer as far in advance 
                  of the event as possible.
                </p>
                <div className="pt-4">
                  <Link href="/directors" className="btn-secondary">
                    Contact Communications Officer
                  </Link>
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
              <div className="flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-nautical-gold-600" />
              </div>
              <h2 className="heading-md">Stay Connected</h2>
              <p className="text-body max-w-2xl mx-auto">
                The Ship's Log is an important way to stay connected with your club. 
                Check back monthly for the latest issue and never miss an update!
              </p>
              <div className="pt-4">
                <Link href="/events" className="btn-primary">
                  View Upcoming Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
