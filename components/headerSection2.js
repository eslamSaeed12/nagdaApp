import Mockps from '../public/media/mockups.svg';


const Header = () => {
    return (
        <header className={'mt-5'}>
            <div className="container text-right py-4">
                <div className="row">
                    <div className={"col-lg-6 col-12 text-lg-right text-center"} style={{zIndex: 333}}>
                        <h2 className='display-3'>
                            التطبيق الاول من نوعه في مصر
                        </h2>
                        <h4 className="mt-4">
                            حيث يمكن للمستخدم الوصول الي اقرب نقطة شرطة في الحالات الطارئة
                        </h4>
                        <button className="btn btn-outline-primary my-3 btn-lg">اقرأ المزيد</button>
                    </div>
                    <div className={'col-lg-6 col-12 text-lg-right text-center mt-lg-0 mt-5'}>
                        <img src={Mockps} className={"img-fluid"}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;