import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadDogs, saveDog } from "../store/dog.action"

export const AddDog = () => {
    const dispatch = useDispatch()
    const { dogs } = useSelector(state => state.dogModule)
    const [isModalShown, setisModalShown] = useState(false)
    const [dogToAdd, setDogToAdd] = useState({
        "name": "",
        "description": "",
        "breed": "",
        "gender": "male",
        "dob": "",
        "size": "small",
        "weight": "",
        imgURLs: []
    })
    const onFormSubmit = (ev) => {
        ev.preventDefault()
        setisModalShown(false)
        console.log('ev.target:', ev.target);
        const dogToAddCopy = dogToAdd
        dispatch(saveDog(dogToAddCopy)).then(() => {
            dispatch(loadDogs())
        })
        // console.log('ev:', ev);

    }
    return <section className="add-dog">
        <h3>Are You a Member of Animal Shelter?</h3>
        <button onClick={() => setisModalShown(true)} className="show-modal-btn">Add a Dog for Adopet List</button>
        {isModalShown && <section>
            <button onClick={() => setisModalShown(false)}>X</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Dog's name" value={dogToAdd.name} onChange={(ev) => setDogToAdd((prevDogToAdd => {
                    return {
                        ...prevDogToAdd,
                        name: ev.target.value
                    }
                }))}></input>
                <select placeholder="gender" value={dogToAdd.gender} onChange={(ev) => setDogToAdd((prevDogToAdd => {
                    return {
                        ...prevDogToAdd,
                        gender: ev.target.value
                    }
                }))} >
                    <option>male</option>
                    <option>female</option>
                </select>
                <select placeholder="size" value={dogToAdd.size} onChange={(ev) => setDogToAdd((prevDogToAdd => {
                    return {
                        ...prevDogToAdd,
                        size: ev.target.value
                    }
                }))}>
                    <option>small</option>
                    <option>medium</option>
                    <option>large</option>
                </select>
                <textarea placeholder="add some information about your dog" value={dogToAdd.description} onChange={(ev) => setDogToAdd((prevDogToAdd => {
                    return {
                        ...prevDogToAdd,
                        description: ev.target.value
                    }
                }))}></textarea>
                <input type="text" placeholder="ULR dog's picture" value={dogToAdd.imgURLs[0]} onChange={(ev) => setDogToAdd((prevDogToAdd => {
                    return {
                        ...prevDogToAdd,
                        imgURLs: [ev.target.value]
                    }
                }))}></input>
                <input type="text" placeholder="Dog's breed" value={dogToAdd.breed} onChange={(ev) => setDogToAdd((prevDogToAdd => {
                    return {
                        ...prevDogToAdd,
                        breed: ev.target.value
                    }
                }))}></input>
                <input type="number" placeholder="weight (KG)" value={dogToAdd.weight} onChange={(ev) => setDogToAdd((prevDogToAdd => {
                    return {
                        ...prevDogToAdd,
                        weight: ev.target.value
                    }
                }))}></input>
                <input type="date" placeholder="dob" value={dogToAdd.dob} onChange={(ev) => setDogToAdd((prevDogToAdd => {
                    return {
                        ...prevDogToAdd,
                        dob: ev.target.value
                    }
                }))}></input>
                {/* dob */}
                <button className="add-dog-btn" >Add</button>
            </form>
        </section>}
    </section>
}