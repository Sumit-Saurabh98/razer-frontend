import React from 'react';

interface FooterTextProps {
  text: string;
  className?: string;
}

export function FooterWhiteHeading({ text, className = '' }: FooterTextProps) {
  return (
    <span className={`text-xs text-white cursor-default pb-2.5 block ${className}`}>
      {text}
    </span>
  );
}

export function FooterLinkText({ text, className = '' }: FooterTextProps) {
  return (
    <span className={`text-xs text-gray-400 hover:text-white hover:underline cursor-pointer pb-2.5 block ${className}`}>
      {text}
    </span>
  );
}

export function FooterGreenText({ text, className = '' }: FooterTextProps) {
  return (
    <span className={`text-xs md:text-sm lg:text-lg text-[#44d62c] pb-0.5 block ${className}`}>
      {text}
    </span>
  );
}

export function FooterGrayText({ text, className = '' }: FooterTextProps) {
  return (
    <span className={`text-xs text-gray-400 pb-2.5 block ${className}`}>
      {text}
    </span>
  );
}