import Link from 'next/link';
import { HelpCircle, CheckCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'Do I need to own a boat to join?',
        a: 'No. Many of our members don\'t own boats. You can join just to be part of our community, attend social events, and make friends. Some members are thinking about buying a boat someday. Others just enjoy being around boats and water. Everyone is welcome.'
      },
      {
        q: 'How much does membership cost?',
        a: 'Membership fees vary. Contact our Membership Chairperson for current rates. We have options for individuals, couples, and families. The cost is very reasonable when you think about what you get - access to 132 other clubs, great events all year, and lifetime friendships.'
      },
      {
        q: 'Where is the club located?',
        a: 'We\'re at Holiday Harbour Marina in LaSalle, Ontario. The address is 2406 Front Road, LaSalle, Ontario N9J 2C4. It\'s easy to find and has plenty of parking. The marina has everything you need - fuel, repairs, supplies, and a great restaurant.'
      },
      {
        q: 'What if I\'m new to boating?',
        a: 'Perfect! We love helping new boaters. Our members are friendly and happy to share what they know. We have experienced boaters who can answer your questions. You\'ll learn about safety, navigation, and how to have fun on the water. Start small and learn as you go.'
      }
    ]
  },
  {
    category: 'Membership Benefits',
    questions: [
      {
        q: 'What is reciprocal docking?',
        a: 'Reciprocal docking means you can visit other yacht clubs and dock your boat there. We have agreements with 132 clubs on Lake Erie, Lake St. Clair, and the Detroit River. You show your SPBC membership card and they let you dock. It\'s like having friends at marinas everywhere. One weekend of reciprocal docking can save you more than your membership costs.'
      },
      {
        q: 'What kind of events do you have?',
        a: 'We have something happening almost every month. Poker runs where you cruise to different clubs. Dinners and parties at our clubhouse. Sailing races if you like competition. Holiday celebrations. Watch parties for Lions games. Family-friendly activities. Weekend cruises to other marinas. The Ship\'s Log newsletter lists everything coming up.'
      },
      {
        q: 'Can my family join too?',
        a: 'Yes! We\'re a family club. Bring your kids and grandkids. We plan activities everyone can enjoy. Many members bring their whole family to events. It\'s a great way for kids to learn about boats and make friends. Some of our best memories are family events on the water.'
      },
      {
        q: 'What are the affiliated organizations?',
        a: 'We belong to three big boating groups. I-LYA (Inter-Lake Yachting Association) is the oldest and most respected on the Great Lakes. AYC (Associated Yacht Clubs) connects clubs in our region. IOBG (International Order of Blue Gavel) is for past commodores and officers. These memberships give you access to their events and clubs.'
      }
    ]
  },
  {
    category: 'Boats & Docking',
    questions: [
      {
        q: 'What size boat can I have?',
        a: 'Any size. We have members with small fishing boats and members with large cruisers. Sailboats and powerboats are both welcome. What matters is that you enjoy being on the water. The club is about people, not boat size.'
      },
      {
        q: 'Do I need to dock at Holiday Harbour?',
        a: 'No. You can keep your boat anywhere. Many members dock at other marinas. Some keep their boats on trailers. As long as you\'re a club member, you\'re part of the family. We meet at Holiday Harbour for events, but your boat can be anywhere.'
      },
      {
        q: 'Can visiting boaters dock at your marina?',
        a: 'Yes, if you\'re from another I-LYA or AYC club. Contact our Dock Master in advance. We have limited reciprocal wells, so book early. You\'ll need to register with Holiday Harbour Marina when you arrive. Read our Docking page for the full process.'
      },
      {
        q: 'What if my boat needs repairs?',
        a: 'Holiday Harbour Marina has a full service department. They can fix engines, do fiberglass work, and handle most repairs. There are also other marine service shops nearby. Our members can recommend good mechanics they trust.'
      }
    ]
  },
  {
    category: 'Events & Activities',
    questions: [
      {
        q: 'Do I have to attend events?',
        a: 'No. Come to what interests you. Some members come to everything. Others pick a few favorites. There\'s no pressure. We just want you to have fun and feel welcome.'
      },
      {
        q: 'What is a poker run?',
        a: 'A poker run is a fun boating event. You cruise to different yacht clubs and collect a playing card at each stop. At the end, whoever has the best poker hand wins a prize. It\'s really about the journey - meeting people, seeing different clubs, and having a great day on the water.'
      },
      {
        q: 'Are events expensive?',
        a: 'Most are very affordable. Some events are free for members. Others have a small fee to cover food and drinks. Big events like the Commodore\'s Ball cost more because they\'re fancy dinners. We try to keep everything reasonable so everyone can participate.'
      },
      {
        q: 'Can I bring guests?',
        a: 'Usually yes. Most events welcome guests. It\'s a great way to introduce friends to the club. Some events are members-only, but we\'ll always tell you in advance. Bringing guests helps our club grow.'
      }
    ]
  },
  {
    category: 'Safety & Rules',
    questions: [
      {
        q: 'Do I need a boating license?',
        a: 'In Canada, yes. You need a Pleasure Craft Operator Card to operate a boat. It\'s easy to get - take an online course and pass a test. The course teaches you safety rules and navigation. It\'s required by law and it makes you a better boater.'
      },
      {
        q: 'What about insurance?',
        a: 'You need boat insurance. It protects you if something goes wrong. Most marinas require it. Your insurance agent can set you up. It\'s not expensive and gives you peace of mind.'
      },
      {
        q: 'Are there speed limits on the water?',
        a: 'Yes. There are no-wake zones near marinas and residential areas. Go slow in these areas to avoid making big waves. Check our No Wake Zones page for a map. Following the rules keeps everyone safe and protects property.'
      },
      {
        q: 'What if I have an emergency on the water?',
        a: 'Call for help immediately. Use VHF radio Channel 16 or call 911 on your phone. The Coast Guard monitors Channel 16. Always carry a charged phone, life jackets, and safety equipment. Our members look out for each other on the water.'
      }
    ]
  },
  {
    category: 'Club Operations',
    questions: [
      {
        q: 'Who runs the club?',
        a: 'Elected officers and volunteers. We have a Commodore, Vice-Commodore, Rear-Commodore, and other positions. Members vote each year. Everyone volunteers their time because they love the club. You can help too if you want.'
      },
      {
        q: 'How do I stay informed?',
        a: 'Read the Ship\'s Log newsletter. We publish it monthly with all upcoming events and club news. Check our website for updates. Join our email list. Follow us on social media. The Directors page has contact info if you have questions.'
      },
      {
        q: 'Can I volunteer?',
        a: 'Please do! We always need help with events, maintenance, and activities. Even a few hours makes a difference. It\'s a great way to meet people and feel more connected to the club.'
      },
      {
        q: 'How do I contact the club?',
        a: 'Check our Directors page for officer contact information. You can call or email any officer with questions. The Commodore and Vice-Commodore are good starting points. Everyone is friendly and happy to help.'
      }
    ]
  }
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
            <h1 className="heading-xl text-white">Questions & Answers</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Everything you need to know about Sun Parlour Boat Club. Simple answers to common questions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <div className="mb-8">
                  <h2 className="heading-lg text-nautical-navy-900 mb-2">{category.category}</h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-nautical-ocean-500 to-nautical-ocean-300 rounded-full" />
                </div>
                
                <div className="space-y-6">
                  {category.questions.map((faq, qIdx) => (
                    <div key={qIdx} className="card p-8 space-y-4">
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                        <div className="flex-1 space-y-3">
                          <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                            {faq.q}
                          </h3>
                          <p className="text-body leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 text-center space-y-6">
              <h2 className="heading-md">Still Have Questions?</h2>
              <p className="text-body max-w-2xl mx-auto">
                We're here to help. Contact any of our officers and we'll get you answers. Everyone at SPBC is friendly and happy to talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/directors" className="btn-primary">
                  Contact Us
                </Link>
                <Link href="/membership" className="btn-secondary">
                  Join Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
