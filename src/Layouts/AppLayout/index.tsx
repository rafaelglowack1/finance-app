import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* SIDEBAR */}
      <div style={{ flexShrink: 0 }}>
        <SideBar />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* HEADER */}
        <div style={{ flexShrink: 0 }}>
          <Header />
        </div>

        {/* ÁREA COM SCROLL */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            minHeight: 0,
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
