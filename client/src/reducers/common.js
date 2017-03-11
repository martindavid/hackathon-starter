const defaultState = {
    appName: 'Hackathon Starter',
    isDrawerOpen: true
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