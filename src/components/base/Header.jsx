
import ThemeToggle from "../ThemeToggle.jsx";
import { IconMenuLight } from "../icons/Icons.jsx";
import SideBar from "../SideBar.jsx";
import ButtonMenu from "../ButtonMenu.jsx";
import { Fragment } from "preact";



export default function Header() {
    return (
        <Fragment>

            <div
                className="w-full max-h-20 flex flex-row justify-around items-center p-8 m-0 border-b-1 shadow-md"
            >
                <div class="w-full flex justify-center mobile:max-tablet:justify-start">
                    <ThemeToggle />
                    <a 
                    href="/public/download/CV-GONZALO-AMAYA-2024.pdf" 
                    download 
                    className="ml-5 w-[10rem] text-center border-[3px] rounded-2xl mobile:max-tablet:w-[7rem] border-primary text-primary dark:border-primaryDark dark:text-primaryDark hover:shadow-xl hover:tracking-wider duration-200"
                            >
                                Descargar CV
                        {/* <button
                            class="ml-5 w-[10rem] text-center border-[3px] rounded-2xl mobile:max-tablet:w-[7rem] border-primary text-primary dark:border-primaryDark dark:text-primaryDark hover:shadow-xl hover:tracking-wider duration-200"
                        >Descargar CV</button> */}
                    </a>
                </div>
                <div class="w-full flex justify-center mobile:max-tablet:hidden">
                    <a class="ml-5 text-primary dark:text-primaryDark hover:text-[#D6FEFF]" href="#aboutme">Sobre Mi</a>
                    <a class="ml-5 text-primary dark:text-primaryDark hover:text-[#D6FEFF]" href="#experience">Experiencia</a>
                    <a class="ml-5 text-primary dark:text-primaryDark hover:text-[#D6FEFF]" href="#projects">Proyectos</a>
                    <a class="ml-5 text-primary dark:text-primaryDark hover:text-[#D6FEFF]" href="#skills">Habilidades</a>
                    <a class="ml-5 text-primary dark:text-primaryDark hover:text-[#D6FEFF]" href="#contact">Contacto</a>
                </div>
                <div class="w-full hidden mobile:max-tablet:block">
                    <div class="flex justify-end">
                        <ButtonMenu />
                    </div>
                </div>
            </div>
            <div>
                <SideBar />
            </div>

        </Fragment>
    )
}


{/* <style>
    a {
        margin - left: 1rem;
        margin-right: 1rem;
    }
</style> */}
