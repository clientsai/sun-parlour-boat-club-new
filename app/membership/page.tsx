import Link from 'next/link';
import { Users, Ship, Award, Heart, Calendar, DollarSign, Anchor, CheckCircle, Download } from 'lucide-react';

const benefits = [
  {
    icon: Ship,
    title: 'Reciprocal Docking',
    description: 'Access approximately 132 clubs on Lake Erie, the Detroit River, and Lake St. Clair through our I-LYA and AYC affiliations. One weekend alone can save you the cost of your membership fees.',
  },
  {
    icon: Calendar,
    title: 'Year-Round Events',
    description: 'From weekend cruises and regattas to social gatherings and watch parties, enjoy activities both on the water and on land throughout the year.',
  },
  {
    icon: Users,
    title: 'Welcoming Community',
    description: 'Join a group of like-minded people who just want to have a good time. Make lifetime friendships with members of our club and affiliated clubs.',
  },
  {
    icon: Award,
    title: 'No Boat Required',
    description: "You don't need a boat to be part of the group! We have many people who don't own boats and are active and revered members.",
  },
  {
    icon: Heart,
    title: 'Family Friendly',
    description: 'We are a family-friendly club working on activities that can be enjoyed by children and grandchildren, ensuring boating continues to grow.',
  },
  {
    icon: Anchor,
    title: 'Flexible Membership',
    description: "If you do have a boat, you don't need to have a dock at Holiday Harbour. Members are welcome from all marinas.",
  },
];

export default function MembershipPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Users className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Membership</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Join the friendliest club on the lake. Whether you're an experienced boater or just starting out, 
              Sun Parlour Boat Club offers exceptional value and a welcoming community.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">Membership Benefits</h2>
              <p className="text-body max-w-2xl mx-auto">
                We are a group of like-minded people who just want to have a good time! 
                Discover what makes SPBC membership so valuable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="card p-8 space-y-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-nautical-ocean-50">
                      <Icon className="w-7 h-7 text-nautical-ocean-600" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                      {benefit.title}
                    </h3>
                    <p className="text-body">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">Why Join SPBC?</h2>
              <p className="text-body max-w-2xl mx-auto">
                Sun Parlour Boat Club offers great value to its membership and to the community we reside in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    All Vessels Welcome
                  </h3>
                </div>
                <p className="text-body">
                  It doesn't matter whether you own a small or large vessel, run power or sail, or have no boat at all. 
                  All are welcome at Sun Parlour Boat Club.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Lifetime Friendships
                  </h3>
                </div>
                <p className="text-body">
                  Friendships made with members of our affiliated clubs are more often than not, lifetime. 
                  Experience the camaraderie of the boating community.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Safe Boating
                  </h3>
                </div>
                <p className="text-body">
                  We promote safe boating practices and provide a supportive environment for boaters of all experience levels.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Diverse Activities
                  </h3>
                </div>
                <p className="text-body">
                  Access various sail racing events, poker runs, dining, entertainment, and social gatherings 
                  throughout the boating season and beyond.
                </p>
              </div>
            </div>

            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-2xl font-serif font-semibold text-nautical-navy-900">
                    Prestigious Affiliations
                  </h3>
                </div>
                <p className="text-body">
                  As a member of Sun Parlour Boat Club, you gain access to the benefits of our affiliations with:
                </p>
                <ul className="space-y-3 text-body">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-nautical-gold-500 rounded-full flex-shrink-0" />
                    <span><strong>Inter-Lake Yachting Association (I-LYA)</strong> - Premier Great Lakes boating organization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-nautical-gold-500 rounded-full flex-shrink-0" />
                    <span><strong>Associated Yacht Clubs (AYC)</strong> - Regional yacht club network</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-nautical-gold-500 rounded-full flex-shrink-0" />
                    <span><strong>International Order of Blue Gavel (IOBG)</strong> - Distinguished boating fraternity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">How to Join</h2>
              <p className="text-body max-w-2xl mx-auto">
                Interested in becoming a member? We'd love to have you join our community!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <Download className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    New Members
                  </h3>
                </div>
                <p className="text-body">
                  If you're new to Sun Parlour Boat Club, please download and complete the Introductory Membership application.
                </p>
                <div className="pt-2">
                  <p className="text-sm text-nautical-navy-600 mb-4">
                    Download the application, print it, complete it, and mail it to the address shown on the form.
                  </p>
                  <a
                    href="http://sunparlourboatclub.com/memberappl/Membership%20app%20introductory.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Introductory Application</span>
                  </a>
                </div>
              </div>

              <div className="card p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <Download className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Returning Members
                  </h3>
                </div>
                <p className="text-body">
                  If you're a returning member, please download and complete the Regular Membership application.
                </p>
                <div className="pt-2">
                  <p className="text-sm text-nautical-navy-600 mb-4">
                    Download the application, print it, complete it, and mail it to the address shown on the form.
                  </p>
                  <a
                    href="http://sunparlourboatclub.com/memberappl/Membership%20app%20regular.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Regular Application</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-8 bg-nautical-sand-50">
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Questions About Membership?
                </h3>
                <p className="text-body">
                  Anyone interested in joining the Sun Parlour Boat Club is invited to contact our Membership Chairperson 
                  or any of our flag officers. We're happy to answer your questions and help you get started.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-nautical-navy-900">Membership Chairperson:</span>
                    <span className="text-nautical-navy-700">P/C Izzie Dulmage</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-nautical-navy-900">Email:</span>
                    <a href="mailto:izzied2017@gmail.com" className="text-nautical-ocean-600 hover:text-nautical-ocean-700">
                      izzied2017@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-nautical-navy-900">Phone:</span>
                    <a href="tel:+15197357345" className="text-nautical-ocean-600 hover:text-nautical-ocean-700">
                      (519) 735-7345
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/directors" className="btn-secondary">
                    View All Contact Information
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
            <h2 className="heading-lg text-white">Ready to Join?</h2>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Experience the camaraderie, adventure, and lasting friendships that come with being part of 
              Sun Parlour Boat Club. We look forward to welcoming you aboard!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/events" className="btn-primary bg-white text-nautical-navy-900 hover:bg-nautical-sand-50">
                View Our Events
              </Link>
              <Link href="/directors" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
