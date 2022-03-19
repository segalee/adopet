import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { FooterBtn } from './FooterBtn'
export function AppFooter() {
    const reactIconStyle = { color: '#fff', marginLeft: '-2px', marginTop: '3.5px' }
    return <section className="footer flex">
        <div className="footer-links flex">
            <FooterBtn url="https://www.linkedin.com/in/segal-lee/" bgColor="#3576b8" reactIcon={<FaLinkedinIn size="20px" style={reactIconStyle} />} />
            <FooterBtn url="https://github.com/segalee" bgColor="#64686c" reactIcon={<AiFillGithub size="20px" style={reactIconStyle} />} />
            <FooterBtn url="https://facebook.com" bgColor="#537bbd" reactIcon={<FaFacebookF size="20px" style={reactIconStyle} />} />
        </div>
        <div><p> © All rights reserved</p></div>
    </section>

}