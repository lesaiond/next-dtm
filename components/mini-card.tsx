"use client";
interface Props {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  stat: string;
}

export const MiniCard: React.FC<Props> = ({ icon: Icon, title, stat }) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl shadow p-6 w-[70%] 550:w-[45%] lg:w-[33%]">
      <div className="bg-muted p-3 rounded-full">
        <Icon />
      </div>
      <div>
        <span className="text-muted-foreground">{title}</span>
        <h6 className="text-[22px] font-semibold">{stat}</h6>
      </div>
    </div>
  );
};
