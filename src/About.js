import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className='about__Desc'>
                <div className='about__title'>
                    <h1>About Kim Vo</h1>
                </div>
                <div className='about__div'></div>
                <div className='about__descdesc'>
                    <p>After many years working in the finance industry as a broker, Kim has assisted many of individuals around Sydney to find the right loan tailored to their needs ranging from home loans, investment loans, commercial loans, construction and business loans.
                        <br /> <br />
                    No matter how complex or simple your situation is, Kim can assist and doesn't shy away from using her knowledge to help find a solution to more complex situations.
                    Whether you’ve just started a new job, on maternity leave, recently self employed, low income or previous poor credit – Kim is there to help. </p>
                </div>
            </div>
        </div>
    );
}

export default About;
