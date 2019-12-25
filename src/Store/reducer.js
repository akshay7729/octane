const initialState = {
    megaMenu: []
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case 'ON_MEGA_NAV_LOAD':
        return {
            ...state,
            megaMenu: action.payload
        }
        break;
        default : return state;
    }
}

export default reducer;