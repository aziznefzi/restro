import React from 'react'
import style from "./Home.module.css"
import logo from "../../frontend/image/logo.png"
import CrownIcon9 from "../../frontend/image/Crown Icon 9.png"
import { useTranslation } from 'react-i18next';
export default function Home() {
  const {t} = useTranslation()
  return (
    <div className={style.Home}>
      <div className={style.LogoTitle}>
        <img src={logo} alt="" />
      </div>
      <div className={style.content}>
        <img src={CrownIcon9} alt="" />
        <h3>{t("welcome")}</h3>
        <p>{t("wecomeText")}</p>
        <button>{t("OurOffers")}</button>
      </div>
    </div>
  )
}
