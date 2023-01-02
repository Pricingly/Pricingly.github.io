import React from 'react'
import Question from './app-components/Question'

export default function About() {
  const questions = {
    question1: {
      question: "How Did You Build This?",
      response: "This Web App uses CSS, JavaScript, and ReactJS as the Front-end of the website. It is hosted with GitHub Pages!"
    },
    question2: {
      question: "What's The Exigence?",
      response: "I built this webpage because I wanted an easier way to do the math. I hated having to grab a piece of paper or configure google sheets to do a simple product calculation; it just wasn't convenient."
    },
    question3: {
      question: "I Have A Suggestion",
      response: "I'm always open to new ideas. Please feel free to contact me with my email!"
    },
    question4: {
      question: "I Need A Portfolio or Landing Page Built. Can You Do It?",
      response: "I'm open to new clients! Just reach out!"
    },
    question5: {
      question: "Contact",
      response: "lle114@student.hbuhsd.edu"
    }
  }

  return (
    <>
        <div className='about'>

            <div className="about-content">
              <Question data={questions.question1} />
              <Question data={questions.question2} />
              <Question data={questions.question3} />
              <Question data={questions.question4} />
              <Question data={questions.question5} />
            </div>
        </div>
    </>
  )
}
