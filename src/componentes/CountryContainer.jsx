import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCountries } from "../redux/actions";

export class CountryContainer extends Component {
	//const countries = useSelector((state) => state.countries); //Para poder utilizar un estado del reducer
	//const dispatch = useDispatch(); //mapDispatchToProps

	// en vez de useEffect vamos a usar componentDidMount
	/* useEffect(() => {
		if (countries.length === 0) {
			dispatch(getAllCountries());
		} // eslint-disable-next-line
	}, []); */

	componentDidMount() {
		this.props.getAllCountries();
	}

	render() {
		return (
			<div>
				{this.props.countries?.length > 0 &&
					this.props.countries.map((c, i) => {
						return (
							<div key={i}>
								<p>
									{c.name.common} {c.flag}
								</p>
							</div>
						);
					})}
			</div>
		);
	}
}

export const mapStateToProps = function (state) {
	return {
		countries: state.countries,
	};
};

export const mapDispatchToProps = function (dispatch) {
	return {
		getAllCountries: () => dispatch(getAllCountries()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CountryContainer);
