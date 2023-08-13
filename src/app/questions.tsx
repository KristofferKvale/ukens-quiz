'use client'

import { MouseEventHandler, useState } from 'react'
import { Question } from './question'

export type QuestionList = {
  question1: string
  answer1: string
  question2: string
  answer2: string
  question3: string
  answer3: string
  question4: string
  answer4: string
  question5: string
  answer5: string
}

export const Questions = (props: { questionList: QuestionList }) => {
  return (
    <>
      <Question
        question={props.questionList.question1}
        answer={props.questionList.answer1}
        num={1}
      />
      <Question
        question={props.questionList.question2}
        answer={props.questionList.answer2}
        num={2}
      />
      <Question
        question={props.questionList.question3}
        answer={props.questionList.answer3}
        num={3}
      />
      <Question
        question={props.questionList.question4}
        answer={props.questionList.answer4}
        num={4}
      />
      <Question
        question={props.questionList.question5}
        answer={props.questionList.answer5}
        num={5}
      />
    </>
  )
}
