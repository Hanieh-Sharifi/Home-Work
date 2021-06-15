import React from 'react';
import aboutUs from "../imgs/aboutUs.jpg";

function AboutUs() {
    return (
        <div className="aboutus-main-parent">
            <div className="aboutus-image-parent">
                <img className="aboutus-image" src={aboutUs} alt="about us" />
            </div>
            <div className="aboutus-text-parent">
                <p className="aboutus-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam eligendi sequi praesentium deserunt laborum delectus. Eius, dolor nisi magni animi amet commodi inventore reprehenderit non et eum autem, ad quod omnis consectetur ab voluptas delectus possimus beatae perspiciatis rerum atque assumenda iste praesentium? Quo fuga quos quam dolores eligendi?</p>
            </div>
        </div>
    )
}

export default AboutUs;
