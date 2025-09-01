import type { ReactNode } from "react"

interface InputTextComponentProps {
  children: ReactNode | string
}

export const InputTextComponent = ({children}: InputTextComponentProps) => {
  return(
    <div className="border border-slate-300 p-3 bg-[#edeff2] rounded-sm">
      <p className="text-lg/5 tracking-tight font-abel text-[#240046]">
        {children}
      </p>
    </div>
  )
}