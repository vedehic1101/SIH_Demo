import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Brain, 
  Target, 
  CheckCircle, 
  Clock,
  Star,
  MapPin,
  DollarSign,
  Users,
  TrendingUp,
  Award,
  Zap,
  Eye,
  Download
} from 'lucide-react';

interface ResumeAnalysisProps {
  onClose: () => void;
}

const ResumeAnalysis: React.FC<ResumeAnalysisProps> = ({ onClose }) => {
  const [step, setStep] = useState<'upload' | 'analyzing' | 'results'>('upload');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setStep('analyzing');
      
      // Simulate analysis progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        setUploadProgress(Math.min(progress, 100));
        
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => setStep('results'), 1000);
        }
      }, 200);
    }
  };

  const analysisSteps = [
    { name: 'Document Processing', status: 'completed', icon: FileText },
    { name: 'Skills Extraction', status: step === 'results' ? 'completed' : 'processing', icon: Brain },
    { name: 'Job Matching', status: step === 'results' ? 'completed' : 'pending', icon: Target },
    { name: 'Recommendations', status: step === 'results' ? 'completed' : 'pending', icon: Star }
  ];

  const extractedSkills = [
    { name: 'React.js', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 78, category: 'Backend' },
    { name: 'Python', level: 92, category: 'Programming' },
    { name: 'Machine Learning', level: 70, category: 'AI/ML' },
    { name: 'AWS', level: 65, category: 'Cloud' },
    { name: 'MongoDB', level: 80, category: 'Database' }
  ];

  const matchedJobs = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Bangalore, Karnataka',
      stipend: '₹25,000',
      duration: '6 months',
      matchScore: 95,
      skills: ['React.js', 'Node.js', 'MongoDB'],
      description: 'Work on cutting-edge web applications using modern tech stack.',
      requirements: ['React.js', 'Node.js', 'JavaScript', 'MongoDB'],
      benefits: ['Mentorship', 'Certificate', 'Full-time opportunity']
    },
    {
      id: 2,
      title: 'AI/ML Research Intern',
      company: 'DataScience Labs',
      location: 'Hyderabad, Telangana',
      stipend: '₹30,000',
      duration: '6 months',
      matchScore: 88,
      skills: ['Python', 'Machine Learning', 'TensorFlow'],
      description: 'Research and develop ML models for real-world applications.',
      requirements: ['Python', 'Machine Learning', 'Statistics', 'TensorFlow'],
      benefits: ['Research Publication', 'Conference Attendance', 'Industry Exposure']
    },
    {
      id: 3,
      title: 'Cloud DevOps Intern',
      company: 'CloudTech Innovations',
      location: 'Mumbai, Maharashtra',
      stipend: '₹22,000',
      duration: '4 months',
      matchScore: 75,
      skills: ['AWS', 'Python', 'DevOps'],
      description: 'Learn cloud infrastructure and deployment automation.',
      requirements: ['AWS', 'Linux', 'Docker', 'Python'],
      benefits: ['AWS Certification', 'Hands-on Experience', 'Industry Mentorship']
    }
  ];

  if (step === 'upload') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="glass-card max-w-2xl w-full p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
              <Upload className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Upload Your Resume</h2>
            <p className="text-white/70">
              Our AI will analyze your resume and match you with perfect internship opportunities
            </p>
          </div>

          <div className="border-2 border-dashed border-white/30 rounded-2xl p-12 text-center hover:border-orange-500/50 transition-colors">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
              id="resume-upload"
            />
            <label htmlFor="resume-upload" className="cursor-pointer">
              <FileText className="h-16 w-16 text-white/50 mx-auto mb-4" />
              <p className="text-white text-lg font-medium mb-2">
                Drop your resume here or click to browse
              </p>
              <p className="text-white/60 text-sm">
                Supports PDF, DOC, DOCX files up to 10MB
              </p>
            </label>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={onClose}
              className="glass-button-secondary"
            >
              Cancel
            </button>
            <button className="glass-button">
              <Upload className="h-5 w-5 mr-2" />
              Use Demo Resume
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="glass-card max-w-3xl w-full p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Analyzing Your Resume</h2>
            <p className="text-white/70">
              Our AI is processing your resume and finding the best matches...
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-white/70 text-sm mb-2">
              <span>Analysis Progress</span>
              <span>{Math.round(uploadProgress)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="progress-bar h-3 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analysisSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center space-x-4 p-4 glass-card">
                  <div className={`p-3 rounded-full ${
                    step.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : step.status === 'processing'
                      ? 'bg-orange-500/20 text-orange-400 animate-pulse'
                      : 'bg-white/10 text-white/50'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : step.status === 'processing' ? (
                      <Icon className="h-6 w-6" />
                    ) : (
                      <Clock className="h-6 w-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{step.name}</h3>
                    <p className="text-white/60 text-sm capitalize">{step.status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Resume Analysis Complete!</h1>
                  <p className="text-white/70">Found {matchedJobs.length} perfect matches for your profile</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="glass-button-secondary"
              >
                Close
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Skills Analysis */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Brain className="h-6 w-6 mr-2 text-orange-400" />
                  Extracted Skills
                </h2>
                <div className="space-y-4">
                  {extractedSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-orange-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="progress-bar h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-white/60 text-xs">{skill.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-green-400" />
                  Profile Insights
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Profile Strength</span>
                    <span className="text-green-400 font-bold">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Experience Level</span>
                    <span className="text-blue-400 font-bold">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Top Domain</span>
                    <span className="text-purple-400 font-bold">Full Stack</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Salary Range</span>
                    <span className="text-orange-400 font-bold">₹20K-30K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Matched Jobs */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Target className="h-7 w-7 mr-2 text-orange-400" />
                  Matched Opportunities
                </h2>
                <div className="flex space-x-2">
                  <button className="glass-button-secondary text-sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </button>
                  <button className="glass-button text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {matchedJobs.map((job) => (
                  <div key={job.id} className="job-card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{job.title}</h3>
                          <div className="flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-1 rounded-full">
                            <Star className="h-4 w-4 text-green-400 mr-1" />
                            <span className="text-green-400 font-bold text-sm">{job.matchScore}% Match</span>
                          </div>
                        </div>
                        <p className="text-orange-400 font-medium mb-2">{job.company}</p>
                        <p className="text-white/70 mb-4">{job.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center text-white/70">
                            <MapPin className="h-4 w-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-white/70">
                            <DollarSign className="h-4 w-4 mr-2" />
                            {job.stipend}/month
                          </div>
                          <div className="flex items-center text-white/70">
                            <Clock className="h-4 w-4 mr-2" />
                            {job.duration}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-white font-medium mb-2">Matching Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, index) => (
                              <span key={index} className="skill-tag">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-white font-medium mb-2">Benefits:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, index) => (
                              <span key={index} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 text-white px-3 py-1 rounded-full text-sm">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="glass-button flex-1">
                        <Zap className="h-4 w-4 mr-2" />
                        Quick Apply
                      </button>
                      <button className="glass-button-secondary">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysis;