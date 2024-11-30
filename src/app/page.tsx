import React from 'react';
import Headerone from './components/Header-one';
import  Header  from './components/header';
import Footer from './components/Hero-two';
import Hero from './components/hero'
import Course from './components/Course-categous';
import AchievementSection from './components/Achievement';
import Courses from './components/CoursesCard';
import Teams from './components/Teams';
import Customer from './components/Customer-testimonials';
import FooterTwo from './components/footertwo';


const page = () => {
  return (
    <div>
      <Headerone/>
      <Header/>
      <Hero/>
      <Footer/>
      <Course/>
      <AchievementSection/>
      <Courses/>
      <Teams/>
      <Customer/>
      <FooterTwo/>
    </div>
  )
}

export default page