export const FooterComponent = () => {
  return(
    <footer className="p-8 md:p-16 flex flex-col md:flex-row md:justify-between gap-8 text-center">
      <div>
        <h6>SITE</h6>
        <ul>
          <li>Documentação</li>
          <li>Adicionar ao Servidor</li>
        </ul>
      </div>

      <div>
        <h6>LEGAL</h6>
        <ul>
          <li>Termos de Uso</li>
          <li>Copyright</li>
        </ul>
      </div>

      <div>
        <h6>SUPORTE</h6>
        <ul>
          <li>FAQ</li>
          <li>Contato</li>
        </ul>
      </div>
    </footer>
  )
}