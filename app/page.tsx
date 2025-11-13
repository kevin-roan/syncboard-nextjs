"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px]">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_800px_at_var(--mouse-x)_var(--mouse-y),rgba(139,92,246,0.15),transparent_40%)]"
          style={{
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {mounted &&
        [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-purple-500/30"
            initial={{
              x:
                typeof window !== "undefined"
                  ? Math.random() * window.innerWidth
                  : 0,
              y:
                typeof window !== "undefined"
                  ? Math.random() * window.innerHeight
                  : 0,
            }}
            animate={{
              y:
                typeof window !== "undefined"
                  ? [null, Math.random() * window.innerHeight]
                  : 0,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-4"
        >
          <motion.h1
            className="bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-7xl font-bold text-transparent md:text-8xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Syncboard
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />

          <motion.h3
            className="bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-xl text-transparent md:text-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Autonomous Project Management Software
          </motion.h3>
        </motion.div>

        <motion.button
          className="group relative mt-8 overflow-hidden rounded-full bg-white/5 px-8 py-3 backdrop-blur-sm transition-all hover:bg-white/10
px-8
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text font-medium text-transparent ">
            Get Started
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
    </div>
  );
}
