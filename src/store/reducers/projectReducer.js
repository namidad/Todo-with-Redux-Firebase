const initState = {
    projects: [
        {id: '1', title: 'kup mleko', content: '2% łaciate'},
        {id: '2', title: 'kup ser', content: 'gouda'},
        {id: '3', title: 'kup telefon', content: 'xiaomi'}
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
};

export default projectReducer