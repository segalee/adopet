export const FooterBtn = ({ url, reactIcon, bgColor }) => {
    return <button onClick={() => window.location.replace(`${url}`)} className='footer-btn' style={{ backgroundColor: `${bgColor}` }}>
        {reactIcon}
    </button>
}