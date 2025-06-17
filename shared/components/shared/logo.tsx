import Image from "next/image"

export const Logo = () => {
  return (
    <div className="flex gap-8 items-center">
        <Image 
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
        />
        <h1 className="text-[2rem] tracking-[-0.03em] leading-[calc(1.24*2rem)] font-semibold text-gray-900">E-Tutor</h1>
    </div>
  )
}
