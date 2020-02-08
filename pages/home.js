import {Component, Fragment} from "react";
import AppLayout from '../components/app';
import {activePage} from "../actions/actions";
import {connect} from 'react-redux'
import SvgHeader from "../components/header";
import HeaderSection2 from '../components/headerSection2';
import AboutApp from '../components/AboutApp';
import Usage from '../components/usage';
import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';
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
                    <Element name="download-app">
                        <DownloadApp/>
                    </Element>
                    <Element name="about-app">
                        <AboutApp/>
                    </Element>
                    <Element name="usage">
                        <Usage/>
                    </Element>
                    <SimpleNavigator>
                        <SimpleNavigatorItem target="firstInsideContainer" active="activeNavigatorDot"/>
                        <SimpleNavigatorItem target="download-app" active="activeNavigatorDot"/>
                        <SimpleNavigatorItem target="about-app" active="activeNavigatorDot"/>
                        <SimpleNavigatorItem target="usage" active="activeNavigatorDot"/>
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