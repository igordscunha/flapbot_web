import type { ReactNode } from "react"

interface InviteButtonComponentProps {
  children: ReactNode | string
}

export const InviteButtonComponent = ({children}: InviteButtonComponentProps) => {
  return (
    <div>
      <a 
        href="https://discord.com/oauth2/authorize?client_id=1399502919140773918&scope=bot%20applications.commands&permissions=8"
        target="_blank"
      >
        <button className="text-white hover:text-[#5A189A] border border-[#f9f9f9] active:scale-95 bg-none hover:bg-[#f9f9f9] text-sm py-4 px-8 rounded-4xl shadow-xl font-medium">
          {children}
        </button>
      </a>
    </div>
  )
}