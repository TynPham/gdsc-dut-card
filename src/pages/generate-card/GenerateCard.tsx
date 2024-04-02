/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  bg_icon_bl,
  bg_icon_tl,
  card_logo,
  form_bg_icon,
  cardBg,
  map,
  QR_card,
  signature,
  form_bg_icon_2
} from 'src/assets/images'
import styles from './generateCard.module.css'
import { path } from 'src/constants/path'
import { isIOS, toPascalCase } from 'src/utils/utils'
import Loading from 'src/components/loading/Loading'

export interface GenerateCardProps {}

export default function GenerateCard() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const cardRef = React.useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()
  const name = toPascalCase(location.state?.name)

  React.useEffect(() => {
    if (!name) {
      return navigate(path.form)
    }
    handleDrawImg()
  }, [])

  const handleDrawImg = (): void => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }
    const img = document.createElement('img')
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 1080, 1920)
      if (isIOS()) {
        ctx.font = '500 65px Google Sans'
        ctx.lineWidth = 3
        ctx.strokeText(name, 120, 610)
      } else {
        ctx.font = '600 65px Google Sans'
      }
      ctx.textAlign = 'left'
      ctx.fillText(name, 120, 610)
    }
    img.src = cardBg
  }

  const handleSaveImg = (): void => {
    setIsLoading(true)
    const link = document.createElement('a')
    link.download = `${name}.jpg`
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    setTimeout(() => {
      setIsLoading(false)
      link.href = canvas.toDataURL('image/jpeg')
      link.click()
    }, 1000)
  }

  // const htmlToImageConvert = () => {
  //   if (cardRef.current === null) return
  //   toPng(cardRef.current, { cacheBust: false })
  //     .then((dataUrl) => {
  //       const link = document.createElement('a')
  //       link.download = `${name}.png`
  //       link.href = dataUrl
  //       link.click()
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      <div className={styles.page_container}>
        <canvas height={1920} width={1080} ref={canvasRef} className={styles.myCanvas} />
        <div className={styles.card_wrapper} ref={cardRef}>
          <div className={styles.card_body}>
            <img className={styles.bg_icon_tl} src={bg_icon_tl} alt={'bg-icon'} />
            <img className={styles.bg_icon_bl} src={bg_icon_bl} alt={'bg-icon'} />

            <img className={styles.bg_icon_cr} src={form_bg_icon_2} alt={'bg-icon'} />
            <img className={styles.bg_icon_cr} src={form_bg_icon} alt={'bg-icon'} />

            <div className={styles.card_container}>
              <img className={styles.card_logo} src={card_logo} alt='logo' />
              <div></div>
              <div className={styles.card_content}>
                <article className={styles.title}>
                  <h3>Thân gửi</h3>
                  <h1>{name}</h1>
                </article>
                <article className={styles.desc}>
                  <p>
                    “Cảm ơn bạn đã cùng chúng mình có những phút giây thật vui tại gian hàng{' '}
                    <span
                      style={{
                        fontWeight: 'bold'
                      }}
                    >
                      GDSC - DUT.
                    </span>{' '}
                  </p>
                  <p>Hy vọng chúng mình đã đem lại cho bạn những trải nghiệm tuyệt vời.”</p>
                </article>
                <img src={map} alt='map' />
              </div>
              <div className={styles.card_footer}>
                <img src={QR_card} alt='QR card' />
                <img src={signature} alt='QR card' />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button_download} onClick={handleSaveImg}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            style={{ fill: '#fff', width: '1.25rem' }}
          >
            <path d='M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z' />
          </svg>
          Tải xuống
        </button>
      </div>
    </React.Fragment>
  )
}
