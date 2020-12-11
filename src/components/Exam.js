import React from 'react';

const Exam = () => {
  renderQuestions() {
    return this.this.props.items.map((q) => {
      <NewSingle key={q.id} question={q} />
    });
  }

  render() {
    return (
      <ul>
        {this.renderQuestions()}
      </ul>
    );
  }
}

export default Exam;
