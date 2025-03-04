"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-sky-600 group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-sky-400",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-sky-500",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-sky-500",
        },
      }}
      {...props}
    />
  );
}

export { Toaster }
