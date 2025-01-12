"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Chrome, MoveRight } from "lucide-react";
import Link from "next/link";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const navigate = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, signinLoading, user } = useUserStore();

  const handleSubmit = () => {
    login(email, password);
    setEmail("");
    setPassword("");
  };

  if(user) {
    navigate.push("/")
  }

  // else do nothing

  return (
    <div
      className="min-h-screen py-8 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg')`,
      }}
    >
      <div className="max-w-md mx-auto px-4">
        <div className="bg-black border-2 border-[#45d62b] rounded-lg p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-thin text-white mb-2">
              LOGIN TO REFLEX ACCOUNT
            </h1>
            <p className="text-white text-sm">
              Welcome back to your Reflex account. Please sign in to continue
            </p>
          </div>

          {/* Google Login Button */}
          <button className="w-full bg-white hover:bg-gray-100 text-black py-2 px-4 rounded flex items-center justify-center mb-6">
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
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black text-white border border-[#45d62b] rounded px-3 py-2 focus:outline-none focus:border-[#45d62b] focus:ring-1 focus:ring-[#45d62b]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black text-white border border-[#45d62b] rounded px-3 py-2 focus:outline-none focus:border-[#45d62b] focus:ring-1 focus:ring-[#45d62b]"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              disabled={!email || !password || signinLoading}
              className="w-full bg-[#45d62b] hover:bg-[#3bb924] text-black py-2 px-4 rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {signinLoading ? (
                <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
              ) : (
                "Reflex Login"
              )}
            </button>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <p className="text-white mb-2">Don&apos;t have an Account?</p>
              <Link href={"/signup"} className="text-[#45d62b]">
                <button className="text-white hover:text-[#45d62b] transition-colors">
                  <span className="flex gap-1">
                    {" "}
                    <p>Create account</p> <MoveRight />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
