import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import React, { useState, useEffect } from 'react';

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('pricing');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);
  return (
    <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block rounded-lg bg-white border border-gray-200 px-4 py-2 text-sm text-gray-700 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Pricing Plans
          </div>
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Simple, Transparent Pricing
          </h2>
          <p 
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Choose the plan that's right for your business. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div 
          className={`mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <Card className="flex flex-col justify-between card-elevated">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Perfect for small businesses and startups.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$29<span className="text-base font-normal">/month</span></div>
              <ul className="grid gap-2 text-sm">
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> 10 Strategy Generations
                </li>
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> Basic Analytics
                </li>
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> Email Support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full btn-primary">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-between card-elevated border-2 border-ai-primary">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Ideal for growing businesses needing more.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$59<span className="text-base font-normal">/month</span></div>
              <ul className="grid gap-2 text-sm">
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> Unlimited Strategy Generations
                </li>
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> Advanced Analytics
                </li>
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> Priority Email Support
                </li>
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> Customization Options
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full btn-primary">Go Pro</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-between card-elevated">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations with extensive needs.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$99<span className="text-base font-normal">/month</span></div>
              <ul className="grid gap-2 text-sm">
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> All Pro Features
                </li>
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> Dedicated Account Manager
                </li>
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> On-premise Deployment
                </li>
                <li>
                  <Check className="mr-2 inline-block h-4 w-4" /> 24/7 Phone Support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full btn-secondary">Contact Us</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}