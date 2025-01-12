import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface BannerInfo {
  image: string
  heading1: string
  heading2: string
  button1: string
  button2?: string
}

interface HomePageBannerProps {
  info: BannerInfo
}

const HomePageBanner = ({ info }: HomePageBannerProps) => {
  return (
    <div className="h-[70vh] lg:h-screen w-full">
      <div className="relative z-10">
        <div className="absolute w-full h-[70vh] lg:h-screen">
          <Image
            src={info.image}
            alt={info.heading1}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="relative z-20 text-white pt-[50px]">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl pb-[6px] text-center">
              {info.heading1}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl pb-[3px] text-center">
              {info.heading2}
            </p>
            <div className="flex justify-center items-center gap-4">
              <Button
                variant="link"
                className="text-white font-normal text-xl pr-5 hover:no-underline"
              >
                {info.button1}
                <ChevronRight className="pt-1 h-7 w-7 text-green-500" />
              </Button>
              {info.button2 && (
                <Button
                  variant="link"
                  className="text-white font-normal text-xl hover:no-underline"
                >
                  {info.button2}
                  <ChevronRight className="pt-1 h-7 w-7 text-green-500" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePageBanner;