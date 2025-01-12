"use client"

import React, { useEffect, useState } from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FooterSections {
  [key: string]: string[];
}

interface SocialButtonProps {
  icon: React.ElementType;
}

interface FooterLinkProps {
  children: React.ReactNode;
  href?: string;
}

const footerSections: FooterSections = {
  Shop: [
    "RazerStores",
    "RazerCafe",
    "Store Locator",
    "Purchase Programs",
    "Education",
    "Exclusives",
    "RazerStore Rewards",
    "Newsletter",
  ],
  Explore: ["Technology", "Chroma RGB", "Concepts", "Esports", "Collabs"],
  Support: [
    "Get Help",
    "Registration & Warranty",
    "RazerStore Support",
    "RazerCare",
    "Manage Razer ID",
    "Support Videos",
    "Accessibility Statement",
  ],
  Company: ["About Us", "Careers", "Press Room", "zVentures", "Contact Us"],
};

const SocialButton: React.FC<SocialButtonProps> = ({ icon: Icon }) => (
  <Button 
    variant="ghost" 
    size="icon"
    className="hover:bg-gray-800 rounded-full p-2"
  >
    <Icon className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
  </Button>
);

const FooterLink: React.FC<FooterLinkProps> = ({ children, href = "#" }) => (
  <a 
    href={href}
    className="text-sm text-gray-400 hover:text-white transition-colors"
  >
    {children}
  </a>
);

const MobileFooter: React.FC = () => (
  <div className="px-4">
    <Accordion type="single" collapsible className="space-y-2">
      {Object.entries(footerSections).map(([title, links]) => (
        <AccordionItem 
          key={title} 
          value={title} 
          className="border-b border-gray-800"
        >
          <AccordionTrigger className="text-sm text-white py-3">
            {title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col space-y-3 pb-4">
            {links.map((link) => (
              <FooterLink key={link}>{link}</FooterLink>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

const DesktopFooter: React.FC = () => (
  <div className="grid grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
    {Object.entries(footerSections).map(([title, links]) => (
      <div key={title} className="space-y-4">
        <h3 className="text-sm font-medium text-white">{title}</h3>
        <div className="flex flex-col space-y-3">
          {links.map((link) => (
            <FooterLink key={link}>{link}</FooterLink>
          ))}
        </div>
      </div>
    ))}
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-green-500">
        FOR GAMERS. BY GAMERS.™
      </h3>
      <div className="flex space-x-2">
        <SocialButton icon={Facebook} />
        <SocialButton icon={Instagram} />
        <SocialButton icon={Twitter} />
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    const handleResize = () => {
      requestAnimationFrame(checkMobile);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="bg-black text-gray-400">
      <div className="py-8">
        {isMobile ? <MobileFooter /> : <DesktopFooter />}
      </div>
      
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <span className="text-sm">
                Copyright © 2024 Razer Inc. All rights reserved.
              </span>
              <div className="flex items-center space-x-4">
                <FooterLink>Site Map</FooterLink>
                <span className="text-gray-600">|</span>
                <FooterLink>Legal Terms</FooterLink>
                <span className="text-gray-600">|</span>
                <FooterLink>Privacy Policy</FooterLink>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-white">United States</span>
              <span className="text-gray-600">|</span>
              <FooterLink>Change Location</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;