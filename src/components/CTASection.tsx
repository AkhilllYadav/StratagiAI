import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto">
          {/* Urgency Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span>Limited Time: 14-day free trial ends soon</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to 10x Your Marketing Results?
            </h2>
            <p className="max-w-[600px] text-gray-300 md:text-xl leading-relaxed">
              Join 5,000+ marketers who've transformed their campaigns with AI. 
              Start your free trial today - no credit card required.
            </p>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md">
            {[
              "Generate strategies in minutes",
              "Connect your existing tools",
              "Real-time market insights",
              "24/7 expert support"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 font-semibold text-lg transition-transform hover:scale-105" 
              size="lg"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              className="bg-transparent text-white hover:bg-white/10 border-white/20 px-8 py-3 font-semibold" 
              size="lg" 
              variant="outline"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <span className="font-semibold">5,000+</span>
              <span>Active Users</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold">4.9/5</span>
              <span>User Rating</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold">340%</span>
              <span>Avg. ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}