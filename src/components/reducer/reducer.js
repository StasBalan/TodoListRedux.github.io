const reducer = (
    state = {
        tasks: [],
        taskS: '',
        dateS: ''
    }
    , action) => {
    switch(action.type) {
        case 'ADD_TASK':
            var newArr = [...state.tasks, action.payload];
            return {
                ...state,
                tasks: newArr
            };
        case 'CHECK_TASK':
            var newArr = state.tasks.map((item) => {
                if (item.id === action.id) {
                    item.check = !item.check;
                    return item;
                }
                return item;
            });
            return {
                ...state,
                tasks: newArr
            };
        case 'DELETE_TASK':
            var newArr = state.tasks.filter((item) => {
               return item.id !== action.id;
            });
            return {
                ...state,
                tasks: newArr
            };
        case 'CHANGE_IMPORTANT':
            var newArr = state.tasks.map((item) => {
                if (item.id === action.id) {
                    item.important = !item.important;
                    return item;
                }
                return item;
            });
            return {
                ...state,
                tasks: newArr
            };
        case 'SORT_ABC':
            return {
                ...state,
                tasks: action.payload
            };
        case 'SORT_DATE':
            return {
              ...state,
              tasks: action.payload
            };
        case 'SEARCH_DATE':
            return {
              ...state,
                dateS:action.payload
            };
        case 'SEARCH_TEXT':
            return {
                ...state,
                taskS:action.payload
            };
        default:
            return state;
    }
};

export default reducer