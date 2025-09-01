import type { ReactNode } from "react"

interface FeatureComponentProps {
  comando: string
  opts?: string[]
  descricao: string
}

interface SubCommandProps{
  children: ReactNode | string
}

export const SubCommand = ({children}: SubCommandProps) => {
  return(
    <h4 className="text-sm tracking-tight px-3 py-1 text-[#240046]">{children}</h4>
  )
}

export const FeatureComponent = ({comando, descricao, opts}: FeatureComponentProps) => {
  return(
    <div className="border border-slate-300 bg-[#edeff2] rounded-sm my-2">
      <div className="flex gap-5 p-3 bg-[#E0AAFF] items-center">
        <h4 className="font-bold text-black">{comando}</h4>
        {opts?.map((v, i) => <SubCommand key={i}>{v}</SubCommand>)}
      </div>
      <p className="text-base/5 font-abel tracking-tight p-3 text-[#240046]">{descricao}</p>
    </div>
  )
}