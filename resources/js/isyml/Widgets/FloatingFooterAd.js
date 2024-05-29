import React from "react";
import SiteView from "./SiteView";

const FloatingFooterAd = ({pathName}) => {
    let WhatsAppLink = 'https://wa.me/18134010513?text=Hi%20Phillip%21%20I%27m%20interested%20on%20create%20a%20*ISYML*%20profile';

    return(
        <section className={'floatingad'}>
            <SiteView pathName={'/rachelp'} />
            <div className={'ad'}>
                <div className={'py-1'}>Do lo like it? <strong>Build your own too!!!</strong> 👉 <a className={'btn btn-block btn-sm button'} type={'button'} href={WhatsAppLink}>Here</a></div>
            </div>
        </section>
    )

};

export default FloatingFooterAd;
