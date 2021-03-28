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
		showCreateItem() {
			return {
				...state,
				itemName: action.payload.itemName,
				learningObjective: action.payload.learningObjective,
				showCreateItem: true,
			};
		},
		hideCreateItem() {
			return {
				...state,
				item: {},
				itemName: "",
				showCreateItem: false,
			};
		},
		showDeleteItem() {
			return {
				...state,
				item: action.payload.item,
				itemName: action.payload.itemName,
				showDeleteItem: true,
			};
		},
		hideDeleteItem() {
			return {
				...state,
				item: {},
				itemName: "",
				showDeleteItem: false,
			};
		},
		showCreateLearningObjective() {
			return {
				...state,
				mod: action.payload.item,
				itemName: action.payload.itemName,
				showCreateLearningObjective: true,
			};
		},
		hideCreateLearningObjective() {
			return {
				...state,
				showCreateLearningObjective: false,
			};
		},
		showCreateMod() {
			return {
				...state,
				showCreateMod: true,
			};
		},
		hideCreateMod() {
			return {
				...state,
				showCreateMod: false,
			};
		},

		// showDeleteItem() {},
		showDeleteLesson() {
			// ! replace with show delete item
			return { ...state, lesson: action.payload, showDelete: true };
		},
		showDeleteLearningObjective() {
			return {
				...state,
				showDeleteLearningObjective: true,
				learningObjective: action.payload,
			};
		},
		hideDeleteLearningObjective() {
			return { ...state, showDeleteLearningObjective: false };
		},
		showDeleteMod() {
			return {
				...state,
				mod: action.payload,
				itemName: "mod",
				showDeleteMod: true,
			};
		},
		hideDeleteMod() {
			return {
				...state,
				showDeleteMod: false,
				mod: {},
				itemName: "",
			};
		},
		setMod() {
			return { ...state, learningMod: action.payload };
		},
		setLearningObjective() {
			return { ...state, learningObjective: action.payload };
		},
		setLearningObjectives() {
			return {
				...state,
				learningObjectives: [...state.learningObjectives, action.payload],
			};
		},
		default() {
			throw new Error(action.type + " is not a valid action");
		},
	};

	return dispatch[action.type in dispatch ? action.type : "default"]();
}

export default reducer;
