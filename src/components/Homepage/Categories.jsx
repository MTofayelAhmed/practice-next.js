import GetAllCategories from "@/utils/GetAllCategories";
import SingleCategory from "./SingleCategory";



const Categories = async() => {

const categories = await GetAllCategories()
    return (
        <div>
            <h1>Categories </h1>
           <div className=" container mx-auto block">
           {
                categories.map((category)=> <SingleCategory key={category.id} category ={category}></SingleCategory>)
            }

           </div>

        </div>
    );
};

export default Categories;
