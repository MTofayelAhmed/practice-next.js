import GetAllCategories from "@/utils/GetAllCategories";
import SingleCategory from "./SingleCategory";



const Categories = async() => {

const categories = await GetAllCategories()
    return (
        <div>
            <h1 className=" font-roboto font-semibold text-2xl">Categories </h1>
           <div>
           {
                categories.map((category)=> <SingleCategory key={category.id} category={category}></SingleCategory>)
            }

           </div>

        </div>
    );
};

export default Categories;
