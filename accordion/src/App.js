import React,{useState} from 'react';
import Question from './Question';
import data from './data';

const App = () => {
  const [questions,setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {data.map((question)=>{
            return <Question key={question.id} {...question}/>
          })}
    </section>
      </div>
    </main>
  )
}

export default App
