import React, { useRef, useEffect, useState } from 'react';
import RecordRTC from 'recordrtc';
import './header.css';

const nav_links = [
    {
        path: '#home',
        display: 'HOME',
    },
    {
        path: '#Service',
        display: 'Services',
    },
    {
        path: '#about',
        display: 'About',
    },
    {
        path: '#footer',
        display: 'Help',
    }
];

const Header = ({ theme, toggleTheme }) => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const [isRecording, setIsRecording] = useState(false);
    const [audioData, setAudioData] = useState(null);
    const mediaRecorderRef = useRef(null);
    const [activeLink, setActiveLink] = useState(nav_links[0].path);

    const headerFunc = () => {
        if (window.scrollY > 80) {
            headerRef.current.classList.add('header__shrink');
        } else {
            headerRef.current.classList.remove('header__shrink');
        }
    };

    const handleClick = (e, path) => {
        e.preventDefault();
        const targetElement = document.querySelector(path);
        
        if (targetElement) {
            const location = targetElement.offsetTop;
    
            window.scrollTo({
                left: 0,
                top: location - 80,
                behavior: 'smooth'
            });

            setActiveLink(path);
        }
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new RecordRTC(stream, {
                type: 'audio'
            });
            mediaRecorder.startRecording();
            setIsRecording(true);
            mediaRecorderRef.current = mediaRecorder;
        } catch (error) {
            console.error('Error starting recording:', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stopRecording(() => {
                const blob = mediaRecorderRef.current.getBlob();
                setAudioData(blob);
                setIsRecording(false);
            });
        }
    };

    const uploadAudio = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAudioData(file);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);

        return () => window.removeEventListener('scroll', headerFunc);
    }, []);

    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

    return (
        <header className={`header ${theme}`} ref={headerRef}>
            <div className='Container'>
                <div className='nav__wrapper'>
                    <div className='logo'>
                        <h1>BirdClef</h1>
                    </div>
                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <ul className='menu'>
                            {nav_links.map((item, index) => (
                                <li className={`menu-item ${item.path === activeLink ? 'active' : ''}`} key={index}>
                                    <a href={item.path} onClick={(e) => handleClick(e, item.path)} className='menu__link'>{item.display}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='mic' onClick={isRecording ? stopRecording : startRecording}>
                        <span>
                            <i className={`ri-mic-fill ${isRecording ? 'recording' : ''}`}></i>
                            {isRecording ? 'Stop Recording' : 'Record'}
                        </span>
                    </div>
                    <div className='upload'>
                        <label htmlFor="audioUpload">
                            <span>
                                <i className="ri-upload-2-line"></i>
                                Upload
                            </span>
                        </label>
                        <input type="file" accept="audio/*" id="audioUpload" onChange={uploadAudio} style={{ display: 'none' }} />
                    </div>
                    <div className='light__mode' onClick={toggleTheme}>
                        {theme === 'light-theme' ? (
                            <span>
                                <i className="ri-moon-fill"></i> Dark
                            </span>
                        ) : (
                            <span>
                                <i className="ri-sun-line"></i> Light
                            </span>
                        )}
                    </div>

                    <span className='mobile__menu' onClick={toggleMenu}>
                        <i className="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
