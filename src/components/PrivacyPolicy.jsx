import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm tracking-wider">PRIVACY POLICY</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="text-yellow-400">Policy</span>
          </h1>
          <p className="text-gray-400">Last updated: November 2024</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-400 leading-relaxed">
              At Studio App, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                <p>
                  We collect information that you provide directly to us, including name, email address, phone number, and payment information when you register for our service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Usage Data</h3>
                <p>
                  We automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, pages visited, and time spent on pages.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Photos and Media</h3>
                <p>
                  We store photos and media files that you or your studio uploads to our platform. These files are encrypted and stored securely in the cloud.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-400 leading-relaxed list-disc list-inside">
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and send related information</li>
              <li>To send administrative information, updates, and security alerts</li>
              <li>To respond to your comments, questions, and customer service requests</li>
              <li>To monitor and analyze usage patterns and trends</li>
              <li>To detect, prevent, and address technical issues and fraudulent activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-400 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. This includes encryption of data in transit and at rest, regular security audits, and restricted access to personal information on a need-to-know basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Sharing</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="space-y-2 text-gray-400 leading-relaxed list-disc list-inside">
              <li>With your photography studio when you are their client</li>
              <li>With service providers who assist us in operating our platform</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-gray-400 leading-relaxed list-disc list-inside">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            <p className="text-gray-400 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Photos and media files are retained according to your subscription plan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <p className="text-gray-400 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 space-y-2 text-gray-400">
              <p>Email: <a href="mailto:privacy@studioapp.com" className="text-yellow-400 hover:text-yellow-500">privacy@studioapp.com</a></p>
              <p>Phone: <a href="tel:+911234567890" className="text-yellow-400 hover:text-yellow-500">+91 123 456 7890</a></p>
              <p>Address: 123 Tech Park, MG Road, Bangalore, Karnataka 560001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
  