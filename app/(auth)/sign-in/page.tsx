import { SignInForm } from "@/shared/components";
import Image from "next/image";

const SignInPage = () => {
  return (
    <main className="flex h-full">
        <div className="flex items-end h-full w-full max-w-836 bg-secondary-100">
            <Image
              src="/images/sign-in-illustration.svg"
              width={836}
              height={836}
              alt="Sign In Illustration"
            />
        </div>
        <div className="flex items-center justify-center w-full">
            <SignInForm />
        </div>
    </main>
  )
}

export default SignInPage