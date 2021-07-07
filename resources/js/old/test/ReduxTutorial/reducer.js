import { BUG_ADD, BUG_REMOVE, BUG_RESOLVE } from './actionType'



let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case BUG_ADD:
            return [
                ...state,
                {
                    id: ++lastId,
                    decription: action.payload.decription,
                    resolved: false
                }
            ]
        case BUG_REMOVE:
            return state.filter(bug => bug.id != action.payload.id)
        case BUG_RESOLVE:
            return state.map(bug =>
                bug.id !== action.payload.id ?
                    bug : { ...bug, resolved: true }
            )
    }

    return state
}