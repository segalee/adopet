import { Link } from 'react-router-dom'
import adopetSvg from '../assets/svgs/adopet_svg.svg'
export function HomePage() {
    return (
        <section className="home flex justify-space">
            <img src={adopetSvg} alt=""></img>
            <div className='classic-btn'>
                <Link to="/dogs" className='clean-link'>Start</Link>
            </div>
        </section>
    )

}