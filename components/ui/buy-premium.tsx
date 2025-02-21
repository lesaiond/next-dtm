import Link from "next/link";
import { Button } from "./button";

export const BuyPremium = () => {
  return (
    <div className="w-full rounded-3xl bg-foreground p-6 ">
      {/* bg-[radial-gradient(circle_at_bottom_right,_#E81CFF,_#FF9F0A,_#000)] */}
      <div className="text-white text-[32px] my-9">
        Buy Premium and get acccess to new courses
      </div>
      <Button className="w-full text-foreground">
        <span>More detailed</span>
      </Button>
    </div>
  );
};
