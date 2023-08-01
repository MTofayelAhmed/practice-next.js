import SideBar from "./SideBar";


const DashBoardLayout = ({children}) => {
    return (
        <div className="flex mx-20">
           <SideBar></SideBar>
        
           {children}
        </div>
    );
};

export default DashBoardLayout;


