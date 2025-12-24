import Link from 'next/link';
import { Shield, Eye, Lock, Mail, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Shield className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Privacy Policy</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              How we handle your information. Simple and clear.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Eye className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">What Information We Collect</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  When you join Sun Parlour Boat Club, we collect basic information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your name</li>
                  <li>Your address</li>
                  <li>Your phone number</li>
                  <li>Your email address</li>
                  <li>Boat information (if you have a boat)</li>
                  <li>Emergency contact information</li>
                </ul>
                <p>
                  We need this information to manage your membership and contact you about club activities.
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Lock className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  We use your information for these purposes only:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To manage your membership</li>
                  <li>To send you information about club events</li>
                  <li>To send you the monthly newsletter</li>
                  <li>To contact you in emergencies</li>
                  <li>To share your contact info with other members (name and boat info only)</li>
                  <li>To provide your information to I-LYA and AYC for reciprocal docking</li>
                </ul>
                <p>
                  We do not sell your information. We do not share it with anyone except as described above.
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Email Communications</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  As a member, you will receive emails from us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Event announcements</li>
                  <li>Monthly newsletter</li>
                  <li>Important club updates</li>
                  <li>Emergency notifications</li>
                </ul>
                <p>
                  You can ask us to remove you from our email list at any time. Just send us an email.
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Member Directory</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  We maintain a member directory that includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Member names</li>
                  <li>Boat names and types</li>
                  <li>Phone numbers (if you agree)</li>
                  <li>Email addresses (if you agree)</li>
                </ul>
                <p>
                  This directory is only shared with other club members. It helps members connect with each other.
                </p>
                <p>
                  You can ask us not to include your contact information in the directory. Just let us know.
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">How We Protect Your Information</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  We take reasonable steps to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We store member information securely</li>
                  <li>We limit who has access to member information</li>
                  <li>We do not post personal information publicly</li>
                  <li>We use secure email when sending sensitive information</li>
                </ul>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Eye className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Website Information</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  Our website does not collect personal information unless you send it to us.
                </p>
                <p>
                  We do not use cookies. We do not track your browsing. We do not collect analytics.
                </p>
                <p>
                  If you email us through the website, we will have your email address. We will only use it to respond to you.
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Your Rights</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>See what information we have about you</li>
                  <li>Ask us to correct wrong information</li>
                  <li>Ask us to remove you from our email list</li>
                  <li>Ask us not to share your information in the member directory</li>
                  <li>Ask us to delete your information when you leave the club</li>
                </ul>
                <p>
                  To exercise these rights, contact us at spbc2005@bell.net
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-nautical-ocean-600" />
                <h2 className="heading-md">Questions About Privacy</h2>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  If you have questions about how we handle your information, contact us:
                </p>
                <p>
                  Email: <a href="mailto:spbc2005@bell.net" className="text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium">spbc2005@bell.net</a>
                </p>
                <p>
                  Phone: <a href="tel:+15197346679" className="text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium">(519) 734-6679</a>
                </p>
              </div>
            </div>

            <div className="card p-8 space-y-4 bg-nautical-sand-50">
              <p className="text-sm text-nautical-navy-700">
                <strong>Last Updated:</strong> December 2025
              </p>
              <p className="text-sm text-nautical-navy-700">
                We may update this privacy policy from time to time. We will notify members of any major changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="heading-lg">Have Questions?</h2>
            <p className="text-body">
              We're happy to explain our privacy practices in more detail.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
