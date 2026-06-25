import React from "react";
import { Mail, Lock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF4E1] px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1A312C]">Laya</h1>
          <p className="text-[#428475] mt-2">
            Your family memory assistant
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-[#1A312C] mb-2">Email</label>
          <div className="flex items-center bg-[#FFF4E1] rounded-xl px-3 py-3">
            <Mail className="text-[#428475] mr-2" size={18} />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-[#1A312C] mb-2">Password</label>
          <div className="flex items-center bg-[#FFF4E1] rounded-xl px-3 py-3">
            <Lock className="text-[#428475] mr-2" size={18} />
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Sign In Button */}
        <button
          onClick={() => navigate("/home")}
          className="w-full bg-[#428475] text-white py-3 rounded-xl font-semibold hover:bg-[#1A312C] transition mb-4"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-[#89D7B7]"></div>
          <span className="px-3 text-[#428475] text-sm">OR</span>
          <div className="flex-1 border-t border-[#89D7B7]"></div>
        </div>

        {/* Google Sign In */}
        <button className="w-full border border-[#89D7B7] py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#FFF4E1] transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Refer Family */}
        <div className="mt-8 bg-[#FFF4E1] rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="text-[#428475]" size={20} />
            <h2 className="font-semibold text-[#1A312C]">
              Refer Family Members
            </h2>
          </div>

          <p className="text-[#428475] text-sm mb-3">
            Invite your family to join your shared Laya board.
          </p>

          <button className="w-full bg-[#89D7B7] text-[#1A312C] py-2 rounded-xl hover:bg-[#428475] hover:text-white transition">
            Invite Family
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;