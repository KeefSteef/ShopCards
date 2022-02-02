import {HIDE_MENU_TOGGLE, SHOW_MENU_TOGGLE, SHOW_LOADER_TOGGLE} from "./types/generalTypes";

const initialState = {
    showMenuToggle: false,
    showLoader: true
}

export function generalReducer(state = initialState, action ){
    switch (action.type){

        case SHOW_LOADER_TOGGLE:
            return{
                ...state,
                showLoader: action.payload
            }

        case SHOW_MENU_TOGGLE:
            return{
               ...state,
                showMenuToggle: action.payload
            }
        default:
            return {...state}
    }
}