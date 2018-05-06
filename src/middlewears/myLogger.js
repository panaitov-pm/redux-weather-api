export default ({getState}) => next => action => {
	console.log('---Prev State: ', getState());
   console.log('---Action: ', action);
   next(action);
	console.log('---Next State: ', getState());
}