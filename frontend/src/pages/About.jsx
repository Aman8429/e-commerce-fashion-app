import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>
        Explore our fashion website for the latest trends in clothing, accessories, and footwear. Whether you're looking for casual wear, elegant outfits, or statement pieces, we offer a wide selection to suit every style and occasion. Shop now for exclusive deals, high-quality fabrics, and unbeatable prices. Fashion at your fingertips! </p>
        <p>
        Our fashion website offers a curated collection of on-trend pieces designed to elevate your wardrobe. From chic dresses and tailored suits to casual essentials and standout accessories, we have something for everyone. Enjoy fast shipping, hassle-free returns, and exceptional customer service. Refresh your style with just a few clicks!</p>
       <b className='text-gray-800'>Our Mission</b>
       <p>
       Our mission is to empower individuals to express their unique style through high-quality, affordable fashion. We strive to provide trendy, comfortable, and versatile pieces that make every customer feel confident and stylish</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>
          At our fashion website, quality is our top priority. We carefully source and inspect every item to ensure durability, comfort, and style. Our products undergo strict quality control checks to meet high standards, so you can shop with confidence knowing that each piece is designed to last and impress</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Convenience:</b>
          <p>We prioritize your convenience by offering an easy and seamless shopping experience. Our website is user-friendly, with quick navigation, secure checkout, and fast delivery. Enjoy hassle-free returns, reliable customer service, and personalized recommendations, all designed to make your fashion shopping experience as smooth and enjoyable as possible.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
