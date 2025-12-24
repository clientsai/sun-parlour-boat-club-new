import Link from 'next/link';
import { Compass, Users, Ship, Calendar, Award, CheckCircle } from 'lucide-react';

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
              Your complete guide to joining and enjoying Sun Parlour Boat Club. Everything you need to know in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">Join in Three Easy Steps</h2>
              <p className="text-body max-w-2xl mx-auto">
                Becoming a member is simple. Here's exactly what to do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-ocean-50 mx-auto">
                  <span className="text-2xl font-bold text-nautical-ocean-600">1</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Download Application
                </h3>
                <p className="text-body">
                  Get the membership form from our website. Fill it out with your information. It takes about 10 minutes.
                </p>
                <Link href="/membership" className="btn-secondary text-sm">
                  Get Application
                </Link>
              </div>

              <div className="card p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-ocean-50 mx-auto">
                  <span className="text-2xl font-bold text-nautical-ocean-600">2</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Submit & Pay
                </h3>
                <p className="text-body">
                  Mail your application to the address on the form. Include your membership fee. We'll process it quickly.
                </p>
              </div>

              <div className="card p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-ocean-50 mx-auto">
                  <span className="text-2xl font-bold text-nautical-ocean-600">3</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Start Enjoying
                </h3>
                <p className="text-body">
                  You'll get your membership card and welcome packet. Start attending events and using reciprocal docking right away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">What Happens After You Join</h2>
              <p className="text-body max-w-2xl mx-auto">
                Here's what to expect in your first few months as a member.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-nautical-ocean-50 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-nautical-ocean-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-nautical-navy-900">Week 1: Welcome</h3>
                    <p className="text-body">
                      You'll receive your membership card in the mail. This card gets you into reciprocal clubs. Keep it in your boat. You'll also get the current Ship's Log newsletter with upcoming events.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-nautical-ocean-50 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-nautical-ocean-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-nautical-navy-900">Week 2-4: First Event</h3>
                    <p className="text-body">
                      Attend your first club event. Don't be shy - everyone is friendly. Introduce yourself to the Commodore and other officers. Ask questions. People love helping new members feel welcome.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-nautical-ocean-50 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-nautical-ocean-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-nautical-navy-900">Month 2-3: Get Involved</h3>
                    <p className="text-body">
                      Try reciprocal docking at another club. Join a poker run or cruise. Volunteer to help with an event. The more you participate, the more you'll enjoy membership.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-nautical-ocean-50 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-nautical-ocean-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-nautical-navy-900">Ongoing: Stay Connected</h3>
                    <p className="text-body">
                      Read the Ship's Log every month. Mark events on your calendar. Respond to emails. The more connected you stay, the more value you get from membership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">Tips for New Members</h2>
              <p className="text-body max-w-2xl mx-auto">
                Learn from members who've been here for years. Here's what they wish they knew when they started.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6 space-y-3">
                <h3 className="font-semibold text-nautical-navy-900">Attend the First Event You Can</h3>
                <p className="text-body text-sm">
                  Don't wait. Go to the next event even if you don't know anyone. You'll make friends fast. Everyone remembers being new.
                </p>
              </div>

              <div className="card p-6 space-y-3">
                <h3 className="font-semibold text-nautical-navy-900">Ask Questions</h3>
                <p className="text-body text-sm">
                  No question is too basic. Members love sharing their knowledge. Ask about boats, navigation, good restaurants at other clubs, anything.
                </p>
              </div>

              <div className="card p-6 space-y-3">
                <h3 className="font-semibold text-nautical-navy-900">Try Reciprocal Docking Early</h3>
                <p className="text-body text-sm">
                  Pick a close club for your first reciprocal visit. It's easier than you think. Once you do it once, you'll want to explore more clubs.
                </p>
              </div>

              <div className="card p-6 space-y-3">
                <h3 className="font-semibold text-nautical-navy-900">Volunteer for Something Small</h3>
                <p className="text-body text-sm">
                  Help set up for an event or bring food to a potluck. Small contributions make you feel part of the club faster.
                </p>
              </div>

              <div className="card p-6 space-y-3">
                <h3 className="font-semibold text-nautical-navy-900">Read the Ship's Log</h3>
                <p className="text-body text-sm">
                  The newsletter has everything you need to know. Read it cover to cover each month. You'll learn about events and get to know members through stories.
                </p>
              </div>

              <div className="card p-6 space-y-3">
                <h3 className="font-semibold text-nautical-navy-900">Bring Your Family</h3>
                <p className="text-body text-sm">
                  If you have kids or grandkids, bring them to family events. They'll have fun and you'll meet other families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">Common Questions from New Members</h2>
            </div>

            <div className="space-y-4">
              <div className="card p-6">
                <h3 className="font-semibold text-nautical-navy-900 mb-2">What should I bring to my first event?</h3>
                <p className="text-body text-sm">
                  Just yourself. If it's a potluck, bring a dish to share. Otherwise, come as you are. Dress casually unless the invitation says otherwise.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-nautical-navy-900 mb-2">How do I know about events?</h3>
                <p className="text-body text-sm">
                  Check the Events page on this website. Read the Ship's Log newsletter. Watch for emails. Mark your calendar when you see something interesting.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-nautical-navy-900 mb-2">What if I don't have a boat yet?</h3>
                <p className="text-body text-sm">
                  No problem. Come to social events. Ask members about their boats. Learn what you like. When you're ready to buy, you'll have plenty of advice.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-nautical-navy-900 mb-2">How do I use reciprocal docking?</h3>
                <p className="text-body text-sm">
                  Look up clubs on the I-LYA or AYC website. Call ahead to reserve a spot. Show your SPBC membership card when you arrive. Read our Docking page for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 text-center space-y-6 bg-gradient-to-br from-nautical-ocean-50 to-nautical-sand-50">
              <h2 className="heading-md">Ready to Get Started?</h2>
              <p className="text-body max-w-2xl mx-auto">
                Join today and start enjoying everything Sun Parlour Boat Club has to offer. You'll be glad you did.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/membership" className="btn-primary">
                  Download Application
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
