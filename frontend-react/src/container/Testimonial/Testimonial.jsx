import React, { useState, useEffect } from 'react'
import './Testimonial.scss'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

const Testimonial = () => {

    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    return (
        <div></div>
    )
}

export default Testimonial