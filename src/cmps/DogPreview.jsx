import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'

import { getImgUrl } from '../services/cloudinary-service.js'
import { loadDogs, removeDog } from '../store/dog.action.js'
import { utilService } from '../services/utils.service.js'
import corgi from '../assets/imgs/corgi.jpg'
import { DeleteDogModal } from './DeleteDogModal.jsx';


export function _DogPreview({ dog }) {
    const [imgUrl, setimgUrl] = useState(null)
    const aboutDog = <div>
        <h2>{dog.name} the {dog.breed}</h2>
        <h5>{utilService.calculateAge(dog.dob)} Years old</h5>
        <p> Gender: {dog.gender}</p>
        <p>{`Born at: ${dog.dob}`}</p>
    </div>
    const [dogInfo, setDogInfo] = useState(aboutDog)
    const [isModalToDeleteShown, setIsModalToDeleteShown] = useState(false)
    const [isDeletedModal, setIsDeletedModal] = useState(false)
    const dispatch = useDispatch()
    const onOpenDeleteModal = () => {
        setIsModalToDeleteShown(true)
    }
    const onDeleteDogFromList = (id) => {
        dispatch(removeDog(id))
        setIsDeletedModal(true)
        // const intervalId = setTimeout(() => {
        //     setIsDeletedModal(true)
        // }, 3000)

    }

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setIsDeletedModal(false)
        }, 3000)
        return clearInterval(intervalId)
    }, [isDeletedModal])

    return <>
        {isModalToDeleteShown && <div className='delete-modal flex column'>
            <div>Are You Sure You Want to Delete?</div>
            <div className='flex justify-space'><div className="opt delete" onClick={() => onDeleteDogFromList(dog._id)}>Delete</div><div className="opt cancel" onClick={() => setIsModalToDeleteShown(false)}>cancel</div></div>
        </div>}
        {isDeletedModal && <div className='isDeletedModal'>{dog.name} was deleted from the list!</div>}
        <section className="dog-preview" onMouseEnter={() => setDogInfo(<p>{dog.description}</p>)} onMouseLeave={() => setDogInfo(aboutDog)}>


            <section>
                <div className='activities-container flex'>
                    <RiDeleteBin5Line style={{ color: "#031212", "textShadow": "0 0 0 #fff" }} onClick={onOpenDeleteModal} />
                    <Link to={`/edit/${dog._id}`}> <FiEdit style={{ color: "#031212", "textShadow": "0 0 0 #fff" }} /></Link>
                </div>
                <img src={dog.imgURLs[0]} alt=""></img>
            </section>
            {dogInfo}
            <Link to={`/details/${dog._id}`} className="clean-link">More Details</Link>
        </section>
    </>

}




function mapStateToProps({ dogModule }) {
    return {
        dogs: dogModule.dogs,
        currFilterBy: dogModule.currFilterBy,
    };
}
const mapDispatchToProps = {
    loadDogs
};

export const DogPreview = connect(
    mapStateToProps,
    mapDispatchToProps
)(_DogPreview);
