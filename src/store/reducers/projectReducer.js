const initState = {
    projects: [
        {id: '1', title: 'Project 1', content: ''},
        {id: '2', title: 'Project 2', content: ''},
        {id: '3', title: 'Project 3', content: ''},
        {id: '4', title: 'Project 4', content: ''},
        {id: '5', title: 'Project 5', content: ''},
    ]
};

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.error('created', action.error);
            return state;
        default:
            return state;
    }
};

export default projectReducer;