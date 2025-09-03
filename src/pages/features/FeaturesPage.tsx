import { FeatureComponent } from "../../components/feature/FeatureComponent"

export const FeaturePage = () => {
  return(
    <main className="bg-[#9d4edd] min-h-screen md:flex md:flex-col md:items-center">

      {/* SLASH COMMANDS */}
      <div className="md:w-3/5 md:pt-24">
        <h2 className="text-xl text-center text-white py-6">Slash Commands</h2>

        <FeatureComponent comando="/avatar" descricao="Mostra o avatar do usuário escolhido em alta resolução."/>
        <FeatureComponent comando="/clima" descricao="Mostra o clima de determinada cidade do mundo."/>
        <FeatureComponent comando="/enquete" descricao="Abre uma enquete com até 5 perguntas diferentes com opções multi-escolhas."/>
        <FeatureComponent comando="/esportes" opts={["liga", "time"]} descricao="Possui dois subcomandos. O subcomando `liga` mostra os últimos resultados de uma liga específica (Premier League, Brasileirão, La Liga, Serie A, Bundesliga, Eredivise, Formula 1, Diamond League, UFC, NFL e NBA). O subcomando `time` disponibiliza o resultado da última e a data da próxima partida do time escolhido."/>
        <FeatureComponent comando="/freegames" descricao="Mostra os jogos gratuitos da Epic Games Store no momento."/>
        <FeatureComponent comando="/game" descricao="Busca informações sobre um jogo na Steam."/>
        <FeatureComponent comando="/ia" descricao="Faça uma pergunta para a melhor Inteligência Artificial atual."/>
        <FeatureComponent comando="/lembrete" descricao="Define uma data para um lembrete."/>
        <FeatureComponent comando="/letra" descricao="Busca através do Genius uma letra de uma música."/>
        <FeatureComponent comando="/quemtajogando" descricao="Mostra quais usuários online do servidor estão jogando determinado jogo da Steam."/>
        <FeatureComponent comando="/quiz" descricao="Jogue um trivia."/>
        <FeatureComponent comando="/rank" opts={["usuario", "top", "medalhas"]} descricao="Possui três subcomandos. O subcomando `usuario` mostra o level e XP de um usuário específico. O subcomando `top` mostra o top-5 do ranking do servidor, caso exista 5 jogadores ranqueados. O subcomando `medalhas` mostra o quadro de medalhas."/>
        <FeatureComponent comando="/server" descricao="Mostra informações do servidor."/>
        <FeatureComponent comando="/user" descricao="Esse comando mostra há quanto tempo você está no servidor."/>
      </div>



      {/* FIM SLASH COMMANDS */}
      <div className="pb-24"></div>
    </main>
  )
}