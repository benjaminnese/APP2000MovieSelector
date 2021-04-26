import React from "react";
import AboutUsCard from "./AboutUsCard";

// Hvert AboutUsCard instance er et medlem av gruppen.

export const AboutUs = () => {
  return (
    <div className="d-flex justify-content-around mt-5">
      <AboutUsCard
        name="Mathias"
        studentNummer="233562"
        desc="FullStack Utvikler for denne nettsiden"
        imgURL="https://lh3.googleusercontent.com/a-/AOh14GjkusQ7Q3F3Q9d0EHHCOa9CMGK0ddT3O6ooM2BmkCQ=s96-c"
      />
      <AboutUsCard
        name="Benjamin"
        studentNummer="233535"
        desc="FullStack Utvikler for denne nettsiden"
        imgURL="https://lh3.googleusercontent.com/a-/AOh14GjkusQ7Q3F3Q9d0EHHCOa9CMGK0ddT3O6ooM2BmkCQ=s96-c"
      />
      <AboutUsCard
        name="Johannes"
        studentNummer="233563"
        desc="FullStack Utvikler for denne nettsiden"
        imgURL="https://lh3.googleusercontent.com/a-/AOh14GjkusQ7Q3F3Q9d0EHHCOa9CMGK0ddT3O6ooM2BmkCQ=s96-c"
      />
      <AboutUsCard
        name="Håkon"
        studentNummer="233546"
        desc="FullStack Utvikler for denne nettsiden"
        imgURL="https://lh3.googleusercontent.com/a-/AOh14GjkusQ7Q3F3Q9d0EHHCOa9CMGK0ddT3O6ooM2BmkCQ=s96-c"
      />
    </div>
  );
};
export default AboutUs;
