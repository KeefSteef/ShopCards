import {SHOW_LOADER_TOGGLE, SHOW_MENU_TOGGLE} from "../types/generalTypes";

export function toggleShowMenu(toggle){
    return {
        type: SHOW_MENU_TOGGLE,
        payload: toggle
    }
}

export function hideLoader(){
    return{
        type: SHOW_LOADER_TOGGLE,
        payload: false
    }
}