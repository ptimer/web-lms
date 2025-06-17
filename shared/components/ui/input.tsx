import * as React from "react"

import { cn } from "@/shared/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const inputVariants = cva(
  `flex h-48 w-full min-w-0 border px-18 py-12 outline-none
   placeholder:typo-body-lg-400 typo-body-lg-400 hover:border-primary-200 
   focus:border-primary-500 focus:placeholder:text-gray-300 focus:text-gray-900
  `,
  {
    variants: {
      variant: {
        default: "placeholder:text-gray-500 border-gray-100 bg-white text-gray-700",
      },
      state: {
        default: "",
        invalid: "border-error-300 focus:border-red-500",
        valid: "border-green-500 focus:border-green-500",
      },
    },
    defaultVariants: {
      state: "default",
      variant: "default",
    },
  }
)

function Input({ 
  variant, 
  state,
  type, 
  ...props 
}: React.ComponentProps<"input"> 
& VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, state }))}
      {...props}
    />
  )
}

export { Input }
