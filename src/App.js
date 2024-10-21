import QuestionPage from './QuestionPage';

import ResultView from './ResultView';
import FormData from './FormDataScript';
import React, {useState} from 'react'

import logo from './logo.svg';
import './App.css';





function App() {
  const[who, setWho] = useState("newb");

  const [firstPage, setFirstPage] = useState({
    question1:"YO!",
    question2:"null",
    question3:"null",
    question4:"null",
    question5:"null",
  });
  const [secondPage, setSecondPage] = useState({
    question6:"null",
    question7:"null",
    question8:"null",
    question9:"null",
    question10:"null",
  });
  const [thirdPage, setThirdPage] = useState({
    question11:"null",
    question12:"null",
    question13:"null",
    question14:"null",
    question15:"null",
  });
  const [fourthPage, setFourthPage] = useState({
    question16:"null",
    question17:"null",
    question18:"null",
    question19:"null",
    question20:"null",
  });
  const [fifthPage, setFifthPage] = useState({
    question21:"null",
    question22:"null",
    question23:"null",
    question24:"null",
    question25:"null",
  });

  const handleChange = (group, QNr, value) => {
    switch(group) {
      case "firstBatch":
        return setFirstPage({
          ...firstPage,
          [QNr]:value
      });
      case "secondBatch":
        return setSecondPage({
          ...secondPage,
          [QNr]:value
        });
      case "thirdBatch":
        return setThirdPage({
          ...thirdPage,
          [QNr]:value
        });
      case "fourthBatch":
        return setFourthPage({
          ...fourthPage,
          [QNr]:value
        });
      case "fifthBatch":
        return setFifthPage({
          ...fifthPage,
          [QNr]:value
        });
  }};

  const handleOnClick = (event) => {
    setWho(event.target.value);
  };




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <QuestionPage onRadioChange={handleChange} info={FormData} />
      
      <br />
      <button onClick={handleOnClick} value="newb">Newb</button>
      <button onClick={handleOnClick} value="Intermediate">Intermediate</button>
      <button onClick={handleOnClick} value="Pro">Pro</button>

      <ResultView who={who} showFirstPage={firstPage} showSecondPage={secondPage} showThirdPage={thirdPage} showFourthPage={fourthPage} showFifthPage={fifthPage} />
    </div>
  );
}

export default App;
