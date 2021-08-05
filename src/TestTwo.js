import Test from './Test.js';
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";


const TestTwo = () =>  {
    let index = window.location.pathname.slice(1)
    const [storage, setStorage] = useState([])

    useEffect(() => {
        fetch(`https://covid-19-statistics.p.rapidapi.com/reports?&iso=USA`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "ddcffc5ca4msh07c29406c412e82p118009jsn421f9db6a99a",
          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
        }
      })
      .then(response => response.json())
      .then(data => setStorage(data.data))
      .catch(err => console.error(err));
      }, [])


      return (
<div>

<div> 'Test Two index is: </div>
{storage.length === 0 ? <div>Loading</div> : <div>{storage[index].deaths}</div>}


</div>
)
    }

export default TestTwo