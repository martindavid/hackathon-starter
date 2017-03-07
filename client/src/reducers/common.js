const defaultState = {
    isDrawerOpen: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'DRAWER_CLICK':
          console.log(action);
          return {
              ...state,
              isDrawerOpen: action.isDrawerOpen
          }
    }
    return state;
}