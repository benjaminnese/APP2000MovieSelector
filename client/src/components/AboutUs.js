import React from 'react';
import AboutUsCard from './AboutUsCard';

// Hvert AboutUsCard instance er et medlem av gruppen.


export const AboutUs = () =>{
        return(
            <div className = "d-flex justify-content-around mt-5">
                <AboutUsCard name='Mathias' studentNummer='233562' desc='FullStack Utvikler for denne nettsiden' />
                <AboutUsCard name='Benjamin' studentNummer='233535' desc='FullStack Utvikler for denne nettsiden' />
                <AboutUsCard name='Johannes' studentNummer='233563' desc='FullStack Utvikler for denne nettsiden' />
                <AboutUsCard name='Håkon' studentNummer='233546' desc='FullStack Utvikler for denne nettsiden' />
            </div>
        );


}
export default AboutUs;
