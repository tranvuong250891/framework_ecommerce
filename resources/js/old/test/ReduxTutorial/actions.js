import { BUG_ADD, BUG_REMOVE, BUG_RESOLVE } from './actionType'

export const bugAdded = decription => ({
    type: BUG_ADD,
    payload: {
        decription: decription
    }
})

export const bugResolved = id => ({
    type: BUG_ADD,
    payload: {
        id: id
    }
})
