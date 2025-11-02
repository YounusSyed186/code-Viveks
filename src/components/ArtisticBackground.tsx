import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const ArtisticBackground = () => {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Subtle animated gradient orbs - macOS style */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: theme === "dark" 
            ? "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)" 
            : "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "5%", left: "5%" }}
      />

      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: theme === "dark"
            ? "radial-gradient(circle, hsl(var(--secondary) / 0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(var(--secondary) / 0.06) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ bottom: "5%", right: "5%" }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: theme === "dark"
            ? "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(var(--accent) / 0.05) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "50%", right: "15%" }}
      />

      {/* Subtle geometric accents - minimal for macOS look */}
      <motion.div
        className={`absolute top-1/4 right-1/4 w-20 h-20 rounded-full border ${
          theme === "dark" ? "border-primary/5" : "border-primary/10"
        }`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute bottom-1/3 left-1/3 w-16 h-16 rounded-lg border ${
          theme === "dark" ? "border-secondary/5" : "border-secondary/10"
        }`}
        animate={{ 
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle noise overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default ArtisticBackground;
