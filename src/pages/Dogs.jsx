import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import corgi from '../assets/imgs/corgi.jpg'
import { loadDogs } from '../store/dog.action.js'
import { DogsList } from '../cmps/DogsList.jsx'
import { DogsFilter } from '../cmps/DogsFilter.jsx'
import { AddDog } from '../cmps/AddDog';
export function _Dogs({ dogs, loadDogs }) {
    const [skip, setSkip] = useState(0)
    const [dogsToDisplay, setDogsToDisplay] = useState([])
    useEffect(() => {
        loadDogs({}, skip)
        console.log('dogs:', dogs);

        // setDogsToDisplay([...dogsToDisplay, ...dogsFromLoading])
    }, [skip])

    useEffect(() => {
        // const dogsFromFetch = loadDogs({}, skip)
        // var displayDogs = dogs.filter(function (obj) { return dogsToDisplay.indexOf(obj) === -1; })
        // setDogsToDisplay([...displayDogs])
        console.log('dogs:', dogs);

        setDogsToDisplay([...dogs])
        // console.log('dogsToDisplay:', dogsToDisplay);
    }, [dogs])

    return <section className="dogs">
        {/* {console.log('dogs:', dogs)} */}
        <div className='container'>
            <img src={corgi} alt=""></img>
            <div className='first-header-p'><h2>What Are You Waiting For?</h2></div>
            <div className='second-header-p'><h3>Adopt Your New Friend!</h3></div>
        </div>

        <section>
            <DogsFilter />
            <div className='sort'>

            </div>
            {!!dogsToDisplay.length && <div className='dogs-list-container'>
                <DogsList dogs={dogsToDisplay} />
            </div>}
            {dogs.length >= skip && <div className='btn-container'>
                <button onClick={() => { setSkip(skip + 5) }}>Load more...</button>
            </div>}
        </section>
        <AddDog />
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
