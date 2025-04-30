import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import sharedRoutes from './sharedRoutes' // Corrected to PascalCase
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [
    ...authRoute, // Public routes for unauthorized users
    ...sharedRoutes, // Shared routes for both authorized and unauthorized users
]

export const protectedRoutes: Routes = [
    ...sharedRoutes, // Shared routes for both authorized and unauthorized users
    ...othersRoute,  // Protected routes for authorized users
]
