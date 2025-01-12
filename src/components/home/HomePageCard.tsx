import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CardInfo {
  image: string
  heading1: string
  heading2: string
  button1: string
  button2?: string
}

interface HomePageCardProps {
  info: CardInfo
}

const HomePageCard = ({ info }: HomePageCardProps) => {
  return (
    <div className="h-[70vh] lg:h-[80vh] w-full">
      <div className="relative z-10">
        <div className="absolute w-full h-[70vh] lg:h-[80vh]">
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
            <h2 className="text-xl pb-[5px] text-center">
              {info.heading1}
            </h2>
            <p className="text-xl pb-[5px] text-center">
              {info.heading2}
            </p>
            <div className="flex justify-center items-center gap-4">
              <Button
                variant="link"
                className="text-white font-normal text-lg pr-5 hover:no-underline"
              >
                {info.button1}
                <ChevronRight className="pt-1 h-6 w-6 text-green-500" />
              </Button>
              {info.button2 && (
                <Button
                  variant="link"
                  className="text-white font-normal text-lg hover:no-underline"
                >
                  {info.button2}
                  <ChevronRight className="pt-1 h-6 w-6 text-green-500" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageCard;