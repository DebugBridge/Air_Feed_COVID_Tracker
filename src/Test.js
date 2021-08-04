import {useState, useEffect} from 'react'
//no date = current
//q for region  && province



let Test = () => {
  const [dataStorage, setDataStorage] = useState([]);

//   let getCovidData = async () => {
//    await fetch(`https://covid-19-statistics.p.rapidapi.com/reports?&iso=USA`, {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": "ddcffc5ca4msh07c29406c412e82p118009jsn421f9db6a99a",
//       "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
//     }
//   })
//   .then(response => response.json())
//   .catch(err => console.error(err));
// }

  useEffect(() => {
    fetch(`https://covid-19-statistics.p.rapidapi.com/reports?&iso=USA`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "ddcffc5ca4msh07c29406c412e82p118009jsn421f9db6a99a",
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(data => setDataStorage(data))
  .catch(err => console.error(err));
  }, [])

return (
  <div>
    I'm a div
  </div>
)

}



export default Test








