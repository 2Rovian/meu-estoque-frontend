import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface HeaderCompMenuProps {
    navLinks: {
        label: string;
        goto: string;
    }[];
}

export default function HeaderCompMenu({ navLinks }: HeaderCompMenuProps) {
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
                        {navLinks.map((item: {label: string, goto: string}, index: number) => (
                            <Link key={index} to={'/inicio'} className="py-2 hover:bg-white/10 px-2 rounded-md">{item.label}</Link>
                        ))}
                    </nav>
                </div>
            }

        </>
    )
}