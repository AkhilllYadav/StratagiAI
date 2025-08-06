import React, { useState, useEffect } from 'react';

interface TestimonialItem {
  name: string;
  title: string;
  avatar: string;
  quote: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'Sarah Johnson',
    title: 'Marketing Director, Acme Corp',
    avatar: '/placeholder-user.jpg',
    quote: "MarkitupAI has revolutionized our marketing strategy. The AI-powered insights are incredibly accurate and have helped us achieve unprecedented ROI.",
  },
  {
    name: 'David Lee',
    title: 'CEO, Innovate Solutions',
    avatar: '/placeholder-user.jpg',
    quote: "The content generation feature is a game-changer. We're able to produce high-quality, on-brand content at a fraction of the time and cost.",
  },
  {
    name: 'Emily Chen',
    title: 'Founder, Growth Hub',
    avatar: '/placeholder-user.jpg',
    quote: "I've tried numerous marketing platforms, but MarkitupAI stands out with its deep business context understanding. It's like having a dedicated AI marketing team.",
  },
  {
    name: 'Michael Rodriguez',
    title: 'VP of Marketing, TechFlow',
    avatar: '/placeholder-user.jpg',
    quote: "The ROI we've seen since implementing MarkitupAI is remarkable. Our campaigns are more targeted and effective than ever before.",
  },
  {
    name: 'Lisa Thompson',
    title: 'Brand Manager, Creative Co',
    avatar: '/placeholder-user.jpg',
    quote: "MarkitupAI understands our brand voice perfectly. It's like having an extension of our creative team that never sleeps.",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('testimonials-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handlePersonClick = (index: number) => {
    setCurrentTestimonial(index);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n.charAt(0)).join('');
  };

  return (
    <section id="testimonials-section" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block rounded-lg bg-white border border-gray-200 px-4 py-2 text-sm text-gray-700 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Customer Stories
          </div>
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Meet our successful customers
          </h2>
          <p 
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our philosophy is simple: hire great people and give them the resources and support to do their best work.
          </p>
        </div>

        {/* Team Member Cards */}
        <div 
          className={`flex justify-center items-center gap-6 mb-16 flex-wrap transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => handlePersonClick(index)}
              className={`relative cursor-pointer transition-all duration-500 hover:scale-105 ${
                currentTestimonial === index 
                  ? 'transform scale-110' 
                  : 'transform scale-100 hover:scale-105'
              }`}
            >
              {/* Profile Card */}
              <div 
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 min-w-[200px] ${
                  currentTestimonial === index 
                    ? 'border-blue-500 shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div 
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-300 ${
                      currentTestimonial === index 
                        ? 'bg-blue-500 ring-4 ring-blue-200' 
                        : 'bg-gray-400'
                    }`}
                  >
                    {getInitials(testimonial.name)}
                  </div>
                </div>
                
                {/* Name and Title */}
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.title}
                  </p>
                </div>

                {/* Active Indicator */}
                {currentTestimonial === index && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Central Testimonial Quote */}
        <div 
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-500 opacity-20">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-8 font-medium italic">
              {testimonials[currentTestimonial].quote}
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-center gap-4">
              <div 
                className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"
              >
                {getInitials(testimonials[currentTestimonial].name)}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[currentTestimonial].title}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePersonClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;