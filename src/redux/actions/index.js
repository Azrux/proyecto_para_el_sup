import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";

export function getAllCountries() {
	return async function (dispatch) {
		return axios
			.get("https://restcountries.com/v3/all")
			.then((res) => {
				dispatch({
					type: GET_ALL_COUNTRIES, //Obligatorio
					payload: res.data,
				});
			})
			.catch((e) => {
				console.log(e.response.data);
			});
	};
}
