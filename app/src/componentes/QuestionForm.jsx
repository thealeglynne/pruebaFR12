import React, { useState, useEffect } from 'react';
import "../css/Questions.css"
import Timer from './Timer'; 

function QuestionForm() {
  const [answers, setAnswers] = useState({}); 
  const [score, setScore] = useState(null); 
  const [timeUp, setTimeUp] = useState(false);
  
  const handleAnswerSelection = (questionId, selectedOption) => {
    setAnswers({
      ...answers,
      [questionId]: selectedOption,
    });
  };


  const questions = [
    
      {
        id: 1,
        question: '¿Cuál es la capital de Francia?',
        options: ['Londres', 'París', 'Madrid', 'Berlín'],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: '¿Cuál es el río más largo del mundo?',
        options: ['Amazonas', 'Nilo', 'Misisipi', 'Yangtsé'],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: '¿Cuál es el planeta más grande del sistema solar?',
        options: ['Tierra', 'Marte', 'Júpiter', 'Venus'],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: '¿Cuál es el metal más abundante en la corteza terrestre?',
        options: ['Oro', 'Hierro', 'Aluminio', 'Plata'],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: '¿Cuál es el país más grande por área en África?',
        options: ['Sudáfrica', 'Argelia', 'Nigeria', 'Egipto'],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: '¿Quién escribió la obra "Cien años de soledad"?',
        options: ['Julio Cortázar', 'Mario Vargas Llosa', 'Gabriel García Márquez', 'Pablo Neruda'],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: '¿Cuál es el metal líquido a temperatura ambiente?',
        options: ['Plomo', 'Mercurio', 'Estaño', 'Aluminio'],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: '¿Cuál es el océano más grande del mundo?',
        options: ['Atlántico', 'Pacífico', 'Índico', 'Ártico'],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: '¿Cuál es el país más poblado del mundo?',
        options: ['India', 'Estados Unidos', 'China', 'Rusia'],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: '¿Quién pintó la obra "La última cena"?',
        options: ['Rafael', 'Michelangelo', 'Leonardo da Vinci', 'Pablo Picasso'],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: '¿Cuál es el elemento químico con el símbolo "Fe"?',
        options: ['Oro', 'Hierro', 'Plata', 'Cobre'],
        correctAnswer: 1,
      },
  ];

  
  const handleSubmit = () => {
    
    let score = 0;

    for (const question of questions) {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    }

   
    setScore(score);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
  }
  useEffect(() => {
    if (timeUp) {
      handleSubmit();
    }
  }, [timeUp]);
  return (
    <div className="question-form-container">
      <h1 className="question-form-title">FORMULARIO PREGUNTAS</h1>
      <Timer initialTime={300} onTimeUp={handleTimeUp} />
      {questions.map((question) => (
        <div key={question.id} className="question">
          <p>{question.question}</p>
          {question.options.map((option, index) => (
            <label key={index} className="answer-label">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={index}
                onChange={() => handleAnswerSelection(question.id, index)}
                checked={answers[question.id] === index}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="submit-button">
        Enviar Respuestas
      </button>
      {score !== null && (
        <div className="score">
          <p>El numero de respuestas correctas son:{score} de {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionForm;
