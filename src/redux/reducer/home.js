const inithome = {
    food: []
}

export const homeReducer = (state=inithome, action) => {
    if (action.type==='SET_FOOD') {
        return {
            ...state,
            food: action.value
        }
    }
    return state;
}