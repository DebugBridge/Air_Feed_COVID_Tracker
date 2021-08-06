import './state.css'

import {useState, useEffect} from "react";

//State is used for displaying state data
const State = () =>  {

    // this slice action allows us to grab the content after the "/"
    let index = window.location.pathname.slice(1)

    //used to contain our fetched COVID data
    const [storage, setStorage] = useState([])

    //when the windows opens, fetched the data and sets it to our storage state
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

<div className="state-container">
    <div className="state-subcontainer">
        <div className="state-label-wrapper">
            <div className="state-label">
                {/* if storage is empty, it will display nothing - else - dispay the state */}
                <div className="stateTitle">{storage.length === 0 ? <br/> : storage[index].region.province}</div>
                <div className="stateIcon">
                    {/* for genterating which icon will load based on fatality_rate from the data */}
                    {storage.length !== 0 && storage[index].fatality_rate >= .02 ? <>
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 0.4375C6.04234 0.4375 0 6.50781 0 14C0 21.4922 6.04234 27.5625 13.5 27.5625C20.9577 27.5625 27 21.4922 27 14C27 6.50781 20.9577 0.4375 13.5 0.4375ZM13.5 24.9375C7.49577 24.9375 2.6129 20.032 2.6129 14C2.6129 7.96797 7.49577 3.0625 13.5 3.0625C19.5042 3.0625 24.3871 7.96797 24.3871 14C24.3871 20.032 19.5042 24.9375 13.5 24.9375ZM11.6601 13.0211C12.0847 12.5945 12.0847 11.9 11.6601 11.4734L10.6857 10.5L11.6601 9.52109C12.0847 9.09453 12.0847 8.4 11.6601 7.97344C11.2355 7.54688 10.5442 7.54688 10.1196 7.97344L9.14516 8.95234L8.17621 7.97891C7.75161 7.55234 7.06028 7.55234 6.63569 7.97891C6.21109 8.40547 6.21109 9.1 6.63569 9.52656L7.61008 10.5055L6.63569 11.4844C6.21109 11.9109 6.21109 12.6055 6.63569 13.032C7.06028 13.4586 7.75161 13.4586 8.17621 13.032L9.14516 12.0586L10.1141 13.032C10.5442 13.4531 11.23 13.4531 11.6601 13.0211ZM20.3698 7.97891C19.9452 7.55234 19.2538 7.55234 18.8292 7.97891L17.8548 8.95234L16.8859 7.97891C16.4613 7.55234 15.77 7.55234 15.3454 7.97891C14.9208 8.40547 14.9208 9.1 15.3454 9.52656L16.3198 10.5055L15.3454 11.4844C14.9208 11.9109 14.9208 12.6055 15.3454 13.032C15.77 13.4586 16.4613 13.4586 16.8859 13.032L17.8548 12.0586L18.8238 13.032C19.2484 13.4586 19.9397 13.4586 20.3643 13.032C20.7889 12.6055 20.7889 11.9109 20.3643 11.4844L19.3954 10.5L20.3698 9.52109C20.7889 9.09453 20.7889 8.40547 20.3698 7.97891ZM13.5 14.875C11.5784 14.875 10.0161 16.4445 10.0161 18.375C10.0161 20.3055 11.5784 21.875 13.5 21.875C15.4216 21.875 16.9839 20.3055 16.9839 18.375C16.9839 16.4445 15.4216 14.875 13.5 14.875Z" fill="#FF0000"/>
                                </svg></>
                    : storage.length !== 0 && storage[index].fatality_rate >= .015 ? <>
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 0.4375C6.04234 0.4375 0 6.50781 0 14C0 21.4922 6.04234 27.5625 13.5 27.5625C20.9577 27.5625 27 21.4922 27 14C27 6.50781 20.9577 0.4375 13.5 0.4375ZM13.5 24.9375C7.49577 24.9375 2.6129 20.032 2.6129 14C2.6129 7.96797 7.49577 3.0625 13.5 3.0625C19.5042 3.0625 24.3871 7.96797 24.3871 14C24.3871 20.032 19.5042 24.9375 13.5 24.9375ZM18.2903 8.3125C16.1238 8.3125 14.371 10.0734 14.371 12.25C14.371 14.4266 16.1238 16.1875 18.2903 16.1875C20.4569 16.1875 22.2097 14.4266 22.2097 12.25C22.2097 10.0734 20.4569 8.3125 18.2903 8.3125ZM18.2903 14.4375C17.0873 14.4375 16.1129 13.4586 16.1129 12.25C16.1129 11.5063 16.5103 10.8773 17.0764 10.4836C17.022 10.6258 16.9839 10.7734 16.9839 10.9375C16.9839 11.6648 17.5663 12.25 18.2903 12.25C19.0143 12.25 19.5968 11.6648 19.5968 10.9375C19.5968 10.7789 19.5587 10.6258 19.5042 10.4836C20.0704 10.8773 20.4677 11.5063 20.4677 12.25C20.4677 13.4586 19.4933 14.4375 18.2903 14.4375ZM12.629 12.25C12.629 10.0734 10.8762 8.3125 8.70968 8.3125C6.54315 8.3125 4.79032 10.0734 4.79032 12.25C4.79032 14.4266 6.54315 16.1875 8.70968 16.1875C10.8762 16.1875 12.629 14.4266 12.629 12.25ZM6.53226 12.25C6.53226 11.5063 6.92964 10.8773 7.49577 10.4836C7.44133 10.6258 7.40323 10.7734 7.40323 10.9375C7.40323 11.6648 7.98569 12.25 8.70968 12.25C9.43367 12.25 10.0161 11.6648 10.0161 10.9375C10.0161 10.7789 9.97802 10.6258 9.92359 10.4836C10.4897 10.8773 10.8871 11.5063 10.8871 12.25C10.8871 13.4586 9.9127 14.4375 8.70968 14.4375C7.50665 14.4375 6.53226 13.4586 6.53226 12.25ZM16.9839 19.25H10.0161C9.29758 19.25 8.70968 19.8406 8.70968 20.5625C8.70968 21.2844 9.29758 21.875 10.0161 21.875H16.9839C17.7024 21.875 18.2903 21.2844 18.2903 20.5625C18.2903 19.8406 17.7024 19.25 16.9839 19.25Z" fill="#FDBD39"/>
                                </svg></>
                    : storage.length !== 0 && storage[index].fatality_rate >= 0 ? <>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.5625 0.4375C6.07031 0.4375 0 6.50781 0 14C0 21.4922 6.07031 27.5625 13.5625 27.5625C21.0547 27.5625 27.125 21.4922 27.125 14C27.125 6.50781 21.0547 0.4375 13.5625 0.4375ZM13.5625 24.9375C7.53047 24.9375 2.625 20.032 2.625 14C2.625 7.96797 7.53047 3.0625 13.5625 3.0625C19.5945 3.0625 24.5 7.96797 24.5 14C24.5 20.032 19.5945 24.9375 13.5625 24.9375ZM18.1562 17.0953C17.0187 18.4625 15.3398 19.25 13.5625 19.25C11.7852 19.25 10.1062 18.468 8.96875 17.0953C8.50391 16.5375 7.67812 16.4664 7.12031 16.9258C6.5625 17.3906 6.49141 18.2164 6.95078 18.7742C8.59141 20.743 11.0031 21.8695 13.5625 21.8695C16.1219 21.8695 18.5336 20.743 20.1742 18.7742C20.6391 18.2164 20.5625 17.3906 20.0047 16.9258C19.4469 16.4664 18.6211 16.5375 18.1562 17.0953ZM7.46484 11.5391C7.88594 10.7898 8.51484 10.3578 9.1875 10.3578C9.86016 10.3578 10.4891 10.7898 10.9102 11.5391L11.4297 12.4688C11.5445 12.6711 11.7688 12.7258 11.9383 12.6711C12.1352 12.6109 12.2664 12.425 12.25 12.2172C12.0695 9.91484 10.4891 8.3125 9.1875 8.3125C7.88594 8.3125 6.30547 9.91484 6.125 12.2172C6.10859 12.4195 6.23984 12.6109 6.43672 12.6711C6.62266 12.7312 6.84141 12.6438 6.94531 12.4688L7.46484 11.5391ZM17.9375 8.3125C16.6359 8.3125 15.0555 9.91484 14.875 12.2172C14.8586 12.4195 14.9898 12.6109 15.1867 12.6711C15.3781 12.7312 15.5914 12.6438 15.6953 12.4688L16.2148 11.5391C16.6359 10.7898 17.2648 10.3578 17.9375 10.3578C18.6102 10.3578 19.2391 10.7898 19.6602 11.5391L20.1797 12.4688C20.2945 12.6711 20.5187 12.7258 20.6883 12.6711C20.8852 12.6109 21.0164 12.425 21 12.2172C20.8195 9.91484 19.2391 8.3125 17.9375 8.3125Z" fill="#0ACF83"/>
                                </svg></>
                    : <div></div>}
                </div>
            </div>
            <div className="stateSubTitle">Your current location</div>
        </div>
        <div className="stateWrapper">
            <div className="state-container-card">
                {/* displaying a state in the color corresponding to the fatality_rate */}
            {storage.length !== 0 && storage[index].fatality_rate >= .02 ? <> Why is <span id="red">{storage[index].region.province}</span> under<br/> current COVID status?</>
            : storage.length !== 0 && storage[index].fatality_rate >= .015 ? <> Why is <span id="yellow">{storage[index].region.province}</span> under<br/> current COVID status?</>
            : storage.length !== 0 && storage[index].fatality_rate >= 0 ? <> Why is <span id="green">{storage[index].region.province}</span> under<br/> current COVID status?</>
            : <div></div>}
            </div>
            <div className="state-container-information">
                <ul>
                    {/* another storage check to see if it should render either loading or our populated COVID data */}
                    {storage.length === 0 ? <div>Loading...</div> :
                    <>
                    <li>
                        <div className="state-container-information-left">Deaths:</div>
                        <div className="state-container-information-right">
                            {/* displaying a state in the color corresponding to the fatality_rate */}
                            {storage.length !== 0 && storage[index].fatality_rate >= .02 ? <> <span id="red">{storage[index].deaths}</span></>
                            : storage.length !== 0 && storage[index].fatality_rate >= .015 ? <> <span id="yellow">{storage[index].deaths}</span></>
                            : storage.length !== 0 && storage[index].fatality_rate >= 0 ? <> <span id="green">{storage[index].deaths}</span></>
                            : <div></div>}
                        </div>
                    </li>
                    <li>
                        <div className="state-container-information-left">Fatality Rate:</div>
                        <div className="state-container-information-right">
                            {/* displaying a state in the color corresponding to the fatality_rate */}
                            {storage.length !== 0 && storage[index].fatality_rate >= .02 ? <> <span id="red">{storage[index].fatality_rate}</span></>
                            : storage.length !== 0 && storage[index].fatality_rate >= .015 ? <> <span id="yellow">{storage[index].fatality_rate}</span></>
                            : storage.length !== 0 && storage[index].fatality_rate >= 0 ? <> <span id="green">{storage[index].fatality_rate}</span></>
                            : <div></div>}
                        </div>
                    </li>
                    <li>
                        <div className="state-container-information-left">Confirmed Cases:</div>
                        <div className="state-container-information-right">
                            {/* displaying a state in the color corresponding to the fatality_rate */}
                            {storage.length !== 0 && storage[index].fatality_rate >= .02 ? <> <span id="red">{storage[index].confirmed}</span></>
                            : storage.length !== 0 && storage[index].fatality_rate >= .015 ? <> <span id="yellow">{storage[index].confirmed}</span></>
                            : storage.length !== 0 && storage[index].fatality_rate >= 0 ? <> <span id="green">{storage[index].confirmed}</span></>
                            : <div></div>}
                        </div>
                    </li>
                    <li>
                        <div className="state-container-information-left">Active Cases:</div>
                        <div className="state-container-information-right">
                            {/* displaying a state in the color corresponding to the fatality_rate */}
                            {storage.length !== 0 && storage[index].fatality_rate >= .02 ? <> <span id="red">{storage[index].active}</span></>
                            : storage.length !== 0 && storage[index].fatality_rate >= .015 ? <> <span id="yellow">{storage[index].active}</span></>
                            : storage.length !== 0 && storage[index].fatality_rate >= 0 ? <> <span id="green">{storage[index].active}</span></>
                            : <div></div>}
                        </div>
                    </li>
                    <li>
                        <div className="state-container-information-left">Last Data Update:</div>
                        <div className="state-container-information-right">{storage[index].date}</div>
                    </li>
                    </>
                }
                </ul>
            </div>
        </div>

    </div>
</div>











)
    }
    export default State;
