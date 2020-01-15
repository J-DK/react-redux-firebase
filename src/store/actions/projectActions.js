export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to server
        dispatch({type: 'CREATE_PROJECT', project: project});
    };
};