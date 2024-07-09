import { motion } from "framer-motion";
import Menu from "../Menu";
import React from "react";
import { Cog, FolderOpenDot, LayoutDashboard } from "lucide-react";
import { Header } from "../Header";

interface SidebarMobileProps {
    onClose: () => void
}

export const SidebarMobile = ({ onClose }: SidebarMobileProps) => {
  
    return (
        <div
            className="fixed inset-0 flex justify-start items-right bg-black bg-opacity-40 overflow-y-scroll z-10"
            onClick={onClose}
        >
            
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-3/4 h-full sm:max-w-lg p-4 sm:p-6 bg-white rounded-3xl rounded-l-none shadow-2xl"
            >
                <Header className="p-0"/>

              <Menu/>
            </motion.div>
        </div>
    );
};
