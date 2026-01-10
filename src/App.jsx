import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from './app/header/header'

library.add(faFacebook, faTiktok, faInstagram);
import Home from './app/Home/Home'
import PopularDishes from './app/Popular Dishes/PopularDishes'
import SpecialOffers from './app/Special Offers/SpecialOffers'
import AboutUs from './app/About Us/AboutUs'
import Gallery from './app/Gallery/Gallery'
import Chefs from './app/Chefs/Chefs'
import Testimonials from './app/Testimonials/Testimonials'
import Delivery from './app/Delivery/Delivery'
import OpeningHours from './app/Opening Hours/OpeningHours'
import Location from './app/Location/Location'
import ContactUs from './app/ContactUs/ContactUs'
import FAQ from './app/FAQ/FAQ'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { getDesignTokens } from './frontend/theme/teme'
import { useContext, useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeContext } from './app/context/themeContext'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
function App() {
  const {WebsiteTheme} = useContext(ThemeContext)
  const theme = useMemo(() => createTheme(getDesignTokens(WebsiteTheme)), [WebsiteTheme])
  const {t, i18n} = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n]);
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline /> 
    <Header />
    <Home />
    <PopularDishes />
    <SpecialOffers />
    <AboutUs />
    <Gallery />
    <Chefs />
    <Delivery />
    <OpeningHours />
    <FAQ />
    </ThemeProvider>
    </>
  )
}

export default App
