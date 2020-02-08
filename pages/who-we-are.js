import {Component} from 'react'
import AppLayout from '../components/app';
import {activePage} from "../actions/actions";
import {connect} from 'react-redux'
import Section1 from '../components/aboutUsSection1';

class aboutUs extends Component {

    static getInitialProps() {
    }


    componentDidMount() {
        this.props.dispatch(activePage('who-we-are'))
    }

    render() {

        return (
            <AppLayout>
                <Section1 />
            </AppLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state,
    }
}
export default connect(mapStateToProps)(aboutUs);