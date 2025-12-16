import styles from './styles.module.scss'
import { FC, ReactNode } from 'react'

interface IProps {
  label?: string
  children: ReactNode
}

export const Label: FC<IProps> = ({ label, children }) => (
  <label className={styles.container}>
    {label && <div className={styles.text}>{label}</div>}

    {children}
  </label>
)
