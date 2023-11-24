import './Pconsulta.scss'

export default function Pconsulta() {
  return (
    <main className='Pconsulta'>
      <div className='Container'>
        <h1>Formulário anamnese</h1>
        <form>
          <div className='formContainer'>
            <section className='identificacao'>
              <h3>Perfil do paciente</h3>

              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" placeholder='Nome completo' required />

              <div className='row'>
                <div>
                  <label htmlFor="sexo">Sexo:</label>
                  <input type="text" id="sexo" placeholder='Sexo' required />
                </div>
                <div>
                  <label htmlFor="dataNascimento">Data de nascimento: </label>
                  <input type="date" id="dataNascimento" placeholder='Data de nascimento' required />
                </div>
              </div>
              <div className='row'>
                <div>
                  <label htmlFor="peso">Peso: </label>
                  <input type="number" id="peso" placeholder='Peso' required />
                </div>
                <div>
                  <label htmlFor="altura">Altura: </label>
                  <input type="number" id="altura" placeholder='Altura' required />
                </div>
              </div>
              <div className='row'>
                <div>
                  <label htmlFor="nacionalidade">Nacionalidade: </label>
                  <input type="text" id="nacionalidade" placeholder='Nacionalidade' required />
                </div>
                <div>
                  <label htmlFor="estadoCivil">Estado civil: </label>
                  <input type="text" id="estadoCivil" placeholder='Estado civil' required />
                </div>
              </div>
              <div className='column'>
                <label htmlFor="religiao">Religião: </label>
                <input type="text" id="religiao" placeholder='Religião' required />
              </div>
              <label htmlFor="endereco">Endereço: </label>
              <input type="text" id="endereco" placeholder='Endereço' required />
              <div className='row'>
                <div>
                  <label htmlFor="profissao">Profissão: </label>
                  <input type="text" id="profissao" placeholder='Profissão' required />
                </div>
                <div>
                  <label htmlFor="escolaridade">Escolaridade: </label>
                  <input type="text" id="escolaridade" placeholder='Escolaridade' required />
                </div>
              </div>
            </section>

            <section className='causas'>
              <h3>Causas</h3>

              <label htmlFor="queixaPrincipal">Queixa principal: </label>
              <textarea id="queixaPrincipal" placeholder='Escreva o que você está sentindo' required></textarea>

              <label htmlFor="tempoSintoma">Quanto tempo está sentindo? </label>
              <textarea id="tempoSintoma" placeholder='Escreva a quanto tempo está passando mal' required></textarea>

              <label htmlFor="habitos">Hábitos/vícios: </label>
              <textarea id="habitos" placeholder='Fuma, bebe, utiliza algum medicamento regularmente, tem vida sexual ativa, etc' required></textarea>

              <label htmlFor="tempoSono">Tempo de sono: </label>
              <textarea id="tempoSono" placeholder='Escreva quantas horas você dorme por dia' required></textarea>

              <label htmlFor="doencaHereditaria">Seus pais têm alguma doença hereditária? (se sim, qual) </label>
              <textarea id="doencaHereditaria" placeholder='Caso não tiver, digite "não"' required></textarea>
            </section>
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </main>
  )
}
