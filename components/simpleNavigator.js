import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDotCircle} from '@fortawesome/free-solid-svg-icons/faDotCircle';
import {Link} from 'react-scroll'

export function SimpleNavigator(props) {


    return (
        <section className="position-fixed" style={{zIndex: 566, top: '50%', left: '2em'}}>
            <ul className="list-unstyled list-group p-0">
                {props.children}
            </ul>
        </section>
    )
};

export function SimpleNavigatorItem(props) {


    return (

        <li>
            <Link
                activeClass=" active-navigator "
                  className="activeDot" to={props.target} spy={true} smooth={true}
                  hashSpy={true}
                  offset={props.offset} duration={props.duration}>
                <FontAwesomeIcon icon={faDotCircle} className="navigator-icon"/>
            </Link>
        </li>

    )
};
