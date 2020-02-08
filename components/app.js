import React, {Component, Fragment} from "react";
import Layout from './Layout';
import NagdaAlert from '../components/Alert';
import jsCookie from 'js-cookie';

class Page extends Component {

    componentDidMount() {

    }

    checkForCookiesPermision() {
        if (jsCookie.get('cookie_permission') != 'true') {
            return <NagdaAlert variant="danger"/>
        }
    }

    render() {
        return (
            <Fragment>
                <Layout>
                    {this.props.children}
                    {this.checkForCookiesPermision()}
                </Layout>
            </Fragment>
        );
    }
}


export default Page;
