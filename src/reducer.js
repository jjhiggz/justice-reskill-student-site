function reducer(state, action) {
	const dispatch = {
		showSignUp() {
			return { ...state, showSignUp: true };
		},
		hideSignUp() {
			return { ...state, showSignUp: false };
		},
		showSignIn() {
			return { ...state, showSignIn: true };
		},
		hideSignIn() {
			return { ...state, showSignIn: false };
		},
		showCreateLesson() {
			return { ...state, showCreateLesson: true };
		},
		hideCreateLesson() {
			return { ...state, showCreateLesson: false };
		},
		setLesson() {
			return { ...state, lesson: action.payload };
		},
		default() {
			throw new Error("Please select a valid action");
		},
	};

	return dispatch[action.type in dispatch ? action.type : "default"]();
}

export default reducer;
