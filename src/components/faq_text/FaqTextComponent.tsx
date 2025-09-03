interface FaqTextComponentProps {
  pergunta: string
  resposta: string
}

export const FaqTextComponent = ({ pergunta, resposta }: FaqTextComponentProps) => {
  return(
    <div className={`font-inconsolata tracking-tighter p-5`}>
      <p className="font-bold">
        P: {pergunta}
      </p>
      <p>
        R: {resposta}
      </p>
    </div>
  )
}