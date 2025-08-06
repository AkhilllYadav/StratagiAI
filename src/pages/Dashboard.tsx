
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Brain, 
  Target, 
  Users, 
  BarChart3, 
  Clock, 
  Star,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";

const Dashboard = () => {
  const [userStats] = useState({
    strategiesCreated: 12,
    averageRating: 4.6,
    totalViews: 2847,
    planType: "Pro"
  });

  const recentStrategies = [
    {
      id: 1,
      title: "Tesla-Inspired EV Startup Launch",
      type: "Product Launch",
      brand: "Tesla",
      createdAt: "2 days ago",
      rating: 4.8,
      status: "Complete"
    },
    {
      id: 2,
      title: "Nike-Style Fitness App Campaign",
      type: "Digital Marketing",
      brand: "Nike",
      createdAt: "1 week ago",
      rating: 4.5,
      status: "Draft"
    },
    {
      id: 3,
      title: "Apple-Inspired Tech Product Positioning",
      type: "Brand Positioning",
      brand: "Apple",
      createdAt: "2 weeks ago",
      rating: 4.9,
      status: "Complete"
    }
  ];

  const quickActions = [
    {
      title: "Create New Strategy",
      description: "Start with brand inspiration",
      icon: Plus,
      href: "/app/create",
      gradient: "gradient-primary"
    },
    {
      title: "Browse Templates",
      description: "Explore strategy templates",
      icon: Brain,
      href: "/app/templates",
      gradient: "gradient-secondary"
    },
    {
      title: "View Analytics",
      description: "Track your performance",
      icon: BarChart3,
      href: "/app/analytics",
      gradient: "gradient-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <ResponsiveNavbar />
      
      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-12 pt-20 sm:pt-24">
        {/* Welcome Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Welcome back! 👋
                </h1>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 text-sm font-medium animate-pulse self-start sm:self-center">
                  <Sparkles className="w-4 h-4 mr-1" />
                  AI Enhanced
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  You're part of 10,000+ marketers creating winning strategies with AI-powered insights.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="font-medium">3x faster strategy creation</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="font-medium">94% success rate</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 lg:mt-0">
              <div className="hidden sm:flex items-center gap-2 text-right">
                <div>
                  <p className="text-sm text-gray-600">Your Plan</p>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 text-sm font-semibold">
                    {userStats.planType} Plan
                  </Badge>
                </div>
              </div>
              <Link to="/app/create" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Plus className="w-5 h-5 mr-2" />
                  Create Strategy
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                Strategies Created
              </CardTitle>
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{userStats.strategiesCreated}</div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1 text-green-600" />
                  <span className="font-medium">+2 this week</span>
                </p>
                <Badge className="bg-green-100 text-green-800 text-xs px-2 py-0.5">
                  +18%
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-yellow-50 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                Average Rating
              </CardTitle>
              <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
                <Star className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{userStats.averageRating}</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(userStats.averageRating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5">
                  Top 5%
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-green-50 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                Total Views
              </CardTitle>
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{userStats.totalViews.toLocaleString()}</div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1 text-green-600" />
                  <span className="font-medium">+12% this month</span>
                </p>
                <Badge className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5">
                  Viral
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                Success Rate
              </CardTitle>
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <Target className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">94%</div>
              <div className="flex items-center justify-between">
                <Progress value={94} className="h-2 bg-purple-100" />
                <Badge className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 ml-2">
                  Excellent
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-yellow-500" />
                AI-Powered Quick Actions
              </h2>
              <p className="text-sm sm:text-base text-gray-600">Choose your next strategic move with AI assistance</p>
            </div>
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0 self-start">
              3x faster with AI
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} to={action.href}>
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 ${action.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            Popular
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-2">
                        {action.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {action.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button className="w-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 border-0 font-medium text-sm sm:text-base">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Strategies */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600" />
                Recent Strategies
              </h2>
              <p className="text-sm sm:text-base text-gray-600">Your latest AI-powered marketing strategies</p>
            </div>
            <Link to="/app/strategies" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors">
                View All Strategies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-3 sm:gap-4">
            {recentStrategies.map((strategy, index) => (
              <Card key={strategy.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                
                <CardContent className="p-4 sm:p-6 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                          {strategy.title}
                        </h3>
                        <Badge 
                          variant={strategy.status === 'Complete' ? 'default' : 'secondary'}
                          className={strategy.status === 'Complete' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 text-xs sm:text-sm self-start' 
                            : 'bg-gray-100 text-gray-700 border-0 text-xs sm:text-sm self-start'}
                        >
                          {strategy.status}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                        <span className="flex items-center text-gray-600">
                          <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-purple-600" />
                          {strategy.type}
                        </span>
                        <span className="flex items-center text-gray-600">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-pink-600" />
                          Inspired by {strategy.brand}
                        </span>
                        <span className="text-gray-500">{strategy.createdAt}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3 mt-3 sm:mt-0 sm:ml-4">
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-1 fill-current" />
                        <span className="text-gray-900 font-semibold text-sm sm:text-base">{strategy.rating}</span>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm sm:opacity-0 group-hover:opacity-100">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conversion-focused footer */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center border border-purple-100">
          <div className="max-w-2xl mx-auto">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-3 sm:mb-4 text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Limited Time: 14-Day Free Trial
            </Badge>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Ready to Scale Your Marketing?
            </h3>
            
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Join 10,000+ marketers who've increased their ROI by 3x with AI-powered strategies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg">
                Upgrade to Pro
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-1 sm:gap-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                <span>3x ROI increase</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                <span>50+ AI templates</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" />
                <span>Priority support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
