import { forwardRef } from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import cn from 'classnames'
import styles from './styles.module.scss'

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, ...props }, ref) => (
    <TextField
      {...props}
      variant="outlined"
      inputRef={ref}
      className={cn(styles.input, className)}
      sx={{
        '& .MuiOutlinedInput-input': {
          padding: '12px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: '0.5px solid #999999',
          borderRadius: '6px',
          padding: 0,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: '0.5px solid #000',
        },
        '& .MuiOutlinedInput-root.Mui-focused fieldset': {
          border: '0.5px solid #1FA46C',
        },
      }}
    />
  )
)

Input.displayName = 'Input'
