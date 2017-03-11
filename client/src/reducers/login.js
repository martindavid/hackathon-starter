const defaultState = {
    isRegisterOpen: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'REGISTER_OPEN':
            return {
                ...state,
                isRegisterOpen: action.isOpen
            }
        default:
            return state;
    }
}