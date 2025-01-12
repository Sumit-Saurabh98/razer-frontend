import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from 'lucide-react';
import {
  FooterWhiteHeading,
  FooterLinkText,
  FooterGreenText,
  FooterGrayText,
} from "./FooterTextsDecorations";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  [key: string]: FooterLink[];
}

interface SocialButtonProps {
  Icon: React.ElementType;
  label: string;
}

const SocialButton = ({ Icon, label }: SocialButtonProps) => (
  <button
    className="p-2 text-gray-400 hover:text-white transition-colors"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </button>
);

export function GridFooterLayout() {
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

  return (
    <footer className="bg-black">
      <div className="w-4/5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-5">
          {/* Footer Links Sections */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-2">
              <FooterWhiteHeading text={section} />
              {links.map((link) => (
                <a key={link.text} href={link.href}>
                  <FooterLinkText text={link.text} />
                </a>
              ))}
            </div>
          ))}

          {/* Social Media Section */}
          <div>
            <div className="text-right">
              <FooterGreenText text="FOR GAMERS. BY GAMERS.™" />
            </div>
            <div className="flex justify-end gap-2">
              <SocialButton Icon={Facebook} label="Facebook" />
              <SocialButton Icon={Instagram} label="Instagram" />
              <SocialButton Icon={Twitter} label="Twitter" />
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Footer Bottom */}
        <div className="py-5 flex flex-col md:flex-row justify-between">
          {/* Copyright and Links */}
          <div className="space-y-4 md:space-y-0 md:flex md:items-center">
            <div className="mr-12">
              <FooterGrayText text="Copyright © 2024 Razer Inc. All rights reserved." />
            </div>
            <div className="flex items-center space-x-4">
              <FooterLinkText text="Site Map" />
              <FooterGrayText text="|" />
              <FooterLinkText text="Legal Terms" />
              <FooterGrayText text="|" />
              <FooterLinkText text="Privacy Policy" />
              <FooterGrayText text="|" />
              <FooterLinkText text="Cookie Settings" />
            </div>
          </div>

          {/* Location Selector */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <FooterWhiteHeading text="United States" />
            <FooterWhiteHeading text="|" />
            <FooterLinkText text="Change Location >" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default GridFooterLayout;