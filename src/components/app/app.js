import React, {Component} from 'react';
import AppHeader from '../app-header';
import AddTask from '../add-task';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

class App extends Component {

    render() {
        return (
            <div className='todo-list'>
                <AppHeader/>
                <AddTask />
                <SearchPanel />
                <TodoList />
            </div>
        );
    }
}

export default App;
