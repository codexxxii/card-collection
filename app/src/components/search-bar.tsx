import { SearchIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.45, // appears after the hero finishes
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full flex justify-end"
    >
      <motion.div
        whileFocus={{
          scale: 1.01,
          borderColor: "#06b6d4",
          boxShadow: "0 0 0 4px rgb(6 182 212 / 0.08)",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 24,
        }}
        className="group flex h-11 w-full max-w-md items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 shadow-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -6 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            delay: 0.65,
            duration: 0.35,
          }}
        >
          <SearchIcon
            size={18}
            className="text-neutral-400 transition-colors group-focus-within:text-cyan-500"
          />
        </motion.div>

        <input
          type="text"
          placeholder="Search collection..."
          className="grow bg-transparent text-sm outline-none placeholder:text-neutral-400"
        />
      </motion.div>
    </motion.div>
  );
}
