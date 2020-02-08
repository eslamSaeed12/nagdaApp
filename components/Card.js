import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faAt} from '@fortawesome/free-solid-svg-icons/faAt';
import {faBehance} from '@fortawesome/free-brands-svg-icons/faBehance'
import {useState, useEffect} from "react";

const Card = (props) => {

    const [tooltipShow, setTotlipShow] = useState(false);
    const [thirdIcon, setThirdIconHook] = useState(false);

    useEffect(() => {
        if (props.professionMode) {
            setThirdIconHook(true)
        }
    }, [])

    function setThirdIcon() {

        if (thirdIcon) {
            switch (props.profession) {
                case 'dev':
                    return (<li>
                        <a className={"nav-link"} style={{fontSize: "1.7rem"}}
                           href={props.professionHref}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>)
                    break;
                case  'des' :
                    return (<li>
                        <a className={"nav-link"} style={{fontSize: "1.7rem"}}
                           href={props.professionHref}>
                            <FontAwesomeIcon icon={faBehance}/>
                        </a>
                    </li>)
                    break;
            }
        }
    }

    return (
        <div className={"col-lg-6 card-team-item my-3 fancy-card-hvr"}>
            <div className={"row"}>
                <div className={"col-6"}>
                    <img src={props.img} className="w-40 rounded mt-3 shadow"/>
                </div>
                <div className="col-6 text-right ">

                    <h3 className="title">{props.title}</h3>
                    <h6 className="card-subtitle  badge badge-primary ">{props.subtitle}</h6>

                    <p className={'lead text-muted'}>
                        {props.role}
                    </p>
                    <ul className="nav pr-0">

                        <li className="nav-item " style={{fontSize: "1.7rem"}}>
                            <a target={"_blank"} href={props.facebook} className="nav-link">
                                <FontAwesomeIcon icon={faFacebook} id="facebook-link" placement="top"/>
                            </a>
                        </li>

                        <li className="nav-item position-relative" style={{fontSize: "1.7em"}} title={"email"}>
                            <span className="px-3 py-2 badge badge-dark rounded shadow"
                                  style={{
                                      display: tooltipShow ? 'block' : "none",
                                      position: 'absolute',
                                      top: '-25px',
                                      fontSize: 'small',
                                      color: "#fff",
                                      fontWeight: 'normal'
                                  }}>
                                {props.email}
                            </span>
                            <a style={{cursor: "pointer"}} className="nav-link"
                               onClick={() => setTotlipShow(!tooltipShow)}>
                                <FontAwesomeIcon icon={faAt}/>
                            </a>
                        </li>
                        {setThirdIcon()}
                    </ul>
                </div>
            </div>
        </div>
    )
};


export default Card;