import React, {Component} from 'react';
import {connect} from 'react-redux';
import './todo-list-item.css';
import * as actions from "../actions/actions";

class TodoListItem extends Component {

    onDelete = (id) => () => {
        this.props.daleteTask(id);
    };

    importantTask = (id) => () => {
        this.props.changeImportant(id);
    };

    checkTask = (id) => () => {
        this.props.checkTask(id);
    };

    render() {
        const {label, date, id} = this.props;

        let item = 'item';

        if (this.props.check) {
            item += ' done';
        }

        if (this.props.important) {
            item += ' important';
        }

        return (
            <span className={item}>

            <span
                className='item-block'>
                <span className='item-date'>{date}</span>
                <span className='item-text' id={id} onClick={this.checkTask(id)}>{label}</span>
            </span>
             <div className='item-btn-block'>
               <button type="button" className="btn btn-outline-success" onClick={this.importantTask(id)}><i
                   className="fas fa-star" id={id}/></button>
                <button type="button" className="btn btn-outline-danger" onClick={this.onDelete(id)}><i
                    className="fas fa-trash-alt" id={id}/></button>
             </div>

        </span>
        );
    }
}

export default connect(null, actions)(TodoListItem);