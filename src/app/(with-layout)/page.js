
import Categories from '@/components/Homepage/Categories';
import PopularProducts from '@/components/Homepage/PopularProducts';
import { Suspense } from 'react';
export const revalidate = 5

const HomePage = () => {
  return (
    <main>
      <h2 className=' text-red-600'>Home</h2>
   <Categories></Categories>
   <Suspense fallback={<h1 className="text-center font-semibold text-2xl">Loading...</h1>  }>
   <PopularProducts></PopularProducts>
   </Suspense>
   
    </main>
  )
};
export default HomePage;
