import { getCards } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { CircleAlert, Loader2Icon } from "lucide-react";
import { useContext, type Card } from "@/lib/use-context";
import { motion } from "framer-motion";
import Modal from "./modal";

export default function Cards() {
  const { handleCards, isActive, handleIsActive, handleActiveCard } =
    useContext();
  const filteredCards = useContext.getState().filteredCards();

  const { data, isLoading, error } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const data = await getCards();
      handleCards(data.cards);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-16 grid place-items-center">
        <Loader2Icon className="animate-spin" size={20} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-16 flex flex-col justify-center items-center space-y-1.5">
        <CircleAlert className="text-red-500" size={50} />
        <p className="text-sm">Something went wrong, try again</p>
      </div>
    );
  }

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.7,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const onClick = (card: Card) => {
    handleIsActive(true);
    handleActiveCard(card);
  };

  if (data)
    return (
      <>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="
    grid
    w-full
    grid-cols-1
    place-items-start
    gap-y-8
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    2xl:grid-cols-5
  "
        >
          {filteredCards.map((card) => (
            <motion.div
              variants={cardVariants as any}
              key={card.id}
              className="
        flex
        h-80
        w-full
        items-center
        justify-center
        sm:h-90
        lg:h-100
      "
            >
              <img
                onClick={() => onClick(card)}
                src={card.image_front}
                alt=""
                className="
          h-full
          max-w-full
          cursor-pointer
          object-contain
        "
              />
            </motion.div>
          ))}
        </motion.div>
        {isActive && <Modal />}
      </>
    );
}
