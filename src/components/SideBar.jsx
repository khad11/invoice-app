import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import LogoImage from "/public/logo.svg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

function SideBar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  function handleClick() {
    const isDark = theme === "dark";
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className="fixed left-0 right-0 top-0 md:bottom-0 md:h-full md:w-20">
      <div className="flex h-full items-center justify-between rounded-br-3xl bg-slate-200 shadow-lg dark:bg-slate-900 md:h-full md:flex-col md:justify-between md:rounded-tr-3xl md:border-r-2 md:shadow-none">
        <img
          className="h-20 w-20 object-contain"
          src={LogoImage}
          alt="logo image"
        />
        <div className="mr-5 flex h-full items-center gap-5 md:mb-5 md:mr-0 md:flex-col md:justify-end">
          <Button onClick={handleClick} variant="outline" size="icon">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
