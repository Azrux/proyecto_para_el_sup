import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../redux/actions";

export default function CountryContainer() {

  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if(countries.length === 0) {
      dispatch(getAllCountries())
    }// eslint-disable-next-line
  }, [])

  return(
    <div>
      {countries?.length > 0 && countries.map(c => {
        return(<>
          <p>{c.name.common} {c.flag}</p>
        </>)
      })}
    </div>
  )
}