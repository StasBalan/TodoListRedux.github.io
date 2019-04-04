import React, {Component} from 'react';
import {connect} from 'react-redux';
import './add-task.css';
import * as actions from '../actions/actions.js';

class AddTask extends Component {
    state = {
        valueS: '',
        valueDateS: ''
    };

    valueMethod = (e) =>{
       let text = e.target.value;
      this.setState({
          valueS: text
      });
    };

    valueDateMethod = (e) =>{
        let textDate = e.target.value;
        this.setState({
            valueDateS: textDate
        });
    };

    addItem = () => {
        const date = this.state.valueDateS;
        const text = this.state.valueS;

        const dateValue = date;
        const inputValue = text;


        if (dateValue === '' || inputValue === '') {
            alert('Введите значение!');
        } else {
            const newArr = {
                date: dateValue,
                label: inputValue,
                important: false,
                check: false,
                id: Math.random().toString(36).slice(2)
            };

            this.props.addTask(newArr);
        }
    };

    render() {
        return (
            <form className="form-add">
                <div className='add-block'>
                    <span className='icon-span'><i className="fas fa-tasks"/></span>
                    <input type="date" id='inputDate' onChange={this.valueDateMethod}/>
                    <input type="text" placeholder='Enter task...' className="input-add" onChange={this.valueMethod}/>
                </div>

                <button type="button" className="btn-add" onClick={this.addItem}>Add</button>
                <button type="button" className="btn-clear" >Clear All</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoArr: state.tasks
    }
};

export default connect(mapStateToProps, actions)(AddTask);
