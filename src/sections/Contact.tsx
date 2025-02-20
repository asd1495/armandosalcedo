'use client';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { useState } from 'react';

export const ContactSection = () => {
  const email = 'armando.salcedo95@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); //<== This resets the copied state after 2 seconds
  }
  return (
    <div id='contact-section' className='py-16 pt-1 lg:py-24'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
          <div className='absolute inset-0 opacity-5 -z-10' style={{
            backgroundImage:`url(${grainImage.src})`
          }}>
            
          </div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Let&apos;s create something amazing together</h2>
              <p className='text-sm mt-2 md:text-base'>
                Ready to bring your next project to life? Let&apos;s connect and discuss how can I help you. {'\n'}Reach me at {''}
                <span
                  onClick={handleCopyEmail}
                  className='font-medium cursor-pointer hover:opacity-80 transition-opacity'
                  title='Click to copy'
                >
                  {email}
                </span>
                {copied && <span className='text-xs text-gray-700 ml-2'>Copied!</span>}
              </p>
            </div>
            <div>
              <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900'>
                <a href={`mailto:${email}`} target='_blank' className='font-semibold'>Contact Me</a>
                <ArrowUpRightIcon className='size-4' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
