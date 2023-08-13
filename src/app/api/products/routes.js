import { NextResponse } from "next/server"
import db from '@/db.json'

export const GET = ()=> {
const products = db.products
return NextResponse.json(products)
}