import Test from './Test.js';
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";


const TestTwo = () =>  {
    const { index } = useParams();
    const [dataBoy, setDataBoy] = useState([])

    useEffect(() => {
        fetch(`https://covid-19-statistics.p.rapidapi.com/reports?&iso=USA`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "ddcffc5ca4msh07c29406c412e82p118009jsn421f9db6a99a",
          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
        }
      })
      .then(response => response.json())
      .then(data => setDataBoy(data.data))
      .then()
      .catch(err => console.error(err));
      }, [])


      return (
          <div>
<div> 'Test Two index is:'{index} </div>
<div>  {dataBoy.toString} </div>
</div>
)
    }

export default TestTwo