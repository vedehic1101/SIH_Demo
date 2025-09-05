import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowLeft, CheckCircle, Eye, EyeOff } from 'lucide-react';

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    college: '',
    course: '',
    year: '',
    category: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center text-blue-800 hover:text-blue-900">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="Government of India"
                className="h-8 w-8"
              />
              <div className="text-right">
                <h1 className="text-lg font-bold text-gray-900">PM Internship Scheme</h1>
                <p className="text-sm text-gray-500">Government of India</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Join the Program</h1>
                  <p className="text-gray-600">Create your account to start your internship journey</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Free Registration</h3>
                  <p className="text-sm text-gray-600">No registration fees or hidden charges</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Multiple Opportunities</h3>
                  <p className="text-sm text-gray-600">Access to 1000+ internship positions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Government Certified</h3>
                  <p className="text-sm text-gray-600">Official certificates from Government of India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Monthly Stipend</h3>
                  <p className="text-sm text-gray-600">Earn while you learn with competitive stipends</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-800 text-sm mb-3">
                Contact our support team for assistance with registration or technical issues.
              </p>
              <div className="text-sm text-blue-800">
                <p>📞 Helpline: 1800-123-4567</p>
                <p>📧 Email: support@pminternship.gov.in</p>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
                <p className="text-gray-600">Fill in your details to register</p>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Academic Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    College/University *
                  </label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="engineering">Engineering</option>
                      <option value="management">Management</option>
                      <option value="science">Science</option>
                      <option value="commerce">Commerce</option>
                      <option value="arts">Arts</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year of Study *
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="final">Final Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="general">General</option>
                    <option value="obc">OBC</option>
                    <option value="sc">SC</option>
                    <option value="st">ST</option>
                    <option value="ews">EWS</option>
                  </select>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Account Security</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="input-field pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link to="/terms" className="text-blue-800 hover:text-blue-900 underline">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-blue-800 hover:text-blue-900 underline">
                    Privacy Policy
                  </Link>{' '}
                  of the PM Internship Scheme.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg"
              >
                Create Account
              </button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/dashboard" className="text-blue-800 hover:text-blue-900 font-medium underline">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;