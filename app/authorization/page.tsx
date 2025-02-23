
import Image from "next/image";
import { Login } from "./components/login";
import Registration from "./components/regiter";
import { Verification } from "./components/verification";

export default function AuthorizationPage() {
  return (
    <section className="h-full w-full bg-[rgb(255, 251, 248)]">
      <Login />
      {/* <Registration />
      <Verification /> */}
      <div className="bg-img">
        <Image src={"/autho__bg-img__right.png"} alt="bg-decoration" className="absolute right-[30px] xl:right-16 top-[30%] xl:top-[24%] z-[-1] w-[32%]" width={520} height={445}/>
        <Image src={"/autho__bg-img__left.png"} alt="bg-decoration" className="absolute left-[130px] xl:left-[180px] top-[30%] xl:top-[24%] z-[-1] w-[26%]" width={420} height={491}/>
      </div>
    </section>
  );
}
