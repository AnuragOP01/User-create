import React from 'react'
import "./Css/offer"
import "./Css/offer"
function OfferLetter() {
  return (
    <div className=' bg-black'>

<div class="header">
     <img src="cerlogo.png"/>  
   </div>

   <div class="data">
    <h1>Registration Form</h1>
    <h3>Please fill out this form with the required information</h3>
    <form action="" class="entry">
        <fieldset>
    <label className=' block mb-4 mt-4' for="fname">First Name: 
        <input type="text" id="fname" placeholder="Enter Your First Name"/>
    </label>
    <label className=' block mb-4' for="lname">Last Name: 
        <input type="text" id="lname" placeholder="Enter Your Last Name"/>
    </label>
    <label className=' block mb-4' for="email">Email: 
        <input type="email" id="email" placeholder="Enter Your Email"/>
    </label>
    <label className=' block mb-4' for="mobile">Mobile No: 
        <input type="number" id="mobile" placeholder="Enter your Mobile No"/>
    </label>
</fieldset>
</form>
   </div>

 
<button class="submit">Submit </button>

    <div class="content">
        <div class="header">
            <img src="cerlogo.png"/>  
          </div>
          <hr/>
    <p className=''><b>Subject:</b> Internship Offer at MangosOrange Agritech India Pvt. Ltd.</p>
    
    <p class="n">Dear ,</p>
    <p className='block'>We are pleased to extend an offer of an internship at MangosOrange Agritech India. We were
        impressed with your qualifications and enthusiasm during the interview process, and we believe
        that your skills and dedication will contribute significantly to our team.</p>
        <p className='block'><b>Position:</b> Intern<br/><br/><b>Department: </b>Software Development</p>
           <p className='block'><b>Position Details:</b> During your internship, you will work closely with our development team and gain
            hands-on experience in software development. You will have the opportunity to learn from and
            collaborate with experienced professionals in the field. We will provide guidance, mentorship, and
            opportunities for growth and development throughout your internship. The internship duration will
            be 6 months.</p>
            <p className='block'><b>Terms and Conditions:</b><br/><br/>
                <b>Work Schedule:</b> Your work schedule will be online. You need to follow the timeline of the project</p>
                <p className='block'><b>Confidentiality:</b> You will be required to sign a Non-Disclosure Ag</p>
                <p className='block'><b>Code of Conduct:</b> You will be expected to adhere to the company's policies, procedures, and
                    code of conduct. Any indiscipline in any form will lead to immediate termination of the internship
                    offer.</p>
                    <p className='block'><b>Evaluation:</b>  Your performance will be periodically evaluated, and feedback will be provided to help
                        you grow and improve during your internship.</p>
                        <p className='block'><b>NOTE:-</b>Please note that this offer is contingent upon the successful completion of any background checks
                            or necessary paperwork required by our company policies or local regulations. To accept this
                            internship, offer, please sign, and return a copy of this letter.</p>
                            <p className='block'>We are excited to welcome you to our team and look forward to working with you.</p>
                    

      
                         <div class="end-content">
                            <p class="initials">Ravi Rautela <br/>
                            Director Innovations <br/>
                            MangosOrange Group
                        </p>
                        <p class="final">
                            Candidate Name: <br/>
                            Signature: <br/>
                            Date: 
                        </p>
                         </div>
                        </div>
                  
                          <div class="footer">
                            <p class="foot "> Services Private Limited <br/>
                            Corp. off.: 3<sup>rd</sup> Floor, H-87, Sector-63, Noida, Uttar Pradesh – 201301<br/>
                            Contact: +91 120 416 4821, Email: info@mangosorange.com, Web: www.mangosorange.com</p>
                          </div>
    </div>
  )
}

export default OfferLetter