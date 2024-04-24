import { useState } from "preact/hooks"
import { IconMenu, IconMenuClose, IconMenuDark, IconMenuLight } from "./icons/Icons";
import { Fragment } from "preact";
import { useMenuStore } from "../store/menuStore";

export default function ButtonMenu() { 

    const {setIsOpen, isOpen} = useMenuStore(state => state);

    return ( 
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen
                ? 
                <IconMenu /> 
                :
                <IconMenuClose/>
            }
            </button> 
    )
} 