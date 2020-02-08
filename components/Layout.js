import {Component, Fragment} from 'react'
import AppNavBar from './navigation';
import Footer from './Footer';

class Layout extends Component {

    render() {
        return (
            <Fragment>
                <AppNavBar/>
                {this.props.children}
                <Footer/>
            </Fragment>
        )
    }
}

export default Layout;