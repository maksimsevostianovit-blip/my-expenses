import styles from './styles.module.scss'
import { ArrowDownSvg } from '@/assents/svg'
import React, { ChangeEvent, useState } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Popover,
  Radio,
  RadioGroup,
} from '@mui/material'
import { CATEGORIES } from '@/constants/categories'
import { Category } from '@/types/category'
import { useExpenses } from '@/store/expenses'
import { Sorting } from '@/types/filter'
import cn from 'classnames'

export const Filters = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)

  const [category, setCategory] = useState(Category.All)
  const [sort, setSort] = useState(Sorting.None)

  const isSortAsc = sort === Sorting.Asc

  const { setSelectedCategory, setSelectedSort } = useExpenses()

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchor(event.target)
  }

  const handlePopoverClose = () => {
    setAnchor(null)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentCategory = event.currentTarget.value as Category

    setSelectedCategory(currentCategory)
    setCategory(currentCategory)
    handlePopoverClose()
  }

  const toggleSort = () => {
    const currentSort = isSortAsc ? Sorting.Desc : Sorting.Asc

    setSort(currentSort)
    setSelectedSort(currentSort)
  }

  return (
    <div className={styles.container}>
      <div className={styles.filter} onClick={handlePopoverOpen}>
        <div className={styles.text}>Фильтровать по категории</div>
        <ArrowDownSvg />
      </div>

      <div
        className={cn(styles.filter, {
          [styles['filter--rotate']]: isSortAsc,
        })}
        onClick={toggleSort}
      >
        <div className={styles.text}>
          Сортировать по&nbsp;<div className={styles.textDecoration}>дате</div>
        </div>
        <ArrowDownSvg />
      </div>

      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
      >
        <FormControl sx={{ padding: '10px' }}>
          <FormLabel>Категория</FormLabel>
          <RadioGroup value={category} onChange={handleChange}>
            {CATEGORIES.map(({ id, label }) => (
              <FormControlLabel
                key={id}
                value={id}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Popover>
    </div>
  )
}
