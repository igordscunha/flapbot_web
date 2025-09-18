import { InputTextComponent } from "../../components/input_text/InputTextComponent"

export const QuickStartPage = () => {
  return(
    <main className="bg-[#9d4edd] min-h-screen flex flex-col items-center">
      <div className="pt-26 md:w-3/5">
        <InputTextComponent>
          <p>
            Após adicionar o FlapBot ao seu servidor, é importante se atentar em algumas coisas:
            <br/><br/><br/>
            <span className="text-2xl">IMPORTANTE:</span>
            <br/><br/>
            O FlapBot, por padrão, sempre priorizará mandar mensagens (de congratulações em caso de up level, por exemplo) no canal de texto que se chama 'geral'. Para configurar para o nome do canal de texto correto do seu servidor, você pode utilizar o comando: <span className="underline">/confignameinit</span> (comando visível somente para administradores).
            <br/><br/>
            Sobre as mensagens de congratulação para cada up de usuário, para ativá-las utilize o comando <span className="underline">/mup True</span> e <span className="underline">/mup False</span> caso queira desativá-las novamente.
            <br/><br/>
            Sobre as insígneas, o FlapBot precisa de permissão para poder modificar o nickname dos usuários, então conceda-o. Lembrando que, mesmo com a permissão garantida, o FlapBot não conseguirá editar nenhum usuário que esteja em um cargo acima e em hipótese nenhuma, por conta das políticas de segurança do próprio Discord, o FlapBot conseguirá editar o usuário 'owner' do servidor.
          </p>
        </InputTextComponent>
      </div>

      {/* RANKING */}
      <div className="md:w-3/5 md:py-28 py-24">
        <h2 className="text-xl text-center text-white py-6">Ranking de Usuários</h2>

        <InputTextComponent>
          O usuário recebe randomicamente entre 15 a 25 de XP por mensagens enviadas em qualquer canal e 10 de XP por minuto permanecido 
          com o fone desmutado em canais do servidor.<br/><br/>

          O ranking atual conta com 5 insígneas:<br/><br/>

          <div className="bg-[#E0AAFF] p-3 mb-4 rounded-sm text-[#10002B]">

            🥉 para level 1+<br/>
            🥈 para level 15+<br/>
            🥇 para level 25+<br/>
            💎 para level 35+<br/>
            👑 para level 50+<br/>
          </div>

          Você pode verificar o top-5 do servidor utilizando o slash command <span className="underline">/rank top.</span>
        </InputTextComponent>
      </div>
      {/* FIM RANKING */}
    </main>
  )
}