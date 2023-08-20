import {UserAction, UserActionTypes, UserState} from "../../types/user";

// описываем тип состояние
const initialState : UserState = {
    users: [],
    loading: false,
    error: null
}

// указываем, что редьюсер такого типа должен возвращать объект
export const userReducer = (state = initialState, action: UserAction) : UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload }
        case UserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload , users: [] }
        default:
            return state
    }
}