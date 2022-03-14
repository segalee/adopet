import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import corgi from '../assets/imgs/corgi.jpg'
import { loadDogs } from '../store/dog.action.js'
import { DogsList } from '../cmps/DogsList.jsx'
import { DogsFilter } from '../cmps/DogsFilter.jsx'
export function _Dogs({ dogs, loadDogs }) {

    useEffect(() => {
        loadDogs()

    }, [])

    useEffect(() => {
        console.log('dogs:', dogs);
    }, [dogs])

    return <section className="dogs">
        <div className='container'>
            <img src={corgi} alt=""></img>
            <div className='first-header-p'><h2>What Are You Waiting For?</h2></div>
            <div className='second-header-p'><h3>Adopt Your New Friend!</h3></div>
        </div>

        <section>
            <DogsFilter />
            <div className='sort'>

            </div>
            <div className='dogs-list-container'>
                <DogsList dogs={dogs} />
            </div>

        </section>

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

export const Dogs = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Dogs);