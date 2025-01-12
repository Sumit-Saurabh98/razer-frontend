"use client"
import HomePageBanner from "@/components/home/HomePageBanner"
import HomePageCard from "@/components/home/HomePageCard"
import LoadingSpinner from "@/components/loading/LoadingSpinner"
import { useUserStore } from "@/store/useUserStore"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface BannerInfo {
  heading1: string
  heading2: string
  button1: string
  button2?: string
  image: string
}

export default function Home() {

  const router = useRouter();

  const {user, checkAuth, checkAuthLoading} = useUserStore();

  const handleNavigation = (to?: string) => {
    if (to) {
      router.push(to)
    }
  }

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkAuthLoading) {
    return <LoadingSpinner />;
  }

  const homePageBannersData: BannerInfo[] = [
    {
      heading1: "NEW RAZER BLADE 16",
      heading2: "BIGGER. BETTER. STILL THE BEST.",
      button1: "Learn More",
      button2: "Buy",
      image: "/HomePageImages/1.jpg",
    },
    {
      heading1: "RAZER DEATHADDER V3 PRO FAKER EDITION",
      heading2: "FOR THE PRO",
      button1: "Learn More",
      button2: "Buy",
      image: "/HomePageImages/2.jpg",
    },
    {
      heading1: "NEW RAZER BLADE 18",
      heading2: "THE ULTIMATE DESKTOP REPLACEMENT",
      button1: "Learn More",
      button2: "Buy",
      image: "/HomePageImages/3.jpg",
    },
  ]

  const homePageCardData = [
    {
      heading1: "RAZER ORNATA V3 TENKEYLESS",
      heading2: "SLIM. CLICKY. ERGONOMIC.",
      button1: "Learn More",
      button2: "Buy",
      image: "/HomePageImages/4.jpg",
    },
    {
      heading1: "UNLEASH A NEW AGE OF TECHNOLOGY",
      heading2: "EXPERIENCE THE REVOLUTION",
      button1: "Shop Now",
      image: "/HomePageImages/5.jpg",
    },
    {
      heading1: "RAZER ENKI PRO",
      heading2: "AUTOMOBILI LAMBORGHINI EDITION",
      button1: "Learn More",
      button2: "Buy",
      image: "/HomePageImages/6.jpg",
    },
    {
      heading1: "NEW RAZER BLADE 15",
      heading2: "PORTABLE. POWERFUL. PERFECTION",
      button1: "Learn More",
      button2: "Shop All Models",
      image: "/HomePageImages/7.jpg",
    },
    {
      heading1: "RAZER EDGE",
      heading2: "THE ULTIMATE ANDROID GAMING HANDHELD",
      button1: "Learn More",
      button2: "Buy",
      image: "/HomePageImages/8.jpg",
    },
    {
      heading1: "RAZER STREAM CONTROLLER X",
      heading2: "INSTANT CONTROL. INFINITE CREATIVITY.",
      button1: "Learn More",
      button2: "Buy",
      image: "/HomePageImages/9.jpg",
    },
  ]

  return (
    <div className="bg-[#222] text-white space-y-3">
      <div className="space-y-3">
        {homePageBannersData.map((info, index) => (
          <HomePageBanner info={info} key={`banner-${index}`} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {homePageCardData.map((info, index) => (
          <HomePageCard info={info} key={`card-${index}`} />
        ))}
      </div>
    </div>
  )
}
