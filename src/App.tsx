import { useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Star,
  Sparkles,
  ChevronRight,
  Candy,
  Popcorn,
  MessageCircle,
  Menu,
  UtensilsCrossed,
  Soup,
  Apple,
  PartyPopper,
  Gem,
  Zap,
  HeartHandshake,
  CheckCircle2,
  X,
} from "lucide-react";
import { motion, type Variants, AnimatePresence } from "framer-motion";

import logoPalAntojo from "./assets/logopalantojo.png";

import menu1 from "./assets/gallery/menu1.png";
import menu2 from "./assets/gallery/menu2.png";
import menu3 from "./assets/gallery/menu3.png";
import menu4 from "./assets/gallery/menu4.png";
import menu5 from "./assets/gallery/menu5.png";
import menu6 from "./assets/gallery/menu6-fixed.png";
import menu7 from "./assets/gallery/menu7.png";
import menu8 from "./assets/gallery/menu8.png";
import menu9 from "./assets/gallery/menu9.png";
import menu10 from "./assets/gallery/menu10.png";
import menu11 from "./assets/gallery/menu11.png";
import menu12 from "./assets/gallery/menu12.png";
import menu13 from "./assets/gallery/menu13.png";
import galeria1 from "./assets/gallery/galeria1.jpeg";
import galeria2 from "./assets/gallery/galeria2.png";
import galeria3 from "./assets/gallery/galeria3.png";
import galeria4 from "./assets/gallery/galeria4.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const featuredProducts = [
  {
    name: "Mini Pancakes",
    description:
      "Preparados al momento con toppings dulces, frutas y presentaciones que despiertan el antojo al instante.",
    badge: "Top ventas",
    image: menu7,
  },
  {
    name: "Mini Crepas",
    description:
      "Sabor, presentación y variedad en una opción ideal para consentir a tus invitados en cualquier evento.",
    badge: "Favorito",
    image: menu6,
  },
  {
    name: "Bebidas Especiales",
    description:
      "Opciones refrescantes, llamativas y perfectas para complementar una barra de snacks inolvidable.",
    badge: "Fresh",
    image: menu10,
  },
];

const menuCategories = [
  {
    title: "Elotitos",
    icon: Popcorn,
    description:
      "Preparados con toppings, salsas y una presentación que llama la atención desde el primer vistazo.",
    image: menu1,
  },
  {
    title: "Sopa Loka",
    icon: Soup,
    description:
      "Una opción divertida y diferente para reuniones, fiestas y celebraciones especiales.",
    image: menu2,
  },
  {
    title: "Fruta Loka",
    icon: Apple,
    description:
      "Fruta fresca, colorida y lista para servirse con ingredientes que elevan cada presentación.",
    image: menu3,
  },
  {
    title: "Mini Pancakes",
    icon: Candy,
    description:
      "Una de las opciones más visuales y atractivas de la barra, ideal para cautivar a tus invitados.",
    image: menu4,
  },
  {
    title: "Chamango",
    icon: UtensilsCrossed,
    description:
      "Una mezcla fresca, colorida y llamativa que aporta variedad y gran presencia visual.",
    image: menu8,
  },
  {
    title: "Paletas Preparadas",
    icon: UtensilsCrossed,
    description:
      "Una opción diferente, vistosa y deliciosa para darle un toque especial a tu evento.",
    image: menu9,
  },
  {
    title: "Tostilokos",
    icon: UtensilsCrossed,
    description:
      "Una botana súper antojable, llena de sabor y preparada para llamar la atención en cualquier evento.",
    image: menu11,
  },
  {
    title: "Fresas con Crema",
    icon: UtensilsCrossed,
    description:
      "Una opción fresca, dulce y elegante que aporta color, sabor y una presentación irresistible.",
    image: menu12,
  },
  {
    title: "Barra Loka",
    icon: UtensilsCrossed,
    description:
      "Montaje completo con variedad de ingredientes y estilo visual para hacer lucir tu evento.",
    image: menu5,
  },
];

const galleryItems = [
  {
    title: "Montaje premium",
    description: "Una presentación elegante que transforma tu evento.",
    image: galeria1,
  },
  {
    title: "Fruta preparada",
    description: "Color, frescura y un toque irresistible.",
    image: galeria2,
  },
  {
    title: "Preparación al momento",
    description: "Una experiencia visual que encanta a tus invitados.",
    image: galeria3,
  },
  {
    title: "Bebidas especiales",
    description: "Complementos perfectos para una barra inolvidable.",
    image: galeria4,
  },
];

const serviceHighlights = [
  {
    title: "Barra de snacks para eventos",
    text: "Ideal para fiestas, reuniones, celebraciones y eventos sociales.",
    icon: PartyPopper,
  },
  {
    title: "Presentación premium",
    text: "Montajes visuales que decoran, lucen y elevan la experiencia.",
    icon: Gem,
  },
  {
    title: "Servicio ágil y práctico",
    text: "Atención rápida para que tus invitados disfruten sin esperar demasiado.",
    icon: Zap,
  },
  {
    title: "Experiencia memorable",
    text: "Un concepto delicioso pensado para sorprender y consentir.",
    icon: HeartHandshake,
  },
];

const stats = [
  { value: "9+", label: "Especialidades visuales" },
  { value: "100%", label: "Presentación premium" },
  { value: "Top", label: "Ideal para eventos" },
];

const navItems = [
  ["Inicio", "#inicio"],
  ["Menú", "#menu"],
  ["Galería", "#galeria"],
  ["Contacto", "#contacto"],
] as const;

const packageData = [
  {
    title: "Paquete 1",
    subtitle: "2 productos",
    people50: "$500",
    people100: "$900",
  },
  {
    title: "Paquete 2",
    subtitle: "3 productos",
    people50: "$600",
    people100: "$1100",
  },
  {
    title: "Paquete 3",
    subtitle: "4 productos",
    people50: "$700",
    people100: "$1300",
  },
];

const packageMenuItems = [
  "Sopa Loka",
  "Eskites",
  "Elotitos Lokos",
  "Fruta Loka",
  "Tostilokos",
  "Mini Crepas",
  "Mini Pancakes",
  "Fresas con Crema",
  "Paleta Loka",
  "Boba Dubai",
  "Churros",
  "Mangonadas",
];

function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] top-16 h-40 w-40 rounded-full bg-[#d7be84]/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-24 h-52 w-52 rounded-full bg-[#9f7c38]/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/3 h-44 w-44 rounded-full bg-[#efe2bf]/40 blur-3xl"
      />
    </div>
  );
}

function MobileMenuButton() {
  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm lg:hidden"
      aria-label="Abrir menú"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p
          className={`text-sm font-bold uppercase tracking-[0.28em] ${
            light ? "text-[#d7be84]" : "text-[#9f7c38]"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-3 text-3xl font-black md:text-5xl ${
            light ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
      </div>

      {description ? (
        <p className={`max-w-2xl ${light ? "text-white/70" : "text-black/65"}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function PackagesModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] bg-[#f8f3e8] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-[#f8f3e8]/95 px-6 py-5 backdrop-blur">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9f7c38]">
                  Cotización y menú
                </p>
                <h3 className="mt-1 text-2xl font-black text-black md:text-3xl">
                  Paquetes disponibles
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black hover:text-white"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-8 px-6 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-8">
              <div>
                <div className="mb-6 rounded-[1.5rem] border border-[#c7ae77]/35 bg-white px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#9f7c38]">
                    Paquetes
                  </p>
                  <p className="mt-3 text-sm leading-7 text-black/65">
                    Puedes elegir entre distintas combinaciones de productos según
                    el tamaño de tu evento y la experiencia que quieras ofrecer.
                  </p>
                </div>

                <div className="grid gap-5">
                  {packageData.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_12px_26px_rgba(0,0,0,0.05)]"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="text-3xl font-black text-black">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-lg font-semibold text-[#9f7c38]">
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-[#f8f3e8] px-4 py-3 text-sm font-medium text-black/70">
                          Ideal para eventos sociales y celebraciones
                        </div>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-black/10 bg-[#faf7f0] p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/45">
                            50 personas
                          </p>
                          <p className="mt-2 text-3xl font-black text-black">
                            {item.people50}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-black/10 bg-[#faf7f0] p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/45">
                            100 personas
                          </p>
                          <p className="mt-2 text-3xl font-black text-black">
                            {item.people100}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="rounded-[1.75rem] border border-black/10 bg-[#111111] p-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d7be84]">
                    Menú disponible
                  </p>
                  <h4 className="mt-3 text-3xl font-black">Opciones de productos</h4>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    Los paquetes pueden integrarse con cualquiera de estas
                    especialidades, según disponibilidad y tipo de evento.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {packageMenuItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#d7be84]/25 bg-[#d7be84]/10 p-4 text-sm leading-7 text-white/85">
                    Para cotización exacta, puedes comunicarte por llamada o
                    WhatsApp y así ayudarte a elegir la mejor combinación para tu
                    evento.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function App() {
  const [isPackagesModalOpen, setIsPackagesModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-[#f8f3e8] text-[#121212]">
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f3e8]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
            <motion.a
              href="#inicio"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group flex items-center gap-3"
            >
              <div className="overflow-hidden rounded-full border border-[#c7ae77]/45 bg-white px-5 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.08)] transition duration-300 group-hover:shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
                <img
                  src={logoPalAntojo}
                  alt="Pal Antojo Snack Bar"
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </div>
            </motion.a>

            <nav className="hidden items-center gap-10 text-sm font-semibold lg:flex">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="relative transition hover:text-[#9f7c38] after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-[#c7ae77] after:transition-all hover:after:w-full"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <motion.a
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                href="https://wa.me/17025823041"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="hidden rounded-full bg-black px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:bg-[#252525] sm:inline-flex"
              >
                Reserva ahora
              </motion.a>
              <MobileMenuButton />
            </div>
          </div>
        </header>

        <section id="inicio" className="relative overflow-hidden bg-[#f8f3e8]">
          <FloatingBlobs />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(199,174,119,0.16),_transparent_28%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.22),transparent_35%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24 lg:gap-20">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="relative z-10 order-2 lg:order-1"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-[#c7ae77] bg-white/90 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.35em] text-[#9f7c38] shadow-[0_8px_20px_rgba(0,0,0,0.05)] backdrop-blur"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Snack bar para eventos
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 max-w-[720px] text-4xl font-black leading-[0.95] tracking-[-0.03em] text-black sm:text-5xl md:text-6xl lg:text-[76px]"
              >
                Haz que tu evento luzca y se antoje desde el primer vistazo.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-base leading-8 text-black/65 sm:text-lg"
              >
                Pal Antojo Snack Bar lleva una barra de snacks con gran
                presentación, servicio ágil y opciones deliciosas para fiestas,
                reuniones y celebraciones.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                <div className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-[#e8d6ad] shadow-lg">
                  Montaje visual premium
                </div>
                <div className="inline-flex items-center rounded-full border border-[#c7ae77]/40 bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#8d6c2b]">
                  Ideal para eventos y celebraciones
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-center font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition hover:bg-[#1f1f1f]"
                >
                  Reservar servicio
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  href="#galeria"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-center font-bold text-black shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:border-[#c7ae77] hover:text-[#9f7c38]"
                >
                  Ver galería
                </motion.a>
              </motion.div>

              <motion.div
                variants={stagger}
                className="mt-12 grid gap-4 sm:grid-cols-3"
              >
                {stats.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    whileHover={{ y: -7, scale: 1.02 }}
                    className="rounded-[1.5rem] border border-black/10 bg-white/85 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.06)] backdrop-blur"
                  >
                    <p className="text-3xl font-black leading-none text-[#9f7c38]">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm font-medium text-black/55">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#d9c38e]/45 blur-3xl"
              />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-black/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/80 p-4 sm:p-5 shadow-[0_35px_90px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                <div className="absolute inset-0 rounded-[2.25rem] border border-[#c7ae77]/20" />

                <div className="relative overflow-hidden rounded-[1.9rem] bg-[#0f0f0f] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.7 }}
                    className="relative overflow-hidden rounded-[1.5rem]"
                  >
                    <img
  src={menu13}
  alt="Pal Antojo Snack Bar"
  className="h-[760px] w-full object-cover object-top"
/>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/8 to-transparent" />
                  </motion.div>

                
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="promos"
          className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem] border border-[#c7ae77]/35 bg-gradient-to-r from-[#111111] via-[#2a2620] to-[#111111] shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
          >
            <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1fr_1.4fr] lg:px-8 lg:py-10">
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d7be84]">
                  Nuestro servicio
                </p>
                <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Una experiencia visual, práctica y deliciosa para tu evento
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                  Montamos una barra de snacks con gran presencia, atención ágil y
                  presentaciones que hacen lucir cualquier celebración.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {serviceHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -6, scale: 1.01 }}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:border-[#d7be84]/45 hover:bg-white/10"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7be84] text-black shadow-lg">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-4 text-lg font-black text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-18">
          <SectionHeading
            eyebrow="Favoritos"
            title="Lo que más llama la atención"
            description="Opciones que destacan por su presentación, sabor y experiencia visual."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="mt-10 grid gap-6 lg:grid-cols-3"
          >
            {featuredProducts.map((product) => (
              <motion.article
                key={product.name}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition duration-300 hover:shadow-[0_24px_50px_rgba(0,0,0,0.14)]"
              >
                <div className="absolute left-5 top-5 z-10 rounded-full bg-black/75 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#e8d6ad] backdrop-blur">
                  {product.badge}
                </div>

                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black">{product.name}</h3>
                  <p className="mt-4 leading-7 text-black/65">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-[#9f7c38]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="ml-2 text-sm font-semibold text-black/60">
                      Ideal para impresionar a tus invitados
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="menu" className="relative border-y border-black/10 bg-white/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(215,190,132,0.1),_transparent_28%)]" />

          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Menú"
              title="Especialidades de la barra"
              description="Cada opción está pensada para verse bien, servirse rápido y dejar una gran impresión."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {menuCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <motion.article
                    key={category.title}
                    whileHover={{ y: -10 }}
                    className="group overflow-hidden rounded-[2rem] border border-black/10 bg-[#f8f3e8] shadow-[0_14px_32px_rgba(0,0,0,0.06)] transition duration-300 hover:shadow-[0_22px_48px_rgba(0,0,0,0.13)]"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-white backdrop-blur-md">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d7be84] text-black shadow-md">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-[0.14em]">
                          {category.title}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-black text-black">
                        {category.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-black/65">
                        {category.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="galeria" className="relative bg-[#111111] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(215,190,132,0.12),_transparent_25%)]" />

          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Galería"
              title="Así luce la experiencia Pal Antojo"
              description="Botanas, bebidas y montajes que hacen más especial cualquier evento."
              light
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-10 grid gap-6 lg:grid-cols-3"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] lg:col-span-2"
              >
                <div className="relative h-[320px] min-h-[420px] overflow-hidden sm:h-[380px] lg:h-full">
                  <img
                    src={galleryItems[0].image}
                    alt={galleryItems[0].title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="grid gap-6">
                {galleryItems.slice(1).map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -8 }}
                    className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                      <div className="absolute inset-x-4 bottom-4">
                        <h3 className="text-base font-black text-white">{item.title}</h3>
                        <p className="mt-1 text-xs leading-5 text-white/76">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn}
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2rem] border border-[#c7ae77]/50 bg-gradient-to-br from-[#111111] to-[#2d2a25] px-8 py-12 text-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] lg:px-14"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d7be84]/10 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d7be84]">
                  Reserva tu fecha
                </p>
                <h2 className="mt-3 text-3xl font-black md:text-5xl">
                  Cotiza tu snack bar por llamada o WhatsApp
                </h2>
                <p className="mt-5 max-w-2xl text-white/75 leading-8">
                  Cuéntanos tu evento y te ayudamos a preparar una experiencia que
                  se vea increíble y encante a tus invitados.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Ideal para fiestas y reuniones",
                    "Montaje visual premium",
                    "Atención rápida y práctica",
                    "Servicio memorable para tus invitados",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/82">
                      <CheckCircle2 className="h-4 w-4 text-[#d7be84]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/17025823041"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7be84] px-7 py-4 text-center font-bold text-black transition hover:bg-[#e6d4a7]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enviar WhatsApp
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+17025823041"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-center font-bold transition hover:border-[#d7be84] hover:text-[#d7be84]"
                >
                  Llamar ahora
                </motion.a>

                <motion.button
                  type="button"
                  onClick={() => setIsPackagesModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full border border-[#d7be84]/35 bg-white/10 px-7 py-4 text-center font-bold text-white transition hover:bg-white/15"
                >
                  Ver paquetes y menú
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="contacto" className="border-t border-black/10 bg-white/60">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8"
          >
            {[
              {
                icon: Phone,
                title: "Teléfono",
                lines: ["+1 702-582-3041"],
              },
              {
                icon: MapPin,
                title: "Ubicación",
                lines: ["Las Vegas, NV 89122", "Nevada, United States"],
              },
              {
                icon: Clock,
                title: "Horario",
                lines: ["Lunes a Domingo", "Confirma disponibilidad por llamada o WhatsApp"],
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] border border-black/10 bg-[#f8f3e8] p-8 shadow-[0_14px_32px_rgba(0,0,0,0.06)] transition duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#efe2bf] text-[#9f7c38]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="mt-2 text-black/70 first:mt-4">
                      {line}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <footer className="bg-black text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <h3 className="text-2xl font-black">Pal Antojo Snack Bar</h3>
              <p className="mt-3 max-w-xl text-sm text-white/65">
                Barra de snacks para eventos con presentación premium, servicio ágil
                y una experiencia visual que encanta a tus invitados.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {[Instagram, Facebook].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition hover:border-[#d7be84] hover:text-[#d7be84]"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </footer>

        <motion.a
          href="https://wa.me/17025823041"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-black text-[#e8d6ad] shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
        >
          <MessageCircle className="h-7 w-7" />
        </motion.a>
      </div>

      <PackagesModal
        open={isPackagesModalOpen}
        onClose={() => setIsPackagesModalOpen(false)}
      />
    </>
  );
}