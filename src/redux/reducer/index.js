import { GET_ALL_COUNTRIES } from "../actions";

export const initialState = {
	countries: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_COUNTRIES: {
			return {
				...state,
				countries: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
}
