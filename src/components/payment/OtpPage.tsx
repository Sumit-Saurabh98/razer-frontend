import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const OtpPage = () => {
    const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [otp, setOtp] = React.useState(["", "", "", ""]);

  // Handle OTP input change
  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.querySelector(`input[name="otp-${index + 1}"]`) as HTMLInputElement;
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleOtpSubmission = () => {
    setOpen(false)
    router.push('/payment/success')
  }

  // Handle keydown for backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.querySelector(`input[name="otp-${index - 1}"]`) as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div>
        <Button 
          className="mt-4 bg-[#44d62c] text-black hover:bg-[#44d62c]/90"
          onClick={() => setOpen(true)}
        >
          Confirm Payment
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Enter OTP</DialogTitle>
            <DialogClose className="text-gray-400 hover:text-gray-300" />
          </DialogHeader>
          
          <div className="flex justify-center gap-2 py-4">
            {[0, 1, 2, 3].map((index) => (
              <Input
                key={index}
                type="text"
                inputMode="numeric"
                name={`otp-${index}`}
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-white bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
              />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <Button 
              className="bg-[#44d62c] text-black hover:bg-[#44d62c]/90"
              onClick={
                handleOtpSubmission

            }
            >
              Submit OTP
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default OtpPage;