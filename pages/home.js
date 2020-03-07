import {Component, Fragment} from "react";
import AppLayout from '../components/app';
import {activePage} from "../actions/actions";
import {connect} from 'react-redux'
import SvgHeader from "../components/header";
import HeaderSection2 from '../components/headerSection2';
import AboutApp from '../components/AboutApp';
import {SimpleNavigator, SimpleNavigatorItem} from '../components/simpleNavigator';
import {Element} from 'react-scroll';

class homePage extends Component {

    static getInitialProps({store, isServer, pathname, query}) {
        store.dispatch(activePage('home'))
    }

    componentDidMount() {
        this.props.dispatch(activePage('home'));
    }

    render() {
        return (
            <AppLayout>
                <Fragment>
                    <Element name="firstInsideContainer">
                        <SvgHeader/>
                    </Element>
                    <HeaderSection2/>
                    <Element name="about-app">
                        <AboutApp/>
                    </Element>
                    <SimpleNavigator>
                        <SimpleNavigatorItem target="firstInsideContainer" active="activeNavigatorDot"/>
                        <SimpleNavigatorItem target="about-app" active="activeNavigatorDot"/>
                    </SimpleNavigator>
                </Fragment>
            </AppLayout>
        )
    }
}

const stateToProps = (state) => {
    return {
        state
    }
}

export default connect(stateToProps)(homePage);