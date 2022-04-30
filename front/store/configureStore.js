import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';
import rootSaga from '../sagas';

// * 스토어 연동 코드
const configureStore = () => {
	// create the saga middleware
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	const enhancer =
		process.env.NODE_ENV === 'production'
			? compose(applyMiddleware(...middlewares)) //배포용
			: composeWithDevTools(applyMiddleware(...middlewares)); //개발용

	// mount it on the Store
	const store = createStore(reducer, enhancer);

	// then run the saga / next.js를 사용하는 경우 sagaTask를 정해주어야한다.
	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};

const wrapper = createWrapper(configureStore);
export default wrapper;
