import salad from '@/assets/salad.jpg'
import Image from 'next/image';


const HomePage = () => {
  return (
    <main>
      <h2>Home</h2>
    <Image src={salad} placeholder='blur' alt='' width={400}  height={400}></Image>
    {/* <Image src='/salad.jpg' placeholder='blur'blurDataURL='' alt='' width={400}  height={400}></Image> */}
    {/* (image upload kore 
    generate kore nite hoeb) */}
    {/* <Image src="https://www.freepik.com/free-photo/front-view-women-with-bicycles_32338588.htm#from_view=detail_serie" alt='' width={400}  height={400}></Image> */}
    </main>
  );
};
export default HomePage;
