import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import swiggy from '../Img/Swiggy.png';
import zomato from '../Img/download.png'


function Footer() {
  return (
    <>
      <div className="wrapper">
        <div className="sub_wrapper">
          <div className='about-section'>
            <h2>About Us</h2>
            <p>Food for us comes from our relatives, whether they have wings or fins or roots.
              That is how we consider food. Food has a culture. It has a history.
              It has a story. It has relationships.</p>
          </div>
          <div className='address-section'>
            <h2>Address</h2>
            <h4>City : ABC, State : XYZ</h4>
            <h4>Email: myShop123@gmail.com</h4>
            <h4>Mobile : + 923546738127</h4>
          </div>
          <div className='partner-section'>
            <h2>Our Partner</h2>
            <div className='swiggy'>
              <span><img src={swiggy} alt='' /></span>
              <p>Swiggy</p>
            </div>
            <div className='swiggy'>
              <span><img src={zomato} alt='' /></span>
              <p>Zomato</p>
            </div>
          </div>
          <div className='social-icons'>
            <h2>Stay In Touch</h2>
            <p>{<FacebookIcon />}</p>
            <p>{<InstagramIcon />}</p>
            <p>{<TwitterIcon />}</p>
            <p>{<WhatsAppIcon />}</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;                                                                                                      