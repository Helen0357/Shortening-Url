import { useEffect, useState } from "react"
import logo from "/images/logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header stop  py-5">
        <div className="flex items-center max-width justify-between">
          <article className="flex items-center">
            <img src={logo} alt="" />

      
          </article>

          {isOpen && (
            <div className="absolute left-5 right-5 top-20 rounded popup text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
              <nav className="md:hidden">
                <ul className="flex flex-col items-center justify-center">
                  <li>
                    <button>Features</button>
                  </li>
                  <li className="my-5">
                    <button>Pricing</button>
                  </li>
                  <li>
                    <button>Resources</button>
                  </li>
                </ul>
              </nav>
              <ul className="flex flex-col items-center justify-center">
                <li className="my-5">
                  <button className="login">Login</button>
                </li>
                <li>
                  <button className="btn-cta rounded-full">Sign Up</button>
                </li>
              </ul>
            </div>
          )}
      <nav className="hidden md:block md:ml-5">
              <ul className="flex items-start gap-6 justify-center lgList">
                <li>
                  <button className="text-slate-600">Features</button>
                </li>
                <li className="my-5 md:my-0 md:mx-5">
                  <button className="text-slate-600">Pricing</button>
                </li>
                <li>
                  <button className="text-slate-600">Resources</button>
                </li>
              </ul>
            </nav>
          <div className="hidden md:block">
            <ul className="flex items-center ml-5">
              <li className="my-5 md:my-0 md:mr-5">
                <button className="login">Login</button>
              </li>
              <li>
                <button className="btn-cta rounded-full">Sign Up</button>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="uppercase text-sm tracking-wide md:hidden"
          >
            {isOpen ? <IconButton><CloseIcon /></IconButton> : <IconButton><MenuIcon /></IconButton>}
          </button>
        </div>
      </header>
    </>
  )
}
