import { getCards } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";

export default function Cards() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  if (isLoading) {
    return (
      <div className="w-full h-16 grid place-items-center">
        <Loader2Icon className="animate-spin" size={20} />
      </div>
    );
  }

  if (error) {
    return <div>error</div>;
  }

  if (data)
    return (
      <div className="w-full grid grid-cols-4 place-items-start">
        {data.cards.map((card) => (
          <div key={card.id} className="w-full h-100">
            <div className="w-full h-full grid place-items-center">
              <img
                src={card.image_front}
                alt=""
                className="h-100 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    );
}
