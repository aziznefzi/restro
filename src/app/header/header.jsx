import React, { useContext, useEffect, useState } from 'react'
import Style from './header.module.css'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

import Slide from '@mui/material/Slide';

import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '../context/themeContext';
import { useTranslation } from 'react-i18next';

export default function Header() {
const NavValue = [
  {id: 1, icon: <HomeIcon />, name: "Home", Link: "#Home"},
  {id: 2, icon: <StarIcon />, name: "Popular", Link: "#Popular"},
  {id: 3, icon: <LocalOfferIcon />, name: "Offers", Link: "#Offers"},
  {id: 4, icon: <InfoIcon />, name: "About", Link: "#About"},
  {id: 5, icon: <RestaurantMenuIcon />, name: "Menu", Link: "#Menu"},
  {id: 6, icon: <DeliveryDiningIcon />, name: "Delivery", Link: "#Delivery"},
  {id: 7, icon: <AccessTimeIcon />, name: "Opening", Link: "#Opening"},
  {id: 8, icon: <LocationOnIcon />, name: "Location", Link: "#Location"},
  {id: 9, icon: <ContactPageIcon />, name: "Contact", Link: "#Contact"},
]
const {t, i18n} = useTranslation();
const theme = useTheme();
const {WebsiteTheme, setWebsiteTheme} = useContext(ThemeContext);
const [NavOpen, setNavOpen] = useState(false);

useEffect(() => {
  if(NavOpen){
    document.body.style.overflow = "hidden";
  }else{
    document.body.style.overflow = "auto";
  }
}, [NavOpen])

const navHandle = NavValue.map((item) => {
    return(
     <li key={item.id}>
       <a
       onClick={() =>{
        if(NavOpen){
          setNavOpen(false)
        }
       }
      }
       href={item.Link}>
         <div className={Style.navItemContent}>
           <span className={Style.iconSpan}>{item.icon}</span>
           {t(item.name)}
         </div>
         <ArrowForwardIosIcon className={Style.arrowIcon} />
       </a>
     </li>
    )
  })
  const [langOpen, setLangOpen] = useState(false);
  const selectRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  const handleLanguageSelect = (lang) => {
      i18n.changeLanguage(lang);
      localStorage.setItem('lang', lang);
      setLangOpen(false);
  };

  const currentLangName = i18n.language === 'en' ? 'English' : 'Arabe';
  const [scrolled, setScrolled] = useState(false); // Added for scrolled state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <div className={`${Style.header} ${Style[WebsiteTheme]} ${scrolled ? Style.scrolled : ""}`}>
         {NavOpen ?<CancelIcon 
         onClick={() => setNavOpen(false)}
         className={Style.iconNav}/>
        : <MenuIcon 
        onClick={() => setNavOpen(true)}
        className={Style.iconNav}/>}
         <ul className={Style.nav}>
           {navHandle}
         </ul>
      <div className={Style.ButtonSection}>
        <div className={Style.LangSection}>
         <div 
            className={`${Style.selectContainer} ${langOpen ? Style.active : ''}`}
            onClick={() => setLangOpen(!langOpen)}
            ref={selectRef}
         >
             <div className={Style.customSelectDisplay}>
                 {currentLangName}
             </div>
             <label className={Style.selectLabel}>{t("Language")}</label>
             
             {langOpen && (
                 <div className={Style.dropdownMenu}>
                     <div 
                        className={`${Style.dropdownItem} ${i18n.language === 'en' ? Style.selected : ''}`}
                        onClick={(e) => { e.stopPropagation(); handleLanguageSelect('en'); }}
                     >
                         English
                     </div>
                     <div 
                        className={`${Style.dropdownItem} ${i18n.language === 'ar' ? Style.selected : ''}`}
                        onClick={(e) => { e.stopPropagation(); handleLanguageSelect('ar'); }}
                     >
                         Arabe
                     </div>
                 </div>
             )}
         </div>
     </div>
         <div className={Style.themeButton}>
         {WebsiteTheme === "dark" ? <WbSunnyIcon onClick={() => setWebsiteTheme("light")}/> : <NightlightRoundIcon onClick={() => setWebsiteTheme("dark")}/>}
         </div>
       <DeleveriButton/>
      </div>
    </div>
    <Slide in={NavOpen}>
    <div className={`${Style.mobileNav} ${Style[WebsiteTheme]}`}>
      <ul>
        {navHandle}
      </ul>
      <DeleveriButton/>
    </div>
    </Slide>
    </>
  )
}

const DeleveriButton = () => {
  const {t} = useTranslation();
  return(
    <button>{t("Delivery")}</button>
  )
}