
"use client"
import React, { useState } from 'react';
import { Eye, EyeOff, Chrome, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useUserStore } from '@/store/useUserStore';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
   const {signup, signupLoading} = useUserStore();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    country: "",
  });

  const handleSubmit = () => {
    console.log(formData);
    signup(formData.fullname, formData.email, formData.password, formData.country);

    setFormData({
      fullname: "",
      email: "",
      password: "",
      country: "",
    })
  };

  return (
    <div 
      className="min-h-screen py-8 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg')`
      }}
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-black border-2 border-[#45d62b] rounded-lg p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-thin text-white mb-2">
              CREATE A REFLEX ACCOUNT
            </h1>
            <p className="text-white text-sm">
              Every Frame, Every Victory, Every Gear. We will be always there.
              Respect for gamers.
            </p>
          </div>

          {/* Google Login Button */}
          <button 
            className="w-full bg-white hover:bg-gray-100 text-black py-2 px-4 rounded flex items-center justify-center mb-6"
          >
            <Chrome className="w-5 h-5 mr-2" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-3 text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                value={formData.fullname}
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                className="w-full bg-black text-white border border-[#45d62b] rounded px-3 py-2 focus:outline-none focus:border-[#45d62b] focus:ring-1 focus:ring-[#45d62b]"
                placeholder="Enter full name"
              />
            </div>

            {/* Country Select */}
            <div>
              <label className="block text-white mb-2">Country</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-black text-gray-400 border border-[#45d62b] rounded px-3 py-2 focus:outline-none focus:border-[#45d62b] focus:ring-1 focus:ring-[#45d62b]"
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="IN">India</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black text-white border border-[#45d62b] rounded px-3 py-2 focus:outline-none focus:border-[#45d62b] focus:ring-1 focus:ring-[#45d62b]"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-black text-white border border-[#45d62b] rounded px-3 py-2 focus:outline-none focus:border-[#45d62b] focus:ring-1 focus:ring-[#45d62b]"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="text-center space-y-2">
              <h3 className="text-white text-sm font-light">Terms and Conditions</h3>
              <p className="text-xs text-white">
                By creating an account, you agree to our{' '}
                <button className="text-[#45d62b] hover:underline">Terms of Service</button>
                {' '}and{' '}
                <button className="text-[#45d62b] hover:underline">Privacy Policy</button>.
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!formData.fullname || !formData.email || !formData.country || !formData.password || signupLoading}
              className="w-full bg-[#45d62b] hover:bg-[#3bb924] text-black py-2 px-4 rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {signupLoading ? (
                <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
              ) : (
                'ACCEPT AND CREATE'
              )}
            </button>

            {/* Login Link */}
            <div className="text-center pt-4">
              <p className="text-white mb-2">Already have an Account?</p>
              <Link href={"/login"}>
              <button 
                className="text-white hover:text-[#45d62b] transition-colors inline-flex items-center"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Log in
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;