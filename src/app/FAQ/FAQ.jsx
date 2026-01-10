import React from 'react'
import style from './FAQ.module.css'

import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { useTheme } from '@mui/material/styles';

export default function FAQ() {
  const { t } = useTranslation();
  const { WebsiteTheme } = useContext(ThemeContext);
  const theme = useTheme();
  const IemBg = {backgroundColor: theme.palette.websiteTheme.background.bg3}
  return (
    <div 
      id='FAQ'
      style={{ backgroundColor: theme.palette.websiteTheme.background.bg1 }}
      className={`${style.faq} ${style[WebsiteTheme]}`}
    >
      <h2>{t("faq")}</h2>
      <p className={style.farewell}>{t("farewell")}</p>
      <div className={style.divider}></div>
      <div className={style.content}>
        <div className={style.locationAndMedia}>
          <div className={style.information}>
            <div 
            style={IemBg}
            className={style.item}>
              <div className={style.iconWrapper}>
                <AddLocationIcon />
              </div>
              <p>{t("location")}</p>
            </div>
            <div 
            style={IemBg}
            className={style.item}>
              <div className={style.iconWrapper}>
                <LocalPhoneIcon />
              </div>
              <p>22 033 022</p>
            </div>
          </div>
          <div className={style.information}>
            <div 
            style={IemBg}
            className={style.item}>
              <div className={style.iconWrapper}>
                <EmailIcon />
              </div>
              <p>resrtro@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
