import { useContext } from "@/lib/use-context";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "lucide-react";

export default function Modal() {
  const { isActive, handleIsActive, activeCard, resetActiveCard } =
    useContext();

  const onClick = () => {
    handleIsActive(false);
    resetActiveCard();
  };
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm p-5 grid place-items-center"
          onClick={onClick}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto flex h-4/5 w-4/5 rounded-2xl bg-white shadow-2xl"
          >
            <div className="w-full p-5 relative flex gap-5">
              <button
                className="absolute top-5 right-5 rounded-full bg-gray-100 grid place-items-center w-10 h-10 cursor-pointer"
                onClick={onClick}
              >
                <XIcon size={20} />
              </button>
              <div className="w-1/2 h-full">
                <p className="text-5xl fraunces font-semibold">
                  {activeCard?.name}
                </p>
              </div>
              <div className="w-1/2 h-full grid place-items-center">
                <img
                  src={activeCard?.image_front}
                  alt=""
                  className="h-167.5 object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
