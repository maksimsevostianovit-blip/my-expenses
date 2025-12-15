import type { RouteObject } from 'react-router/dist/lib/context'
import { MainLayout } from '@/layout/main'
import { ListRoute, Routes } from '@/types/routes'
import { MyExpensesPage } from '@/pages/my-expenses'
import { CostAnalysisPage } from '@/pages/cost-analysis'
import { Navigate } from 'react-router-dom'

export const routes: RouteObject = {
  element: <MainLayout />,
  children: [
    { path: Routes.MyExpenses, element: <MyExpensesPage /> },
    { path: Routes.CostAnalysis, element: <CostAnalysisPage /> },
    {
      path: '*',
      element: <Navigate to={Routes.MyExpenses} />,
    },
  ],
}

export const LIST_ROUTES: ListRoute[] = [
  {
    id: Routes.MyExpenses,
    label: 'Мои расходы',
  },
  {
    id: Routes.CostAnalysis,
    label: 'Анализ расходов',
  },
]
