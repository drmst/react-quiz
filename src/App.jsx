import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Number from "./components/Number";
import Radio from "./components/Radio";
import Text from "./components/Text";

function App() {

  const [correctAnswerForNumber, setCorrectAnswerForNumber]=useState(0);
  const [correctAnswerForText, setCorrectAnswerForText]=useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers]=useState(0);

  setTotalCorrectAnswers(correctAnswerForNumber + correctAnswerForText);
  const questions = [
    {
      question: " Kaç tane büyük okyanus vardır?",
      answers: [3, 4, 5, 6],
      rightAnswer: 6,
    },
    {
      question: " Ren Nehri, aşağıdaki hangi ülkelerden geçer",
      answers: [
        { id: 1, answer: "Almanya" },
        { id: 2, answer: "Fransa" },
        { id: 3, answer: "İsviçre" },
        { id: 4, answer: "İtalya" },
      ],
      rightAnswer: ["Almanya", "Fransa", "İsviçre"],
    },
    {
      question: " Everest Dağı, hangi dağ sırasında yer almaktadır?",
      answers: [
        { id: 5, answer: "And Dağları" },
        { id: 6, answer: "Karadeniz Dağları" },
        { id: 7, answer: "Himalaya Dağları" },
        { id: 8, answer: "Rockies Dağları" },
      ],
      rightAnswer: "Himalaya Dağları",
    },
    {
      question:
        "Sahara Çölü hangi kıtada bulunmaktadır? (Asya,Avrupa,Afrika,Amerika)",
      rightAnswer: "Afrika",
    },
  ];

  const handleClick = () => {
 
  }
  

  return (
    <>
      <div>
        <h1>Coğrafya Sınavı</h1>
      </div>
      <form>
        <Number questions={questions} setCorrectAnswerForNumber={setCorrectAnswerForNumber}/>
        <Checkbox questions={questions} />
        <Radio questions={questions}  />
        <Text questions={questions} setCorrectAnswerForText={setCorrectAnswerForText}/>
      </form>
      <Button />
      <p>Doğru cevap sayısı= {totalCorrectAnswers}</p>
    </>
  );
}

export default App;
