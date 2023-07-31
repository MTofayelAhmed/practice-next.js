import Navbar from "@/component/navbar";



const WithLayout = ({ children }) => {
  return (
    <div>
<Navbar></Navbar>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;
