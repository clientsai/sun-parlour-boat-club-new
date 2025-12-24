import Link from 'next/link';
import { HelpCircle, Anchor, Users, Ship, Calendar, DollarSign, MapPin, Award } from 'lucide-react';

const faqs = [
  {
    category: 'Membership',
    icon: Users,
    questions: [
      {
        q: 'Do I need a boat to join?',
        a: 'No. You do not need a boat to be a member. Many of our members do not own boats. They join because they enjoy the social events and the boating community.',
      },
      {
        q: 'How much does membership cost?',
        a: 'Membership fees are very affordable. Contact us for current rates. Many members say one weekend of reciprocal docking pays for the entire year.',
      },
      {
        q: 'Do I need to dock at Holiday Harbour?',
        a: 'No. You can keep your boat at any marina. Members come from marinas all over the area.',
      },
      {
        q: 'How do I join?',
        a: 'Visit our Membership page and download the application form. Fill it out and send it to us. We will contact you with next steps.',
      },
      {
        q: 'Are families welcome?',
        a: 'Yes. We are a family-friendly club. Kids and grandkids are welcome at our events. We plan activities for all ages.',
      },
    ],
  },
  {
    category: 'Events & Activities',
    icon: Calendar,
    questions: [
      {
        q: 'What kind of events do you have?',
        a: 'We have poker runs, dinner cruises, watch parties, social gatherings, and more. Some events are on the water. Some are on land. There is something for everyone.',
      },
      {
        q: 'Do I have to attend events?',
        a: 'No. You can come to as many or as few events as you want. There is no pressure. Come when you can.',
      },
      {
        q: 'Can I bring guests to events?',
        a: 'Yes. Most events allow guests. Check the specific event details for any restrictions.',
      },
      {
        q: 'How do I know what events are coming up?',
        a: 'Check our Events Calendar page. We also post updates in our Facebook group and send emails to members.',
      },
    ],
  },
  {
    category: 'Reciprocal Docking',
    icon: Anchor,
    questions: [
      {
        q: 'What is reciprocal docking?',
        a: 'Reciprocal docking means you can visit other boat clubs and use their docks. As a member, you can visit about 132 clubs on Lake Erie, the Detroit River, and Lake St. Clair.',
      },
      {
        q: 'How does reciprocal docking work?',
        a: 'Call ahead to the club you want to visit. Tell them you are a member of Sun Parlour Boat Club. They will let you know if space is available. Most clubs offer free or low-cost docking for a night or two.',
      },
      {
        q: 'Do I need to make reservations?',
        a: 'Yes. Always call ahead. Do not just show up. Clubs need to know you are coming.',
      },
      {
        q: 'Is reciprocal docking free?',
        a: 'Most clubs offer free docking for one or two nights. Some may charge a small fee. Each club sets their own rules.',
      },
    ],
  },
  {
    category: 'Visiting Our Club',
    icon: MapPin,
    questions: [
      {
        q: 'Where is the club located?',
        a: 'We are at Holiday Harbour Marina in LaSalle, Ontario. The address is 2406 Front Road, LaSalle, Ontario, Canada N9J 2C4.',
      },
      {
        q: 'Can I visit if I am not a member?',
        a: 'Yes. If you are a member of another I-LYA or AYC club, you can use reciprocal docking. Call Holiday Harbour Marina first at (519) 734-6679.',
      },
      {
        q: 'What facilities are available?',
        a: 'Holiday Harbour Marina has fuel, pump-out, showers, laundry, and a ship store. They can help with most boating needs.',
      },
      {
        q: 'Is there parking for trailers?',
        a: 'Contact Holiday Harbour Marina directly about trailer parking and launch facilities.',
      },
    ],
  },
  {
    category: 'About the Club',
    icon: Award,
    questions: [
      {
        q: 'When was the club founded?',
        a: 'The club started in the 1960s. Our first recorded meeting was in March 1968.',
      },
      {
        q: 'What organizations are you affiliated with?',
        a: 'We are members of Inter-Lake Yachting Association (I-LYA), Associated Yacht Clubs (AYC), and International Order of Blue Gavel (IOBG).',
      },
      {
        q: 'What types of boats do members have?',
        a: 'All types. Power boats, sailboats, big boats, small boats. All are welcome.',
      },
      {
        q: 'How many members do you have?',
        a: 'Our membership varies from year to year. We are a close-knit group that welcomes new members.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <HelpCircle className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Frequently Asked Questions</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Common questions about Sun Parlour Boat Club. Simple answers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqs.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-nautical-ocean-50 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-nautical-ocean-600" />
                      </div>
                    </div>
                    <h2 className="heading-md">{category.category}</h2>
                  </div>

                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="card p-8 space-y-4">
                        <h3 className="text-xl font-semibold text-nautical-navy-900">
                          {faq.q}
                        </h3>
                        <p className="text-body leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="heading-lg">Still Have Questions?</h2>
            <p className="text-body">
              We're here to help. Contact us and we'll answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/membership" className="btn-secondary">
                Learn About Membership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
