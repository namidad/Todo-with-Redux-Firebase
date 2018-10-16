const initState = {
    projects: [
        {id: '1', title: 'kup mleko', content: '2% łaciate'},
        {id: '2', title: 'kup ser', content: 'gouda'},
        {id: '3', title: 'kup telefon', content: 'xiaomi'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT' :
            return state;
        case 'CREATE_PROJECT_ERROR' :
            console.log('error',action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer