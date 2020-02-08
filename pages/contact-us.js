import {Component} from 'react'
import App from '../components/app';
import {activePage} from "../actions/actions";
import {connect} from 'react-redux'
import ContactUsSvg from '../public/media/contactSvg.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';

const Section1 = (props) => {

    return (
        <section className="py-5">
            <div className="container">
                <div className={"row"}>
                    <div className="col-lg-6 text-lg-right text-center">
                        <h2 className="display-2">تواصل معنا</h2>
                        <p className="lead">
                            زائرنا الكريم لا تردد في ان تتواصل معنا رسالتك مهمه لنا وانت مرحب بك دائما
                        </p>
                    </div>
                    <div className={"col-lg-6 text-lg-right text-center mt-lg-0 mt-4"}>
                        <img src={ContactUsSvg} className={"w-100"}/>
                    </div>
                </div>
            </div>
        </section>
    )


};


const Section2 = (props) => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-10 mx-lg-0 mx-auto  pl-lg-5 contact-form"
                         style={{borderLeft: "10px solid #1C4A5B", borderRadius: '9px'}}>
                        <form className="text-lg-right text-center" method="post">

                            <div className="form-group">
                                <label htmlFor="sender-name">اسم المرسل</label>
                                <input id="sender-name" className="w-100 form-control form-control-lg py-4" name="fullName"
                                       placeholder="عبدالله محمد"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="sender-email">البريد الالكتروني</label>
                                <input id="sender-email" className="w-100 form-control form-control-lg" name="email"
                                       placeholder="example@gmail.com"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">رسالتك</label>
                                <textarea style={{minHeight: "170px", resize: 'none'}}
                                          className="w-100 form-control form-control-lg" name="email"
                                          placeholder="قل شيئآ"></textarea>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary ">ارسال</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-12 mt-lg-0 mt-4 d-flex flex-column justify-content-center">
                        <div>
                            <h4 className="text-center">تواصل عبر البريد الالكتروني</h4>
                            <p className="text-center">islam.s.mhmd1998@gmail.com</p>
                        </div>

                        <div>
                            <h4 className="text-center">تواصل عبر الفيسبوك</h4>
                            <p className="text-center">
                                <a href='https://www.facebook.com/islamsaeed1998' target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} className="fa-3x"/>
                                </a>
                            </p>
                            <p className="text-center">
                                كل الحقوق محفوظة لفريق عمل
                                <span className="badge badge-primary text-uppercase font-weight-light mr-2">think first</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}


class ContactUs extends Component {

    componentDidMount() {
        this.props.dispatch(activePage('contact_us'))
    }

    render() {

        return (
            <App>
                <Section1/>
                <Section2/>
            </App>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(ContactUs);