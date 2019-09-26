import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questionsData: QuestionModel[] = [
    {
      answers: ["answ1.1", "answ1.2", "answ1.3", "answ1.4"],
      question: "question1",
      rightAnswer: "answ1.1",
      userAnswer: ""
    },
    {
      answers: ["answ2.1", "answ2.2", "answ2.3", "answ2.4"],
      question: "question2",
      rightAnswer: "answ2.2",
      userAnswer: ""
    },
    {
      answers: ["answ3.1", "answ3.2", "answ3.3", "answ3.4"],
      question: "question3",
      rightAnswer: "answ3.3",
      userAnswer: ""
    },
    {
      answers: ["answ4.1", "answ4.2", "answ4.3", "answ4.4"],
      question: "question4",
      rightAnswer: "answ4.4",
      userAnswer: ""
    }
  ];

  answersArr: string[];
  userAnswersArr: string[];
  quizEnd = false;
  quizStart = true;
  questionId = 0;
  question = "";
  userAnswer = "";

  constructor() {}

  ngOnInit() {
    this.answersArr = this.questionsData[0].answers;
    this.question = this.questionsData[0].question;
    this.userAnswer = this.questionsData[0].userAnswer;
  }

  prevQuestion() {
    if (this.questionId === 0) {
      return;
    }
    this.questionId--;
    this.answersArr = this.questionsData[this.questionId].answers;
    this.question = this.questionsData[this.questionId].question;
  }
  nextQuestion() {
    if (this.questionId == this.questionsData.length - 1) {
      return;
    }
    this.questionId++;
    this.answersArr = this.questionsData[this.questionId].answers;
    this.question = this.questionsData[this.questionId].question;
    console.log(this.questionsData);
  }
  onRadioCheckChanged(answer: string) {
    if (answer != undefined) {
      this.questionsData[this.questionId].userAnswer = answer;
    }
  }
}

type QuestionModel = { answers: string[]; question: string; rightAnswer: string; userAnswer: string };
