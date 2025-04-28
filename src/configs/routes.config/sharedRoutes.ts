// src/configs/routes.config/sharedRoutes.ts
import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes = [
  {
    key: 'homePage',
    path: '/',
    component: lazy(() => import('@/views/Home')),
    authority: [],
  },
  // add other shared routes here if needed
]

export default sharedRoutes
