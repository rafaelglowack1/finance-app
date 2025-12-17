import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <SideBar />
            
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <Header />
                <div style={{ flex: 1, padding: "20px" }}>
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default AppLayout;
