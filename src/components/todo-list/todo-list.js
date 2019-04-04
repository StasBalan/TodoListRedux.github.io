import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';
import * as actions from "../actions/actions";



class TodoList extends Component {

    filterS = (items, term = '', date = '') => {
        if (term.length === 0 && date.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term) > -1 && item.date.indexOf(date) > -1;
        });
    };


    render() {
        const visibleArr = this.filterS(this.props.todoArr, this.props.todoText, this.props.todoDate);
        const elementsTodos = visibleArr.map((task) => {
            return (
                <li key={task.id}  className='list-group-item'>
                    <TodoListItem {...task}
                    />
                </li>
            );
        });

        return (
            <ul className='list-group'>
                {elementsTodos}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoArr: state.tasks,
        todoText: state.taskS,
        todoDate: state.dateS
    }
};

export default connect(mapStateToProps, actions)(TodoList);
