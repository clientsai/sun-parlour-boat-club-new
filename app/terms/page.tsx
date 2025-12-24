import Link from 'next/link';
import { FileText, CheckCircle, AlertCircle, Users, Ship } from 'lucide-react';

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
              The rules for using our website and being a member. Simple and fair.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Website Use</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  This website is for information about Sun Parlour Boat Club. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Read about the club</li>
                  <li>View event information</li>
                  <li>Download membership forms</li>
                  <li>Contact us</li>
                </ul>
                <p>
                  You cannot:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Copy our content without permission</li>
                  <li>Use our website for illegal purposes</li>
                  <li>Try to hack or damage the website</li>
                  <li>Pretend to be the club or a club member</li>
                </ul>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Membership Rules</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  When you become a member, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pay your membership fees on time</li>
                  <li>Follow club rules and bylaws</li>
                  <li>Treat other members with respect</li>
                  <li>Follow safe boating practices</li>
                  <li>Represent the club well when visiting other clubs</li>
                </ul>
                <p>
                  The club can end your membership if you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Do not pay your fees</li>
                  <li>Break club rules</li>
                  <li>Behave badly at club events</li>
                  <li>Damage the club's reputation</li>
                </ul>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Ship className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Reciprocal Docking</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  When using reciprocal docking at other clubs:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Always call ahead to make arrangements</li>
                  <li>Follow the host club's rules</li>
                  <li>Be respectful of their facilities</li>
                  <li>Pay any fees they require</li>
                  <li>Thank them for their hospitality</li>
                </ul>
                <p>
                  Remember: You represent Sun Parlour Boat Club when you visit other clubs. Your behavior affects all our members.
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <AlertCircle className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Liability</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  Important: Boating has risks. You are responsible for your own safety.
                </p>
                <p>
                  Sun Parlour Boat Club and its officers are not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Accidents or injuries at club events</li>
                  <li>Damage to your boat</li>
                  <li>Problems at other clubs you visit</li>
                  <li>Weather-related issues</li>
                  <li>Your boating decisions</li>
                </ul>
                <p>
                  You should have your own boat insurance. You should follow all boating safety rules. You should use good judgment.
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Event Participation</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  When you attend club events:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You participate at your own risk</li>
                  <li>You are responsible for your guests</li>
                  <li>You must follow event rules and instructions</li>
                  <li>You may be photographed (photos may be shared)</li>
                  <li>You should report any safety concerns to club officers</li>
                </ul>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Content and Photos</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  Photos and content on this website belong to Sun Parlour Boat Club or its members.
                </p>
                <p>
                  If you submit photos or content to the club:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You give us permission to use it</li>
                  <li>You confirm you have the right to share it</li>
                  <li>You agree we can post it on our website or social media</li>
                </ul>
                <p>
                  If you want a photo removed, contact us and we will remove it.
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <AlertCircle className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Disclaimer</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  We try to keep information on this website accurate and up to date. However:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Information may change without notice</li>
                  <li>We are not responsible for outdated information</li>
                  <li>Links to other websites are provided as a courtesy</li>
                  <li>We are not responsible for content on other websites</li>
                </ul>
                <p>
                  Always verify important information directly with club officers.
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Changes to Terms</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  We may update these terms from time to time. We will notify members of major changes.
                </p>
                <p>
                  By continuing to use the website or maintain your membership after changes, you agree to the new terms.
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-4 bg-nautical-sand-50">
              <p className="text-sm text-nautical-navy-700">
                <strong>Last Updated:</strong> December 2025
              </p>
              <p className="text-sm text-nautical-navy-700">
                These terms are governed by the laws of Ontario, Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="heading-lg">Questions About These Terms?</h2>
            <p className="text-body">
              If you have questions about these terms, contact us. We're happy to explain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/faq" className="btn-secondary">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
