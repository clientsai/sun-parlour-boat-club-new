import { FileText } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <FileText className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Terms of Service</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Club rules and membership terms explained in simple language.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="card p-8 bg-nautical-sand-50">
              <p className="text-body">
                <strong>Last Updated:</strong> December 2024
              </p>
              <p className="text-body mt-4">
                These terms explain how Sun Parlour Boat Club works and what we expect from members. By joining, you agree to follow these rules.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Membership</h2>
              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-semibold text-nautical-navy-900">Who Can Join</h3>
                <p className="text-body">
                  Anyone who enjoys boating can apply for membership. You don't need to own a boat. We welcome powerboats and sailboats of all sizes.
                </p>
                <p className="text-body">
                  New members must be approved by the club officers. We want to make sure everyone fits with our friendly, family-oriented culture.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-semibold text-nautical-navy-900">Membership Fees</h3>
                <p className="text-body">
                  Annual membership fees are due each year. The exact amount is set by the club officers and may change. Current rates are available from our Membership Chairperson.
                </p>
                <p className="text-body">
                  If you don't pay your fees, your membership will be suspended. You'll lose access to reciprocal docking and club events until you pay.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-semibold text-nautical-navy-900">Membership Benefits</h3>
                <p className="text-body">
                  Members get access to 132 reciprocal clubs, invitations to all club events, the monthly Ship's Log newsletter, and voting rights in club decisions.
                </p>
                <p className="text-body">
                  Your membership is personal. You can't transfer it to someone else or share it with non-family members.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Conduct and Behavior</h2>
              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-semibold text-nautical-navy-900">Expected Behavior</h3>
                <p className="text-body">
                  Be respectful to other members, marina staff, and visitors. We're a friendly club and we expect everyone to act that way.
                </p>
                <p className="text-body">
                  Follow all boating laws and regulations. Obey no-wake zones. Don't drink and drive your boat. Be a responsible boater.
                </p>
                <p className="text-body">
                  At club events, behave appropriately. We're a family club, so keep language and behavior family-friendly.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-semibold text-nautical-navy-900">Violations</h3>
                <p className="text-body">
                  If you break club rules or behave badly, the officers can suspend or terminate your membership. Serious violations like illegal activity or dangerous behavior will result in immediate removal.
                </p>
                <p className="text-body">
                  We want everyone to have fun, but safety and respect come first.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Reciprocal Docking</h2>
              <div className="card p-8 space-y-4">
                <p className="text-body">
                  Reciprocal docking is a privilege, not a right. Other clubs can refuse docking if they're full or if you don't follow their rules.
                </p>
                <p className="text-body">
                  Always contact clubs in advance to reserve a spot. Follow their check-in procedures. Pay any fees they charge. Treat their facilities with respect.
                </p>
                <p className="text-body">
                  If you cause problems at another club, it reflects badly on all of us. Bad behavior can result in loss of reciprocal privileges for everyone.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Events and Activities</h2>
              <div className="card p-8 space-y-4">
                <p className="text-body">
                  Club events are for members and their invited guests. Some events have fees to cover costs. Register by the deadline or you might not get a spot.
                </p>
                <p className="text-body">
                  If you sign up for an event and can't make it, let us know as soon as possible. Last-minute cancellations may not get refunds.
                </p>
                <p className="text-body">
                  At events, follow the organizer's instructions. Help clean up. Be considerate of others.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Liability and Insurance</h2>
              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-semibold text-nautical-navy-900">Your Responsibility</h3>
                <p className="text-body">
                  You're responsible for your own safety and your boat. The club is not liable for accidents, injuries, or damage to your property.
                </p>
                <p className="text-body">
                  You must have proper boat insurance. The club doesn't insure your boat or cover your accidents.
                </p>
                <p className="text-body">
                  When you participate in club events, you do so at your own risk. We recommend you have personal liability insurance.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-semibold text-nautical-navy-900">Waiver</h3>
                <p className="text-body">
                  By joining the club, you agree not to sue the club, its officers, or other members for accidents or injuries that happen during club activities.
                </p>
                <p className="text-body">
                  This doesn't apply if someone is intentionally reckless or breaks the law.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Website and Communications</h2>
              <div className="card p-8 space-y-4">
                <p className="text-body">
                  Our website is for information only. We try to keep it accurate, but details may change. Always confirm event details with an officer.
                </p>
                <p className="text-body">
                  By joining, you agree to receive emails from the club about events and important information. You can unsubscribe from non-essential emails anytime.
                </p>
                <p className="text-body">
                  Don't use the member directory for commercial purposes or spam. It's for club communication only.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Changes to Terms</h2>
              <div className="card p-8 space-y-4">
                <p className="text-body">
                  The club can change these terms at any time. We'll announce major changes in the Ship's Log newsletter. Continuing your membership means you accept the new terms.
                </p>
                <p className="text-body">
                  If you don't agree with changes, you can resign your membership and get a prorated refund of your dues.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Termination</h2>
              <div className="card p-8 space-y-4">
                <p className="text-body">
                  You can cancel your membership anytime by notifying the Secretary. There are no refunds for partial years unless there are special circumstances.
                </p>
                <p className="text-body">
                  The club can terminate your membership for non-payment of dues, violation of rules, or behavior that harms the club's reputation.
                </p>
              </div>
            </div>

            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <h2 className="text-xl font-semibold text-nautical-navy-900 mb-4">Questions About These Terms?</h2>
              <p className="text-body mb-6">
                If anything is unclear, contact any club officer. We're happy to explain. These terms are meant to protect everyone and keep the club running smoothly.
              </p>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
