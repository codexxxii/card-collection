import { motion } from "framer-motion";
import { container, item } from "@/lib/animations";

export default function Hero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="space-y-3"
    >
      {/* Eyebrow */}
      <motion.div variants={item as any} className="flex items-center gap-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            boxShadow: [
              "0 0 0px rgb(6 182 212 / 0.4)",
              "0 0 12px rgb(6 182 212 / 0.8)",
              "0 0 6px rgb(6 182 212 / 0.5)",
            ],
          }}
          transition={{
            scale: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            },
            boxShadow: {
              duration: 2.5,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          className="h-2 w-2 rounded-full bg-cyan-500"
        />

        <motion.p
          variants={item as any}
          className="text-xs uppercase tracking-[0.35em] text-neutral-500"
        >
          Personal Collection
        </motion.p>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={item as any}
        className="fraunces text-7xl font-semibold tracking-tight"
      >
        Cardvault
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item as any}
        className="max-w-xl text-lg leading-relaxed text-neutral-500"
      >
        A curated collection of trading cards gathered over time.
      </motion.p>
    </motion.div>
  );
}
