import {Fragment} from 'react'
import TeamInspireSvg from '../public/media/undraw_team_spirit_hrr4.svg';
import Card from '../components/Card';
import islamImg from '../public/media/islam2.jpg';
import nayeraImg from '../public/media/nayera2.jpg';
import hamedImg from '../public/media/hamed2.jpg';
import boraiImg from '../public/media/borai.jpg'
import EmanImg from '../public/media/eman.jpg'

const aboutUsSceion1 = (props) => {
    return (
        <Fragment>
            <section className="">
                <h2 className="display-4 text-center"> من نحن ؟ </h2>
                <div className="container">
                    <div className="col-12 text-center">
                        <img src={TeamInspireSvg} className="w-50"/>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container  py-5">
                    <h2 className="display-4 text-center  text-uppercase mb-5"> فريق العمل </h2>
                    <div className="row">
                        <Card
                            title="اسلام سعيد"
                            img={islamImg} subtitle="مطور برمجيات"
                            email="islam.s.mhmd1998@gmail.com"
                            role="تطوير تطبيق الويب والاندرويد"
                            facebook="https://www.facebook.com/islamsaeed1998"
                            professionMode={true} professionHref={"https://github.com/eslamSaeed12"}
                            profession={"dev"}/>
                        <Card
                            title="محمد برعي"
                            img={boraiImg} subtitle="مصمم جرافيك"
                            email="Midomemoz7070@gmail.com"
                            role="تصميم تطبيق الويب والاندرويد"
                            facebook="https://www.facebook.com/profile.php?id=100013080156176&ref=br_rs"
                            professionMode={true} professionHref={"https://www.behance.net/MohamedAhmed30"}
                            profession={"des"}/>
                        <Card
                            title="حامد عماد"
                            img={hamedImg} subtitle="اخصائي نظم معلومات جغرافيه"
                            email="hameed email"
                            role="اجراء تحليلات نظم المعلومات الجغرافيه"
                            facebook="https://www.facebook.com/profile.php?id=100013419913488&ref=br_rs"
                            professionMode={false}/>
                        <Card
                            title="نيره محمود"
                            img={nayeraImg} subtitle="اخصائية نظم معلومات جغرافيه"
                            email="Nayramahmoud1999@gmail.com"
                            facebook="https://www.facebook.com/profile.php?id=100015888427807&ref=br_rs"
                            role="اجراء تحليلات نظم المعلومات الجغرافيه"
                            professionMode={false}/>
                        <Card
                            title="ايمان ايمن"
                            img={EmanImg} subtitle="مصممة واجهات مستخدم"
                            email="emanayman614.ea@gmail.com"
                            role="تصميم تطبيق الويب والاندرويد"
                            facebook="https://www.facebook.com/profile.php?id=100015747582110&ref=br_rs"
                            professionMode={true} professionHref={"https://www.behance.net/emanayman3"} profession={"des"}/>
                    </div>
                </div>
            </section>
        </Fragment>

    )
}


export default aboutUsSceion1;