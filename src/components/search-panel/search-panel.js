import React, {Component} from 'react';
import {connect} from 'react-redux';
import './search-panel.css';
import * as actions from "../actions/actions";


class SearchPanel extends Component {

    onSearchInput = (e) => {
        this.props.serachText(e.target.value);
    };

    onSearchDate = (e) => {
        this.props.serachDate(e.target.value);
    };

    onSortAbc = () => {
        const newArr = this.props.todoArr.slice();
        newArr.sort(this.abc);
        this.props.sortABC(newArr);
    };

    onSortDate = () => {
        const newArr = this.props.todoArr.slice();
        newArr.sort(this.numb);
        this.props.sortDate(newArr);
    };

    abc = (a, b) => {
        const TextA = a.label.toLowerCase();
        const TextB = b.label.toLowerCase();
        return (TextA < TextB) ? -1 : 1;
    };

    numb = (a, b) => {
        return new Date(a.date) - new Date(b.date);
    };

    render() {
        return (
            <form className="form-search">
                <div className='search-block'>
                    <span className='icon-span'><i className="fas fa-search"/></span>
                    <input type="text" placeholder='Search...' className="input-search"
                           onChange={this.onSearchInput}/>
                    <input type="date" className='input-date-search' onChange={this.onSearchDate}/>
                </div>

                <button type="button" className="btn-sort" onClick={this.onSortAbc}>Sort ABC</button>
                <button type="button" className="btn-sort" onClick={this.onSortDate}>Sort DATE</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoArr: state.tasks
    };
};

export default connect(mapStateToProps, actions)(SearchPanel);