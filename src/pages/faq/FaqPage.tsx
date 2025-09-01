import { FaqTextComponent } from "../../components/faq_text/FaqTextComponent"
import { InputTextComponent } from "../../components/input_text/InputTextComponent"

export const FaqPage = () => {
  return(
    <main className="my-16">
      <InputTextComponent>
        <FaqTextComponent
         pergunta="P: Como adiciono o BotBpi ao meu servidor?"
         resposta="R: Basta clicar no link de convite, escolher o servidor desejado e conceder as permissões necessárias. O bot estará ativo em segundos."
        />

        <FaqTextComponent
         pergunta="P: Quais permissões o bot precisa?"
         resposta="R: Para funcionar corretamente, ele requer permissões de gerenciamento de mensagens, leitura de histórico, conexão de voz (para música) e gerenciamento de canais (opcional)."
        />

        <FaqTextComponent
         pergunta="P: Posso customizar o prefixo de comando?"
         resposta="R: Infelizmente, por enquanto ainda não."
        />

        <FaqTextComponent
         pergunta="P: Existe versão paga ou premium?"
         resposta="R: O bot é totalmente gratuito."
        />

        <FaqTextComponent
         pergunta="P: Onde reportar bugs ou sugerir melhorias?"
         resposta="R: No nosso servidor de suporte aqui."
        />
      </InputTextComponent>
    </main>
  )
}