"use client";
import { MoveRight } from "lucide-react";

interface Props {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  stat: string;
}

export const MiniCard: React.FC<Props> = ({ icon: Icon, title, stat }) => {
  return (
    <div className="group flex items-center gap-3 rounded-2xl shadow p-6 w-[70%] 550:w-[45%] lg:w-[33%] hover:bg-foreground hover:text-primary cursor-pointer">
      <div className="bg-muted p-3 rounded-full transition-colors duration-300 group-hover:bg-primary/20">
        <Icon />
      </div>
      <div>
        <span className="text-muted-foreground">{title}</span>
        <h6 className="text-[22px] font-semibold">{stat}</h6>
      </div>
    </div>
  );
};

export function MiniCardSup() {
  return (
    <div className="group flex items-center gap-3 rounded-2xl shadow-md p-6 bg-foreground w-[70%] 550:w-1/2 lg:w-[33%] cursor-pointer">
      <span className="text-[22px] font-semibold text-background group-hover:text-primary">
        You have new message!
      </span>
      <MoveRight
        className="text-background group-hover:translate-x-1 group-hover:text-primary"
        size={40}
      />
    </div>
  );
}
