import React from 'react';
import '../styles/AboutUsMaterial.css'; 

const AboutUs = () => {
    return (
        <div className="aboutusContainer">
            <h1 className='AboutUsTH'>About Us</h1>
            <section className="historyContainer">
                <h2 className="historyTh">Our History</h2>
                <p>Founded in 2020, Fixbitscr has been dedicated to providing exceptional digital solutions. Our journey began with a vision to help businesses leverage technology effectively.</p>
            </section>

            <section className="missionContainer">
                <h2 className='missionth'>Our Mission</h2>
                <p>To empower businesses through innovative technology and outstanding service, ensuring they thrive in the digital landscape.</p>
            </section>

            <section className="servicesContainer">
                <h2 className='servicesTH'>Our Services</h2>
                <ul>
                    <li>Website Design</li>
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>SEO & Digital Marketing</li>
                </ul>
            </section>

            <section className="valuesContainer">
                <h2 className="valuesTh">Our Values</h2>
                <p>Integrity, Innovation, and Customer-Centricity are at the heart of everything we do.</p>
            </section>

            <section className="contactContainer">
                <h2 className="contactTH">Contact Us</h2>
                <p>If you have any questions, feel free to reach out!</p>
                <ul>
                    <li>
                        Email: <a href="mailto:info@fixbitscr.com">info@fixbitscr.com</a>
                    </li>
                    <li>
                        Phone: <a href="tel:+50687563893">(506) 8756-3893</a>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUs;
