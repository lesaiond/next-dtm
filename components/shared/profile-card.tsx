import Image from "next/image";
import { Input } from "../ui/input";
import { Verified } from "lucide-react";
import { Button } from "../ui/button";

export const ProfileCard = () => {
  return (
    <div className="w-full bg-background p-6 rounded-3xl">

      <div className="mb-8">
        <Image
          src={"https://github.com/shadcn.png"}
          className=" rounded-3xl"
          alt="Profile Photo"
          width={500}
          height={400}
        />
      </div>

      <div className="flex justify-between w-full mb-8">
        <h6>My profile</h6>
        <div>
          <div className="text-muted-foreground text-right text-sm">
            Last login 15 august 2021 17:53
          </div>
          <div className="text-muted-foreground text-right text-sm">
            Windows 10, Tashkent
          </div>
        </div>
      </div>

      <form action="">
        <div className="flex justify-between gap-3 w-full mb-8">
          <Input placeholder={"James Rohman"} className="w-1/2 text-lg" />
          <Input placeholder={"+998 99 555 11 12"} className="w-1/2 text-lg" />
        </div>
        <Input placeholder={"example@exam.com"} className="w-full mb-8 text-xl" />
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary">SMS alert activation</span>
          <Verified className="text-green-400" />
        </div>
        <div className="w-full">
        <Button className="gradient mx-auto block rounded-full text-xl px-14">Save</Button>
        </div>
      </form>

    </div>
  );
};
