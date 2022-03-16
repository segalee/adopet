import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
        breed: [],
        gender: [],
        size: [],
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
        dispatch(loadDogs(filterBy))
    }, [filterBy])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setOpc(opc === 1 ? 0 : 1)
            setfilterImg(imgArray[utilService.getRandIntInclusive(0, imgArray.length - 1)])
        }, (opc === 1 ? 5000 : 200))

        return function cleanup() {
            clearInterval(intervalId)
        }
    })
    let breedsArr = []
    let uniqueBreedsArr
    return (
        <section className='filter flex'>
            <img src={filterImg} alt="" style={{ opacity: `${(opc === 1 ? 1 : 0)}` }} ></img>
            <div className='form-container'>
                <div>
                    <input type="text" value={txtFilter} onChange={onHandleChange} placeholder="filter by dog's name"></input>
                </div>
                <div>
                    <form>
                        <input list="breed" name="breed-choice" placeholder="Breed" />
                        <datalist id="breed">
                            {dogs.map((dog) => {
                                return breedsArr.push(dog.breed)
                            })}
                            {uniqueBreedsArr = [...new Set(breedsArr)]}
                            {uniqueBreedsArr.map((breed, idx) => {
                                return <option key={idx} value={`${breed}`}></option>
                            })}
                        </datalist>
                        <input list="age" name="age-choice" placeholder="Age" />
                        <datalist id="age">
                            <option value="Puppy" />
                            <option value="Young" />
                            <option value="Adult" />
                            <option value="Old" />
                        </datalist>
                        <input list="gender" name="gender-choice" placeholder="Gender" />
                        <datalist id="gender">
                            <option value="male" />
                            <option value="female" />
                        </datalist>
                        <button>Search</button>
                    </form>

                </div>
            </div>
        </section >)
}



