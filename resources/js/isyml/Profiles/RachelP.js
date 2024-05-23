import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import {getWindowSize} from "../../functions/General";
import logo from "../../../../public/profiles-logos/rachel-p.svg";

const RachelP = ({}) => {
    const [windowSize, setWindowSize] = useState(getWindowSize);
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize);
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return(
        <>
            <section className={'rachelp-background'} style={{minHeight: ((windowSize.innerHeight - 35) + 'px'), height: 'fit-content'}}>
                <div className={'container py-5'}>
                    <div className={'row mx-0 justify-content-center'}>
                        <div className={'col-10 col-sm-9 col-md-8 col-lg-6 text-center rachelp'}>
                            <img src={logo} className={'logo'}/>
                            <div className={'description'}>
                                <p><u className={'font-weight-bold'}>Cosmetóloga licenciada en Tampa</u>, con años de experiencia en el cuidado y belleza de la piel. Contáctame y date un tiempo para ser consentida y sentirte hermosa.</p>
                            </div>

                            <div className={'list'}>
                                <div className={'l12'}>Servicios personalizados:</div>
                                <ul>
                                    <li>Tratamientos faciales personalizados</li>
                                    <li>Tratamientos corporales, radiofrecuencia, ondas rusas</li>
                                    <li>Maderoterapia</li>
                                    <li>Masajes</li>
                                    <li>Laceados, color, cepillado, planchado</li>
                                    <li>Depilación face and body</li>
                                </ul>
                            </div>

                            <div className={'pt-3'}>
                                <div className={'borderdiv'}>
                                    <p className={'m-0 t1'}>Atención a domicilio</p>
                                    <p className={'mb-0 mt-2 t2'}>Voy a tu dirección con todo mi equipo para consentirte como la reina que eres.</p>
                                </div>
                            </div>

                            <div className={'buttons'}>
                                <a className={'btn btn-block btn-md w-100 whatsapp-button'} href={'https://wa.link/xq8bq6'}>
                                    <i className="fab fa-whatsapp me-1"></i>Citas al WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'ad'}>
                <div className={'py-1'}>Do lo like it? <strong>Build your own too!!!</strong> 👉 <a className={'btn btn-block btn-sm button'} type={'button'} href={'https://wa.me/18134010513?text=Hi%20Phillip%21%20I%27m%20interested%20on%20create%20a%20*ISYML*%20profile'}>Here</a></div>
            </section>
        </>
    )
};

export default RachelP;

const element = document.getElementById('rachel-p');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<RachelP {...props} />, element);
}
