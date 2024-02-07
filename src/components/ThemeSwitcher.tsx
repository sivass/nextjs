"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react"

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    },[])

    if(!mounted){
        return null;
    }
    return (
        <button className="w-fit absolute right-5 m-6 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-600 text-white dark:bg-slate-50 dark:text-black"
        onClick={ () => setTheme( theme === 'dark' ? 'light' : 'dark' )}>
            {theme === 'dark' ? 'light' : 'dark'}
        </button>
    )
}