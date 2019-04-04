export const addTask = (payload) => {
  return {type: 'ADD_TASK', payload};
};
export const checkTask = (id) => {
    return {type: 'CHECK_TASK', id};
};

export const changeImportant = (id) => {
    return {type: 'CHANGE_IMPORTANT', id};
};

export const daleteTask = (id) => {
    return {type: 'DELETE_TASK', id};
};

export const sortABC = (payload) => {
    return {type: 'SORT_ABC', payload};
};

export const sortDate = (payload) => {
    return {type: 'SORT_DATE', payload};
};

export const serachDate = (payload) => {
    return {type: 'SEARCH_DATE', payload}
};

export const serachText = (payload) => {
    return {type: 'SEARCH_TEXT', payload}
};

