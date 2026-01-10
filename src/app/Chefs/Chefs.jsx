import React from 'react'
import style from "./Chefs.module.css"
import { useTranslation } from 'react-i18next';

import chefs from "../../frontend/image/Chefs/Chefs.png"
import chef1 from "../../frontend/image/Chefs/Chefs-1.png"
import chef2 from "../../frontend/image/Chefs/Chefs-2.png"
import chef3 from "../../frontend/image/Chefs/Chefs-3.png"
import { useTheme } from '@mui/material/styles';

export default function Chefs() {
  const chefsData = [
    {
      name: "Ahmed Said",
      image: chef1,
      description: "fast food spesialist"
    },
    {
      name: "Sami Dridi",
      image: chef2,
      description: "Luxurious food spesialist"
    },
    {
      name: "Nabil Fazai",
      image: chef3,
      description: "Trap food spesialist"
    }
  ]
  const { t } = useTranslation();
  const theme = useTheme()
  return (
    <div className={style.Chefs}>
      <h3>{t("Chefs")}</h3>
      <p>{t("ChefsText")}</p>
      <img src={chefs} alt="Our Master Chefs Team" className={style.mainImage} />
      <div className={style.content}>
        {chefsData.map((chef, index) => (
          <div style={{background: theme.palette.websiteTheme.background.bg3}} key={index} className={style.card}>
            <img src={chef.image} alt={chef.name} />
            <h4>{chef.name}</h4>
            <p>{t(chef.description)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
