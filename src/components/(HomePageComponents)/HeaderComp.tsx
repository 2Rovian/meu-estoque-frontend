import { Link } from "react-router-dom";
import HeaderCompMenu from "./HeaderCompMenu";

export default function HeaderComp(){

    const navLinks = [
      {label: 'Início', goto: '/'},
      {label: 'Produtos', goto: '/produtos'},
      {label: 'Sobre', goto: '/sobre'},
    ]

    return(
        <header className="bg-[#2F80ED] text-white py-4 shadow-md relative">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to={'/'} className="text-2xl font-bold">MeuEstoque</Link>

            <nav className="space-x-6 hidden md:block">
              {navLinks.map((item, index) => (
                <Link key={index} to={item.goto} className="text-xl text-slate-300 hover:text-white duration-200 ease-in-out">{item.label}</Link>
              ))}
            </nav>

            <HeaderCompMenu navLinks={navLinks}/>

          </div>
        </header>
    )
}