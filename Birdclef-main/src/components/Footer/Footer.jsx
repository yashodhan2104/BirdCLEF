import React from 'react';
import './../Footer/footer.css';

const quickLinks01 = [
    {
        path: '#',
        display: 'Marketing'
    },
    {
        path: '#',
        display: 'Analytics'
    },
    {
        path: '#',
        display: 'Commerce'
    }
];
const quickLinks02 = [
    {
        path: '#',
        display: 'Guides'
    },
    {
        path: '#',
        display: 'FAQs'
    },
    {
        path: '#',
        display: 'Case Studies'
    }
];



const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer__logo">
                    <div className='footer__det'>
                    <h2>BirdClef</h2>
                    <p className="description">Join with us</p>
                    <p className="small_text description"> Discover innovative products designed to enhance your experience in the world of avian exploration and research.
Join us at BirdClef and embark on a journey of discovery, conservation, and camaraderie that celebrates the beauty and significance of birds in our world.</p>
</div>
                   
                    <div className="footer_quick-links">
                          <h3 className="quick_links-title">Solution</h3>
                                 <ul className="quick__links">
                                     {
                                         quickLinks01.map((item, index) => (
                                            <li className='quick__link-item' key={index}>
                                                 <a href={item.path}>{item.display}</a>
                                             </li>
                                            ))
                                    }
                                 </ul>
                     </div>
                     <div className="footer_quick-links">
                          <h3 className="quick_links-title">Documentation</h3>
                                 <ul className="quick__links">
                                     {
                                         quickLinks02.map((item, index) => (
                                            <li className='quick__link-item' key={index}>
                                                 <a href={item.path}>{item.display}</a>
                                             </li>
                                            ))
                                    }
                                 </ul>
                     </div>
                    
             </div>
            </div>
         </div>
    </footer>
  )
}

export default Footer;
