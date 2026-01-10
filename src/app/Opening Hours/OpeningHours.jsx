import React from 'react'
import style from "./OpeningHours.module.css"

import iamge from "../../frontend/image/OpeningHours/OpeningHours.png"
import { useTranslation } from 'react-i18next';

export default function OpeningHours() {
  const { t, i18n } = useTranslation();
  return (
    <div className={style.OpeningHours}>
     <div className={style.content}>
      <h3>{i18n.language === "en" ? t("Restaurant") : t("هاته")}<span>{t("Opening Hours")}</span></h3>
      <p>{t("OpeningHoursText")}</p>
     </div>
     <div className={style.imageContainer}>
        <img src={iamge} alt="" />
     </div>
    </div>
  )
}
