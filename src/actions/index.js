export const SELECT_SWITCH = 'select_switch';
export const CREATE_BOARD = 'create_board';

export function selectButton(buttonNum) {
    return {
        type: SELECT_SWITCH,
        payload: buttonNum
    }
}

export function setBoardState(boardSize) {
    const boardStatus = boardSize.map((idx) => { return {id: idx, status: 'inactive', text: 'Off'} })
    return {
        type: CREATE_BOARD,
        payload: boardStatus
    }
}