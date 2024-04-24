import { useMenuStore } from "../store/menuStore";

export default function SideBar() {

    const {isOpen} = useMenuStore(state => state);

    return ( 
        <nav className="flex justify-center items-center animate__animated animate__fadeInDown z-50 dark:bg-slate-800 dark:text-white tablet:hidden">
            {
                isOpen
                    ?
                    null
                    :
                    <div className="flex flex-col mt-5">
                        <a className="text-primary dark:text-primaryDark text-xl tracking-wider animate__animated animate__fadeInLeft" href="#aboutme">Sobre Mi</a>
                        <a className="text-primary dark:text-primaryDark text-xl tracking-wider animate__animated animate__fadeInLeft" href="#experience">Experiencia</a>
                        <a className="text-primary dark:text-primaryDark text-xl tracking-wider animate__animated animate__fadeInLeft" href="#projects">Proyectos</a>
                        <a className="text-primary dark:text-primaryDark text-xl tracking-wider animate__animated animate__fadeInLeft" href="#skills">Habilidades</a>
                        <a className="text-primary dark:text-primaryDark text-xl tracking-wider animate__animated animate__fadeInLeft" href="#contact">Contacto</a>
                    </div>
            }
        </nav>
    )
}