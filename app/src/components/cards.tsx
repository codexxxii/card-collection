import { getCards } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useContext, type Card } from "@/lib/use-context";
import { motion } from "framer-motion";
import Modal from "./modal";

export default function Cards() {
  const { handleCards, isActive, handleIsActive, handleActiveCard } =
    useContext();

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
    return <div>error</div>;
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
          className="w-full grid grid-cols-4 2xl:grid-cols-5 place-items-start"
        >
          {data.cards.map((card) => (
            <motion.div
              variants={cardVariants as any}
              key={card.id}
              className="w-full h-100"
            >
              <div className="w-full h-full grid place-items-center">
                <img
                  onClick={() => onClick(card)}
                  src={card.image_front}
                  alt=""
                  className="h-100 object-contain cursor-pointer"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {isActive && <Modal />}
      </>
    );
}
