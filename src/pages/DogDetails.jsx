import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { RiArrowGoBackLine } from 'react-icons/ri'

import { utilService } from '../services/utils.service.js'
import { dogService } from '../services/dog.service';
import { AdoptForm } from '../cmps/AdoptForm.jsx'
export const DogDetails = () => {
    const [currDog, setCurrDog] = useState(null)
    const { dogId } = useParams();
    useEffect(() => {
        dogService.getById(dogId)
            .then(dog => {
                setCurrDog(dog)
                // console.log('currDog:', currDog);
            });
    }, [])



    return (
        <>
            {(!currDog) ? <div>'No such dog</div> :
                <section>
                    <button className='classic-btn'><Link to="/dogs" className="go-back-btn clean-link"><RiArrowGoBackLine style={{ color: '#fff' }} />   Back</Link></button>
                    <section className='details-container flex'>
                        <div className='dog-details'>
                            <div className='flex'><div><p className='dog-desc-title'>name:</p></div><p>{currDog.name}</p></div>
                            <div className='flex'><div><p className='dog-desc-title'>age:</p></div><p>{utilService.calculateAge(currDog.dob)} Years old</p></div>
                            <div className='flex'><div><p className='dog-desc-title'>breed:</p></div><p>{currDog.breed}</p></div>
                            <div className='flex'><div><p className='dog-desc-title'>size:</p></div><p>{currDog.size}</p></div>
                            <div className='flex'><div><p className='dog-desc-title'>Date of Birth:</p></div><p>{currDog.dob}</p></div>
                            <p>{currDog.description}</p>
                        </div>
                        <div className="imgs-container flex">
                            <button>  <BsChevronLeft className='prev-book' size="23px" /></button>
                            <img className='dog-img' alt="dog" src={currDog.imgURLs[0]} />
                            <button className='next-book'><BsChevronRight size="23px" /></button>
                        </div>
                    </section>
                    <AdoptForm name={currDog.name} />
                </section>
            } </>
    )
}






