import React from 'react';


function ResultView({who, showFirstPage,showSecondPage,showThirdPage,showFourthPage,showFifthPage}) {
// DEAL WITH PART FIVE:
    const numberArrayFive = [];
    let disNum = 0;
    let liDisNum = 0;
    let liAgrNum = 0;
    let agrNum = 0;
    const convertToPoints = (which) => {
        if (which === "newb"){
            disNum = 0;
            liDisNum = 1;
            liAgrNum = 2;
            agrNum = 3;
         } else if (which === "Intermediate"){
            disNum = 2;
            liDisNum = 4;
            liAgrNum = 6;
            agrNum = 8;
         }else if (which === "Pro"){
            disNum = 5;
            liDisNum = 10;
            liAgrNum = 15;
            agrNum = 20;
         };

        Object.values(showFifthPage).map(value => {
        if (value === "Disagree") {numberArrayFive.push(disNum)}
        else if (value === "Little Disagree") {numberArrayFive.push(liDisNum)}
        else if (value === "Little Agree") {numberArrayFive.push(liAgrNum)}
        else if (value === "Agree") {numberArrayFive.push(agrNum)}
    }) 

};
    convertToPoints(who);
    const sumValues = numberArrayFive.reduce((accumulator,currentValue) => accumulator + currentValue, 0) ;

// DEAL WITH PART FOUR:
const numberArrayFour = [];
const convertToPointsCheck = (which) => {
    if (which === "newb"){
        disNum = 0;
        liDisNum = 1;
        liAgrNum = 2;
        agrNum = 3;
     } else if (which === "Intermediate"){
        disNum = 2;
        liDisNum = 4;
        liAgrNum = 6;
        agrNum = 8;
     }else if (which === "Pro"){
        disNum = 5;
        liDisNum = 10;
        liAgrNum = 15;
        agrNum = 20;
     };
    Object.values(showFourthPage).map(value => {
        if (value === "Disagree") {numberArrayFour.push(disNum)}
        else if (value === "Little Disagree") {numberArrayFour.push(liDisNum)}
        else if (value === "Little Agree") {numberArrayFour.push(liAgrNum)}
        else if (value === "Agree") {numberArrayFour.push(agrNum)}
    })
    for (let i=0;i<numberArrayFour.length;i++) {
        if ( i % 2) {
            numberArrayFour[i] = numberArrayFour[i]*-1;
        }
    } 
};

    convertToPointsCheck(who);
    const sumValuesCheck = numberArrayFour.reduce((accumulator,currentValue) => accumulator + currentValue, 0) ;
    const feedbackObject = {
        newb:{"0":"You lie...",
        "3":"What...",
        "6":"Is okay consistency",
        "9":"Doing good!",
        "12":"Super consistent!"
        },
        Intermediate:{"-4":"You lie...",
            "-1":"What...",
            "0":"Is okay consistency",
            "5":"Doing good!",
            "8":"Super consistent!"
            },
        Pro:{"-20":"You lie...",
            "0":"What...",
            "10":"Is okay consistency",
            "20":"Doing good!",
            "30":"Super consistent!"
            },

        
    }
    return (
        <div>
            <p>You are a: {who}</p>
            <div>
                <br />
                <p>PART 4 Informasjon:</p>
                <p>The number values from page five: {numberArrayFour[0]} / {numberArrayFour[1]} / {numberArrayFour[2]} / {numberArrayFour[3]} / {numberArrayFour[4]}.</p>
                <p>Your end sum is: {sumValuesCheck}</p>
                <p>Your end sum is: {feedbackObject[who][sumValuesCheck]}</p>
            </div>
            
            <div>
                <br />
                <p>PART 5 Informasjon:</p>
                <p>The number values from page five: {numberArrayFive[0]}-{numberArrayFive[1]}-{numberArrayFive[2]}-{numberArrayFive[3]}-{numberArrayFive[4]}.</p>
                <p>The summerized values from page five: {sumValues}</p>
            </div>
            <p>PAGE 1</p>
            {Object.values(showFirstPage).map((answer,index) => (
                <div>
                    <p>{answer}</p>
                </div>
                ))}

            <p>PAGE 2</p>
            {Object.values(showSecondPage).map((answer,index) => (
                <div>
                    <p>{answer}</p>
                </div>
                ))}
            <p>PAGE 3</p>
            {Object.values(showThirdPage).map((answer,index) => (
                <div>
                    <p>{answer}</p>
                </div>
                ))}
            <p>PAGE 4</p>
            {Object.values(showFourthPage).map((answer,index) => (
                <div>
                    <p>{answer}</p>
                </div>
                ))}
            <p>PAGE 5</p>
            {Object.values(showFifthPage).map((answer,index) => (
                <div>
                    <p>{answer}</p>
                </div>
                ))}

        </div>
    );
};


export default ResultView;



