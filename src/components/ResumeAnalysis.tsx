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
  Download,
  Calendar,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Code,
  Database,
  Globe,
  Briefcase,
  User,
  ArrowLeft
} from 'lucide-react';

interface ResumeAnalysisProps {
  onClose: () => void;
}

const ResumeAnalysis: React.FC<ResumeAnalysisProps> = ({ onClose }) => {
  const [step, setStep] = useState<'upload' | 'analyzing' | 'results'>('upload');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      startAnalysis();
    }
  };

  const handleDemoUpload = () => {
    setSelectedFile(new File(['demo'], 'demo-resume.pdf', { type: 'application/pdf' }));
    startAnalysis();
  };

  const startAnalysis = () => {
    setStep('analyzing');
    setCurrentAnalysisStep(0);
    
    // Simulate the n8n workflow steps
    const analysisSteps = [
      { duration: 1000, progress: 15 }, // File processing
      { duration: 1500, progress: 35 }, // Text extraction
      { duration: 2000, progress: 55 }, // Skills analysis
      { duration: 1500, progress: 75 }, // Experience analysis
      { duration: 1000, progress: 90 }, // Job matching
      { duration: 500, progress: 100 }  // Final results
    ];

    let totalProgress = 0;
    let stepIndex = 0;

    const processStep = () => {
      if (stepIndex < analysisSteps.length) {
        const currentStep = analysisSteps[stepIndex];
        setCurrentAnalysisStep(stepIndex);
        
        setTimeout(() => {
          totalProgress = currentStep.progress;
          setUploadProgress(totalProgress);
          stepIndex++;
          
          if (stepIndex < analysisSteps.length) {
            processStep();
          } else {
            setTimeout(() => setStep('results'), 1000);
          }
        }, currentStep.duration);
      }
    };

    processStep();
  };

  const analysisSteps = [
    { name: 'Document Processing', status: currentAnalysisStep >= 0 ? 'completed' : 'pending', icon: FileText, description: 'Converting and extracting text from resume' },
    { name: 'Information Extraction', status: currentAnalysisStep >= 1 ? 'completed' : currentAnalysisStep === 0 ? 'processing' : 'pending', icon: Database, description: 'Extracting personal and contact information' },
    { name: 'Skills Analysis', status: currentAnalysisStep >= 2 ? 'completed' : currentAnalysisStep === 1 ? 'processing' : 'pending', icon: Brain, description: 'Identifying technical and soft skills' },
    { name: 'Experience Evaluation', status: currentAnalysisStep >= 3 ? 'completed' : currentAnalysisStep === 2 ? 'processing' : 'pending', icon: Briefcase, description: 'Analyzing work experience and projects' },
    { name: 'Job Matching', status: currentAnalysisStep >= 4 ? 'completed' : currentAnalysisStep === 3 ? 'processing' : 'pending', icon: Target, description: 'Finding suitable internship opportunities' },
    { name: 'Results Generation', status: currentAnalysisStep >= 5 ? 'completed' : currentAnalysisStep === 4 ? 'processing' : 'pending', icon: Star, description: 'Preparing personalized recommendations' }
  ];

  // Demo resume data based on the workflow
  const extractedData = {
    personalInfo: {
      name: 'Rahul Sharma',
      email: 'rahul.sharma@email.com',
      phone: '+91 9876543210',
      location: 'Bangalore, Karnataka',
      linkedin: 'linkedin.com/in/rahulsharma',
      github: 'github.com/rahulsharma'
    },
    education: {
      degree: 'B.Tech Computer Science',
      college: 'Indian Institute of Technology, Delhi',
      year: '2024',
      cgpa: '8.5/10'
    },
    skills: [
      { name: 'React.js', level: 90, category: 'Frontend', verified: true },
      { name: 'Node.js', level: 85, category: 'Backend', verified: true },
      { name: 'Python', level: 95, category: 'Programming', verified: true },
      { name: 'Machine Learning', level: 80, category: 'AI/ML', verified: true },
      { name: 'AWS', level: 75, category: 'Cloud', verified: false },
      { name: 'MongoDB', level: 85, category: 'Database', verified: true },
      { name: 'Docker', level: 70, category: 'DevOps', verified: false },
      { name: 'Git', level: 90, category: 'Tools', verified: true }
    ],
    experience: [
      {
        title: 'Software Development Intern',
        company: 'TechStart Solutions',
        duration: '3 months',
        description: 'Developed full-stack web applications using React and Node.js'
      },
      {
        title: 'Research Assistant',
        company: 'IIT Delhi AI Lab',
        duration: '6 months',
        description: 'Worked on machine learning models for natural language processing'
      }
    ],
    projects: [
      {
        name: 'E-commerce Platform',
        tech: ['React', 'Node.js', 'MongoDB'],
        description: 'Built a complete e-commerce solution with payment integration'
      },
      {
        name: 'ML-based Recommendation System',
        tech: ['Python', 'TensorFlow', 'Flask'],
        description: 'Developed a recommendation engine using collaborative filtering'
      }
    ]
  };

  const allocatedInternships = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'Microsoft India',
      location: 'Hyderabad, Telangana',
      stipend: '₹50,000',
      duration: '6 months',
      matchScore: 96,
      priority: 'High',
      skills: ['React.js', 'Node.js', 'MongoDB', 'AWS'],
      description: 'Work on cutting-edge cloud-based applications with Microsoft Azure integration.',
      requirements: ['React.js', 'Node.js', 'JavaScript', 'Cloud Technologies'],
      benefits: ['Full-time offer potential', 'Microsoft certification', 'Mentorship program'],
      startDate: '15 Jan 2025',
      applicationDeadline: '20 Dec 2024',
      interviewProcess: '3 rounds (Technical, System Design, HR)',
      allocated: true,
      allocationReason: 'Perfect match for your full-stack skills and cloud experience'
    },
    {
      id: 2,
      title: 'AI/ML Research Intern',
      company: 'Google Research India',
      location: 'Bangalore, Karnataka',
      stipend: '₹60,000',
      duration: '6 months',
      matchScore: 94,
      priority: 'High',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'Research'],
      description: 'Research and develop next-generation AI models for Google products.',
      requirements: ['Python', 'Machine Learning', 'Deep Learning', 'Research Experience'],
      benefits: ['Research publication opportunity', 'Google certification', 'Conference attendance'],
      startDate: '1 Feb 2025',
      applicationDeadline: '25 Dec 2024',
      interviewProcess: '4 rounds (Coding, ML concepts, Research presentation, HR)',
      allocated: true,
      allocationReason: 'Your ML research background and Python expertise make you ideal'
    },
    {
      id: 3,
      title: 'Backend Developer Intern',
      company: 'Flipkart',
      location: 'Bangalore, Karnataka',
      stipend: '₹40,000',
      duration: '4 months',
      matchScore: 88,
      priority: 'Medium',
      skills: ['Node.js', 'Python', 'Database', 'API Development'],
      description: 'Build scalable backend systems for India\'s largest e-commerce platform.',
      requirements: ['Node.js', 'Database Design', 'API Development', 'System Design'],
      benefits: ['PPO opportunity', 'Industry exposure', 'Flipkart certification'],
      startDate: '10 Feb 2025',
      applicationDeadline: '30 Dec 2024',
      interviewProcess: '3 rounds (Coding, System Design, HR)',
      allocated: false,
      allocationReason: 'Strong backend skills but lower priority due to competition'
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
              Our AI-powered system will analyze your resume and allocate the best internship opportunities
            </p>
          </div>

          <div className="border-2 border-dashed border-white/30 rounded-2xl p-12 text-center hover:border-orange-500/50 transition-colors mb-6">
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

          <div className="text-center mb-6">
            <p className="text-white/60 text-sm mb-4">Or try with a demo resume</p>
            <button
              onClick={handleDemoUpload}
              className="glass-button-secondary"
            >
              <Upload className="h-5 w-5 mr-2" />
              Use Demo Resume (Rahul Sharma - CS Student)
            </button>
          </div>

          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="glass-button-secondary"
            >
              Cancel
            </button>
            <div className="text-right">
              <p className="text-white/60 text-xs mb-1">Powered by AI & n8n Workflow</p>
              <div className="flex items-center text-white/40 text-xs">
                <Brain className="h-3 w-3 mr-1" />
                Advanced Resume Analysis
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="glass-card max-w-4xl w-full p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Analyzing Your Resume</h2>
            <p className="text-white/70">
              Processing through our advanced AI workflow to find your perfect internship matches...
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {analysisSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="glass-card p-4">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full flex-shrink-0 ${
                      step.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : step.status === 'processing'
                        ? 'bg-orange-500/20 text-orange-400 animate-pulse'
                        : 'bg-white/10 text-white/50'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : step.status === 'processing' ? (
                        <Icon className="h-5 w-5" />
                      ) : (
                        <Clock className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-sm mb-1">{step.name}</h3>
                      <p className="text-white/60 text-xs leading-relaxed">{step.description}</p>
                      <p className="text-white/40 text-xs mt-1 capitalize">{step.status}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Using advanced AI models to extract and analyze your resume data...
            </p>
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
                  <p className="text-white/70">AI has allocated {allocatedInternships.filter(job => job.allocated).length} priority internships for you</p>
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

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Personal Information */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-400" />
                  Profile Summary
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-white font-semibold">{extractedData.personalInfo.name}</h3>
                    <p className="text-white/60 text-sm">{extractedData.education.degree}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-white/70">
                      <Mail className="h-4 w-4 mr-2" />
                      {extractedData.personalInfo.email}
                    </div>
                    <div className="flex items-center text-white/70">
                      <Phone className="h-4 w-4 mr-2" />
                      {extractedData.personalInfo.phone}
                    </div>
                    <div className="flex items-center text-white/70">
                      <MapPin className="h-4 w-4 mr-2" />
                      {extractedData.personalInfo.location}
                    </div>
                    <div className="flex items-center text-white/70">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      {extractedData.education.college}
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Code className="h-6 w-6 mr-2 text-purple-400" />
                  Skills Analysis
                </h2>
                <div className="space-y-3">
                  {extractedData.skills.slice(0, 6).map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <div className="flex items-center">
                          <span className="text-white font-medium">{skill.name}</span>
                          {skill.verified && (
                            <CheckCircle className="h-3 w-3 text-green-400 ml-1" />
                          )}
                        </div>
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
                  AI Insights
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Profile Strength</span>
                    <span className="text-green-400 font-bold">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Match Confidence</span>
                    <span className="text-blue-400 font-bold">96%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Top Domain</span>
                    <span className="text-purple-400 font-bold">Full Stack</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Expected Stipend</span>
                    <span className="text-orange-400 font-bold">₹40K-60K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Allocated Internships */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Target className="h-7 w-7 mr-2 text-orange-400" />
                  AI-Allocated Internships
                </h2>
                <div className="flex space-x-2">
                  <button className="glass-button-secondary text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Interviews
                  </button>
                  <button className="glass-button text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {allocatedInternships.map((job) => (
                  <div key={job.id} className={`job-card ${job.allocated ? 'border-green-500/50 bg-green-500/5' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{job.title}</h3>
                          <div className={`flex items-center px-3 py-1 rounded-full ${
                            job.allocated 
                              ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20' 
                              : 'bg-gradient-to-r from-orange-500/20 to-amber-500/20'
                          }`}>
                            <Star className={`h-4 w-4 mr-1 ${job.allocated ? 'text-green-400' : 'text-orange-400'}`} />
                            <span className={`font-bold text-sm ${job.allocated ? 'text-green-400' : 'text-orange-400'}`}>
                              {job.matchScore}% Match
                            </span>
                          </div>
                          {job.allocated && (
                            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 rounded-full">
                              <span className="text-blue-400 font-bold text-sm">ALLOCATED</span>
                            </div>
                          )}
                        </div>
                        <p className="text-orange-400 font-medium mb-2">{job.company}</p>
                        <p className="text-white/70 mb-4">{job.description}</p>
                        
                        {job.allocated && (
                          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
                            <h4 className="text-blue-400 font-medium text-sm mb-1">Why you were allocated:</h4>
                            <p className="text-white/80 text-sm">{job.allocationReason}</p>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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
                          <div className="flex items-center text-white/70">
                            <Calendar className="h-4 w-4 mr-2" />
                            Starts {job.startDate}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-white font-medium mb-2 text-sm">Required Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill, index) => (
                                <span key={index} className="skill-tag text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-2 text-sm">Benefits:</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.benefits.map((benefit, index) => (
                                <span key={index} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 text-white px-2 py-1 rounded-full text-xs">
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="text-sm text-white/60 mb-4">
                          <p><strong>Application Deadline:</strong> {job.applicationDeadline}</p>
                          <p><strong>Interview Process:</strong> {job.interviewProcess}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      {job.allocated ? (
                        <>
                          <button className="glass-button flex-1">
                            <Zap className="h-4 w-4 mr-2" />
                            Accept Allocation
                          </button>
                          <button className="glass-button-secondary">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Interview
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="glass-button-secondary flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </button>
                          <button className="glass-button-secondary">
                            <Star className="h-4 w-4 mr-2" />
                            Add to Wishlist
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 mt-6">
                <h3 className="text-lg font-bold text-white mb-4">Next Steps</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-white font-medium mb-2">Accept Allocations</h4>
                    <p className="text-white/60 text-sm">Review and accept your allocated internships</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-white font-medium mb-2">Schedule Interviews</h4>
                    <p className="text-white/60 text-sm">Book interview slots with companies</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-white font-medium mb-2">Start Journey</h4>
                    <p className="text-white/60 text-sm">Begin your internship experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysis;