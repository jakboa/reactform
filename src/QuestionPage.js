import React from 'react';
import Question from './Question'



function QuestionForm({info, onRadioChange}) {

    return (
        <div>
            {Object.values(info).map((pages, index) => (
                <div>
                    <p>Page: {index+1}</p>
                    <Question onRadioChange={onRadioChange} pagenr={pages} key={index} />
                </div>
            ))}

        </div>
    );
};


export default QuestionForm;


