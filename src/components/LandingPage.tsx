import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  Zap,
  Target,
  Brain,
  Shield,
  Globe,
  Sparkles,
  Upload,
  Play
} from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import ResumeAnalysis from './ResumeAnalysis';

const LandingPage: React.FC = () => {
  const [showResumeAnalysis, setShowResumeAnalysis] = useState(false);

  const stats = [
    { icon: Users, value: '50,000+', label: 'Active Interns', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, value: '1,200+', label: 'Partner Organizations', color: 'from-green-500 to-emerald-500' },
    { icon: BookOpen, value: '25+', label: 'Domains', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, value: '85%', label: 'Placement Rate', color: 'from-orange-500 to-red-500' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms match your skills with perfect internship opportunities',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Government Certified',
      description: 'Official certificates from Government of India with industry recognition',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Pan-India Network',
      description: 'Access opportunities across all major cities and emerging tech hubs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Structured learning paths with mentorship from industry experts',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at Google',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The PM Internship Scheme transformed my career. The AI matching system found me the perfect role that aligned with my skills.',
      rating: 5
    },
    {
      name: 'Arjun Patel',
      role: 'Data Scientist at Microsoft',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Incredible experience! The mentorship and real-world projects prepared me for my dream job in tech.',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      role: 'Product Manager at Amazon',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The structured learning path and industry exposure gave me confidence to pursue leadership roles.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <ParticleBackground />
      
      {/* Header */}
      <header className="glass-card mx-4 mt-4 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <Award className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">PM Internship Scheme</h1>
                <p className="text-white/60 text-sm">Government of India</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/signup" className="glass-button-secondary">
                Sign Up
              </Link>
              <Link to="/dashboard" className="glass-button">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-xl border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-orange-400 mr-2" />
              <span className="text-orange-400 font-medium">India's #1 Internship Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Prime Minister's
              <span className="block gradient-text">Internship Scheme</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering India's youth through <span className="gradient-text font-semibold">AI-powered</span> internship 
              matching with leading organizations across the nation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              onClick={() => {
                // Check if user is signed in (for demo purposes, we'll assume they're not)
                // In a real app, you'd check authentication state
                window.location.href = '/signup';
              }}
              className="glass-button text-lg px-8 py-4 animate-pulse-glow"
            >
              <Upload className="mr-3 h-6 w-6" />
              🚀 Upload Resume & Get AI Matches
            </button>
            <Link to="/signup" className="glass-button-secondary text-lg px-8 py-4">
              <Play className="mr-3 h-6 w-6" />
              Watch Demo
            </Link>
          </div>

          {/* Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`stats-card floating-card animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">{stat.value}</h3>
                  <p className="text-white/70 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Why Choose <span className="gradient-text">Our Platform?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the future of internship matching with cutting-edge technology and personalized career guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Hear from our alumni who transformed their careers through the PM Internship Scheme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 floating-card">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-orange-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-white/80 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 neon-glow">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Career?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join thousands of students who have already accelerated their careers through 
              our AI-powered internship matching platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => {
                  // Check if user is signed in (for demo purposes, we'll assume they're not)
                  window.location.href = '/signup';
                }}
                className="glass-button text-lg px-8 py-4"
              >
                <Zap className="mr-3 h-6 w-6" />
                🚀 Get Instant AI Matches
              </button>
              <Link to="/signup" className="glass-button-secondary text-lg px-8 py-4">
                <ArrowRight className="mr-3 h-6 w-6" />
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-4 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">PM Internship Scheme</h3>
                  <p className="text-white/60 text-sm">Government of India</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Empowering youth through quality internship opportunities and cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
                <li><Link to="/internships" className="hover:text-orange-400 transition-colors">Internships</Link></li>
                <li><Link to="/partners" className="hover:text-orange-400 transition-colors">Partners</Link></li>
                <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
                <li><Link to="/guidelines" className="hover:text-orange-400 transition-colors">Guidelines</Link></li>
                <li><Link to="/help" className="hover:text-orange-400 transition-colors">Help Center</Link></li>
                <li><Link to="/feedback" className="hover:text-orange-400 transition-colors">Feedback</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact Info</h4>
              <div className="text-sm text-white/70 space-y-2">
                <p>Ministry of Skill Development<br />and Entrepreneurship</p>
                <p>📧 support@pminternship.gov.in</p>
                <p>📞 1800-123-4567</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Government of India. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Resume Analysis Modal */}
    </div>
  );
};

export default LandingPage;