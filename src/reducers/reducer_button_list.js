import _ from 'lodash';
import { CREATE_BOARD } from '../actions';
import { SELECT_SWITCH } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case CREATE_BOARD:
            return _.mapKeys(action.payload, 'id');
        
        case SELECT_SWITCH:
            const buttonNum = action.payload;
            const newState = { ...state, };
            newState[buttonNum] = switchStatusAndText(newState[buttonNum]);
            return newState;

        default:
            return state;
    }
}

function switchStatusAndText(buttonObj) {
    if(buttonObj.status === 'inactive' && buttonObj.text === 'Off') {
        buttonObj.status = 'active';
        buttonObj.text = 'On';
        return buttonObj;
    } else if (buttonObj.status === 'active' && buttonObj.text === 'On') {
        buttonObj.status = 'inactive';
        buttonObj.text = 'Off';
        return buttonObj;
    }
}