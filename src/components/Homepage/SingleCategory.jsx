import Link from "next/link";


const SingleCategory = ({category}) => {
const {id, name}= category;

    return <Link className=" inline-block" href={`/products?categoryId=${id}`}>{name}</Link>
       
};

export default SingleCategory;
