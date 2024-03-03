import React from 'react'

const Footer = () => {
  return (
    <>
    <div id='contact' className="flex flex-col font-jaldi text-smoke md:text-lg pb-16 px-2 sm:px-5 lg:px-10 py-8 sm:py-12 md:py-16 bg-[#021127]">
      <h1 className='font-jockey mb-4 md:mb-6 text-xl md:text-4xl'>Contact Us</h1>
      <h3 className='font-jockey text-lg md:text-xl my-4 text-golden'>Astra Home Office</h3>

      <div className="flex flex-col gap-2 text-golden">
        <p><span className='font-bold'>Address: </span>789 Skyline Avenue, Suite 101, YourCity, 01234</p>
        <p><span className='font-bold'>Phone: </span><a href="tel:+15559012345"> +1 (555) 901-2345</a></p>
        <p><span className='font-bold'>Email: </span><a href="mailto:info@astrarestaurants.com" />info@astrarestaurants.com</p>
      </div>

      <div className="flex flex-col md:text-base text-xs">
        <p className='mt-6 mb-4'>For inquiries, reservations, or feedback, please feel free to reach out to our dedicated team at Astra Home Office. We're here to assist you in making your dining experience with us truly exceptional.</p>
        <div className="flex flex-col">
          <h4 className='font-bold'>About Astra Restaurants:</h4>
          <p>Astra Restaurants is a culinary haven dedicated to crafting unforgettable dining experiences. Established with a passion for gastronomy, we pride ourselves on serving exquisite cuisine in enchanting settings across various locations. Our commitment to excellence extends beyond the plate, as we strive to create moments of joy, connection, and discovery for each of our guests.</p>
        </div>
        <div className="flex flex-col">
          <h4 className='font-bold'>Our Services:</h4>
          <p>At Astra Restaurants, we offer a myriad of services tailored to exceed your expectations. From intimate dinners to grand celebrations, our team is equipped to cater to your every need. Whether you're planning a romantic rendezvous, corporate event, or family gathering, allow us to curate a bespoke experience that reflects your unique taste and style.</p>
        </div>
        <div className="flex flex-col">
          <h4 className='font-bold'>Meet Our Team:</h4>
          <p>Behind every culinary masterpiece and seamless dining experience at Astra Restaurants is a team of passionate professionals dedicated to excellence. From our talented chefs who meticulously craft each dish to our attentive servers who ensure your comfort and satisfaction, every member of our team plays a vital role in creating magical moments that linger long after your meal has ended. Get to know the faces and stories behind our commitment to culinary artistry and hospitality, and discover the heart and soul of Astra Restaurants.</p>
        </div>
      </div>

      <div className="flex sm:gap-6 gap-3 sm:mt-10 mt-5 text-golden sm:text-2xl">
        <i className='fa-brands fa-instagram'></i>
        <i className='fa-brands fa-facebook'></i>
        <i className='fa-brands fa-whatsapp'></i>
      </div>
      
      <p className='text-xs sm:text-sm mt-3 sm:mt-10'>&copy; 2024 Astra Restaurant Chain. All Rights Reserved.</p>

    </div>
    </>
  )
}

export default Footer