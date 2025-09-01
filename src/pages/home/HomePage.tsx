import { InviteButtonComponent } from "../../components/invite_button/InviteButtonComponent"

export const HomePage = () => {
  return(
    <main className="bg-[#9d4edd] min-h-screen text-white md:flex md:flex-col md:justify-center md:items-center">

      <div className="py-28 flex flex-col gap-16 md:gap-30 text-center md:w-2/5 md:h-screen">
        <div className="flex flex-col gap-3 md:gap-12">
          <h3>Experimente a revolução nos seus servidores de Discord com FlapBot.</h3>

          <p className="text-sm md:text-lg font-medium text-[#e6e8eb]">
            Comandos inteligentes e interativos que elevam cada conversa, evento, desafio e experiência.
            
          </p>
        </div>

        <InviteButtonComponent>QUERO MUITO ESSE BOT MANEIRO</InviteButtonComponent>
      </div>

      <div className="text-center flex flex-col gap-10 md:gap-12 md:w-2/5">
        <h3>
          Transforme seu servidor em um espaço mais dinâmico
        </h3>

        <p className="text-sm md:text-lg font-medium text-center text-[#e6e8eb]">
          Criado para melhorar a experiência do usuário, cada ação gera uma reação. Notificações personalizadas e comandos de utilidades tornam o dia a dia do seu servidor mais fluido e organizado, sem perder a diversão.
        </p>
      </div>

      <div className="py-24 md:pb-60">
        <p className="text-center font-medium">
          Você pode ver detalhes dos comandos <a href="/features" className="underline hover:text-[#3C096C]">aqui.</a>
        </p>
      </div>
    </main>
  )
}