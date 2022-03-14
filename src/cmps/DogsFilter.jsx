import { useEffect, useState } from 'react'
import img1 from '../assets/imgs/filter-img.jpg'
import img2 from '../assets/imgs/filter-img2.jpg'
import { utilService } from '../services/utils.service.js'
export function DogsFilter() {
    const imgArray = [img1, img2]
    const [filterImg, setfilterImg] = useState(imgArray[utilService.getRandIntInclusive(0, imgArray.length - 1)])
    useEffect(() => {
        const intervalId = setInterval(() => {
            setfilterImg(imgArray[utilService.getRandIntInclusive(0, imgArray.length - 1)])
        }, 3000)
        return function cleanup() {
            clearInterval(intervalId)
        }
    })

    return (
        <section className='filter flex'>
            <img src={filterImg} alt=""></img>
            <div className='form-container'>
                <div>
                    <input type="text" placeholder="filter by text"></input>
                </div>
                <div>
                    <form>
                        <input list="ice-cream-flavors" name="ice-cream-choice" />
                        <datalist id="ice-cream-flavors" placeholder="Breed">
                            <option value="Chocolate" />
                            <option value="Coconut" />
                            <option value="Mint" />
                            <option value="Strawberry" />
                            <option value="Vanilla" />
                        </datalist>
                        <input list="ice-cream-flavors" name="ice-cream-choice" />
                        <datalist id="ice-cream-flavors" placeholder="Age">
                            <option value="Chocolate" />
                            <option value="Coconut" />
                            <option value="Mint" />
                            <option value="Strawberry" />
                            <option value="Vanilla" />
                        </datalist>
                        <button>Search</button>
                    </form>

                </div>
            </div>
        </section >)
}