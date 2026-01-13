import React from 'react'
import style from "./AboutUs.module.css"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { useTheme } from '@mui/material/styles';
export default function AboutUs() {
  const {WebsiteTheme} = useContext(ThemeContext);
  const {t} = useTranslation();
  const theme = useTheme();
  return (
    <div
    id='About'
    className={`${style.AboutUs} ${style[WebsiteTheme]}`}>
       {/* تعريف التدرج الذهبي لمشاركته مع الأيقونات */}
       <svg width="0" height="0" style={{ position: 'absolute' }}>
         <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
           <stop offset="0%" stopColor="#BF953F" />
           <stop offset="25%" stopColor="#FCF6BA" />
           <stop offset="50%" stopColor="#B38728" />
           <stop offset="75%" stopColor="#FBF5B7" />
           <stop offset="100%" stopColor="#AA771C" />
         </linearGradient>
       </svg>

       <h3 style={{color: theme.palette.websiteTheme.text.text1}}>{t("about")}<span>{t("Us")}</span></h3>
       <p style={{color: theme.palette.websiteTheme.text.text3}}>{t("aboutText")}</p>
       <div className={style.iconMedia}>
        <FontAwesomeIcon icon={['fab', 'facebook']} />
        <FontAwesomeIcon icon={['fab', 'tiktok']} />
        <FontAwesomeIcon icon={['fab', 'instagram']} />
       </div>
    </div>
  )
}
