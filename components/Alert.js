import {Alert} from 'react-bootstrap'
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import Cookie from 'js-cookie';

const NagdaAlert = (props) => {
    const [show, setShow] = useState(true);

    function display() {
        if (!show) {
            return 'force-d-none';
        }

        return '';
    }

    function setCookieAnswear() {
        setShow(false);
        if (Cookie.get('cookie_permission') == undefined) {
            Cookie.set('cookie_permission', true);
        }
    }

    useEffect(() => {


    }, [show]);
    return (

        <div className="div-control d-flex flex-row justify-content-center position-fixed w-100" style={{bottom: 0}}>

            <div
                className={`col-lg-6 col-md-8 col-10 text-center d-flex flex-row ${display()} alert alert-${props.variant} `}
                role="alert">

                <FontAwesomeIcon icon={faExclamationCircle} className="fa-2x ml-3"/>

                <small>
                    من اجل تجربة مستخدم وامان افضل نحيط علمكم بأننا نستخدم الكوكيز وهذا اعلان منا بذلك احتراما لخصوصيتكم
                </small>

                <button className="btn btn-warning mr-4" onClick={() => setCookieAnswear()}>
                    موافق
                </button>

            </div>
        </div>

    )
};


export default NagdaAlert;