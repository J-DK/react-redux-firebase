export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        // make async call to server (API calls)
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorName: 'JDK',
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project: project});
        }).catch((error) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', error});
        });
    };
};