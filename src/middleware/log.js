export default ({ getState, dispatch }) => next => action => {
    console.log(`ACTION: ${action.type}`, action);

    next(action);
}