import { LogoSvg } from '@/assents/svg'
import styles from './styles.module.scss'
import { LIST_ROUTES } from '@/constants/routes'
import { Routes } from '@/types/routes'
import { useLocation, useNavigate } from 'react-router-dom'
import cn from 'classnames'

export const Header = () => {
  const navigation = useNavigate()
  const { pathname } = useLocation()

  const handleClickRoute = (route: Routes) => {
    navigation(route)
  }

  console.log('location', pathname)

  return (
    <>
      <div className={styles.container}>
        <LogoSvg />

        <ul className={styles.list}>
          {LIST_ROUTES.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => handleClickRoute(id)}
              className={cn(styles.item, {
                [styles['item--active']]: id === pathname,
              })}
            >
              {label}
            </li>
          ))}
        </ul>

        <div />
      </div>
    </>
  )
}
