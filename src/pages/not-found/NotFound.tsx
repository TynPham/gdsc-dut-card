import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import styles from './notFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.not_found_wrapper}>
      404 Not Found
      <Link to={path.home}>
        <button className='btn'>Go Home</button>
      </Link>
    </div>
  )
}
