import faqSvg from '../public/media/faqSvg.svg';


const FaqHeader = (props) => {
    return (
        <section className="py-4">
            <div className={"container"}>
                <div className="row">
                    <div className={"col-md-6 col-12 text-center"}>
                        <h2 className={"display-2"}>اسئلة مكرره</h2>
                        <p className={"lead"}>
                            هنا سوف تجد الاسئلة المكرره والاسئلة التي تم طرحها من قبل مستخدمين اخرين
                            كما ان الاسئلة متجدده باستمرار لذا لا تردد في طرح سؤالك
                        </p>
                    </div>
                    <div className={"col-md-6 col-12 text-md-left text-center mt-md-0 mt-4"}>
                        <img src={faqSvg} className={"w-75"}/>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default FaqHeader;