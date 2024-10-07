import React from 'react';
import styles from './Question.module.css'


function Question({pagenr, onRadioChange}) {

    const handleRadioChange = (event) => {
        const group = Object.values(pagenr).find((what) => what.QNr === event.target.name);
        onRadioChange(group.group, event.target.name, event.target.value);
    };

    return (
        
        <div className= {styles.QuestionPage}>
            {Object.values(pagenr).map((question, index) => (
                <div className= {styles.Question}>
                    <h4 key={index}>{index+1}: {question.text}</h4>
                    <label className='test'>
                        Disagree
                        <input type="radio" onChange={handleRadioChange} name={question.QNr} value="Disagree" />
                    </label>

                    <label>
                        Little Disagree
                        <input type="radio" onChange={handleRadioChange} name={question.QNr} value="Little Disagree" />
                    </label>
                    
                    <label>
                        Little Agree
                        <input type="radio" onChange={handleRadioChange} name={question.QNr} value="Little Agree" />
                    </label>
                    
                    <label>
                        Agree
                        <input type="radio" onChange={handleRadioChange} name={question.QNr} value="Agree" />
                    </label>
                </div>    
            ))}
                
        </div>
    
    );
};

export default Question;

