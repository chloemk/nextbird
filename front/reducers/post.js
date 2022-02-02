// * 시퀄라이즈에서 한 정보와 다른 정보가 관계가 있으면 합쳐준다. 합쳐주는 것들은 대문자가 되어서 나온다.
export const initialState = {
	mainPosts: [
		{
			id: 1,
			User: {
				id: 1,
				nickname: '클로이',
			},
			content: '첫 번째 게시글 #해시태그 #익스프레스 #넥스트버드',
			Images: [
				{
					src: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
				},
				{
					src: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
				},
				{
					src: 'https://i.picsum.photos/id/244/200/300.jpg?grayscale&hmac=MY4XcOba8Pr3fIq4yBOIvVk5F54nfHVqA-S0z7oJv4I',
				},
			],
			Comments: [
				{
					User: {
						id: 1,
						nickname: '조이',
					},
					content: '얼른 사고 싶네요!',
				},
			],
		},
	],
	imagePaths: [],
	postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
	type: ADD_POST,
};

const dummyPost = {
	id: 2,
	content: '더미데이터입니다',
	User: {
		id: 1,
		nickname: '클로이',
	},
	Images: [],
	Comments: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				// ? 게시글 위로 올리기 위해 dummyPost를 앞에 놓았다.
				mainPosts: [dummyPost, ...state.mainPosts],
				postAdded: true,
			};
		default:
			return state;
	}
};

export default reducer;
