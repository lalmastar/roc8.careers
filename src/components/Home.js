import React from 'react'

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-container-left">
        <h1 className="home-h1">Generate Awesome Web Pages</h1>
            
        <p className='home-p'>The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.</p>
            
        <div className='home-learn-more cursor'><p className='learn-more-p'>Learn More</p></div>
        </div>
        
        <div className="home-container-right">
            <h1 className='signupnow'>Sign Up Now</h1>

            <div className="container-right">
                
                <div className='input-field1'>
                    <input type="text" placeholder='Your email'/>
                </div>
                <div className='input-field1'>
                    <input type="text" placeholder='Your password'/>
                </div>

                <div className='checkbox'>
                    <input type="checkbox" /> 
                    <p>I agree to the Terms of Service.</p>
                </div>

                <div className='sign-in'>
                    <div className='sign-in1 cursor'><p className='sign-in-p1'>Sign Up</p></div>
                    <div className='bar'>
                        <div className="left-bar"></div>
                        <p className='or'>or</p>
                        <div className="right-bar"></div>
                    </div>
                    <div className='sign-in2 cursor'><p className='sign-in-p2'>Login Via Twitter</p></div>
                    <div className='account'><p>Do you have an Account?  <span className='account-span cursor'>Sign In</span></p></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home