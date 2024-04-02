/* eslint-disable import/no-unresolved */
import { QR_form, booth, grass_left, grass_right } from 'src/assets/images'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import styles from './home.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SwiperOptions } from 'swiper/types'
import HANG_1 from 'src/assets/images/slider/hang1'
import HANG_2 from 'src/assets/images/slider/hang2'

const swiperOptions: SwiperOptions = {
  speed: 1800,
  spaceBetween: 10,
  slidesPerView: 5,
  autoplay: {
    delay: 0
  },
  modules: [Autoplay],
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
    1280: {
      slidesPerView: 5
    }
  }
}

export interface HomeProps {}

export default function Home() {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.booth_wrapper}>
        <div className={styles.booth}>
          <div className={styles.booth_body}>
            <img src={grass_left} alt='grass-left' />
            <img src={booth} alt='booth' />
            <img src={grass_right} alt='grass-right' />
          </div>
        </div>
        <div className={styles.QR_container}>
          <div className={styles.QR}>
            <h3>Quét mã QR ở đây này!</h3>
            <img src={QR_form} alt='QR-form' />
          </div>
        </div>
      </div>
      <div className={styles.slider_wrapper}>
        <div className={styles.slider_container}>
          <Swiper
            {...swiperOptions}
            autoplay={{
              reverseDirection: true,
              delay: 0
            }}
            className={styles.slider_body}
          >
            {HANG_1.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} className={styles.img_slider} alt='slide' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className={styles.slider_container}
          style={{
            transform: 'translateX(-50px)'
          }}
        >
          <Swiper {...swiperOptions} className={styles.slider_body}>
            {HANG_2.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} className={styles.img_slider} alt='slide' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
