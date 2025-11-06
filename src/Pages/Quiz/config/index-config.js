import { useState } from "react";
import './config-style.css'

function Config() {
  const [chose, setChose] = useState({
    all: true,
    tempoVerbal: true,
    pronome: true,
    modalVerbs: true,
    numbers: true,
  });
  const [config, setConfig] = useState({
    opcao1: false,
    opcao2: false,
    opcao3: false,
    opcao4: false,
    opcao5: false,
  });

  // Função para alterar um valor dentro do objeto
  function handleToggle(opcao) {
    setConfig((prev) => ({
      ...prev,            // mantém o resto igual
      [opcao]: !prev[opcao], // inverte só o campo clicado
    }));
  }

  return (
    <>
      <button className="StartQuiz-btn">Start Quiz</button>
      <section className="config-div">
        {/* TEMPO VERBAL */}
        {chose.all === true && (
          <div className="TempoVerbal-div">
            <button onClick={() => setChose(prev => ({ ...prev, tempoVerbal: false, all: false }))}>Tempo Verbal</button>
          </div>
        )}
        {chose.tempoVerbal === false && (
          <div className="TempoVerbal-content">
            <h3 className="ChoseTitle">tempoVerbal</h3>
            <button className="Options1">Simple Past</button>
            <button className="Options">Present Continuous</button>
            <button className="Options">Simple Present</button>
            <button className="Options">Simple Future</button>
            <button className="BackButton" onClick={() => setChose(prev => ({ ...prev, tempoVerbal: true, all: true }))}>Voltar</button>
          </div>
        )}

        {/* PRONOMES */}
        {chose.all === true && (
          <div className="Pronome-div">
            <button onClick={() => setChose(prev => ({ ...prev, pronome: false, all: false }))}>Pronomes</button>
          </div>
        )}
        {chose.pronome === false && (
          <div className="Pronome-content">
            <h3 className="ChoseTitle">pronome</h3>
            <button className="Options1">Subject Pronouns</button>
            <button className="Options">Object Pronouns</button>
            <button className="Options">Possessive Adjectives</button>
            <button className="Options">Possessive Pronouns</button>
            <button className="Options">Reflexive Pronouns</button>
            <button className="Options">Demonstrative Pronouns</button>
            <button className="Options">Interrogative Pronouns</button>
            <button className="BackButton" onClick={() => setChose(prev => ({ ...prev, pronome: true, all: true }))}>Voltar</button>
          </div>
        )}

        {/* MODAL VERBS */}
        {chose.all === true && (
          <div className="ModalVerbs-div">
            <button onClick={() => setChose(prev => ({ ...prev, modalVerbs: false, all: false }))}>Modal Verbs</button>
          </div>
        )}
        {chose.modalVerbs === false && (
          <div className="ModalVerbs-content">
            <h3 className="ChoseTitle">modalVerbs</h3>
            <button className="Options1">Opçao 1</button>
            <button className="Options">Opçao 2</button>
            <button className="Options">Opçao 3</button>
            <button className="BackButton" onClick={() => setChose(prev => ({ ...prev, modalVerbs: true, all: true }))}>Voltar</button>
          </div>
        )}

        {/* NUMBERS */}
        {chose.all === true && (
          <div className="Numbers-div">
            <button onClick={() => setChose(prev => ({ ...prev, numbers: false, all: false }))}>Numbers</button>
          </div>
        )}
        {chose.numbers === false && (
          <div className="Numbers-content">
            <h3 className="ChoseTitle">numbers</h3>
            <button className="Options1">Opçao 1</button>
            <button className="Options">Opçao 2</button>
            <button className="BackButton" onClick={() => setChose(prev => ({ ...prev, numbers: true, all: true }))}>Voltar</button>
          </div>
        )}

      </section>
    </>

  );
}

export default Config;