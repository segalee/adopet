import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
export function AppFooter() {
    return <section className="footer flex">
        <div className="footer-links flex">
            <Link to="#" className='clean-link linkedin' style={{ backgroundColor: '#3576b8' }}><FaLinkedinIn size="20px" style={{ color: '#fff', marginLeft: '4px', marginTop: '4px' }} /></Link>
            <Link to="#" className='clean-link git'><AiFillGithub size="20px" style={{ color: '#fff', marginLeft: '4px', marginTop: '4px' }} /></Link>
            <Link to="#" className='clean-link fb'><FaFacebookF size="20px" style={{ color: '#fff', marginLeft: '4px', marginTop: '4px' }} /></Link>
        </div>
        <div><p> © All rights reserved</p></div>
    </section>

}