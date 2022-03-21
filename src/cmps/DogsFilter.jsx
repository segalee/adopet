import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { version } from 'uuid'
import img1 from '../assets/imgs/filter-img.jpg'
import img2 from '../assets/imgs/filter-img2.jpg'
import img3 from '../assets/imgs/filter-img3.jpg'
import img4 from '../assets/imgs/filter-img4.jpg'
import img5 from '../assets/imgs/filter-img5.jpg'
import img6 from '../assets/imgs/filter-img6.jpg'
import { utilService } from '../services/utils.service.js'
import { loadDogs } from '../store/dog.action'
export function DogsFilter() {
    const imgArray = [img1, img2, img3, img4, img5, img6]
    const [filterImg, setfilterImg] = useState(imgArray[utilService.getRandIntInclusive(0, imgArray.length - 1)])
    const [opc, setOpc] = useState(1)
    const [txtFilter, setTxtFilter] = useState("")
    const { dogs } = useSelector(state => state.dogModule)
    const [filterBy, setfilterBy] = useState({
        breed: "",
        gender: "",
        size: "",
        txt: ""
    })
    const onHandleChange = (ev) => {
        setTxtFilter(ev.target.value)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        setfilterBy((prevFilter) => {
            return {
                ...prevFilter,
                txt: txtFilter
            }
        })
    }, [txtFilter])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setOpc(opc === 1 ? 0 : 1)
            setfilterImg(imgArray[utilService.getRandIntInclusive(0, imgArray.length - 1)])
        }, (opc === 1 ? 5000 : 200))

        return function cleanup() {
            clearInterval(intervalId)
        }
    })

    const onFormSubmit = (ev) => {
        ev.preventDefault()
        // dispatch(loadDogs(filterBy))
        let filterArr = ['breed', 'size', 'gender']
        for (let i = 0; i < 4; i++) {
            let filterVal = ev.target[i].value.toLowerCase()
            setfilterBy((prevFilter => {
                return {
                    ...prevFilter,
                    [filterArr[i]]: filterVal
                }
            }))
        }
    }
    const clearFilterSearch = () => {
        setfilterBy({
            breed: "",
            gender: "",
            size: "",
            txt: ""
        })
    }
    useEffect(() => {
        dispatch(loadDogs(filterBy, 0))
    }, [filterBy])

    const onFilterChange = (ev) => {
        const val = ev.target.value.toLowerCase()
        const choice = ev.target.name
        console.log('choice:', choice);
        switch (choice) {
            case 'breed-choice':
                setfilterBy((prevFilter => {
                    return {
                        ...prevFilter,
                        breed: val
                    }
                }))
                break
            case 'size-choice':
                setfilterBy((prevFilter => {
                    return {
                        ...prevFilter,
                        size: val
                    }
                }))
                break;
            case 'gender-choice':
                setfilterBy((prevFilter => {
                    return {
                        ...prevFilter,
                        gender: val
                    }
                }))
                break;
            default:
                break;
        }


    }



    let breedsArr = []
    let uniqueBreedsArr
    return (
        <section className='filter flex'>
            <img src={filterImg} alt="" style={{ opacity: `${(opc === 1 ? 1 : 0)}` }} ></img>
            <div className='form-container'>
                <div>
                    <input type="text" value={txtFilter} onChange={onHandleChange} placeholder="Find Dog By Name"></input>
                </div>
                <div>
                    <form
                    // onSubmit={onFormSubmit}
                    >
                        <input list="breed" name="breed-choice" placeholder="Breed"
                            value={filterBy.breed}
                            onChange={onFilterChange}

                        />
                        <datalist id="breed"
                        // value={filterBy.breed}
                        >
                            {dogs.map((dog) => {
                                return breedsArr.push(dog.breed)
                            })}
                            {uniqueBreedsArr = [...new Set(breedsArr)]}
                            {uniqueBreedsArr.map((breed, idx) => {
                                return <option key={idx} value={`${breed}`}></option>
                            })}
                        </datalist>


                        <input list="size" name="size-choice" placeholder="Size"
                            value={filterBy.size}
                            onChange={onFilterChange}

                        />
                        <datalist id="size"
                        // value={filterBy.size}
                        >
                            <option value="Small" />
                            <option value="Medium" />
                            <option value="Large" />
                        </datalist>
                        <input list="gender" name="gender-choice" placeholder="Gender"
                            value={filterBy.gender}
                            onChange={onFilterChange}

                        />
                        <datalist id="gender" value={filterBy.gender}>
                            <option value="Male" />
                            <option value="Female" />
                        </datalist>
                        {/* <button>Search</button> */}
                    </form>
                    <button className='classic-btn' onClick={clearFilterSearch}>Clear</button>
                </div>
            </div>
        </section >)
}



