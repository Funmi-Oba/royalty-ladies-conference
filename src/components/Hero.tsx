import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import Countdown from "@/components/Countdown";

interface HeroProps {
  scrollToRegistration: () => void;
}

// ── Social links (kept from original, restyled) ──────────────────
const socialLinks = [
  { Icon: FaInstagram, href: "https://www.instagram.com/royalty.ladies?igsh=MTdkMGJkNHBvMnI4NA==&utm_source=ig_contact_invite", label: "Instagram" },
  { Icon: FaFacebook, href: "https://www.facebook.com/share/19SvNNyJJ1/", label: "Facebook" },
  { Icon: FaYoutube, href: "https://youtube.com/@royaltyladies?si=xfT1JYPjPWKpHPRz", label: "YouTube" },
  { Icon: BsTiktok, href: "https://www.tiktok.com/@royalty_ladies?_t=ZS-8ylqfZVxzH8&_r=1", label: "TikTok" },
];

// Stagger config for entrance reveals
const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemReveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const Hero = ({ scrollToRegistration }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Parallax: the image layer drifts slightly slower than scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden bg-charcoal"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Background image layer with parallax ──────────────────── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={prefersReducedMotion ? undefined : { y: imageY }}
      >
        <img
          src="/images/royalty-ladies3.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* ── Cinematic overlay ─────────────────────────────────────── */}
      {/* Desktop: diagonal charcoal→crimson→charcoal for depth + readability */}
      {/* Mobile: vertical gradient so text stays legible on narrow screens */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={
          prefersReducedMotion
            ? undefined
            : { y: overlayY, backgroundImage: "var(--gradient-hero-overlay)" }
        }
      >
        <div
          className="absolute inset-0 md:hidden"
          style={{ backgroundImage: "var(--gradient-hero-overlay-mobile)" }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{ backgroundImage: "var(--gradient-hero-overlay)" }}
        />
      </motion.div>

      {/* ── Gold particle accents (subtle, non-distracting) ───────── */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute left-[8%] top-[18%] h-1 w-1 rounded-full bg-gold/40 animate-gold-flicker" />
        <div className="absolute right-[12%] top-[28%] h-1.5 w-1.5 rounded-full bg-gold-light/30 animate-gold-flicker" style={{ animationDelay: "1s" }} />
        <div className="absolute left-[18%] bottom-[32%] h-1 w-1 rounded-full bg-gold/30 animate-gold-flicker" style={{ animationDelay: "2s" }} />
        <div className="absolute right-[20%] bottom-[20%] h-1 w-1 rounded-full bg-gold-light/25 animate-gold-flicker" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* ── Vertical social rail (desktop only) ───────────────────── */}
      <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex">
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-gold/50" />
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-ivory/50 transition-colors duration-300 hover:text-gold"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <div className="h-12 w-px bg-gradient-to-b from-gold/50 to-transparent" />
      </div>

      {/* ── Main content ──────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-10 pt-24 sm:px-8 sm:pt-28 lg:px-12"
        style={prefersReducedMotion ? undefined : { y: textY }}
        variants={containerStagger}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow: conference name + edition badge */}
        <motion.div variants={itemReveal} className="mb-5 flex items-center gap-4">
          <span className="h-px w-8 bg-gold/60 sm:w-12" />
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-ivory/70 sm:text-xs">
            Royalty Ladies Conference
          </p>
        </motion.div>

        {/* Edition badge */}
        <motion.div variants={itemReveal} className="mb-6">
          <span className="inline-block rounded-full border border-gold/30 bg-charcoal/40 px-4 py-1 font-sans text-xs font-medium tracking-wider text-gold backdrop-blur-sm sm:text-sm">
            RLC 2.0
          </span>
        </motion.div>

        {/* Theme — the visual hero of the first viewport */}
        <motion.h1
          variants={itemReveal}
          className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-shimmer-gold sm:text-7xl md:text-8xl lg:text-9xl"
        >
          OVERCOMING
        </motion.h1>

        {/* Scripture reference */}
        <motion.p
          variants={itemReveal}
          className="mt-3 font-script text-lg italic text-ivory/80 sm:mt-4 sm:text-2xl md:text-3xl"
        >
          1 John 5:4 NKJV
        </motion.p>

        {/* Gold divider */}
        <motion.div variants={itemReveal} className="gold-rule my-6 w-full max-w-xs sm:my-8 sm:max-w-sm" />

        {/* Date + venue info row */}
        <motion.div
          variants={itemReveal}
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
        >
          <div className="flex items-center gap-2 text-ivory/85">
            <Calendar className="h-4 w-4 text-gold sm:h-5 sm:w-5" />
            <span className="font-sans text-sm sm:text-base md:text-lg">
              October 30 – November 1, 2026
            </span>
          </div>
          <span className="hidden h-4 w-px bg-ivory/25 sm:block" />
          <div className="flex items-center gap-2 text-ivory/85">
            <MapPin className="h-4 w-4 text-gold sm:h-5 sm:w-5" />
            <span className="font-sans text-sm sm:text-base md:text-lg">
              Destiny Nation Arena, Abeokuta
            </span>
          </div>
        </motion.div>

        {/* Free entry note */}
        <motion.p
          variants={itemReveal}
          className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-baby-pink sm:text-sm"
        >
          Free Entry • Registration Required
        </motion.p>

        {/* CTA + secondary action */}
        <motion.div variants={itemReveal} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <button
            onClick={scrollToRegistration}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-crimson px-7 py-3.5 font-sans text-sm font-semibold tracking-wide text-ivory shadow-[0_8px_30px_-6px_hsl(var(--crimson)/0.5)] transition-all duration-300 hover:scale-[1.03] hover:bg-crimson-light hover:shadow-[0_12px_40px_-6px_hsl(var(--crimson)/0.6)] sm:px-9 sm:py-4 sm:text-base"
          >
            REGISTER NOW
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a
            href="#about"
            className="inline-flex items-center justify-center font-sans text-sm text-ivory/70 transition-colors duration-300 hover:text-gold sm:text-base"
          >
            Learn more
          </a>
        </motion.div>

        {/* Countdown — anchored near bottom of hero content */}
        <motion.div variants={itemReveal} className="mt-10 sm:mt-12 lg:mt-14">
          <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-ivory/50 sm:text-xs">
            Countdown to RLC 2.0
          </p>
          <Countdown targetDate="2026-10-30T17:00:00" />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade into next section ─────────────────────────── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 bg-gradient-to-b from-transparent to-ivory/10" />
    </section>
  );
};

export default Hero;
