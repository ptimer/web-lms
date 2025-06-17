import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/utils"

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap transition-all outline-none",
  {
    variants: {
      variant: {
        "primary-primary":
          "text-white bg-primary-500 hover:bg-primary-600 hover:shadow-[0px_6px_20px_0px_rgba(204,82,43,0.5)]",
        "secondary-primary":
          "text-primary-500 bg-primary-100 hover:text-primary-600 hover:bg-primary-200",
      },
      size: {
        md: "h-48 px-24 typo-button-md",
      },
    },
    defaultVariants: {
      variant: "primary-primary",
      size: "md",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
