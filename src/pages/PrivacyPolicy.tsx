
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: December 15, 2024</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are committed to protecting your privacy. We do not store any personal user data on our servers. 
              The only information we temporarily retain is:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>IP Addresses:</strong> Temporarily stored for rate limiting purposes only</li>
              <li><strong>Usage Analytics:</strong> Anonymous usage statistics to improve our service</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not collect, store, or process any personal information such as names, email addresses, 
              phone numbers, or any other personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              The limited information we collect is used solely for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li>Rate limiting to prevent abuse of our service</li>
              <li>Ensuring fair usage across all users</li>
              <li>Maintaining service stability and security</li>
              <li>Improving user experience through anonymous analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              IP addresses used for rate limiting are automatically purged from our systems within 24 hours. 
              We do not maintain long-term records of user activity or personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or otherwise transfer your information to third parties. 
              Since we don't collect personal data, there is no personal information to share. 
              The temporary IP data we collect for rate limiting is never shared with external parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies to enhance user experience. Cookies are small files that a site or its 
              service provider transfers to your computer's hard drive through your web browser (if you allow) 
              that enables the site's systems to recognize your browser and capture certain information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services for analytics and service improvement. These services may have 
              their own privacy policies. We encourage you to review the privacy policies of any third-party 
              services you may encounter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect against unauthorized access, alteration, 
              disclosure, or destruction of information. However, since we don't store personal data, 
              the security risks to your privacy are minimal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our service is not directed to children under 13. We do not knowingly collect personal information 
              from children under 13. If you are a parent or guardian and believe your child has provided us with 
              personal information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting 
              the new privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us. We are committed to 
              resolving any concerns you may have about our privacy practices.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Privacy Summary</h3>
              <p className="text-muted-foreground">
                <strong>We respect your privacy.</strong> We don't store any personal user data. 
                Only IP addresses are temporarily retained for rate limiting and are automatically 
                deleted within 24 hours. Your privacy is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
