import { useContext } from "@/lib/use-context";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, XIcon } from "lucide-react";
import { useState } from "react";

export default function Modal() {
  const { isActive, handleIsActive, activeCard, resetActiveCard } =
    useContext();

  const [flipped, setFlipped] = useState(false);

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
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-3 backdrop-blur-sm sm:p-5"
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
            className="
          flex
          h-[90%]
          w-[95%]
          max-w-6xl
          flex-col
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
          sm:h-4/5
          sm:w-4/5
          md:flex-row
        "
          >
            <div
              className="
            relative
            flex
            w-full
            flex-col
            gap-5
            p-5
            md:flex-row
          "
            >
              <button
                className="
              absolute
              right-5
              top-5
              z-10
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              bg-gray-100
              cursor-pointer
            "
                onClick={onClick}
              >
                <XIcon size={20} />
              </button>

              {/* Title */}
              <div
                className="
              flex
              flex-col
              justify-between
              w-full
              items-start
              pt-10
              md:w-1/2
              md:pt-0
            "
              >
                <a
                  href={activeCard?.price_charting_link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="fraunces text-4xl font-semibold sm:text-5xl"
                >
                  {activeCard?.name}
                </a>
                <div className="text-lg fraunces">
                  <p>Illustrator: {activeCard?.illustrator}</p>
                  <p>Set: {activeCard?.set}</p>
                </div>
              </div>

              {/* Card */}
              <div
                className="
              flex
              w-full
              items-center
              justify-center
              md:w-1/2
            "
              >
                <div
                  style={{ perspective: "1500px" }}
                  className="
                relative
                h-105
                w-62.5
                cursor-pointer
                sm:h-140
                sm:w-82.5
                lg:h-167.5
                lg:w-98.75
              "
                  onClick={() => setFlipped(!flipped)}
                >
                  <motion.div
                    animate={{
                      rotateY: flipped ? -180 : 0,
                    }}
                    transition={{
                      duration: 0.95,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    className="relative h-full"
                  >
                    {/* Front */}
                    <img
                      src={activeCard?.image_front}
                      className="absolute inset-0 h-full object-contain"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    />

                    {/* Back */}
                    <img
                      src={activeCard?.image_back}
                      className="absolute inset-0 h-full object-contain"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    />
                  </motion.div>

                  <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white bg-white/40 px-2.5 py-0.5 text-white">
                    <RotateCcw size={10} />
                    <p className="text-xs">Flip</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
