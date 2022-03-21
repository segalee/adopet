import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadDogs } from '../store/dog.action.js'
import { DogPreview } from '../cmps/DogPreview.jsx'

export function DogsList({ dogs }) {
    if (!dogs) return <div><p>Loading...</p> <img alt='loader' src='https://raw.githubusercontent.com/SamHerbert/SVG-Loaders/5deed925369e57e9c58ba576ce303466984db501/svg-loaders/spinning-circles.svg' /></div>
    if (!dogs.length) return <div><p>No dogs Yet!</p> <img alt='loader' src='https://raw.githubusercontent.com/SamHerbert/SVG-Loaders/5deed925369e57e9c58ba576ce303466984db501/svg-loaders/spinning-circles.svg' /></div>
    return dogs.map((dog) => {
        return <DogPreview key={dog._id} dog={dog} />
    })

}




// function mapStateToProps({ dogModule }) {
//     return {
//         dogs: dogModule.dogs,
//         // currFilterBy: dogModule.currFilterBy,
//     };
// }
// const mapDispatchToProps = {
//     // loadDogs
// };

// export const DogsList = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(_DogsList);
