export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('prevState: ', prevState)
        console.log('Argument: ', args, action)
        const nextState = reducer(prevState, action, args)
        console.log('Next-state : ', nextState)
        console.groupEnd()
        return nextState
    }
}