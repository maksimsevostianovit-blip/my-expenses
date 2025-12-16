import styles from './styles.module.scss'
import { Table } from './components/table'
import { Actions } from './components/actions'

export const MyExpensesPage = () => (
  <div className={styles.container}>
    <div className={styles.title}>Мои расходы</div>

    <div className={styles.wrapper}>
      <Table />
      <Actions />
    </div>
  </div>
)
