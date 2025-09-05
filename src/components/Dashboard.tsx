import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import ResumeAnalysis from './ResumeAnalysis';
import ParticleBackground from './ParticleBackground';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Award,
  Clock,
  MapPin,
  DollarSign,
  Star,
  Upload,
  Zap,
  Target,
  Brain,
  Eye,
  ArrowRight
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showResumeAnalysis, setShowResumeAnalysis] = useState(false);

  const stats = [
    {
      title: 'Active Applications',
      value: '3',
      change: '+2 this month',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Interview Scheduled',
      value: '1',
      change: 'Tomorrow at 2:00 PM',
      icon: Calendar,
      color: 'green'
    },
    {
      title: 'Profile Views',
      value: '47',
      change: '+12 this week',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Achievements',
      value: '2',
      change: 'Certificates earned',
      icon: Award,
      color: 'yellow'
    }
  ];

  const recentInternships = [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Bangalore, Karnataka',
      stipend: '₹20,000',
      duration: '6 months',
      deadline: '15 Dec 2024',
      rating: 4.8,
      applied: false
    },
    {
      id: 2,
      title: 'Digital Marketing Intern',
      company: 'Creative Agency',
      location: 'Mumbai, Maharashtra',
      stipend: '₹15,000',
      duration: '3 months',
      deadline: '20 Dec 2024',
      rating: 4.5,
      applied: true
    },
    {
      id: 3,
      title: 'Data Analytics Intern',
      company: 'Analytics Corp',
      location: 'Hyderabad, Telangana',
      stipend: '₹25,000',
      duration: '6 months',
      deadline: '25 Dec 2024',
      rating: 4.9,
      applied: false
    }
  ];

  const upcomingEvents = [
    {
      title: 'Interview - Tech Solutions',
      date: 'Dec 10, 2024',
      time: '2:00 PM',
      type: 'interview'
    },
    {
      title: 'Webinar: Resume Building',
      date: 'Dec 12, 2024',
      time: '4:00 PM',
      type: 'webinar'
    },
    {
      title: 'Application Deadline',
      date: 'Dec 15, 2024',
      time: '11:59 PM',
      type: 'deadline'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex">
      <ParticleBackground />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 md:ml-0">
        <Header onMenuToggle={() => setSidebarOpen(true)} showMenuButton={true} />
        
        <main className="p-6">
          {/* Welcome Section */}
          <div className="glass-card p-8 mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, John! 👋
            </h1>
            <p className="text-white/70">
              Here's what's happening with your internship applications today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = {
                blue: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                green: 'bg-gradient-to-r from-green-500 to-emerald-500',
                purple: 'bg-gradient-to-r from-purple-500 to-pink-500',
                yellow: 'bg-gradient-to-r from-orange-500 to-amber-500'
              };
              
              return (
                <div key={index} className="glass-card p-6 floating-card">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-white/80 mb-1">{stat.title}</p>
                    <p className="text-xs text-white/60">{stat.change}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Internships */}
            <div className="lg:col-span-2">
              <div className="glass-card">
                <div className="p-6 border-b border-white/20">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Latest Opportunities</h2>
                    <button className="text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center">
                      View All
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  {recentInternships.map((internship) => (
                    <div key={internship.id} className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-4 hover:bg-white/10 transition-all floating-card">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">{internship.title}</h3>
                          <p className="text-orange-400 text-sm mb-2">{internship.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-white/60">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {internship.location}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {internship.stipend}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {internship.duration}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-2">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="text-sm text-white/70">{internship.rating}</span>
                          </div>
                          {internship.applied ? (
                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
                              Applied
                            </span>
                          ) : (
                            <button className="glass-button text-sm px-4 py-2">
                              Apply Now
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-white/50">
                        Deadline: {internship.deadline}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Events & Quick Actions */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <div className="glass-card">
                <div className="p-6 border-b border-white/20">
                  <h2 className="text-xl font-bold text-white">Upcoming Events</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        event.type === 'interview' 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : event.type === 'webinar'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {event.type === 'interview' ? (
                          <Users className="h-4 w-4" />
                        ) : event.type === 'webinar' ? (
                          <Calendar className="h-4 w-4" />
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{event.title}</p>
                        <p className="text-xs text-white/60">{event.date} • {event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-card">
                <div className="p-6 border-b border-white/20">
                  <h2 className="text-xl font-bold text-white">Quick Actions</h2>
                </div>
                
                <div className="p-6 space-y-3">
                  <button 
                    onClick={() => setShowResumeAnalysis(true)}
                    className="w-full glass-button text-lg py-4 animate-pulse-glow"
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    🚀 Upload Resume & Get AI Matches
                  </button>
                  <button className="w-full glass-button-secondary text-sm py-3">
                    <Eye className="h-4 w-4 mr-2" />
                    Complete Profile
                  </button>
                  <button className="w-full glass-button-secondary text-sm py-3">
                    <Target className="h-4 w-4 mr-2" />
                    Browse Internships
                  </button>
                  <button className="w-full glass-button-secondary text-sm py-3">
                    <Brain className="h-4 w-4 mr-2" />
                    Schedule Mock Interview
                  </button>
                </div>
              </div>

              {/* Progress Card */}
              <div className="glass-card">
                <div className="p-6">
                  <h3 className="font-semibold text-white mb-4">Profile Completion</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Basic Info</span>
                      <span className="text-green-600 font-medium">100%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Resume</span>
                      <span className="text-yellow-600 font-medium">75%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Skills Assessment</span>
                      <span className="text-red-600 font-medium">25%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Resume Analysis Modal */}
      {showResumeAnalysis && (
        <ResumeAnalysis onClose={() => setShowResumeAnalysis(false)} />
      )}
    </div>
  );
};

export default Dashboard;