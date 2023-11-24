import './Pconsulta.scss'

export default function Pconsulta() {
  return (
    <main className='Pconsulta'>
      <div ClassName='Container'>
        <h1>Formulário anamnese</h1>
        <form>
          <div className='formContainer'>
            <section className='identificacao'>
              <h3>Perfil do paciente</h3>

              <label>Nome:</label>
              <input placeholder='Nome completo'></input>

              <div className='row'>
                <div>
                  <label>Sexo:</label>
                  <input placeholder='Sexo'></input>
                </div>
                <div>
                  <label>Data de nascimento: </label>
                  <input placeholder='Data de nascimento'></input>
                </div>
              </div>
              <div className='row'>
                <div>
                  <label>Peso: </label>
                  <input placeholder='Peso'></input>
                </div>
                <div>
                  <label>Altura: </label>
                  <input placeholder='Altura'></input>
                </div>
              </div>
              <div className='row'>
                <div>
                  <label>Nacionalidade: </label>
                  <input placeholder='Nacionalidade'></input>
                </div>
                <div>
                  <label>Estado civil: </label>
                  <input placeholder='Estado civil'></input>
                </div>
              </div>
              <div className='column'>
                <label>Religião: </label>
                <input placeholder='Religião'></input>
              </div>
              <label>Endereço: </label>
              <input placeholder='Endereço'></input>
              <div className='row'>
                <div>
                  <label>Profissão: </label>
                  <input placeholder='Profissão'></input>
                </div>
                <div>
                  <label>Escolaridade: </label>
                  <input placeholder='Escolaridade'></input>
                </div>
              </div>
            </section>

            <section className='causas'>
              <h3>Causas</h3>

              <label>Queixa principal: </label>
              <textarea placeholder='Escreva o que você está sentindo'></textarea>

              <label>Quanto tempo está sentindo? </label>
              <textarea placeholder='Escreva a quanto tempo está passando mal'></textarea>

              <label>Hábitos/vícios: </label>
              <textarea placeholder='Fuma, bebe, utiliza algum medicamento regularmente, tem vida sexual ativa, etc'></textarea>

              <label>Tempo de sono: </label>
              <textarea placeholder='Escreva quantas horas você dorme por dia'></textarea>

              <label>Seus pais tem alguma doença hereditária? (se sim qual) </label>
              <textarea placeholder='Caso não tiver digite "não"'></textarea>
            </section>
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </main>
  )
}
