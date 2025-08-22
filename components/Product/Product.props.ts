import { ProductModel } from '@/interfaces/product.interface.ts'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ProductProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	product: ProductModel
}
