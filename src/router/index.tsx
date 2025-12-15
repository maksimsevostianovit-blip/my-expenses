import { useRoutes } from 'react-router-dom'
import { routes } from '@/constants/routes'

export const AppRouter = () => {
  return useRoutes([routes])
}
