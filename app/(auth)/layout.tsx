'use client'

import { usePathname } from 'next/navigation'
import { AuthHeader } from '@/shared/components'

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    const pathname = usePathname();
    const isSignIn = pathname === "/sign-in";

    return (
        <div className='relative min-h-screen flex flex-col'>
            <AuthHeader variant={isSignIn ? "sign-in" : "sign-up"} />
            { children }
        </div>
    )
}

export default AuthLayout