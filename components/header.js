import svgImage from '../public/media/svgBackground.svg';

const Header = () => {
    return (
        <header className="w-100 svg-image-header">
            <img src={svgImage}/>
        </header>
    )
}


export default Header;