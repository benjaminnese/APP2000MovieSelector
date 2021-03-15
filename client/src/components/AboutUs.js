import React from 'react';
import AboutUsCard from './AboutUsCard';

// Hvert AboutUsCard instance er et medlem av gruppen.


export const AboutUs = () =>{
        return(
            <div className = "row">
                <AboutUsCard name='Mathias' studentNummer='233562' desc='FullStack Utvikler for denne nettsiden' />
            </div>
        );


}
export default AboutUs;
