import { Menu } from "lucide-react";


const Topbar = () => {

    return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#1F2A44] shadow-md z-0 bg-white dark:bg-[#0E1628]">

            <div className="flex items-center space-x-4">
                <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    Product Dashboard
                </h1>
            </div>

            <div className="hidden md:flex items-center space-x-6">

                {/* Notifications */}
                <button className="text-gray-600 dark:text-gray-300 hover:text-primary relative">
                    <Menu />
                    <span className="absolute -top-3 -right-4 p-[1.5] h-5 min-w-5 text-xs text-white bg-red-500 rounded-full">9</span>
                </button>
            </div>
        </header >
    );
}

export default Topbar;