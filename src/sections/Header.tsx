'use client';
import { scrollTo } from "@/components/ScrollTo";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button onClick={() => scrollTo('home')} className="nav-item">Home</button>
        <button onClick={() => scrollTo('projects-section')} className="nav-item">Projects</button>
        <button onClick={() => scrollTo('about-section')} className="nav-item">About</button>
        <button onClick={() => scrollTo('contact-section')} className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</button>
      </nav>
    </div>
  );
};

