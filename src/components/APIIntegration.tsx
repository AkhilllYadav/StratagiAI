import React from 'react';

const integrations = [
  "HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "Freshsales", "Custom CRM",
  "Google Ads", "Facebook Ads", "LinkedIn Ads", "Instagram Ads", "YouTube Ads", "TikTok Ads", "Twitter/X Ads", "Programmatic DSPs",
  "Google Analytics", "Matomo", "Mixpanel", "Hotjar", "FullStory", "Microsoft Clarity",
  "Mailchimp", "Klaviyo", "SendGrid", "ConvertKit", "ActiveCampaign", "MoEngage",
  "Shopify", "WooCommerce", "Magento", "BigCommerce", "Amazon Seller",
  "Facebook Pages", "Instagram", "Twitter/X", "YouTube", "TikTok", "LinkedIn Pages",
  "Google Sheets", "Excel Uploads", "CSV Uploads",
  "Notion", "Slack", "Microsoft Teams",
  "ERP Systems", "Internal BI Tools", "API Webhooks", "Zapier"
];

const APIIntegration = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="integrations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
            Seamless Integration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect Your Existing Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            MarkitupAI works with the tools you already use. No migration headaches, just better results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Setup</h3>
            <p className="text-gray-600">Connect your tools in under 5 minutes with our guided setup</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Downtime</h3>
            <p className="text-gray-600">Your existing workflows keep running while we enhance them with AI</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Sync</h3>
            <p className="text-gray-600">Real-time data sync keeps your strategies always up-to-date</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-900">
            Popular Integrations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {integrations.slice(0, 15).map((integration, index) => (
              <div key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xs font-bold text-gray-600">
                    {integration.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <p className="text-xs text-center text-gray-700 font-medium">{integration}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              And many more... <span className="text-blue-600 font-semibold">50+ integrations available</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIIntegration;
