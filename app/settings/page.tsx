import { BillsCard } from "@/components/shared/bills-card";
import { ProfileCard } from "@/components/shared/profile-card";
import Image from "next/image";

export default function SettingsPage() {
  return (
    <div className="w-full flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between p-5 bg-[#95959533] rounded-3xl">
      <div className="w-full lg:w-[50%]">
        <ProfileCard />
      </div>
      <div className="w-full lg:w-[45%] flex flex-col gap-5 lg:gap-0 justify-between">
        <BillsCard />
        <BillsCard />
      </div>
      <div className="bg-images hidden lg:block">
        <Image className="bottom-[400px] right-[100px] absolute z-[-1] rounded-3xl rotate-[225deg] w-[150px] h-[150px]" width={150} height={150} src="/gradient.png" alt=""/>
        <Image className="bottom-[-50px] right-[-200px] absolute z-[-1] rounded-3xl rotate-45 w-[400px] h-[400px]" width={400} height={400} src="/gradient.png" alt=""/>
        <Image className="bottom-[-165px] right-[300px] absolute z-[-1] rounded-3xl rotate-45 w-[300px] h-[300px]" width={300} height={300} src="/gradient.png" alt=""/>
      </div>
    </div>
  );
}
