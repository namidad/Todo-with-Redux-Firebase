const initState = {
    projects: [
        {id: '1', title: 'kup mleko', content: '2% łaciate'},
        {id: '2', title: 'kup ser', content: 'gouda'},
        {id: '3', title: 'kup telefon', content: 'xiaomi'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT' : console.log("created project"); break;
    }
    return state;
};

export default projectReducer