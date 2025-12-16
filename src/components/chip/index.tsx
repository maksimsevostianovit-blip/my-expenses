import styles from './styles.module.scss'
import { FC, ReactElement } from 'react'
import cn from 'classnames'

interface IProps {
  label: string
  icon?: ReactElement
  onClick?: () => void
  selected?: boolean
}

export const Chip: FC<IProps> = ({
  label,
  icon,
  onClick,
  selected = false,
}) => (
  <div
    className={cn(styles.container, {
      [styles['container--selected']]: selected,
    })}
    onClick={onClick}
  >
    {icon}

    <div className={styles.text}>{label}</div>
  </div>
)
