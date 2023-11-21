import db from '../database/index'
import Products from '../types/products.types'
import bcrypt from 'bcrypt'
import config from '../config'

class ProductsModel {
	//create products
	async create(p: Products): Promise<Products> {
		try {
			//open connect with DB1
			const connect = await db.connect()
			const sql =
				'INSERT INTO bytemall ( productsName, price, date, keyword, available, img, location, status, productsCode, description ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *'
			//run query
			const result = await connect.query(sql, [
				p.productsName,
				p.price,
				p.date === '' ? new Date().toDateString() : p.date,
				p.keyword,
				p.available,
				p.img,
				p.location,
				p.status,
				p.productsCode,
				p.description,
			])
			//release connect
			connect.release()
			//return created products
			return result.rows[0]
		} catch (err: any) {
			// throw new Error(`email already exists! `)
			throw new Error(`${err} `)
		}
	}
	//get all products
	async getAll(): Promise<Products[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from bytemall'
			//run query
			const result = await connect.query(sql)
			//release connect
			connect.release()
			//return created products
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific products
	async getOne(id: string): Promise<Products> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from bytemall WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created products
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find products ${id}, ${err}`)
		}
	}
	//get specific products
	async getByCode(code: string): Promise<Products> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from bytemall WHERE productsCode=($1)'
			//run query
			const result = await connect.query(sql, [code])
			//release connect
			connect.release()
			//return created products
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find products ${code}, ${err}`)
		}
	}

	//update products
	async update(p: Products): Promise<Products> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE bytemall SET productsName=$1, price=$2, keyword=$3, available=$4, location=$5,  status=$6, description=$7 WHERE id=$8 RETURNING *`
			//run query
			const result = await connect.query(sql, [
				p.productsName,
				p.price,
				p.keyword,
				p.available,
				p.location,
				p.status,
				p.description,
				p.id,
			])
			//release connect
			connect.release()
			//return created products
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  products ${p.productsName}, ${err}`)
		}
	}
	//update products img
	async updateImgProducts(p: Products): Promise<Products> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE bytemall SET  img=$1  WHERE id=$2 RETURNING *`
			//run query
			const result = await connect.query(sql, [p.img, p.id])
			//release connect
			connect.release()
			//return created products
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  products , ${err}`)
		}
	}

	//delete products
	async delete(id: string): Promise<Products> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from bytemall  WHERE id=($1) RETURNING *'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created products
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not delete  products ${id}, ${err}`)
		}
	}
}
export default ProductsModel
