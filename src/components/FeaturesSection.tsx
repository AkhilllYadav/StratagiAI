import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, TrendingUp, Users, Target } from 'lucide-react';

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  benefits?: string[];
  integrations?: string[];
  useCases?: string[];
  image?: string; // Added image property
}

const features: FeatureItem[] = [
  {
    title: 'AI-Powered Strategy Generation',
    description: 'Leverage advanced AI to generate comprehensive marketing strategies tailored to your business goals.',
    icon: '/instant-generation.svg',
    benefits: [
      'Save countless hours on market research and strategy development.',
      'Access data-driven insights for optimal campaign performance.',
      'Stay ahead of competitors with predictive analytics.',
    ],
    integrations: [
      'Google Analytics',
      'Facebook Ads Manager',
      'CRM Systems (Salesforce, HubSpot)',
    ],
    useCases: [
      'New product launch strategy',
      'Market expansion planning',
      'Content marketing strategy',
    ],
    image: '/1.png', // Added image path
  },
  {
    title: 'Brand-Focused Content Creation',
    description: 'Generate on-brand content ideas and copy that resonates with your target audience.',
    icon: '/brand-focused.svg',
    benefits: [
      'Maintain consistent brand voice across all channels.',
      'Increase engagement with highly relevant content.',
      'Streamline content production workflows.',
    ],
    integrations: [
      'WordPress',
      'Shopify',
      'Mailchimp',
    ],
    useCases: [
      'Blog post generation',
      'Social media campaign content',
      'Email marketing copy',
    ],
    image: '/2.png', // Added image path
  },
  {
    title: 'Business Context Understanding',
    description: 'Our AI understands your unique business context, ensuring strategies are always relevant and actionable.',
    icon: '/business-context.svg',
    benefits: [
      'Receive strategies that align with your specific industry and market.',
      'Identify untapped opportunities and mitigate potential risks.',
      'Optimize resource allocation based on precise recommendations.',
    ],
    integrations: [
      'Internal Data Warehouses',
      'ERP Systems',
      'Custom API Integrations',
    ],
    useCases: [
      'Personalized customer journey mapping',
      'Competitive analysis',
      'Market trend identification',
    ],
    image: '/3.png', // Added image path
  },
  {
    title: 'Real-time Performance Tracking',
    description: 'Monitor your campaign performance in real-time and get actionable insights to optimize results.',
    icon: '/ai-strategy.svg',
    benefits: [
      'Make informed decisions with up-to-the-minute data.',
      'Quickly adapt to market changes and campaign performance.',
      'Maximize ROI with continuous optimization.',
    ],
    integrations: [
      'Google Ads',
      'LinkedIn Ads',
      'CRM Systems',
    ],
    useCases: [
      'A/B testing optimization',
      'Budget allocation adjustments',
      'Performance reporting and analysis',
    ],
    image: '/4.png', // Added image path
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 text-sm font-medium border border-blue-100">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-blue-900 font-semibold">
              Trusted by 10,000+ Marketers
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 max-w-4xl">
            Transform Your Marketing with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI-Powered Intelligence</span>
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed">
            Join thousands of marketers who've revolutionized their campaigns with our comprehensive AI platform. 
            Generate strategies 10x faster and achieve 3x better ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-full font-semibold">
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="space-y-16 lg:space-y-24 pb-24">
          {features.map((feature: FeatureItem, index: number) => {
            const isEven: boolean = index % 2 === 0;
            
            return (
              <div
                key={index}
                className="w-full max-w-6xl mx-auto"
              >
                {/* Feature Card */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 group hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2">
                  <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12",
                    isEven ? "" : "lg:flex-row-reverse"
                  )}>
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl flex-shrink-0 border border-blue-100">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl text-white font-bold">{index + 1}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            <Zap className="h-3 w-3" />
                            AI-Powered
                          </span>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                      
                      {/* Feature sections */}
                      <div className="space-y-6">
                        {feature.benefits && (
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                              <TrendingUp className="h-5 w-5 text-green-600" />
                              Key Benefits
                            </h4>
                            <ul className="space-y-3">
                              {feature.benefits.map((benefit: string, i: number) => (
                                <li key={i} className="flex items-start text-sm">
                                  <span className="mr-3 text-green-600 flex-shrink-0 mt-0.5">✓</span>
                                  <span className="text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {feature.integrations && (
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                              <Target className="h-5 w-5 text-blue-600" />
                              Popular Integrations
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {feature.integrations.slice(0, 3).map((integration: string, i: number) => (
                                <span 
                                  key={i} 
                                  className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 border border-gray-200 shadow-sm"
                                >
                                  {integration}
                                </span>
                              ))}
                              {feature.integrations.length > 3 && (
                                <span className="px-3 py-1.5 text-xs rounded-full bg-gray-100 text-gray-500">
                                  +{feature.integrations.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {feature.useCases && (
                          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                              <Users className="h-5 w-5 text-purple-600" />
                              Perfect For
                            </h4>
                            <ul className="space-y-2">
                              {feature.useCases.slice(0, 2).map((useCase: string, i: number) => (
                                <li key={i} className="flex items-start text-sm">
                                  <span className="mr-3 text-purple-600 flex-shrink-0 mt-0.5">•</span>
                                  <span className="text-gray-700">{useCase}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold py-3">
                        Start Using This Feature
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Image Content */}
                    {feature.image && (
                      <div className="lg:w-1/2 flex justify-center items-center">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="relative rounded-2xl object-cover w-full h-auto max-w-md lg:max-w-full transition-all duration-500 group-hover:scale-105 shadow-xl group-hover:shadow-2xl border border-gray-100"
                          />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 shadow-lg">
                            AI Generated
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 mb-24 border border-gray-200">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm border">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <span className="text-gray-700">Limited Time Offer</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join 10,000+ marketers who've already revolutionized their campaigns. 
              Start your free trial today and see results in your first week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl">
                Start Free 14-Day Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="text-sm text-gray-600">
                ✓ No credit card required
              </div>
            </div>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>3x ROI Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>10x Faster Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>50+ Integrations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;