import { useState } from "react"

function App() {
  // State Variable
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false) 
// Quesrtions Array
  const questions =[
  {
    question:'Sun Rises in the _____?',
    options:['East', 'West' , "North" , 'South'],
    correctAnswer: 'East'},
 
  {  question:'Capital of Paksitan is ??',
  options:['Peshawar', 'Lahore' , "Islamabad" , 'Karachi'],
  correctAnswer: 'Islamabad'},

  {question:'2 + 3 = ',
  options:[1, 5 , 10 , 8],
  correctAnswer: 5}
]  


function handleOptionClick(slectedOption){
// Score
if(slectedOption === questions[currentQuestion].correctAnswer){
  setScore(score + 1)
}

// Next Question

const nextQuestion = currentQuestion + 1
if(nextQuestion < questions.length){
  setCurrentQuestion(nextQuestion )
}else{
  setShowScore(true)
}


// If Last Question : Show Result



}
  return (
    <div className="root-container">
      <h1 className="main-heading">Quiz Application</h1>
{showScore ? (
  <p>'You got {score} question right out of {questions.length}'</p>
) : (

  <>
     {/* Current Question */}
<h3 className="current-question">{questions[currentQuestion].question}</h3>
    

    <div className="options-container"> 
{/* Current Question kay Options */}
{questions[currentQuestion].options.map((option,index)=>{
return  <button key={index} onClick={()=>handleOptionClick(option)}>{option}</button>
})}
    </div>


  </>

)

}
 </div>
  )
}

export default App
