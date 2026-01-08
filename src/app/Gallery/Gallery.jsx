import style from "./Gallery.module.css"
import { useTranslation } from 'react-i18next';

// استيراد كافة الصور من مجلد Gallery
const imageModules = import.meta.glob("../../frontend/image/Gallery/*.{jpg,png,jpeg}", { eager: true });
const allImages = Object.values(imageModules).map(module => module.default);

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <div className={style.Gallery}>
      <h3>{t("Gallery")}</h3>
      <div className={style.content}>
        {allImages.map((img, index) => (
          <div key={index} className={style.card}>
            <img src={img} alt={`Gallery item ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
