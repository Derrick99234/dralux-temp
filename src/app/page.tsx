import React, { useState, useEffect } from "react";
import {
  Play,
  Download,
  Zap,
  Clock,
  CheckCircle2,
  Star,
  ShieldCheck,
  Layers,
  Video,
  ChevronRight,
  Gift,
} from "lucide-react";

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Simple countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-yellow-400 selection:text-black font-sans">
      {/* --- Top Announcement Bar --- */}
      <div className="bg-linear-to-r from-red-600 via-green-600 to-purple-600 py-2 text-center text-sm font-bold tracking-wide">
        🎄 HOLIDAY SALE: SAVE 75% ON THE ULTIMATE CREATOR BUNDLE — ENDS SOON! 🎁
      </div>

      {/* --- Navigation --- */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center font-black text-xl italic">
            Pr
          </div>
          <span className="text-xl font-bold tracking-tighter">
            PREMIERE<span className="text-yellow-400 text-2xl">X</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#bundle" className="hover:text-white transition-colors">
            The Bundle
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-all active:scale-95">
          Get Access
        </button>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-600 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-100 h-100 bg-green-600 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-[20%] w-75 h-75 bg-red-600 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-yellow-400 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Gift size={16} /> 2025 Holiday Exclusive Pack
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
            LEVEL UP YOUR <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-yellow-200 to-purple-400">
              VIDEOS FASTER.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop wasting hours on keyframes. 500+ Drag-and-drop Premiere Pro
            templates, transitions, and titles designed for modern creators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-black px-10 py-5 rounded-2xl text-xl transition-all hover:scale-105 shadow-[0_0_40px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2">
              <Download size={24} /> GET THE BUNDLE - $49
            </button>
            <button className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 px-10 py-5 rounded-2xl text-xl font-bold transition-all flex items-center justify-center gap-2">
              <Play size={24} fill="white" /> Watch Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 text-xl font-bold italic underline decoration-red-500">
              YOU<span className="text-red-500">TUBE</span>
            </div>
            <div className="text-xl font-bold tracking-widest uppercase">
              VlogLife
            </div>
            <div className="text-xl font-black">EDITORS.CO</div>
            <div className="text-xl font-serif italic">MotionSync</div>
          </div>
        </div>
      </header>

      {/* --- Countdown Section --- */}
      <section className="bg-red-600 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black uppercase italic leading-none">
              Limited Time Offer
            </h2>
            <p className="text-red-100 font-medium">
              The price triples when the clock hits zero!
            </p>
          </div>
          <div className="flex gap-4">
            {[
              { label: "HRS", val: timeLeft.hours },
              { label: "MIN", val: timeLeft.minutes },
              { label: "SEC", val: timeLeft.seconds },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-black/20 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-3xl md:text-4xl font-black border border-white/20">
                  {item.val.toString().padStart(2, "0")}
                </div>
                <span className="text-[10px] font-bold mt-2 opacity-80 tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Feature Grid --- */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-purple-500/50 transition-all group">
            <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Instant Drag & Drop</h3>
            <p className="text-neutral-400 leading-relaxed">
              No complex setup. Just drag the MOGRT files into your timeline and
              customize everything in the Essential Graphics panel.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-green-500/50 transition-all group">
            <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Unlimited Remixing</h3>
            <p className="text-neutral-400 leading-relaxed">
              Change colors, fonts, speeds, and layout with one click. Every
              template is 100% vector-based for infinite resolution.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-yellow-500/50 transition-all group">
            <div className="w-14 h-14 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-black">
              <Video size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">4K Cinema Ready</h3>
            <p className="text-neutral-400 leading-relaxed">
              Native support for 4K, 8K, and Vertical (9:16) sequences. Perfect
              for YouTube, TikTok, and professional broadcast.
            </p>
          </div>
        </div>
      </section>

      {/* --- Visual Showcase --- */}
      <section className="bg-white text-black py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 italic">
                WHAT&apos;S INSIDE THE{" "}
                <span className="text-purple-600 underline">VAULT?</span>
              </h2>
              <p className="text-xl text-neutral-600">
                Total value over $1,200+ if purchased separately.
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-black text-red-600 italic">
                SAVE $1,151
              </div>
              <div className="text-neutral-500 font-bold">
                ONLY DURING THE HOLIDAYS
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-64 bg-neutral-200 rounded-3xl flex flex-col items-center justify-center border-2 border-black/5 hover:bg-yellow-100 transition-colors">
              <span className="text-5xl font-black">150+</span>
              <span className="font-bold text-neutral-500">Transitions</span>
            </div>
            <div className="h-64 bg-neutral-900 text-white rounded-3xl flex flex-col items-center justify-center hover:bg-purple-600 transition-all cursor-pointer">
              <span className="text-5xl font-black">80+</span>
              <span className="font-bold text-white/60 text-center">
                Kinetic <br /> Typography
              </span>
            </div>
            <div className="h-64 bg-neutral-200 rounded-3xl flex flex-col items-center justify-center border-2 border-black/5 hover:bg-green-100 transition-colors">
              <span className="text-5xl font-black">200+</span>
              <span className="font-bold text-neutral-500 text-center">
                SFX & Music <br /> Loops
              </span>
            </div>
            <div className="h-64 bg-red-600 text-white rounded-3xl flex flex-col items-center justify-center hover:scale-[1.02] transition-all shadow-xl">
              <span className="text-5xl font-black">BONUS</span>
              <span className="font-bold text-white/80">Lut Library</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Pricing Table --- */}
      <section
        id="pricing"
        className="py-24 px-6 bg-neutral-950 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              PICK YOUR PLAN
            </h2>
            <p className="text-neutral-400">
              One-time payment. Lifetime updates. No subscriptions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic */}
            <div className="bg-neutral-900 border border-white/10 p-10 rounded-[2.5rem] flex flex-col">
              <h4 className="text-xl font-bold mb-2">The Starter</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">$29</span>
                <span className="text-neutral-500 line-through font-bold">
                  $99
                </span>
              </div>
              <ul className="space-y-4 mb-10 grow">
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 className="text-green-500" size={18} /> 50
                  Essential Transitions
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 className="text-green-500" size={18} /> 20 Lower
                  Thirds
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 className="text-green-500" size={18} /> HD & 4K
                  Ready
                </li>
                <li className="flex items-center gap-3 text-neutral-500 line-through">
                  <CheckCircle2 size={18} /> SFX Bonus Pack
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-white text-black font-bold hover:bg-neutral-200 transition-colors">
                Select Basic
              </button>
            </div>

            {/* Premium (Recommended) */}
            <div className="bg-linear-to-br from-purple-900/40 to-black border-2 border-purple-500 p-10 rounded-[2.5rem] flex flex-col relative scale-105 shadow-2xl shadow-purple-500/20">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                Best Value
              </div>
              <h4 className="text-xl font-bold mb-2 text-purple-400">
                Holiday Vault 🎁
              </h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">$49</span>
                <span className="text-neutral-500 line-through font-bold">
                  $299
                </span>
              </div>
              <ul className="space-y-4 mb-10 grow">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={18} />{" "}
                  <strong>All 500+ Templates</strong>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={18} /> Full SFX
                  & Music Library
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={18} /> Cinema
                  Lut Library
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={18} /> Lifetime
                  Free Updates
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={18} />{" "}
                  Commercial License
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-purple-600 text-white font-black hover:bg-purple-500 transition-all hover:scale-[1.02]">
                GET ACCESS NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-20 px-6 border-t border-white/5 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-black italic">
                Pr
              </div>
              <span className="text-xl font-bold tracking-tighter italic underline decoration-yellow-400">
                PREMIERE X
              </span>
            </div>
            <p className="text-neutral-500 max-w-sm">
              Empowering 10,000+ editors to spend less time on tedious tasks and
              more time on the creative vision.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6">SUPPORT</h5>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  License Agreement
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">LEGAL</h5>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-600 text-sm">
          <p>© 2025 PremiereX Labs. Built for Editors.</p>
          <div className="flex gap-4">
            <ShieldCheck size={20} className="opacity-50" />
            <span className="font-medium">
              Secure Checkout via Stripe & PayPal
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
