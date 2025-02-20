"use client";
import { title } from "process";
import { Fragment, useState, useEffect } from "react";
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/armando-salcedo/'
  },
  {
    title: 'Github',
    href: 'https://github.com/asd1495'
  },
  {
    title: 'Mail',
    href: 'mailto:armando.salcedo95@gmail.com'
  }

]

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="relative  overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8 ">
          <div className="text-white/40">
            {`© ${year}. All Rights Reserved.`}
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a href={link.href} key={link.href} target="_blank" className="inline-flex items-center gap-1.5">
                <span className="font-semibold">{link.title}</span>
                <ArrowRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
