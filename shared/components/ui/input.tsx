'use client'

import * as React from "react"

import { cn } from "@/shared/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

import { WarningIcon, CheckIcon } from "@phosphor-icons/react";

const containerVariants = cva(
  `flex h-48 border px-18 py-12 border-gray-100 bg-white items-center`,
  {
    variants: {
      status: {
        default: "hover:border-primary-200 hover:border-1 focus:border-primary-500",
        error: "border-error-300 bg-[rgba(249,234,234,0.5)] ",
        success: "border-success-300 bg-[rgba(223,242,225,0.5)]",
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
)

const inputVariants = cva(
  `outline-none w-full
   placeholder:typo-body-lg-400 typo-body-lg-400
   focus:placeholder:text-gray-300 focus:text-gray-900
   placeholder:text-gray-500 text-gray-700
  `
);

interface Props extends React.ComponentProps<"input">, VariantProps<typeof containerVariants> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const composeStatusIcon = (status: Props['status']) => {
  const className = 'h-19 w-19 px-4 py-5 flex items-center justify-center rounded-full';

  switch(status) {
    case "error":
      return (
        <div className={cn(className, "bg-error-500")}>
          <WarningIcon color="var(--color-white)" weight="bold" />
        </div>
      )
    case "success":
      return (
        <div className={cn(className, "bg-success-500")}>
          <CheckIcon color="var(--color-white)" weight="bold" />
        </div>
      )
    default:
      return null;
  }
}

function Input({ 
  status,
  startContent,
  endContent = composeStatusIcon(status),
  ...props 
}: Props) {
  return (
    <div className={cn(containerVariants({ status }))}>
      {startContent && <>{startContent}</>}
      <input
        data-slot="input"
        className={cn(inputVariants())}
        {...props}
      />
      {endContent && <>{endContent}</>}
    </div>
  )
}

export { Input }
