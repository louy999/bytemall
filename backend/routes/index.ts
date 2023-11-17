import {Router} from 'express'
import productsRoutes from './api/products.routes'
const routes = Router()
routes.use('/pro', productsRoutes)
export default routes
