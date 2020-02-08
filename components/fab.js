import {useEffect, useState, Fragment} from 'react'


const Fab = (props) => {

    const variants = ['primary', 'warning', 'danger', 'dark'];
    const [backgroundClr, setBackgroundColor] = useState('primary');
    let variant = props.variant ? props.variant : "";
    let searchForVariant = variants.find(element => {
        return element === variant;
    });

    useEffect(() => {
        switch (searchForVariant) {
            case variants[0]:
                setBackgroundColor('#1C4A5B');
                break;

            case variants[1]:
                setBackgroundColor('#D18C08');
                break;

            case variants[2]:
                setBackgroundColor('red');
                break;

            case variants[3]:
                setBackgroundColor('#4B4B4B');
                break;
        }
    }, []);

    return (
        <Fragment>
            <style jsx>
                {`
                    .fab{
                        border-radius:50%;
                        background-color: ${backgroundClr};
                        width:56px;
                        height:56px;
                        border:#fff !important;                        
                    }
                    .fab:hover{
                          background-color: #ffff;
                          color:${backgroundClr};
                    }
                `}
            </style>
            <button className={props.variant + ` btn fab btn-${props.variant} fab` + props.className} {...props}>
                {props.children}
            </button>
        </Fragment>
    )
};

export default Fab;