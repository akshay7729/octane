const initialState = {
    megaMenu: [],
    filters: [],
    currentPdp: []
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case 'ON_MEGA_NAV_LOAD':
        return {
            ...state,
            megaMenu: action.payload
        }
        case 'ON_FILTERS_LOAD':
        return {
            ...state,
            filters: action.payload
        }
        case 'ON_PDP_LOAD':
        return {
            ...state,
            currentPdp: action.payload
        }
        break;
        default : return state;
    }
}

export default reducer;