import { 
  BarChart3, 
  Bell, 
  Brain, 
  ChartLine, 
  Globe, 
  Layout, 
  MessageSquare,
  Monitor,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-4">
        <div className="max-w-7xl p-3 rounded-2xl glass mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">AdPulse</h1>
            </div>
            
            {/* Separated Glass Navigation Container */}
            <div className="hidden md:flex items-center rounded-full px-8 py-3 shadow-2xl">
              <div className="flex items-center gap-8">
                <a href="#features" className="text-white/90 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">
                  Features
                </a>
                <a href="#platforms" className="text-white/90 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">
                  Platforms
                </a>
                <a href="/optimizer-form" className="text-white/90 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">
                  Campaign Optimizer
                </a>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center">
              <a href="#get-started" className="px-6 py-3 rounded-full border-2 border-white/30 glass text-white font-semibold hover:bg-white/20 transition-all text-sm uppercase tracking-wider shadow-xl">
                Talk To Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span className="text-sm font-medium text-white">AI-Powered Ad Management Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Manage All Your Ads<br />
              <span className="gradient-text">In One Powerful Platform</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            An AI-driven platform that turns a single product brief into ready-to-run campaigns for Meta, Google and TikTok - including copy, targeting, budget & format. Create, edit & launch in minutes, then track results & scale performance through a unified real-time dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/ad_genius_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-strong text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105 shadow-2xl font-medium"
              >
                <MessageSquare className="w-5 h-5" />
                Try on Telegram
              </a>
              <a
                href="#mobile-app"
                className="inline-flex items-center gap-2 glass text-white px-8 py-4 rounded-xl hover:bg-white/15 transition-all transform hover:scale-105 shadow-xl font-medium"
              >
                <Smartphone className="w-5 h-5" />
                Download Mobile App
              </a>
            </div>
          </div>
          
          {/* Hero Image/Graphic */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative glass-strong rounded-3xl shadow-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-indigo-300" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Unified Dashboard</h3>
                  <p className="text-white/70 text-sm">Track all campaigns in one place</p>
                </div>
                <div className="text-center group">
                  <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="w-8 h-8 text-green-300" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">AI Insights</h3>
                  <p className="text-white/70 text-sm">Get intelligent recommendations</p>
                </div>
                <div className="text-center group">
                  <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Bell className="w-8 h-8 text-purple-300" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Real-time Alerts</h3>
                  <p className="text-white/70 text-sm">Never miss important updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              AdPulse brings together powerful features to streamline your advertising workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group glass-card hover:glass-strong transition-all duration-300 rounded-2xl p-8 glass-shine">
              <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layout className="w-7 h-7 text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Platform Management</h3>
              <p className="text-white/70">
                Connect and manage ads from Google, Facebook, Instagram, LinkedIn, and more - all from one dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group glass-card hover:glass-strong transition-all duration-300 rounded-2xl p-8 glass-shine">
              <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartLine className="w-7 h-7 text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
              <p className="text-white/70">
                Track ROI, CTR, conversions, and other key metrics with beautiful, easy-to-understand visualizations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group glass-card hover:glass-strong transition-all duration-300 rounded-2xl p-8 glass-shine">
              <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Insights</h3>
              <p className="text-white/70">
                Our AI assistant analyzes your data and provides actionable recommendations to improve campaign performance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group glass-card hover:glass-strong transition-all duration-300 rounded-2xl p-8 glass-shine">
              <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bell className="w-7 h-7 text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Notifications</h3>
              <p className="text-white/70">
                Get real-time alerts about budget changes, performance drops, and opportunities to optimize.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group glass-card hover:glass-strong transition-all duration-300 rounded-2xl p-8 glass-shine">
              <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-white/70">
                Forecast campaign performance and budget needs with machine learning predictions.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group glass-card hover:glass-strong transition-all duration-300 rounded-2xl p-8 glass-shine">
              <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
              <p className="text-white/70">
                Share access, assign roles, and collaborate with your team seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose <span className="gradient-text">AdPulse</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 glass-card p-4 rounded-xl">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Save Time & Resources</h3>
                    <p className="text-white/70">Stop switching between platforms. Manage everything from one intuitive dashboard.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 glass-card p-4 rounded-xl">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Make Data-Driven Decisions</h3>
                    <p className="text-white/70">AI-powered insights help you understand what works and optimize accordingly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 glass-card p-4 rounded-xl">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Scale with Confidence</h3>
                    <p className="text-white/70">From small campaigns to enterprise-level operations, AdPulse grows with you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 glass-card p-4 rounded-xl">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Stay Ahead of Competition</h3>
                    <p className="text-white/70">Real-time alerts and predictive analytics keep you one step ahead.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-40"></div>
              <div className="relative glass-strong rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <Zap className="w-16 h-16 mx-auto mb-4 animate-float text-yellow-300" />
                  <h3 className="text-3xl font-bold mb-4">30% Average ROI Increase</h3>
                  <p className="text-xl text-white/80 mb-6">Our users see significant improvements in their advertising performance</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="glass-card p-4 rounded-xl">
                      <div className="text-3xl font-bold">85%</div>
                      <div className="text-sm text-white/70">Time Saved</div>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <div className="text-3xl font-bold">3x</div>
                      <div className="text-sm text-white/70">Faster Insights</div>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-sm text-white/70">AI Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Available <span className="gradient-text">Everywhere</span> You Need
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Access AdPulse from any device, anywhere. Your campaigns are always at your fingertips.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Platform */}
            <div className="glass-card rounded-2xl p-8 hover:glass-strong transition-all glass-shine">
              <div className="glass w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Web Dashboard</h3>
              <p className="text-white/70 mb-6">
                Full-featured dashboard with advanced analytics and team collaboration tools.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition">
                Launch Web App <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile App */}
            <div id="mobile-app" className="glass-card rounded-2xl p-8 hover:glass-strong transition-all glass-shine">
              <div className="glass w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-green-300" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Mobile App</h3>
              <p className="text-white/70 mb-6">
                Monitor campaigns on the go with our iOS and Android apps.
              </p>
              <div className="flex flex-col gap-3">
                <a href="#" className="inline-flex items-center justify-center gap-2 glass-strong text-white px-4 py-2 rounded-lg hover:bg-white/20 transition">
                  <Play className="w-4 h-4" /> Download on App Store
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 glass-strong text-white px-4 py-2 rounded-lg hover:bg-white/20 transition">
                  <Play className="w-4 h-4" /> Get it on Google Play
                </a>        
              </div>
            </div>

            {/* Telegram Bot */}
            <div className="glass-card rounded-2xl p-8 hover:glass-strong transition-all glass-shine">
              <div className="glass w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-purple-300" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Telegram Mini App</h3>
              <p className="text-white/70 mb-6">
                Quick access to insights and notifications right in your Telegram messenger.
              </p>
              <a 
                href="https://t.me/ad_genius_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition"
              >
                Open in Telegram <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-50"></div>
            <div className="relative glass-strong rounded-3xl p-12 text-white shadow-2xl">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Advertising?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of businesses already using AdPulse to optimize their digital advertising
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/ad_genius_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/30 transition-all transform hover:scale-105 font-semibold shadow-xl backdrop-blur-sm"
                >
                  <MessageSquare className="w-5 h-5" />
                  Start Free on Telegram
                </a>
                <a
                  href="#" 
                  className="inline-flex items-center gap-2 glass border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all font-semibold"
                >
                  <Globe className="w-5 h-5" />
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-strong py-12 px-4 relative z-10 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">AdPulse</h3>
              <p className="text-white/60">
                Centralized digital advertising management for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 AdPulse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
