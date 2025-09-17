import type { PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren {
  handleToggle: () => void;
  title?: string;
}

export const GenericButton = ({ handleToggle, title = "default button title", children }: ButtonProps) => {
  return (
    <button
      onClick={handleToggle}
      className="ml-4 p-2 text-xl transition-colors hover:cursor-pointer"
      title={title}
    >
      {children}
    </button>
  )
}