import { useState } from "react";
import { configInicial } from "./configInicial";
import './config-style.css'

function Config({ config, setConfig }) {
  const [animar, setAnimar] = useState(false)
  const [chose, setChose] = useState({
    all: true,
    tempoVerbal: true,
    pronome: true,
    modalVerbs: true,
    numbers: true,
  });

  
  function handleToggle(opcao) {
    setConfig(prev => ({
      ...prev,
      [opcao]: !prev[opcao], // altera o estado do Quiz
    }));
  }


  return (
    <>
      <p className="BemVindo">Bem-vindo ao Quiz!</p>
      <p className="txt">Antes de começarmos, precisamos que você escolha os temas das perguntas.</p>
      <p className="txt">Abaixo, você pode navegar entre os temas do quiz e selecioná-los.</p>
        <section className={`config-div ${animar ? 'animate' : ''}`}>
          {chose.all === true && (<p className="p-top">Esolha os temas das suas perguntas</p>
          )}

          {/* TEMPO VERBAL */}
          {chose.all === true && (
            <div className="TempoVerbal-div">
              <button onClick={() => setChose(prev => ({ ...prev, tempoVerbal: false, all: false }))}>Tempo Verbal</button>
            </div>
          )}
          {chose.tempoVerbal === false && (
            <>
              <div className={`TempoVerbal-content ${animar ? 'animate' : ''}`}>
                <button className={`Options1 ${config.simplePast ? 'ativo' : ''}`} onClick={() => { handleToggle("simplePast"); setAnimar(true) }} >Simple Past</button>
                <button className={`Options ${config.presentContinuous ? 'ativo' : ''}`} onClick={() => { handleToggle("presentContinuous"); setAnimar(true) }}>Present Continuous</button>
                <button className={`Options ${config.simplePresent ? 'ativo' : ''}`} onClick={() => { handleToggle("simplePresent"); setAnimar(true) }}>Simple Present</button>
                <button className={`Options ${config.simpleFuture ? 'ativo' : ''}`} onClick={() => { handleToggle("simpleFuture"); setAnimar(true) }}>Simple Future</button>
                <button className="BackButton" onClick={() => setChose(prev => ({ ...prev, tempoVerbal: true, all: true }))}>Voltar</button>
              </div>
              <p className="p-bottom">PS: cada seção selecionada terá 6 perguntas</p>
            </>

          )}

          {/* PRONOMES */}
          {chose.all === true && (
            <div className="Pronome-div">
              <button onClick={() => setChose(prev => ({ ...prev, pronome: false, all: false }))}>Pronomes</button>
            </div>
          )}
          {chose.pronome === false && (
            <>
              <div className="Pronome-content">
                <button className={`Options1 ${config.subjectPronouns ? 'ativo' : ''}`} onClick={() => handleToggle("subjectPronouns")}>Subject Pronouns</button>
                <button className={`Options ${config.objectPronouns ? 'ativo' : ''}`} onClick={() => handleToggle("objectPronouns")}>Object Pronouns</button>
                <button className={`Options ${config.possessiveAdjectives ? 'ativo' : ''}`} onClick={() => handleToggle("possessiveAdjectives")}>Possessive Adjectives</button>
                <button className={`Options ${config.possessivePronouns ? 'ativo' : ''}`} onClick={() => handleToggle("possessivePronouns")}>Possessive Pronouns</button>
                <button className={`Options ${config.reflexivePronouns ? 'ativo' : ''}`} onClick={() => handleToggle("reflexivePronouns")}>Reflexive Pronouns</button>
                <button className={`Options ${config.demonstrativePronouns ? 'ativo' : ''}`} onClick={() => handleToggle("demonstrativePronouns")}>Demonstrative Pronouns</button>
                <button className={`Options ${config.interrogativePronouns ? 'ativo' : ''}`} onClick={() => handleToggle("interrogativePronouns")}>Interrogative Pronouns</button>
                <button className="BackButton" onClick={() => setChose(prev => ({ ...prev, pronome: true, all: true }))}>Voltar</button>
              </div>
              <p className="p-bottom">PS: cada seção selecionada terá 6 perguntas</p>
            </>

          )}

          {/* MODAL VERBS */}
          {chose.all === true && (
            <div className="ModalVerbs-div">
              <button onClick={() => setChose(prev => ({ ...prev, modalVerbs: false, all: false }))}>Modal Verbs</button>
            </div>
          )}
          {chose.modalVerbs === false && (
            <>
              <div className="ModalVerbs-content">
                <button className={`Options1 ${config.afirmative ? 'ativo' : ''}`} onClick={() => handleToggle("afirmative")}>Afirmativas</button>
                <button className={`Options ${config.interrogative ? 'ativo' : ''}`} onClick={() => handleToggle("interrogative")}>Interrogativas</button>
                <button className={`Options ${config.negative ? 'ativo' : ''}`} onClick={() => handleToggle("negative")}>Negativas</button>
                <button className="BackButton" onClick={() => setChose(prev => ({ ...prev, modalVerbs: true, all: true }))}>Voltar</button>
              </div>
              <p className="p-bottom">PS: cada seção selecionada terá 6 perguntas</p>
            </>
          )}

          {/* NUMBERS */}
          {chose.all === true && (
            <div className="Numbers-div">
              <button onClick={() => setChose(prev => ({ ...prev, numbers: false, all: false }))}>Numbers</button>
            </div>
          )}
          {chose.numbers === false && (
            <>
              <div className="Numbers-content">
                <button className={`Options1 ${config.cardinal ? 'ativo' : ''}`} onClick={() => handleToggle("cardinal")}>Cardinal</button>
                <button className={`Options ${config.ordinal ? 'ativo' : ''}`} onClick={() => handleToggle("ordinal")}>Ordinal</button>
                <button className="BackButton" onClick={() => setChose(prev => ({ ...prev, numbers: true, all: true }))}>Voltar</button>
              </div>
              <p className="p-bottom">PS: cada seção selecionada terá 6 perguntas</p>
            </>
          )}

        </section>

    </>

  );
}

export default Config;