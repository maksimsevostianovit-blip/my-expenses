import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header'
import styles from './styles.module.scss'
import { useMediaQuery } from '@mui/material'
import { PlugMedia } from '@/components/plug-media'

export const MainLayout = () => {
  const isShowPlug = useMediaQuery('(max-width:1295px)')

  if (isShowPlug) {
    return <PlugMedia />
  }

  return (
    <>
      <Header />

      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}
