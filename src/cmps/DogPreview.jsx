import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import corgi from '../assets/imgs/corgi.jpg'
import { loadDogs } from '../store/dog.action.js'
import { getImgUrl } from '../services/cloudinary-service.js'
import { Link } from 'react-router-dom';


function calculateAge(birthday) {
    //milliseconds in a year 1000*24*60*60*365.24 = 31556736000; 
    let today = new Date(),
        //birthay has 'Dec 25 1998'
        dob = new Date(birthday),
        //difference in milliseconds
        diff = today.getTime() - dob.getTime(),
        //convert milliseconds into years
        years = Math.floor(diff / 31556736000),
        //1 day has 86400000 milliseconds
        days_diff = Math.floor((diff % 31556736000) / 86400000),
        //1 month has 30.4167 days
        months = Math.floor(days_diff / 30.4167),
        days = Math.floor(days_diff % 30.4167);

    console.log(`${years} years ${months} months ${days} days`);
    return `${years} years ${months} months ${days} days`;
}



export function _DogPreview({ dog }) {
    const [imgUrl, setimgUrl] = useState(null)
    const aboutDog = <div>
        <h2>{dog.name} the {dog.breed}</h2>
        <p> Gender: {dog.gender}</p>
        <p>{`Born at: ${dog.dob} (Age: ${dog.age})`}</p>
    </div>
    const [dogInfo, setDogInfo] = useState(aboutDog)

    // useEffect(() => {
    //     async function getImgURL() {
    //         const imgReceived = await dog.imgURL[0]
    //         console.log('imgReceived:', imgReceived);
    //         setimgUrl(imgReceived)
    //     }
    //     getImgURL()
    // }, [])


    return <section className="dog-preview" onMouseEnter={() => setDogInfo(<p>{dog.description}</p>)} onMouseLeave={() => setDogInfo(aboutDog)}>
        <img src={dog.imgURLs[0]} alt=""></img>
        {dogInfo}
        <Link to={`/details/${dog._id}`} className="clean-link">More Details</Link>
    </section>


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
