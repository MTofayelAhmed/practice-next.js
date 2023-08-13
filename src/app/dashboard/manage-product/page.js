

import GetAllProducts from "@/utils/GetAllProducts";
import ManageProduct from "./ManageProduct";



export const metadata = {
  title: "Manage Products | Dashboard | Next Hero",
  description: "Next Hero",
};

const ManageProductsPage = async () => {
const products = await GetAllProducts()
  return (
    <div className="w-full mt-10">
      <h1 className="mb-5 text-2xl font-semibold">Manage Products</h1>
      <ManageProduct products={products} />
    </div>
  );
};

export default ManageProductsPage;