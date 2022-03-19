import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri'

import { utilService } from '../services/utils.service.js'
import { dogService } from '../services/dog.service';
import { saveDog } from '../store/dog.action.js';

export const DogEdit = () => {
    const [currDog, setCurrDog] = useState(null)
    const { dogId } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('dogId:', dogId);
        dogService.getById(dogId)
            .then(dog => {
                setCurrDog(dog)
                console.log('currDog:', currDog);
            });
    }, [])
    // const [dogToEdit, setCurrDog] = useState({
    //     "id": dogId,
    //     "name": currDog?.name,
    //     "description": currDog?.description,
    //     "breed": currDog?.breed,
    //     "gender": currDog?.gender,
    //     "dob": currDog?.dob,
    //     "size": currDog?.size,
    //     "weight": currDog?.size,
    //     imgURLs: [currDog?.imgURLs[0]]
    // })
    const onFormSubmit = (ev) => {
        ev.preventDefault()
        console.log('ev.target:', ev.target);
        dispatch(saveDog(currDog))
        // .then(() => {
        // dispatch(loadDogs())
        // }
        // )
        // console.log('ev:', ev);

    }
    return (
        <>
            {(!currDog) ? <div>'No such dog</div> :
                <section className='edit-container'>
                    <button className='classic-btn'><Link to="/dogs" className="go-back-btn clean-link"><RiArrowGoBackLine style={{ color: '#fff' }} />   Back</Link></button>

                    <form onSubmit={onFormSubmit}>
                        <input type="text" placeholder="Dog's name" value={currDog.name} onChange={(ev) => setCurrDog((prevDogToEdit => {
                            return {
                                ...prevDogToEdit,
                                name: ev.target.value
                            }
                        }))}></input>
                        <select placeholder="gender" value={currDog.gender} onChange={(ev) => setCurrDog((prevDogToEdit => {
                            return {
                                ...prevDogToEdit,
                                gender: ev.target.value
                            }
                        }))} >
                            <option>male</option>
                            <option>female</option>
                        </select>
                        <select placeholder="size" value={currDog.size} onChange={(ev) => setCurrDog((prevDogToEdit => {
                            return {
                                ...prevDogToEdit,
                                size: ev.target.value
                            }
                        }))}>
                            <option>small</option>
                            <option>medium</option>
                            <option>large</option>
                        </select>
                        <textarea placeholder="add some information about your dog" value={currDog.description} onChange={(ev) => setCurrDog((prevDogToEdit => {
                            return {
                                ...prevDogToEdit,
                                description: ev.target.value
                            }
                        }))}></textarea>
                        <input type="text" placeholder="ULR dog's picture" value={currDog.imgURLs[0]} onChange={(ev) => setCurrDog((prevDogToEdit => {
                            return {
                                ...prevDogToEdit,
                                imgURLs: [ev.target.value]
                            }
                        }))}></input>
                        <input type="text" placeholder="Dog's breed" value={currDog.breed} onChange={(ev) => setCurrDog((prevDogToEdit => {
                            return {
                                ...prevDogToEdit,
                                breed: ev.target.value
                            }
                        }))}></input>
                        <input type="number" placeholder="weight (KG)" value={currDog.weight} onChange={(ev) => setCurrDog((prevDogToEdit => {
                            return {
                                ...prevDogToEdit,
                                weight: ev.target.value
                            }
                        }))}></input>
                        <input type="date" placeholder="dob" value={currDog.dob} onChange={(ev) => setCurrDog((prevDogToEdit => {
                            return {
                                ...prevDogToEdit,
                                dob: ev.target.value
                            }
                        }))}></input>
                        {/* dob */}
                        <button className="add-dog-btn">Save</button>
                    </form>

                </section>
            } </>
    )
}






