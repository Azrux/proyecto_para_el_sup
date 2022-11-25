import axios from "axios";
import { useEffect } from "react";

export default async function Copas() {
  const results = [];

  useEffect(() => {
   async function fetchData() {
    axios.get("https://restcountries.com/v3/all")
    .then(res => {
      res.data.map(r => {
        return results.push(r)
      })
    })
   }
   fetchData()
   console.log(results)
  }, []);


    return (
      <div>
        {results.length > 0 ? results.map((r) => {
          return (
            <div>
              <p>hola</p>
              <p>{r.flag}</p>
              <p>{r.name.common}</p>
            </div>
          );
        }) : (<p>No se encontró data</p>)}
      </div>
    );  
}
