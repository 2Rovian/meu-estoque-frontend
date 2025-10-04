import { Link, useLocation } from "react-router-dom";
import HeaderCompMenu from "./HeaderCompMenu";

export default function HeaderComp(){
    const currentPath = useLocation().pathname;

    const navLinks = [
      {label: 'Início', goto: '/'},
      {label: 'Produtos', goto: '/produtos'},
      {label: 'Sobre', goto: '/sobre'},
    ]

    return(
        <header className="bg-[#2F80ED] text-white py-4 shadow-md relative">
          <div className="container px-4 flex justify-between items-center mx-auto max-w-6xl">
            <Link to={'/'} className="text-2xl font-bold">MeuEstoque</Link>

            <nav className="space-x-6 hidden md:block">
              {navLinks.map((item, index) => (
                <Link key={index} to={item.goto} className={`text-xl hover:text-white ${currentPath === item.goto ? "text-white" : "text-slate-300"} duration-200 ease-in-out`}>{item.label}</Link>
              ))}
            </nav>

            <HeaderCompMenu currentPath={currentPath} navLinks={navLinks}/>

          </div>
        </header>
    )
}