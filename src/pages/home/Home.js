import React from 'react'
import Banner from '../../components/home/banner/Banner'
import Branding from '../../components/home/branding/Branding'
import Companies from '../../components/home/companies/Companies'
import Contact from '../../components/home/contact/Contact'
import Custome from '../../components/home/custome/Custome'
import Footer from '../../components/home/footer/Footer'
import Header from '../../components/home/header/Header'
import Testimonial from '../../components/home/testimonial/Testimonial'

export default function home() {
  return (
    <div>
        <Header />
        <Banner />
        <Companies /> 
        <Branding />
        <Custome />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
  )
}
