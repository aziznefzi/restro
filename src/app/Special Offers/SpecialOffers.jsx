import React from 'react'
import style from './SpecialOffers.module.css'

{/* i18n */}
import { useTranslation } from 'react-i18next';
{/* i18n */}

{/* image */}

//dark image
import buerger1 from '../../frontend/image/1-buerger.png'
import buerger2 from '../../frontend/image/2-buerger.png'
import buerger3 from '../../frontend/image/3-buerger.png'

//light image
import buerger1Light from '../../frontend/image/1-buerger-light.png'
import buerger2Light from '../../frontend/image/2-buerger.Light.png'
import buerger3Light from '../../frontend/image/3-buerger.Light.png'
{/* image */}

{/* mui */}
import { useTheme } from '@mui/material/styles';
{/* mui */ }

{/* context */}
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
{/* context */}

export default function SpecialOffers() {
const {t} = useTranslation();
const {WebsiteTheme} = useContext(ThemeContext);
const theme = useTheme();
const SpecialOffersItem = [
    {
        id: 1,
        name: "Flash Sales",
        image: WebsiteTheme === 'light' ? buerger1Light : buerger1,
        text1: "The Golden Hour",
        text2: "VIP Fast Pass",
        text3: "Elite Express Dinner"    },
    {
        id: 2,
        name: "Value Offers",
        image: WebsiteTheme === 'light' ? buerger2Light : buerger2,
        text1: "The Luxury Duo",
        text2: "Premium Joy Box",
        text3: "A Bite of Luxury"
    },
    {
        id: 3,
        name: "Combo Deals",
        image: WebsiteTheme === 'light' ? buerger3Light : buerger3,
        text1: "The Golden Hour",
        text2: "Prestige Combo",
        text3: "The 15-Min Feast"
    },
]
  return (
    <div 
    style={{backgroundColor: theme.palette.websiteTheme.background.bg3 }}
    className={style.SpecialOffers}>
      <h1>{t("SpecialOffers")}</h1>
      <div className={style.SpecialOffersContent}>
        {SpecialOffersItem.map(item => {
            return(
                <div
                style={{
                  '--item-bg': theme.palette.websiteTheme.background.bg1,
                }}
                className={`${style.SpecialOffersItem} ${style[WebsiteTheme]}`}
                key={item.id}>
                    <h5>{item.name}</h5>
                    <img src={item.image} alt="" />
                    <ul className={style.SpecialOffersItemText}>
                    <li>{t(item.text1)}</li>
                    <li>{t(item.text2)}</li>
                    <li>{t(item.text3)}</li>
                    </ul>
                    <button>{t("Reservation")}</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}
