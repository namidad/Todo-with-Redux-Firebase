export const createProject = (project) => {
    return (dispatch, getState, { getFirebas, getFirestore }) => {

        dispatch({
            type: 'CREATE_PROJECT',
            project: project,
        });
    }
};