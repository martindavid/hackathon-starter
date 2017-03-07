const defaultState = {
    appName: 'Hackathon Starter',
    isDrawerOpen: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'DRAWER_CLICK':
          return {
              ...state,
              isDrawerOpen: action.isDrawerOpen
          }
    }
    return state;
}