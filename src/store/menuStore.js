import {create} from 'zustand'

export const useMenuStore = create((set) => ({
    isOpen: true,
    setIsOpen: (isOpen) => set({isOpen}),
}))