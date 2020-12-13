import React from 'react';

const Question = ({item}) => {

    return (
      <article>
        <h3>
          {item.question}
        </h3>
        <div onChange={this.onChangeValue}>
          <input type="radio" value={item.option_1} />
          <label >{item.option_1}</label><br/>
          <input type="radio" value={item.option_2} />
          <label >{item.option_2}</label><br/>
          <input type="radio" value={item.option_2} />
          <label >{item.option_3}</label><br/>
        </div>
      </article>
    )

}

export default Question
