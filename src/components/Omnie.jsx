import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

function Omnie() {

    return (
        <>
            <Navbar/>

            <div className='omnie-container'>
                <div className='omnie-first-box'>
                    <img className='skipper-image' src='src/assets/skipper.jpg'/>
                    <div className='omnie-description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam asperiores
                            aspernatur at atque, aut consequuntur cupiditate, eaque enim eveniet hic mollitia neque
                            repudiandae saepe similique soluta totam unde voluptatibus! <br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam asperiores
                            aspernatur at atque, aut consequuntur cupiditate, eaque enim eveniet hic mollitia neque
                            repudiandae saepe similique soluta totam unde voluptatibus!
                        </p>
                    </div>
                </div>

            </div>

            <Footer/>
            <Newsletter/>
        </>
    )
}

export default Omnie