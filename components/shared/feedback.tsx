import { Star } from "lucide-react";
import Image from "next/image";

export const FeedBack = () => {
  return (
    <div className="w-full mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">Отзывы пользователей</h2>
      <div className="flex mx-auto flex-col gap-3 max-w-[410px] rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg p-5 hover:shadow-secondary transition-all duration-300">
        <div className="flex gap-3 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-md"></div>
            <Image
              src={"https://github.com/shadcn.png"}
              alt="user pic"
              width={80}
              height={80}
              className="relative rounded-full border-2 border-white"
            />
          </div>
          <div className="">
            <div className="text-xl font-semibold mb-1">Diego Olivera</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
              ))}
              <span className="text-xs ml-2 text-muted-foreground">2 дня назад</span>
            </div>
          </div>
        </div>
        <p className="text-sm mt-2 text-muted-foreground leading-relaxed">
          Этот тест помог мне лучше подготовиться к экзамену. Особенно понравилась обратная связь по каждому вопросу и возможность практиковать слабые места. Рекомендую всем, кто хочет повысить свой уровень!
        </p>
      </div>
    </div>
  );
};
