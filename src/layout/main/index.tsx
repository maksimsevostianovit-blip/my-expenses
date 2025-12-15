import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header'
import styles from './styles.module.scss'

export const MainLayout = () => (
  <>
    <Header />

    <div className={styles.container}>
      <Outlet />
    </div>
  </>
)
