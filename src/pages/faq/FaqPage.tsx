import { FaqTextComponent } from "../../components/faq_text/FaqTextComponent"
import { InputTextComponent } from "../../components/input_text/InputTextComponent"

export const FaqPage = () => {
  return(
    <main className="bg-[#9d4edd] md:min-h-screen">
      <div className="py-30">      
        <InputTextComponent>
          <FaqTextComponent
            pergunta="Como adiciono o BotBpi ao meu servidor?"
            resposta="Basta clicar no link de convite, escolher o servidor desejado e conceder as permissões necessárias. O bot estará ativo em segundos."
          />

          <FaqTextComponent
            pergunta="Quais permissões o bot precisa?"
            resposta="Para funcionar corretamente, ele requer permissões de gerenciamento de mensagens, leitura de histórico, conexão de voz (para música) e gerenciamento de canais (opcional)."
          />

          <FaqTextComponent
            pergunta="Posso customizar o prefixo de comando?"
            resposta="Infelizmente, por enquanto ainda não."
          />

          <FaqTextComponent
            pergunta="Existe versão paga ou premium?"
            resposta="O bot é totalmente gratuito."
          />

          <FaqTextComponent
            pergunta="Onde reportar bugs ou sugerir melhorias?"
            resposta="No nosso servidor de suporte aqui."
          />
        </InputTextComponent>
      </div>
    </main>
  )
}