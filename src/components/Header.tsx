//import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";



export default function Header() {
  return (
    <div className="mobile-header">
    <div className="mobile-header__wrapper bg-gradient-to-br from-orange-50 to-orange-100">
      <img className="mobile-header__img" src="/mobile-head-w.svg" alt="mobile image header"/>
    <div className="mobile-header__secondary flex justify-between items-center px-4 py-2">
      <img src="/logo.png" className="h-5" />
      <div className="flex">
      <div className="mobile-header__right">
        <p className="mobile-header__name">Hi, John Doe</p>
        <p className="mobile-header__txt">Welcome</p>
      </div>
      <Avatar className="ml-2">
         <AvatarImage src="/profile-icon.png" alt="User Avatar" />
         <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
    </div>
</div>
    </div>
  );
}
