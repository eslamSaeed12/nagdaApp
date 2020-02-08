import IdeationSvg from '../public/media/undraw_ideation_2a64.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChrome} from "@fortawesome/free-brands-svg-icons/faChrome";
import {faAndroid} from "@fortawesome/free-brands-svg-icons/faAndroid";

const AboutApp = (props) => {

    return (
        <section className="mt-5">
            <div className="container shadow-lg py-5 px-5 rounded-section my-4"
            >
                <h2 className="display-4 text-center mb-lg-0  mb-4">عن التطبيق</h2>
                <div className={"row"}>
                    <div className={"col-lg-8  col-12 mx-lg-0 mx-auto"}>
                        <h4 className="text-lg-right text-center mt-lg-0 mt-4"> من اين جاءت الفكره ? </h4>
                        <p className="lead text-lg-right text-center mt-4 px-lg-4 px-0">
                            الفكره جاءت عن طريق تطبيق هندي تم تصنيفه ضمن افضل 100 تطبيق علي مستوي العالم يدعي
                            <span
                                className="text-capitalize badge badge-primary mx-2 shadow"> indian police on call </span>
                            تتلخص الفكره في ان التطبيق يعتمد علي نظم المعلومات الجغرافيه في تحديد اقرب نقطه شرطه من
                            المكان الحالي للمستخدم
                            ويتم ذلك بناء علي الاعتماد علي الموقع الجغرافي للمستخدم حيث يقوم التطبيق بتطبيق
                            لوغاريتماته مثل
                        </p>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item text-capitalize btn-borderless "
                                style={{backgroundColor: 'transparent'}}>
                                <span className={"badge badge-primary"}> best route algorithm</span>
                            </li>
                            <li className="list-group-item text-capitalize btn-borderless"
                                style={{backgroundColor: 'transparent'}}>
                                <span className="badge badge-primary">closest facility algorithm</span>
                            </li>
                        </ul>
                        <p className={"lead text-lg-right text-center mt-4 px-4"}>
                            ثم يتم تحديد المسار الافضل والاقرب للمستخدم علي خريطه تفاعليه ...
                            التطبيق متاح علي منصتي الويب ومنصه اندرويد
                            التطبيق مجاني والنسخه التجريبيه تشمل <span className="badge shadow mx-2 badge-primary">محافظة الشرقيه</span> فقط
                            وفي التحديث الاول سوف يتم اضافة باقي المحافظات
                        </p>
                    </div>
                    <div className={"col-lg-4 col-8  mx-auto order-lg-last order-first"}>
                        <img src={IdeationSvg} className="img-fluid "/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutApp