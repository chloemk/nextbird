import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import post from './post';
import user from './user';

const rootReducer = combineReducers({
	// ! SSR을 위해 들어간 부분
	index: (state = {}, action) => {
		switch (action.type) {
			case HYDRATE:
				console.log('HYDRATE', action);
				return { ...state, ...action.payload };

			default:
				return state;
		}
	},
	user,
	post,
});

export default rootReducer;
