import { useState } from "react";
import Config from "./config/index-config";
import { configInicial } from "./config/configInicial";
import "./quiz.css";
import {
  SPT_Questions, PCT_Questions, SPR_Questions, SFTR_Questions,
  SUB_P_Questions, OBJ_P_Questions, POS_A_Questions, POS_P_Questions,
  REF_P_Questions, DEM_P_Questions, INT_P_Questions, MV_Questions,
  CAR_N_Questions, ORD_N_Questions
} from "../../Componentes/Questoes/index";

function Quiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [config, setConfig] = useState(configInicial);
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostas, setRespostas] = useState({});

  // Mapeamento de todas as perguntas
  const todasPerguntas = {
    "Simple Past": SPT_Questions,
    "Present Continuous": PCT_Questions,
    "Simple Present": SPR_Questions,
    "Simple Future": SFTR_Questions,
    "Subject Pronouns": SUB_P_Questions,
    "Object Pronouns": OBJ_P_Questions,
    "Possessive Adjectives": POS_A_Questions,
    "Possessive Pronouns": POS_P_Questions,
    "Reflexive Pronouns": REF_P_Questions,
    "Demonstrative Pronouns": DEM_P_Questions,
    "Interrogative Pronouns": INT_P_Questions,
    "Modal Verbs": MV_Questions,
    "Cardinal Numbers": CAR_N_Questions,
    "Ordinal Numbers": ORD_N_Questions,
  };

  // Tradução das chaves internas para nomes das categorias
  const mapaCategoria = {
    simplePast: "Simple Past",
    presentContinuous: "Present Continuous",
    simplePresent: "Simple Present",
    simpleFuture: "Simple Future",
    subjectPronouns: "Subject Pronouns",
    objectPronouns: "Object Pronouns",
    possessiveAdjectives: "Possessive Adjectives",
    possessivePronouns: "Possessive Pronouns",
    reflexivePronouns: "Reflexive Pronouns",
    demonstrativePronouns: "Demonstrative Pronouns",
    interrogativePronouns: "Interrogative Pronouns",
    modalVerbs: "Modal Verbs",
    cardinal: "Cardinal Numbers",
    ordinal: "Ordinal Numbers",
  };

  // Seleciona categorias ativas
  const categoriasSelecionadas = Object.keys(config)
    .filter(key => config[key])
    .map(key => mapaCategoria[key]);

  const categoriaAtual = categoriasSelecionadas[indiceCategoria];
  const perguntasAtuais = categoriaAtual
    ? todasPerguntas[categoriaAtual]
    : [];

  // Seleção de resposta e cálculo de pontuação
  function handleSelect(questao, resposta) {
    setRespostas(prev => {
      const jaRespondida = prev[questao.id];
      let novaPontuacao = pontuacao;

      if (jaRespondida) {
        const eraCorreta = jaRespondida === questao.correctAnswer;
        const agoraCorreta = resposta === questao.correctAnswer;

        if (eraCorreta && !agoraCorreta) novaPontuacao--;
        if (!eraCorreta && agoraCorreta) novaPontuacao++;
      } else if (resposta === questao.correctAnswer) {
        novaPontuacao++;
      }

      setPontuacao(novaPontuacao);
      return { ...prev, [questao.id]: resposta };
    });
  }


  // Avança para a próxima categoria
  function proximaCategoria() {
    if (indiceCategoria + 1 < categoriasSelecionadas.length) {
      setIndiceCategoria(prev => prev + 1);
      setRespostas({});
    } else {
      // Calcula o total de perguntas de todas as categorias selecionadas
      const totalPerguntas = categoriasSelecionadas.reduce((total, categoria) => {
        const perguntas = todasPerguntas[categoria];
        return total + (perguntas ? perguntas.length : 0);
      }, 0);

      alert(`🎉 Quiz finalizado!\n\nSua pontuação foi: ${pontuacao} / ${totalPerguntas}`);

      // Resetar estados
      setQuizStarted(false);
      setIndiceCategoria(0);
      setPontuacao(0);
      setRespostas({});
      setConfig(prev => {
        const novoConfig = {};
        Object.keys(prev).forEach(key => (novoConfig[key] = false));
        return novoConfig;
      });
    }
  }


  function verificar(config) {
    // Pega todos os valores do objeto config e verifica se TODOS são false
    const nenhumaSelecionada = Object.values(config).every(valor => valor === false);

    if (nenhumaSelecionada) {
      alert('Escolha ao menos uma categoria!');
      setQuizStarted(false);
    } else {
      setIndiceCategoria(0);
      setRespostas({});
      setPontuacao(0);
      setQuizStarted(true);

    }
  }
  return (
    <>
      {!quizStarted ? (
        <div>
          <Config config={config} setConfig={setConfig} />
          <section className="Start-btn-section">
            <p>Clique aqui para começar</p>

            <button className="Start-btn" onClick={() => verificar(config)}>Start Quiz</button>

          </section>
        </div>
      ) : (
        <div className="perguntas-div">
          <h2>{categoriaAtual}</h2>

          {perguntasAtuais.map(q => (
            <div key={q.id} className="question-block">
              <p className="question-text">{q.question}</p>

              <div className="options-group">
                {q.options.map((opt, index) => (
                  <label key={index} className="option-label">
                    <input
                      type="radio"
                      name={`pergunta-${q.id}`}
                      value={opt}
                      checked={respostas[q.id] === opt}
                      onChange={() => handleSelect(q, opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button className="NextQuestions" onClick={proximaCategoria}>Próxima Categoria</button>
        </div>
      )}
    </>
  );
}

export default Quiz;
