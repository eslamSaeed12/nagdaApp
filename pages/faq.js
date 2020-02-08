import App from '../components/app';
import {activePage} from "../actions/actions";
import {connect} from 'react-redux'
import FaqHeader from '../components/faqHeader';
import Questions from '../components/faqQuestions';
import Link from 'next/link'
class homePage extends React.Component {

    static getInitialProps({store, isServer, pathname, query}) {

    }


    componentDidMount() {
        this.props.dispatch(activePage('faq'));
    }

    render() {
        return (
            <App>
                <FaqHeader/>
                <Questions/>
                <section>
                    <div className="container  text-center py-5">
                        <p className="lead text-center">
                            في حاله ظهور اي مشكله تقنيه داخل التطبيق او موقعنا الالكتروني يرجي التواصل معنا من خلال الرابط التالي
                        </p>
                        <button className="btn btn-primary btn-lg">
                            <Link href={"/contact-us"}>
                                <a>تواصل معنا</a>
                            </Link>
                        </button>
                    </div>
                </section>
            </App>
        )
    }
}

const stateToProps = (state) => {
    return {
        state
    }
}
export default connect(stateToProps)(homePage);