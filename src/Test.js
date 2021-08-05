import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';

//Change Test to whatever is req
let Test = () => {
  const [dataStorage, setDataStorage] = useState([]);
  const [userInput, setUserInput] = useState(" ");

  useEffect(() => {
    fetch(`https://covid-19-statistics.p.rapidapi.com/reports?&iso=USA`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "ddcffc5ca4msh07c29406c412e82p118009jsn421f9db6a99a",
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(data => setDataStorage(data.data))
  .then()
  .catch(err => console.error(err));
  }, [])

let onInputListener = (e) => {
  setUserInput(e.target.value)
}
let history = useHistory();
 const changeUrlBar = (e) => {
   history.push(`/state/:${e.target.id}`)
 }
return (
  <div>
  <label for="fname">user typing state of choice:</label>
  <input type="text" id="fname" onInput={onInputListener} name="fname"/>
 {
   dataStorage.map((updatedData, index) => {
    if (updatedData.region.province.toUpperCase().indexOf(userInput.toUpperCase()) === 0) {
      return (
      <div id={index} onClick={changeUrlBar}>
        {updatedData.region.province}
      </div>)
    }
   })
 }
  </div>
)

}

export default Test








