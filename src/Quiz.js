import React, {Component} from 'react'

class Quiz extends Component {

    quizData = require('./quiz_data.json');

    constructor(props) {
        super(props);
        this.state = {quiz_position: 1}
    }
    render() {
        return (
            <div>
                <div className="QuizQuestion">
                    {/*{quizData}*/}
                    {this.quizData['quiz_questions'][0].instruction_text}
                </div>
            </div>
        )
    }
}

export default Quiz