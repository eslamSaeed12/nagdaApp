import App from "../components/app";
import { activePage } from "../actions/actions";
import { connect } from "react-redux";
import FaqHeader from "../components/faqHeader";
import Questions from "../components/faqQuestions";
import Link from "next/link";
class homePage extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {}

  componentDidMount() {
    this.props.dispatch(activePage("faq"));
  }

  render() {
    return (
      <App>
        <FaqHeader />
        <Questions />
      </App>
    );
  }
}

const stateToProps = state => {
  return {
    state
  };
};
export default connect(stateToProps)(homePage);
