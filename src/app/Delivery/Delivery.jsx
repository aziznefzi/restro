import React from 'react'
import Style from './Delivery.module.css'
import { useTranslation } from 'react-i18next';

{/* Delevry imports */}
import img1 from '../../frontend/image/Delevry/Delevry-1.png'
import img2 from '../../frontend/image/Delevry/Delevry-2.png'
{/* Delevry imports */}

{/* mui icons */}
import SpeedIcon from '@mui/icons-material/Speed';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShieldIcon from '@mui/icons-material/Shield';
import { useTheme } from '@mui/material/styles';
{/* mui icons */}

export default function Delivery() {
  const {t} = useTranslation();
  const theme = useTheme()
  const DelevryContent = [
    {
      id: 1,
      title: t("Fast Delivery"),
      description: t("We don’t just race time; we beat it. Your favorite meal arrives hot, as if it just left our kitchen"),
      icon: <SpeedIcon />,
    },
    {
      id: 2,
      title: t("Order Tracking"),
      description: t("Stay in control. Track your order's journey step-by-step, from the moment it’s prepped until it reaches your hands"),
      icon: <LocalShippingIcon/>
    },
    {
      id: 3,
      title: t("Safety & Quality"),
      description: t("Your safety is our priority. We guarantee secure packaging and world-class quality standards that preserve the taste and luxury of our dishes"),
      icon: <ShieldIcon/>
    },
  ]
  return (
    <div className={Style.Delivery}>
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#BF953F" />
            <stop offset="25%" stopColor="#FCF6BA" />
            <stop offset="50%" stopColor="#B38728" />
            <stop offset="75%" stopColor="#FBF5B7" />
            <stop offset="100%" stopColor="#AA771C" />
          </linearGradient>
        </defs>
      </svg>

      <h3>{t("Delivery")}</h3>
      <div className={Style.content}>
        <div className={Style.DelevryImage}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
        <div className={Style.DelevryContent}>
          {DelevryContent.map((item) => (
            <div 
            style={{background: theme.palette.websiteTheme.background.bg3}}
            key={item.id} className={Style.DelevryItem}>
              <div className={Style.DelevryIcon}>{item.icon}</div>
              <p className={Style.DelevryTitle}>{item.title}</p>
              <p style={{color: theme.palette.websiteTheme.text.text5}} className={Style.DelevryDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}