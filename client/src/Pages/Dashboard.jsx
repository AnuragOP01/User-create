import React from 'react'
import './Css/dashboard.css'
function Dashboard() {
  return (
    <div className=' text-black'>
       <section class="details">
        <h1 id="name" className=' text-center'>NAME : </h1>
        <h1 id="Email" className=' text-center'>E-MAIL : </h1>
        <h1 id="Phone-no." className=' text-center'>PHONE NO : </h1>
        <h1 id="Address" className=' text-center'>ADDRESS : </h1>
        <h1 id="Collage-name" className=' text-center'>COLLAGE NAME :</h1>
       </section>

       
    </div>
  )
}

export default Dashboard