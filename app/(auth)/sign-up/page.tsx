import { SignUpForm } from "@/shared/components";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <main className="flex flex-1">
        <div className="flex items-center w-full max-w-836 bg-secondary-100">
            <Image
              src="/images/sign-up-illustration.svg"
              width={836}
              height={836}
              alt="Sign Up Illustration"
            />
        </div>
        <div className="flex items-center justify-center w-full">
            <SignUpForm />
        </div>
    </main>
  )
}

export default SignUpPage