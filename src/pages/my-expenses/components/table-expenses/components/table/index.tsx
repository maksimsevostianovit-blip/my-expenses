import {
  IconButton,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import styles from './styles.module.scss'
import { CATEGORIES } from '@/constants/categories'
import { PencilSvg, TrashSvg } from '@/assents/svg'
import { ExpensesState } from '@/types/expenses'
import { FC } from 'react'

interface Props {
  list: ExpensesState[]
  onDelete: (id: ExpensesState['id']) => void
}

export const Table: FC<Props> = ({ list, onDelete }) => (
  <Paper
    className={styles.container}
    sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}
  >
    <TableContainer sx={{ maxHeight: 525 }}>
      <MuiTable stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="left" className={styles.heading}>
              Описание
            </TableCell>
            <TableCell className={styles.heading}>Категория</TableCell>
            <TableCell className={styles.heading}>Дата</TableCell>
            <TableCell className={styles.heading}>Сумма</TableCell>
            <TableCell className={styles.heading}></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {list.map(({ id, description, category, date, amount }) => (
            <TableRow key={id} className={styles.row}>
              <TableCell align="left" className={styles.text}>
                {description}
              </TableCell>
              <TableCell className={styles.text}>
                {CATEGORIES.find(({ id }) => id === category)?.label || ''}
              </TableCell>
              <TableCell className={styles.text}>{date}</TableCell>
              <TableCell className={styles.text}>
                {Number(amount).toLocaleString('ru-RU', {
                  currency: 'RUB',
                })}{' '}
                ₽
              </TableCell>
              <TableCell align="right">
                <IconButton disabled>
                  <PencilSvg />
                </IconButton>

                <IconButton onClick={() => onDelete(id)}>
                  <TrashSvg />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  </Paper>
)
