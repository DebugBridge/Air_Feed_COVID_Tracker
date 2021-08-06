import './state.css'

//contains information reguading tools used for this application w/ links
const Tools = () => {

    return (

<div className="state-container">
    <div className="state-subcontainer">
        <div className="state-label-wrapper">
            <div className="state-label">
                <div className="stateTitle">Tools<br/></div>
            </div>
            <div className="stateSubTitle">Current version 1.0.1</div>
        </div>
        <div className="stateWrapper">
            <div className="state-container-information">
                <br/>
                <ul>
                    <li>
                        <div className="state-container-information-left">React.js</div>
                        <div className="state-container-information-right">reactjs.org</div>
                    </li>
                    <li>
                        <div className="state-container-information-left">Figma</div>
                        <div className="state-container-information-right">figma.com</div>
                    </li>
                    <li>
                        <div className="state-container-information-left">Zeplin</div>
                        <div className="state-container-information-right">zeplin.io</div>
                    </li>
                    <li>
                        <div className="state-container-information-left">Font Awesome Pro</div>
                        <div className="state-container-information-right">fontawesome.com</div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</div>
    );
  }

  export default Tools;