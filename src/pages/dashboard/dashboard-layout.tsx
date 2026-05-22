// layouts/dashboard-layout.tsx

import { Outlet, useNavigate } from "react-router-dom";
import { Bell, LogOut, Menu } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import DropdownMenu from "../../components/DropdownMenu";

export default function DashboardLayout() {

    const navigate = useNavigate();

    const [openSideBar, setOpenSidebar] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/auth/login");
    };

    const handleNavigation = (value: string) => {
        if(value === "Dashboard") {
            navigate("/");
            return;
        }
        const path = value.toLowerCase().replace(/\s+/g, "-");
        navigate(`/${path}`);
    }

    return (
        <div className="flex h-screen w-full bg-gray-100 overflow-hidden ">

            {/* Sidebar */}
            <Sidebar/>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100">
                {/* Navbar */}
                <header className="w-auto bg-white border-b px-6 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="flex gap-4 text-xl font-semibold">
                            <DropdownMenu title={<Menu onClick={()=> setOpenSidebar(!openSideBar)} className="md:hidden" />} items={["Dashboard", "Products"]} onCategoryChange={(value)=> handleNavigation(value)} />
                            
                            Lotus Dashboard
                        </h1>
                        <div className="flex gap-8">
                            <button type="button"><Bell size={20} color="red" /></button>
                            <button type="button" onClick={() => handleLogout()}><LogOut color="orange" /></button>
                        </div>
                    </div>
                </header>


                <Outlet />
            </main>
        </div>
    );
}