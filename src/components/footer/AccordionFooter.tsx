import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Plus, Minus, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  [key: string]: FooterLink[];
}

const footerLinks: FooterSection = {
  Shop: [
    { text: "RazerStores", href: "#" },
    { text: "RazerCafe", href: "#" },
    { text: "Store Locator", href: "#" },
    { text: "Purchase Programs", href: "#" },
    { text: "Education", href: "#" },
    { text: "Exclusives", href: "#" },
    { text: "RazerStore Rewards", href: "#" },
    { text: "Newsletter", href: "#" },
  ],
  Explore: [
    { text: "Technology", href: "#" },
    { text: "Chroma RGB", href: "#" },
    { text: "Concepts", href: "#" },
    { text: "Esports", href: "#" },
    { text: "Collabs", href: "#" },
  ],
  Support: [
    { text: "Get Help", href: "#" },
    { text: "Registration & Warranty", href: "#" },
    { text: "RazerStore Support", href: "#" },
    { text: "RazerCare", href: "#" },
    { text: "Manage Razer ID", href: "#" },
    { text: "Support Videos", href: "#" },
    { text: "Accessibility Statement", href: "#" },
  ],
  Company: [
    { text: "About Us", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Press Room", href: "#" },
    { text: "zVentures", href: "#" },
    { text: "Contact Us", href: "#" },
  ],
};

const SocialButton = ({ Icon, label }: { Icon: React.ElementType; label: string }) => (
  <button
    className="p-2 hover:text-white transition-colors"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </button>
);

export function AccordionFooter() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-4">
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(footerLinks).map(([section, links]) => (
            <AccordionItem value={section} key={section}>
              <AccordionTrigger className="flex justify-between py-4">
                <span className="text-white font-medium">{section}</span>
                <div className="text-xs">
                  {/* Using Lucide icons for plus/minus */}
                  <Plus className="h-3 w-3 accordion-open:hidden" />
                  <Minus className="h-3 w-3 accordion-closed:hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pb-4">
                  {links.map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      className=" transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 py-6 text-sm">
          <span>Copyright © 2024 Razer Inc. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white">Site Map</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Legal Terms</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Location */}
        <div className="flex justify-center items-center space-x-4 py-6">
          <span className="text-white">United States</span>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Change Location &gt;
          </a>
        </div>

        {/* Slogan and Social Media */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 pb-12">
          <span className="text-green-500 font-medium">
            FOR GAMERS. BY GAMERS.™
          </span>
          <div className="flex space-x-4">
            <SocialButton Icon={Facebook} label="Facebook" />
            <SocialButton Icon={Instagram} label="Instagram" />
            <SocialButton Icon={Twitter} label="Twitter" />
          </div>
        </div>

        <Separator className="bg-gray-800" />
      </div>
    </footer>
  );
}

export default AccordionFooter;