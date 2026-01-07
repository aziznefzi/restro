import React from 'react'

{/* css */}
import styled from './PopularDishes.module.css'
{/* css */}

{/* i18n */}
import { useTranslation } from 'react-i18next';
{/* i18n */}

{/* icons material */}
import RestaurantIcon from '@mui/icons-material/Restaurant';
{/* icons material */}

{/* image */}
import salade from '../../frontend/image/menu-4.jpg'
import burger from '../../frontend/image/buerger-img.jpg'
import pizza from '../../frontend/image/pizza-img.jpg'
{/* image */}

import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { useTheme } from '@mui/material/styles';

export default function PopularDishes() {
const {t} = useTranslation();
const {WebsiteTheme} = useContext(ThemeContext);
const theme = useTheme();
const PopularDishesItem = [
  {
   id: 1,
   image: burger,
   name: "Burger", 
  },
  {
    id: 2,
    image: pizza,
    name: "Pizza",
   },
   {
    id: 3,
    image: salade,
    name: "Salade",
   }
]
  return (
    <div 
    style={{backgroundColor : theme.palette.websiteTheme.background.bg2}}
    className={`${styled.PopularDishes} ${styled[WebsiteTheme]}`}>
      <h1>{t("PopularDishes")}</h1>
      <p>{t("PopularDishesDescription")}</p>
      <div className={styled.PopularDishesContent}>
          {PopularDishesItem.map((item) => {
            return(
              <div className={styled.PopularDishesContentItem} key={item.id}>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
                <RestaurantIcon sx={{fontSize: "0.8rem",
                border: "2px solid #BF953F",
                color: "#BF953F",
                width: "40px",
                height: "40px",
                padding: "7px",
                cursor: "pointer",
                borderRadius: "50%"}}/>
              </div>
            )
          })}
      </div>
    </div>
  )
}
