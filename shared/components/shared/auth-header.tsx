import { Button, Logo } from "@/shared/components";
import Link from "next/link";

interface Props {
  variant: "sign-in" | "sign-up",
}

const variantConfig = {
  "sign-in": {
    message: "Don't have an account?",
    linkText: "Create Account",
    href: "/sign-up",
  },
  "sign-up": {
    message: "Already have an account?",
    linkText: "Login to your account",
    href: "/sign-in",
  },
};

export const AuthHeader = ({ variant }: Props) => {
  const { message, linkText, href } = variantConfig[variant];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-[inset_0px_-1px_0px_0px_var(--color-gray-100)]">
      <div className="max-w-[82.5rem] mx-auto py-6 px-8 flex justify-between">
        <Logo />
        <div className="flex gap-4 items-center">
          <span className="typo-body-md-400 text-gray-700">{message}</span>
          <Button variant="secondary-primary" asChild>
            <Link href={href}>{ linkText }</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
