import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Target, Users, CheckCircle } from 'lucide-react';

interface UseCaseItem {
  title: string;
  description: string;
  icon: string;
  industries?: string[];
  benefits?: string[];
}

const useCases: UseCaseItem[] = [
  {
    title: 'Product Launches',
    description: 'Create comprehensive marketing strategies for new product introductions.',
    icon: '/business-context.svg',
    industries: ['E-commerce', 'SaaS', 'Consumer Goods'],
    benefits: [
      'Maximize product awareness',
      'Generate qualified leads',
      'Drive early adoption'
    ]
  },
  {
    title: 'Market Expansion',
    description: 'Develop strategies for entering new markets or demographics.',
    icon: '/ai-strategy.svg',
    industries: ['B2B', 'Healthcare', 'Education'],
    benefits: [
      'Identify target audience',
      'Localize marketing content',
      'Optimize channel selection'
    ]
  },
  {
    title: 'Brand Awareness',
    description: 'Build and strengthen brand recognition across multiple channels.',
    icon: '/brand-focused.svg',
    industries: ['Startups', 'Non-profits', 'Professional Services'],
    benefits: [
      'Increase social media presence',
      'Improve brand recall',
      'Establish thought leadership'
    ]
  }
];

const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 lg:py-32 bg-gray-50 transition-colors duration-500">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 text-sm font-medium border border-purple-100">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-purple-900 font-semibold">
              Proven Results Across Industries
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 max-w-4xl">
            Real-World Success 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Stories</span>
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed">
            Discover how businesses like yours have achieved remarkable results with our AI-powered marketing strategies. 
            From startups to enterprises, see what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-full font-semibold">
              Calculate Your ROI
            </Button>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2 group"
              style={{
                animationDelay: `${index * 100 + 600}ms`
              }}
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-xl border border-purple-100 flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                      <TrendingUp className="h-3 w-3" />
                      Top Use Case
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                {useCase.industries && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 text-purple-600" />
                      Perfect for Industries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.industries.map((industry, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 font-medium"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {useCase.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="mr-2 text-green-600 flex-shrink-0 mt-0.5">✓</span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold py-2.5 text-sm">
                  Explore This Use Case
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Conversion-focused footer */}
        <div className="mt-20 text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-100">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4" />
            Limited Time Offer
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See These Results for Your Business
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who've transformed their strategies with AI-powered insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold text-lg">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-xl font-semibold text-lg">
              <Users className="mr-2 h-5 w-5" />
              Schedule Demo Call
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span>3x ROI increase</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-purple-600" />
              <span>10x faster strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-pink-600" />
              <span>50+ use cases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;