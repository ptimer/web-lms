import { AuthForm } from "@/shared/components";
import Image from "next/image";

const SignInPage = () => {
  return (
    <main className="flex h-full">
        <div className="flex items-end w-full max-w-[52.25rem] bg-secondary-100">
            <Image
              src="/images/sign-in-illustration.png"
              width={836}
              height={836}
              alt="Sign In Illustration"
            />
        </div>
        <div className="flex items-center justify-center w-full">
            <AuthForm />
        </div>
    </main>
  )
}

export default SignInPage