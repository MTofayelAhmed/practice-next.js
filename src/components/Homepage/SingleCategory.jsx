import Link from "next/link";


const SingleCategory = ({category}) => {
const {id, name}= category;

    return <Link className=" container ml-20 block" href={`/products?categoryId=${id}`}>{name}</Link>
       
};

export default SingleCategory;
