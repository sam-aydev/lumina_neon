"use client";

import { joinWaitlist } from "@/app/actions";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const initialState = { message: "", status: "" };
export default function HeroSection() {
  const [state, formAction, isPending] = useActionState(
    joinWaitlist,
    initialState
  );

  useEffect(() => {
    if (state.message) {
      if (state.status === "success") {
        toast.success(state.message);
      } else if (state.status === "info") {
        toast.info(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <div className="flex flex-col items-center pt-32 px-6 text-center z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Lumina <span className="text-primary">Neon</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-10 max-w-lg mx-auto">
          The ultimate stack: Next.js 16, and Prisma v7
        </p>
      </motion.div>

      <form action={formAction} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="email"
          name="email"
          required
          placeholder="name123@sample.com"
          className="p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus: outline-none transition-all placeholder:text-zinc-600"
        />
          <input
          type="text"
          name="name"
          required
          placeholder="johndoe"
          className="p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus: outline-none transition-all placeholder:text-zinc-600"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isPending}
          className="p-4 rounded-xl bg-primary text-white font-bold shadow-lg  shadow-primary/25 hover:bg-primary-dark cursor-pointer disabled:opacity-50"
        >
          {isPending ? "Syncing..." : "Get Access"}
        </motion.button>
      </form>
    </div>
  );
}
