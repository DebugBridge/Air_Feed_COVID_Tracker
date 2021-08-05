<div>
  <div data-cy="state-status">
  {storage.length !== 0 && storage[index].fatality_rate >= .02 ? <> Why is <div id="red">{storage[index].region.province} </div> this status?</>
  : storage.length !== 0 && storage[index].fatality_rate >= .01 ? <> Why is <div id="yellow">{storage[index].region.province}</div> this status?</>
  : storage.length !== 0 && storage[index].fatality_rate >= .0001 ? <> Why is <div id="green">{storage[index].region.province}</div> this status?</>
  : <div></div>}
 <br></br>
  </div>

  <div>


  {storage.length === 0 ? <div>Loading...</div> :
    <>
    {/* <div> {storage[index].region.province} </div> */}
    <br></br>
    <div>Deaths: {storage[index].deaths}</div>

    <div>Fatality Rate: {storage[index].fatality_rate}</div>

    <div>Confirmed Cases: {storage[index].confirmed}</div>

    <div>Active Cases: {storage[index].active}</div>

    <div>Last Data Update: {storage[index].date}</div>
    </>
  }


  </div>

</div>
