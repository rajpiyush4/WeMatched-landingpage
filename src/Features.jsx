import React from 'react'

function Features() {
    return (
        <div className='features'>
            <span style={{fontSize: '2rem', textAlign:'center', marginBottom:'1rem'}}> &nbsp;  Features:</span>
            {/* <div className='feature'>
                <h3>Weekly Matches <span style={{fontSize:'.7rem', fontFamily:'Poppins', transform:'translate(0, -100%)'}}>(premium feature)</span></h3>
                <p>"Say goodbye to swiping left and right for hours, we'll do the heavy lifting and bring you a selection of lovely matches every week. You can thank us later."
                   
                </p>
            </div> */}

            <div className='feature'>
                <h3>Affordable Pricing </h3>
                <p>"Why pay an arm and a leg for love? Our dating app won't break the bank, and it'll still bring you all the heart-fluttering, stomach-butterflying goodness you deserve. Plus, you can use the extra cash to take your date out for a fancy dinner (or just order pizza and watch Netflix, no judgment)."
                </p>
            </div>
            <div className='feature'>
                <h3>Early Sign-Up Bonus</h3>
                <p> "Be an early bird and catch the worm! Sign up now and get a chance to enjoy our <b> premium features for free. <span style={{color:'hsl(334, 61%, 47%)'}}>Limited time offer! Get in quick before our moms find out we gave away the family fortune</span> </b> . It's like getting VIP access to the hottest club in town, but without the dress code."
                <p></p>
                </p>
            </div>
        </div>
    )
}

export default Features