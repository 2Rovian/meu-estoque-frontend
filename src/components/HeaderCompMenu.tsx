import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface HeaderCompMenuProps {
    navLinks: {
        label: string;
        goto: string;
    }[];
    currentPath: string;
}

export default function HeaderCompMenu({ navLinks, currentPath }: HeaderCompMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleIsMenuOpen = () => {
        setIsMenuOpen(prevIsOpen => !prevIsOpen);
    }

    return (
        <>
            <div onClick={handleToggleIsMenuOpen} className={`md:hidden p-2 text-lg outline-2 rounded-full `}>
                {isMenuOpen ? <RiCloseFill /> : <RiMenu3Line />}
            </div>

            {isMenuOpen &&
                <div className="absolute top-full left-0 right-0 bg-[#2F80ED] shadow-xl md:hidden z-10">
                    <nav className="flex flex-col py-2 px-4 space-y-2">
                        {navLinks.map((item: { label: string, goto: string }, index: number) => (
                            <Link key={index} to={item.goto} className={`py-2 hover:bg-white/10 ${currentPath === item.goto ? "text-white" : "text-slate-300"} px-2 rounded-md`}>{item.label}</Link>
                        ))}
                    </nav>
                </div>
            }

        </>
    )
}