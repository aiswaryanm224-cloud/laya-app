import React from "react";
import {
  Mic,
  Bell,
  ShoppingCart,
  Pill,
  Wallet,
  AlertTriangle,
} from "lucide-react";

const Dashboard = () => {
  const priorityTasks = [
    { title: "Medicine due at 2 PM", priority: "high" },
    { title: "Pay EB bill tomorrow", priority: "medium" },
    { title: "Buy vegetables", priority: "low" },
  ];

  const familyTimeline = [
    "Amma added rice",
    "Chettan paid EB bill",
    "Ammachi took medicine",
  ];

  const suggestions = [
    "Milk may finish today",
    "Gas refill expected in 3 days",
    "Medicine stock running low",
  ];

  return (
    <div className="min-h-screen bg-[#FFF4E1] p-4 pb-24">

      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A312C]">
          Good Morning 👋
        </h1>
        <p className="text-[#428475]">Your family board is active</p>
      </div>

      {/* AI Summary */}
      <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
        <h2 className="font-semibold text-lg text-[#1A312C] mb-2">
          Laya Summary
        </h2>
        <ul className="space-y-1 text-[#428475]">
          <li>• 3 tasks pending</li>
          <li>• 1 medicine due</li>
          <li>• Electricity bill tomorrow</li>
          <li>• 2 items bought today</li>
        </ul>
      </div>

      {/* Voice Button */}
      <div className="flex flex-col items-center mb-8">
        <button className="w-24 h-24 rounded-full bg-[#428475] text-white flex items-center justify-center shadow-lg hover:scale-105 transition">
          <Mic size={38} />
        </button>
        <p className="mt-3 font-medium text-[#1A312C]">
          Speak a household task
        </p>
      </div>

      {/* Priority Tasks */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg text-[#1A312C] mb-3">
          Today’s Priorities
        </h2>
        <div className="space-y-3">
          {priorityTasks.map((task, index) => (
            <div
              key={index}
              className="p-3 rounded-xl bg-white shadow text-[#1A312C]"
            >
              {task.title}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Add */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg text-[#1A312C] mb-3">
          Quick Add
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white shadow rounded-xl p-4 flex items-center gap-2 text-[#428475]">
            <Bell size={20} /> Reminder
          </button>
          <button className="bg-white shadow rounded-xl p-4 flex items-center gap-2 text-[#428475]">
            <ShoppingCart size={20} /> Shopping
          </button>
          <button className="bg-white shadow rounded-xl p-4 flex items-center gap-2 text-[#428475]">
            <Pill size={20} /> Medicine
          </button>
          <button className="bg-white shadow rounded-xl p-4 flex items-center gap-2 text-[#428475]">
            <Wallet size={20} /> Payment
          </button>
        </div>
      </div>

      {/* Family Activity */}
      <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
        <h2 className="font-semibold text-lg text-[#1A312C] mb-3">
          Family Activity
        </h2>
        <ul className="space-y-2 text-[#428475]">
          {familyTimeline.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* Suggestions */}
      <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
        <h2 className="font-semibold text-lg text-[#1A312C] mb-3">
          Smart Suggestions
        </h2>
        <ul className="space-y-2 text-[#428475]">
          {suggestions.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* Emergency Alerts */}
      <div className="bg-red-100 rounded-2xl p-4 mb-6">
        <div className="flex items-center gap-2 text-red-700 font-semibold">
          <AlertTriangle size={20} />
          Emergency Alerts
        </div>
        <p className="mt-2 text-red-600">
          Medicine overdue for Ammachi
        </p>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t flex justify-around py-3">
        <button>🏠</button>
        <button>🎤</button>
        <button>📋</button>
        <button>👨‍👩‍👧</button>
        <button>⚙</button>
      </div>
    </div>
  );
};

export default Dashboard;