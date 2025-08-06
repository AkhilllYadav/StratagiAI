import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Star, Users, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6">
            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-semibold">4.9/5</span>
                <span>from 1,200+ users</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-blue-600" />
                <span>5,000+ marketers</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Transform Your Marketing with 
                <span className="text-blue-600"> AI-Powered</span> Strategies
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                Generate comprehensive marketing strategies in minutes, not weeks. 
                Connect your existing tools and get data-driven campaigns that deliver 10x better results.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "10x faster strategy creation",
                "No technical skills required",
                "Works with your existing tools",
                "Real-time market insights"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col gap-4">
              <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <Input
                  className="flex-1 bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your work email"
                  type="email"
                  required
                  aria-label="Email address for getting started"
                />
                <Button 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 font-semibold transition-colors"
                  type="submit"
                >
                  Start Free Trial
                </Button>
              </form>
              
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-600">No credit card required</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">14-day free trial</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Image with Stats */}
          <div className="relative lg:order-last">
            <img
              alt="AI marketing strategy dashboard showing campaign performance and insights"
              className="w-full max-w-[600px] aspect-[1226/1000] overflow-hidden rounded-xl object-cover shadow-2xl"
              height="500"
              src="./hero.png"
              width="700"
              loading="eager"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">+340% ROI</p>
                  <p className="text-xs text-gray-600">Average increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}