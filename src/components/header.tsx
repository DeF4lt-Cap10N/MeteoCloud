import { Link } from "react-router-dom"
import {useTheme} from "@/context/theme"
import { Moon, Sun } from "lucide-react";
import logo from "../assets/logo_white_cropped.png"
const Header = () => {
  const {theme, setTheme} = useTheme();
  return (
    <header className="fixed top-0  z-50  w-full border-b bg-background/95 background-blur py-2 ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 ">
        <Link to="/">
          <img src={logo} alt="" className="h-14"/>
        </Link>
        <div>
          {/* search */}
          {/* theme  toggle */}
          <div onClick={(()=> setTheme(theme==='dark' ? 'light' : 'dark'))}>{
            (theme=="light"? <Sun/>:<Moon/>)
            }</div>
        </div>

      </div>

    </header>
  )
}

export default Header