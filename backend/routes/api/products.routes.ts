import {Router, Request, Response} from 'express'
import config from '../../config'
import ProductsModel from '../../models/products.model'
const productsModel = new ProductsModel()

const routes = Router()
//create products
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const products = await productsModel.create(req.body)
		res.json({
			status: 'success',
			data: {...products},
			message: 'products created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all products
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const products = await productsModel.getAll()
		res.json({
			status: 'success',
			data: products,
			message: 'products retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
//get specific products
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const products = await productsModel.getOne(
			req.params.id as unknown as string
		)
		res.json({
			status: 'success',
			data: products,
			message: 'products retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get code
routes.get('/code/:code', async (req: Request, res: Response, next) => {
	try {
		const products = await productsModel.getByCode(
			req.params.code as unknown as string
		)
		res.json({
			status: 'success',
			data: products,
			message: 'products retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
//update products
routes.patch('/', async (req: Request, res: Response, next) => {
	try {
		const products = await productsModel.update(req.body)
		res.json({
			status: 'success',
			data: products,
			message: 'products updated successfully',
		})
	} catch (err) {
		next(err)
	}
})
//update products img
routes.patch('/img', async (req: Request, res: Response, next) => {
	try {
		const products = await productsModel.updateImgProducts(req.body)
		res.json({
			status: 'success',
			data: products,
			message: 'products updated successfully',
		})
	} catch (err) {
		next(err)
	}
})
//delete products
routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await productsModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: user,
			message: 'user deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
