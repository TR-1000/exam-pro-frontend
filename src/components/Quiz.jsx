import React, { Component } from 'react';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      selectedAnswer: null,
      currentIndex: 0,
      score: 0,
      quizEnd: false,
      disabled: true
    };

    this.handleNext = this.handleNext.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }


  async componentDidMount() {
    console.log("getting questions from the api");

    let res = await fetch('http://18.218.171.150:8080/examPro/examApi/take/quiz');
    console.log(res);
    let jsonData = await res.json()

    this.setState({
      questions: jsonData
    })

    console.log(this.state.questions);

    this.renderQuiz()

  }

  componentDidUpdate(prevProps, prevState) {
    const{currentIndex} = this.state;
    if(this.state.currentIndex != prevState.currentIndex) {
      this.setState(() => {
        return {
          question: this.state.questions[currentIndex].question,
          option_1: this.state.questions[currentIndex].option_1,
          option_2: this.state.questions[currentIndex].option_2,
          option_3: this.state.questions[currentIndex].option_3,
          right_ans: this.state.questions[currentIndex].right_ans
        }
      })
    }
  }

  renderQuiz() {
    const {currentIndex} = this.state;
    this.setState(() => {
      return {
        question: this.state.questions[currentIndex].question,
        option_1: this.state.questions[currentIndex].option_1,
        option_2: this.state.questions[currentIndex].option_2,
        option_3: this.state.questions[currentIndex].option_3,
        right_ans: this.state.questions[currentIndex].right_ans
      }
    })
  }

  handleNext() {
    const {selectedAnswer, right_ans, score} = this.state
    console.log(selectedAnswer, right_ans);
    if(selectedAnswer === right_ans) {
      this.setState ({
        score: score + 1
      })
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      selectedAnswer: null
    })
  }

  checkAnswer(answer) {
    console.log(answer);
    this.setState({
      selectedAnswer: answer,

      disabled: false
    })
  }

  handleFinish() {
    const {selectedAnswer, right_ans, score} = this.state
    console.log(this.state.currentIndex, this.state.questions.length);
    if(selectedAnswer === right_ans) {
      this.setState ({
        score: score + 1
      })
    }
    if (this.state.currentIndex+1 == this.state.questions.length) {
      this.setState({
        quizEnd:true
      })
    }
  }

  checkAnswer(answer) {
    console.log(answer);
    this.setState({
      selectedAnswer: answer,

      disabled: false
    })
  }



  render () {
    const {question, option_1, option_2, option_3, right_ans, currentIndex, selectedAnswer, quizEnd} = this.state
    if(quizEnd) {
      console.log("quiz end");
      return (
        <div class="jumbotron jumbotron-fluid container">
          <div class="container">
            <h1 class="display-4 text-center">{`Your score is ${(this.state.score / this.state.questions.length) * 100}% `}</h1>

          </div>
        </div>
      )
    }
    return (
      <div className="container text-center">
        <h1>Core Java Exam</h1>
        <div className="card ">
          <div className="card-header">
            <span>{`Question ${currentIndex + 1}/${this.state.questions.length}`}</span>
          </div>
          <div className="card-body">
            <h2 className="card-title">{question}</h2><br/>
            <button className="btn btn-primary btn-lg btn-block" onClick={() => {
              this.checkAnswer(option_1)
            }} ><h3>{option_1}</h3></button> <br/><br/>
            <button className="btn btn-primary btn-lg btn-block" onClick={() => {
              this.checkAnswer(option_2)
            }} ><h3>{option_2}</h3></button> <br/><br/>
            <button className="btn btn-primary btn-lg btn-block" onClick={() => {
              this.checkAnswer(option_3)
            }} ><h3>{option_3}</h3></button> <br/><br/>
          </div>
          <div className="card-footer text-muted">
            {currentIndex < this.state.questions.length-1 && <button type="button" className="btn btn-outline-primary btn-lg" onClick={this.handleNext} disabled={this.state.disabled}>Next</button>}

            {currentIndex === this.state.questions.length-1 && <button type="button" className="btn btn-outline-primary btn-lg" onClick={this.handleFinish} disabled={this.state.disabled}>Submit</button>}

          </div>
        </div>
      </div>
    )
  }
}
