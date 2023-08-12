
import Categories from '@/components/Homepage/Categories';
export const revalidate = 5

const HomePage = () => {
  return (
    <main>
      <h2 className=' text-red-600'>Home</h2>
   <Categories></Categories>
    </main>
  )
};
export default HomePage;
