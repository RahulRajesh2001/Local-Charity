import React, { Fragment } from 'react'
import "./About.css";
import Footer from "../footer/Footer"

const About = () => {
  return (
    <div>
     <Fragment>
      <div className='aboutPageContainer'>
        <div className='mainHeading'>
          <h2>Local Charity</h2>
        </div>
        <div className='contents'><p>
          The aim of this application is donators can easily donate their products like old books ,old cloths or other items . In the case of clothes we have clothes that do not fit us anymore. As children grow up, they 
outgrow their clothes every year. So instead of storing the old clothes or throwing them away, donate used clothes because what is waste for you could be a resource for the less fortunate.  </p>
<p>products like old books ,old cloths or other items . In the case of clothes we have clothes that do not fit us anymore. As children grow up, they 
outgrow their clothes every year. So instead of storing the old clothes or throwing them away, donate used clothes because what is waste for you could be a resource for the less fortunate. </p>
<p>The all donations are visible to all persons entering this 
app(donators and donors). And the donors can easily order a the items 
in stock. The order details are visible to administrator and the donator.</p></div>
       </div>
       <Footer/>
       
     </Fragment>
    </div>
  )
}

export default About
