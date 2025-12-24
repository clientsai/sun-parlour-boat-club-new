import Link from 'next/link';
import { Compass, CheckCircle, Users, Calendar, Ship, Award } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Learn About Us',
    description: 'Read about our club, our history, and what we do. Check out our events and see what interests you.',
    links: [
      { text: 'About SPBC', href: '/about' },
      { text: 'View Events', href: '/events' },
    ],
  },
  {
    number: '2',
    title: 'Review Membership Benefits',
    description: 'See what you get as a member. Reciprocal docking, events, community, and more.',
    links: [
      { text: 'Membership Benefits', href: '/membership' },
      { text: 'Docking Info', href: '/docking' },
    ],
  },
  {
    number: '3',
    title: 'Download Application',
    description: 'Get the membership application form. Fill it out with your information.',
    links: [
      { text: 'Membership Page', href: '/membership' },
    ],
  },
  {
    number: '4',
    title: 'Submit Your Application',
    description: 'Send your completed application to us by email or mail. We will review it and contact you.',
    links: [
      { text: 'Contact Info', href: '/contact' },
    ],
  },
  {
    number: '5',
    title: 'Get Approved',
    description: 'We will review your application. Most applications are approved quickly. We will let you know.',
    links: [],
  },
  {
    number: '6',
    title: 'Start Enjoying',
    description: 'Once approved, you can start attending events, using reciprocal docking, and meeting other members.',
    links: [
      { text: 'Event Calendar', href: '/events' },
    ],
  },
];

const tips = [
  {
    icon: Users,
    title: 'Join the Facebook Group',
    description: 'Our Facebook group is where members share photos, plan meetups, and stay connected. Join it as soon as you become a member.',
  },
  {
    icon: Calendar,
    title: 'Attend Your First Event',
    description: 'Come to an event soon after joining. It is the best way to meet people. Do not wait. Everyone is friendly.',
  },
  {
    icon: Ship,
    title: 'Try Reciprocal Docking',
    description: 'Plan a trip to another club. Call ahead. Introduce yourself. It is a great way to explore the lakes.',
  },
  {
    icon: Award,
    title: 'Get Involved',
    description: 'Volunteer for events. Help with activities. The more you put in, the more you get out.',
  },
];

export default function GettingStartedPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Compass className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Getting Started</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Your guide to joining Sun Parlour Boat Club. Simple steps to get started.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">How to Join</h2>
              <p className="text-body max-w-2xl mx-auto">
                Joining is easy. Follow these six simple steps.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="card p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-nautical-ocean-600 text-white flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-serif font-semibold text-nautical-navy-900">
                        {step.title}
                      </h3>
                      <p className="text-body leading-relaxed">
                        {step.description}
                      </p>
                      {step.links.length > 0 && (
                        <div className="flex flex-wrap gap-3 pt-2">
                          {step.links.map((link, linkIndex) => (
                            <Link
                              key={linkIndex}
                              href={link.href}
                              className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                            >
                              {link.text} →
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">Tips for New Members</h2>
              <p className="text-body max-w-2xl mx-auto">
                Make the most of your membership from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div key={index} className="card p-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-nautical-ocean-50">
                      <Icon className="w-7 h-7 text-nautical-ocean-600" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                      {tip.title}
                    </h3>
                    <p className="text-body">
                      {tip.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 space-y-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-ocean-50">
                <CheckCircle className="w-8 h-8 text-nautical-ocean-600" />
              </div>
              <div className="space-y-4">
                <h2 className="heading-md">What to Expect</h2>
                <div className="space-y-6 text-body max-w-2xl mx-auto text-left">
                  <p>
                    <strong>Application Review:</strong> We review applications within 1-2 weeks. Most are approved quickly.
                  </p>
                  <p>
                    <strong>Welcome Email:</strong> Once approved, you will get a welcome email with your membership card and important information.
                  </p>
                  <p>
                    <strong>First Event:</strong> Come to your first event whenever you are ready. No pressure. Everyone will welcome you.
                  </p>
                  <p>
                    <strong>Questions:</strong> If you have questions at any time, contact any club officer. We are here to help.
                  </p>
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
              Start your membership today. We look forward to welcoming you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership" className="btn-primary bg-white text-nautical-navy-900 hover:bg-nautical-sand-50">
                View Membership Info
              </Link>
              <Link href="/contact" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
