import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../redux/actions";

export default function CountryContainer() {

  const countries = useSelector(state => state.countries); //Para poder utilizar un estado del reducer
  const dispatch = useDispatch(); //mapDispatchToProps

  useEffect(() => {
    if(countries.length === 0) {
      dispatch(getAllCountries())
    }// eslint-disable-next-line
  }, [])

  return(
    <div>
      {countries?.length > 0 && countries.map((c, i) => {
        return(
        <div key={i}>
          <p >{c.name.common} {c.flag}</p>
        </div>)
      })}
    </div>
  )
}