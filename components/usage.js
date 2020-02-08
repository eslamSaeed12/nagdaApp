import UsageSvg from "../public/media/usage.svg";


// web not allowed  for normall users and only
// 30k for 200 user 5 usage in the day for the first 200 user
// 20k for 60 user  daily 11 usage  -> for the first 60 premium accounts
// 80k request 8k normal users allowed users  -> 10 usage daily
// 20k for premium users for 1k premium users -> 20 usage daily

const Usage = () => {
    return (
        <section className="mt-5">
            <div className="container shadow-lg py-5 px-5 rounded-section my-4">
                <h2 className="display-4 text-center mb-lg-4  mb-4">الاستخدام</h2>
                <div className={"row"}>
                    <div className={"col-lg-8  col-12 mx-lg-0 mx-auto mt-lg-0 mt-4"}>
                        <div className="container-fluid">
                            <div className="row  toColumnPlease justify-content-center">
                                <div
                                    className="col-lg-5 mx-lg-2  mx-auto col-md-5  col-sm-6 col-7  mb-lg-0 mb-5 rounded-card shadow-lg py-4"
                                    style={{backgroundColor: "#EB095E", color: '#ffff'}}>
                                    <ul className="list-group list-group-flush px-0">
                                        <li className="text-center list-group-item no-background">
                                            الباقه المميزه
                                        </li>
                                        <li className="text-center list-group-item no-background">
                                            20 مره استخدام يومي لتطبيق الاندرويد
                                        </li>
                                        <li className="text-center list-group-item no-background">
                                            11 مره استخدام يومي لتطبيق الويب
                                        </li>
                                        <li className="text-center list-group-item no-background">
                                            40 جنية مصري
                                        </li>
                                        <li className="text-center list-group-item no-background">
                                            <button className='btn btn-secondary'>
                                                اشتراك
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="col-lg-5 mx-lg-2  mx-auto col-md-5 col-sm-6 col-7 rounded-card shadow-lg py-4"
                                    style={{backgroundColor: "#D18C08", color: '#ffff'}}>
                                    <ul className="list-group list-group-flush px-0">
                                        <li className="text-center list-group-item no-background">
                                            الباقه المجانية
                                        </li>
                                        <li className="text-center list-group-item no-background">
                                            10 مرات استخدام يومي لتطبيق الاندرويد
                                        </li>
                                        <li className="text-center list-group-item no-background">
                                            5 مرات استخدام يومي لتطبيق الويب
                                        </li>
                                        <li className="text-center list-group-item no-background">
                                            مجانا
                                        </li>
                                        <li className="text-center list-group-item no-background">
                                            <button className='btn btn-secondary'>
                                                اشتراك
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-4 col-8  mx-auto order-lg-last order-first"}>
                        <img src={UsageSvg} className="w-100"/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Usage;