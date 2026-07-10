import { SearchIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useContext } from "@/lib/use-context";
import { useRef } from "react";

export default function SearchBar() {
  const { input, handleInput } = useContext();

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex w-full justify-center md:justify-end"
    >
      <motion.div
        onClick={() => inputRef.current?.focus()}
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
        className="group flex h-10 w-full max-w-md items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 shadow-sm sm:h-11 sm:gap-3 sm:px-4"
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
            size={16}
            className="text-neutral-400 transition-colors group-focus-within:text-cyan-500 sm:size-4.5"
          />
        </motion.div>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search collection..."
          value={input}
          onChange={(e) => handleInput(e.target.value)}
          className="grow bg-transparent text-sm outline-none placeholder:text-neutral-400 sm:text-base"
        />
      </motion.div>
    </motion.div>
  );
}
