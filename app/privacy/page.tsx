import { Shield } from 'lucide-react';

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
              How we protect your information and respect your privacy.
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
                Sun Parlour Boat Club respects your privacy. This policy explains what information we collect and how we use it.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">What Information We Collect</h2>
              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-semibold text-nautical-navy-900">Member Information</h3>
                <p className="text-body">
                  When you join our club, we collect basic information: your name, address, phone number, and email. We need this to communicate with you about events and club business.
                </p>
                <p className="text-body">
                  If you own a boat, we collect boat details: name, size, and registration number. This helps us with docking and insurance requirements.
                </p>
              </div>

              <div className="card p-8 space-y-4">
                <h3 className="text-xl font-semibold text-nautical-navy-900">Website Information</h3>
                <p className="text-body">
                  Our website may collect basic information when you visit: your IP address, browser type, and pages you view. This helps us improve the website.
                </p>
                <p className="text-body">
                  We don't use tracking cookies or sell your data to anyone.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">How We Use Your Information</h2>
              <div className="card p-8 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-body">Send you information about club events and activities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-body">Process your membership and renewals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-body">Coordinate docking at our marina and reciprocal clubs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-body">Publish our member directory (name and boat info only)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-body">Share your information with I-LYA, AYC, and IOBG as required for reciprocal privileges</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">How We Protect Your Information</h2>
              <div className="card p-8 space-y-4">
                <p className="text-body">
                  We keep your information secure. Only club officers have access to member data. We don't share your information with outside companies or marketers.
                </p>
                <p className="text-body">
                  Your email address is used only for club communications. We don't sell or rent our member list.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Photos and Social Media</h2>
              <div className="card p-8 space-y-4">
                <p className="text-body">
                  We take photos at club events. These may be posted on our website, in our newsletter, or on social media. If you don't want your photo used, please tell us.
                </p>
                <p className="text-body">
                  We respect your privacy. If you see a photo of yourself that you want removed, contact any officer and we'll take it down.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Your Rights</h2>
              <div className="card p-8 space-y-4">
                <p className="text-body">
                  You can ask to see what information we have about you. You can ask us to correct or delete your information. You can opt out of emails anytime.
                </p>
                <p className="text-body">
                  Contact our Secretary to update or remove your information.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-md">Changes to This Policy</h2>
              <div className="card p-8 space-y-4">
                <p className="text-body">
                  We may update this policy occasionally. We'll post changes on this page. Major changes will be announced in our newsletter.
                </p>
              </div>
            </div>

            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <h2 className="text-xl font-semibold text-nautical-navy-900 mb-4">Questions?</h2>
              <p className="text-body">
                If you have questions about this privacy policy or how we handle your information, contact our Secretary or any club officer. We're happy to explain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
