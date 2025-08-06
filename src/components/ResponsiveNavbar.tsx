
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Menu, X, Share, Download, User, Settings, LogOut, Zap, Star, TrendingUp, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ResponsiveNavbarProps {
  showBackButton?: boolean;
  onShare?: () => void;
  onExport?: () => void;
}

const ResponsiveNavbar = ({ showBackButton, onShare, onExport }: ResponsiveNavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname.includes('/auth');
  const isLandingPage = location.pathname === '/';
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' : 'bg-transparent'}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-10 h-10 rounded-xl flex items-center justify-center">
                  <img src="/logo.png" alt="StratagiAI Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">StratagiAI</h1>
                <p className="text-sm text-gray-600">Marketing Intelligence</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {!isLandingPage && !isAuthPage ? (
              <>
                <Link to="/app" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105">
                  Dashboard
                </Link>
                <Link to="/app/create" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105">
                  Create Strategy
                </Link>
                <Link to="/app/strategies" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105">
                  My Strategies
                </Link>
                <Link to="/app/help" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105">
                  Support
                </Link>
              </>
            ) : (
              <>
                <a href="#features" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105">
                  Features
                </a>
                <a href="#use-cases" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105">
                  Use Cases
                </a>
                <a href="#testimonials-section" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105">
                  Reviews
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105">
                  Pricing
                </a>
              </>
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Trust Badge */}
            <Badge variant="secondary" className="hidden lg:flex bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0 font-medium">
              <Zap className="w-3 h-3 mr-1" />
              AI Powered
            </Badge>

            {/* Action Buttons - Show on strategy pages */}
            {(onShare || onExport) && (
              <div className="hidden sm:flex items-center space-x-2">
                {onShare && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={onShare} 
                    className="border-purple-200 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200"
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                )}
                {onExport && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={onExport} 
                    className="border-purple-200 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                )}
              </div>
            )}

            {/* User Menu - Show when logged in */}
            {!isLandingPage && !isAuthPage && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden lg:inline font-medium">Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white border-gray-200 shadow-xl">
                  <DropdownMenuItem asChild>
                    <Link to="/app/settings" className="flex items-center text-gray-700 hover:text-purple-600">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-200" />
                  <DropdownMenuItem asChild>
                    <Link to="/" className="flex items-center text-red-600 hover:text-red-700">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Enhanced CTA Buttons - Show on landing page */}
            {isLandingPage && (
              <div className="hidden sm:flex items-center space-x-3">
                <Link to="/auth/login">
                  <Button variant="ghost" size="sm" className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            )}

            {/* Enhanced Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-700 hover:text-purple-600 transition-all duration-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/20 shadow-xl">
            <div className="px-4 py-6">
              <nav className="flex flex-col space-y-1">
                {!isLandingPage && !isAuthPage ? (
                  <>
                    <Link 
                      to="/app" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-medium">Dashboard</span>
                    </Link>
                    <Link 
                      to="/app/create" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Zap className="w-5 h-5" />
                      <span className="font-medium">Create Strategy</span>
                    </Link>
                    <Link 
                      to="/app/strategies" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Star className="w-5 h-5" />
                      <span className="font-medium">My Strategies</span>
                    </Link>
                    <Link 
                      to="/app/help" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">Support</span>
                    </Link>
                    
                    <div className="pt-4 mt-4 border-t border-gray-200 space-y-1">
                      <Link 
                        to="/app/settings" 
                        className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Settings className="w-5 h-5" />
                        <span className="font-medium">Settings</span>
                      </Link>
                      <Link 
                        to="/" 
                        className="flex items-center space-x-3 text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sign Out</span>
                      </Link>
                    </div>
                    
                    {/* Mobile Action Buttons */}
                    {(onShare || onExport) && (
                      <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                        {onShare && (
                          <Button 
                            variant="outline" 
                            size="lg"
                            onClick={onShare} 
                            className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                          >
                            <Share className="w-4 h-4 mr-2" />
                            Share Strategy
                          </Button>
                        )}
                        {onExport && (
                          <Button 
                            variant="outline" 
                            size="lg"
                            onClick={onExport} 
                            className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Export Strategy
                          </Button>
                        )}
                      </div>
                    )}
                  </>
                ) : isLandingPage ? (
                  <div className="space-y-1">
                    <a 
                      href="#features" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Zap className="w-5 h-5" />
                      <span className="font-medium">Features</span>
                    </a>
                    <a 
                      href="#use-cases" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-medium">Use Cases</span>
                    </a>
                    <a 
                      href="#testimonials" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Star className="w-5 h-5" />
                      <span className="font-medium">Reviews</span>
                    </a>
                    <a 
                      href="#pricing" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">Pricing</span>
                    </a>
                    
                    <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                      <Link to="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="outline" size="lg" className="w-full text-purple-600 border-purple-200 hover:bg-purple-50">
                          Sign In
                        </Button>
                      </Link>
                      <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                        <Button 
                          size="lg"
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                        >
                          Start Free Trial
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : null}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ResponsiveNavbar;