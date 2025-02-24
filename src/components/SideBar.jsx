import { MoonIcon } from "lucide-react";
import { Button } from "./ui/button";
import LogoImage from "/public/logo.svg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function SideBar() {
  function handleClick() {}

  return (
    <div className="">
      <div className="flex h-full items-center justify-between bg-slate-700 shadow-lg">
        <img
          className="h-20 w-20 object-contain"
          src={LogoImage}
          alt="logo image"
        />
        <div className="mr-5 flex h-full items-center gap-5">
          <Button onClick={handleClick} variant="outline" size="icon">
            <MoonIcon />
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
