import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Scissors, Crown, Flame, Star, Clock, Users, Award, ChevronDown, Instagram, Facebook, MapPin, Phone, Sparkles, Zap, Target } from "lucide-react";

// Custom cursor component
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);
    
    const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: position.x - (isHovering ? 24 : 8),
        y: position.y - (isHovering ? 24 : 8),
        scale: isHovering ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div 
        className={`rounded-full bg-white transition-all duration-200 ${
          isHovering ? "w-12 h-12" : "w-4 h-4"
        }`}
      />
    </motion.div>
  );
}

// Navbar component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Scissors className="w-8 h-8 text-red-500" />
          <span className="font-display text-3xl tracking-wider">BLADE KINGS</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {["servicios", "galeria", "nosotros"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-semibold uppercase tracking-widest text-white/80 hover:text-red-500 transition-colors"
              data-testid={`nav-${item}`}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.a
          href=""
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 text-sm uppercase tracking-widest transition-all glow-red"
          data-testid="nav-cta"
        >
          Agendar Cita
        </motion.a>
      </div>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 bg-gradient-to-br from-black via-noir-medium to-black"
      >
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }} />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Red gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
        >
          <Crown className="w-4 h-4 text-red-500" />
          <span className="text-sm font-medium tracking-wider text-white/80">BARBERÍA DE ÉLITE</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6"
        >
          <span className="block">DONDE EL</span>
          <span className="block text-red-500 text-shadow-red">ESTILO</span>
          <span className="block">ES LEY</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-medium"
        >
          Cortes de precisión. Actitud sin límites. El punto donde la calle 
          se encuentra con el lujo más exclusivo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href=""
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-red-600 text-white font-bold px-10 py-5 text-lg uppercase tracking-widest overflow-hidden"
            data-testid="hero-cta"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Flame className="w-5 h-5" />
              Agendar Cita
            </span>
            <motion.div
              className="absolute inset-0 bg-red-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.button
            onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            className="border-2 border-white/20 text-white font-bold px-10 py-5 text-lg uppercase tracking-widest hover:border-red-500 hover:text-red-500 transition-colors"
            data-testid="hero-explore"
          >
            Explorar Servicios
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Value Proposition Section
function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: Target,
      title: "PRECISIÓN EXTREMA",
      description: "Cada corte es una obra maestra. Técnicas avanzadas y atención milimétrica al detalle que define tu estilo único.",
      accent: "01",
    },
    {
      icon: Crown,
      title: "LUJO URBANO",
      description: "Ambiente exclusivo donde la estética callejera se fusiona con el confort premium. Experiencia única garantizada.",
      accent: "02",
    },
    {
      icon: Zap,
      title: "ACTITUD REBELDE",
      description: "No seguimos tendencias, las creamos. Barberos que entienden que tu look es tu declaración al mundo.",
      accent: "03",
    },
  ];

  return (
    <section ref={ref} id="nosotros" className="relative py-32 bg-black overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4 block">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight">
            NO SOMOS UNA BARBERÍA.<br />
            <span className="text-red-500">SOMOS UNA CULTURA.</span>
          </h2>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-noir-light border border-white/5 p-8 md:p-10 transition-all duration-500 hover:border-red-500/50"
              data-testid={`pillar-${index + 1}`}
            >
              {/* Accent number */}
              <span className="absolute top-6 right-6 font-display text-6xl text-white/5 group-hover:text-red-500/20 transition-colors">
                {pillar.accent}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                <pillar.icon className="w-8 h-8 text-red-500" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl md:text-3xl mb-4 tracking-wide group-hover:text-red-500 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                {pillar.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section with Infinite Scroll
function ServicesSection() {
  const services = [
    { name: "CORTE CLÁSICO", price: "$25", description: "Estilo atemporal, precisión moderna" },
    { name: "FADE PREMIUM", price: "$35", description: "Degradado perfecto, definición brutal" },
    { name: "BARBA ESCULPIDA", price: "$20", description: "Líneas limpias, presencia imponente" },
    { name: "CORTE + BARBA", price: "$50", description: "El combo del rey, transformación total" },
    { name: "SKIN FADE", price: "$40", description: "Al ras, impecable, sin compromisos" },
    { name: "DISEÑO ARTÍSTICO", price: "$45", description: "Tu visión hecha realidad" },
    { name: "TRATAMIENTO VIP", price: "$80", description: "Experiencia completa de lujo" },
    { name: "AFEITADO CLÁSICO", price: "$30", description: "Navaja caliente, ritual premium" },
  ];

  const duplicatedServices = [...services, ...services];

  return (
    <section id="servicios" className="relative py-32 bg-noir-light overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4 block">
              Nuestros Servicios
            </span>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">
              DOMINA TU<br />
              <span className="text-red-500">ESTILO</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-md text-lg">
            Cada servicio es una experiencia diseñada para hacerte sentir como el rey que eres.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll row 1 */}
      <div className="relative mb-6 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -50 * services.length * 4.5] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...duplicatedServices, ...duplicatedServices].map((service, index) => (
            <motion.div
              key={`row1-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 w-80 bg-black border border-white/10 p-8 group hover:border-red-500/50 transition-all cursor-pointer"
              data-testid={`service-card-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl tracking-wide group-hover:text-red-500 transition-colors">
                  {service.name}
                </h3>
                <span className="text-red-500 font-bold text-xl">{service.price}</span>
              </div>
              <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-red-500 transition-colors">
                <Scissors className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Ver más</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Infinite scroll row 2 (reverse direction) */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: [-50 * services.length * 4.5, 0] }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...duplicatedServices, ...duplicatedServices].reverse().map((service, index) => (
            <motion.div
              key={`row2-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 w-80 bg-noir-medium border border-white/10 p-8 group hover:border-red-500/50 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl tracking-wide group-hover:text-red-500 transition-colors">
                  {service.name}
                </h3>
                <span className="text-red-500 font-bold text-xl">{service.price}</span>
              </div>
              <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-red-500 transition-colors">
                <Scissors className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Ver más</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <motion.a
          href=""
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-5 text-lg uppercase tracking-widest transition-all glow-red"
          data-testid="services-cta"
        >
          <Clock className="w-5 h-5" />
          Reservar Ahora
        </motion.a>
      </div>
    </section>
  );
}

// Before/After Gallery Section
function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const transformations = [
    { id: 1, style: "Fade Clásico", before: "Cabello largo y desordenado", after: "Fade impecable con textura" },
    { id: 2, style: "Barba Esculpida", before: "Barba descuidada sin forma", after: "Líneas perfectas y definidas" },
    { id: 3, style: "Skin Fade", before: "Corte básico sin estilo", after: "Degradado al cero brutal" },
    { id: 4, style: "Diseño Artístico", before: "Look simple y común", after: "Arte personalizado único" },
    { id: 5, style: "Transformación Total", before: "Imagen desactualizada", after: "Nuevo nivel de confianza" },
    { id: 6, style: "Estilo Ejecutivo", before: "Descuidado para el trabajo", after: "Presencia profesional" },
  ];

  return (
    <section ref={ref} id="galeria" className="relative py-32 bg-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4 block">
            Resultados Reales
          </span>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-6">
            ANTES VS <span className="text-red-500">DESPUÉS</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            La transformación habla por sí misma. Mira cómo nuestros clientes 
            evolucionan su imagen y elevan su confianza.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/5] bg-noir-light border border-white/5 overflow-hidden cursor-pointer"
              data-testid={`gallery-item-${item.id}`}
            >
              {/* Gradient placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-noir-medium via-noir-soft to-noir-light" />
              
              {/* Before/After overlay effect */}
              <div className="absolute inset-0 flex">
                {/* Before side */}
                <div className="w-1/2 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center p-4">
                      <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">Antes</span>
                      <p className="text-white/60 text-sm">{item.before}</p>
                    </div>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="w-px bg-red-500 relative z-10">
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
                
                {/* After side */}
                <div className="w-1/2 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-red-900/20 flex items-center justify-center">
                    <div className="text-center p-4">
                      <span className="block text-xs uppercase tracking-widest text-red-500 mb-2">Después</span>
                      <p className="text-white text-sm font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Style label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                <h3 className="font-display text-2xl text-white group-hover:text-red-500 transition-colors">
                  {item.style}
                </h3>
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "5000+", label: "Clientes Satisfechos", icon: Users },
    { value: "4.9", label: "Rating Promedio", icon: Star },
    { value: "8+", label: "Años de Experiencia", icon: Award },
    { value: "15K+", label: "Cortes Realizados", icon: Scissors },
  ];

  const testimonials = [
    { name: "Carlos M.", text: "El mejor corte de mi vida. Estos tipos saben lo que hacen.", rating: 5 },
    { name: "Miguel R.", text: "Ambiente brutal y servicio de primera. Mi nueva barbería fija.", rating: 5 },
    { name: "Andrés L.", text: "Transformaron mi look completamente. Vale cada centavo.", rating: 5 },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-32 bg-noir-light overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-black/50 border border-white/5"
              data-testid={`stat-${index}`}
            >
              <stat.icon className="w-6 h-6 text-red-500 mx-auto mb-3" />
              <div className="font-display text-4xl md:text-5xl text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-red-500 fill-red-500" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-medium text-white/90 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-red-500 font-bold uppercase tracking-widest">
                — {testimonials[currentTestimonial].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-red-500 w-8" : "bg-white/20"
                }`}
                data-testid={`testimonial-indicator-${index}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
            TU PRÓXIMO NIVEL<br />
            <span className="text-red-500">TE ESPERA</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg mb-12">
            No esperes más para transformar tu imagen. Reserva tu cita ahora 
            y experimenta la diferencia BLADE KINGS.
          </p>
          
          <motion.a
            href=""
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-500 text-white font-bold px-12 py-6 text-xl uppercase tracking-widest transition-all animate-pulse-red"
            data-testid="final-cta"
          >
            <Flame className="w-6 h-6" />
            Agendar Cita Ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Scissors className="w-8 h-8 text-red-500" />
              <span className="font-display text-3xl tracking-wider">BLADE KINGS</span>
            </div>
            <p className="text-white/40 max-w-md mb-6">
              Donde el estilo callejero se encuentra con el lujo. 
              Cortes de precisión para los que no siguen reglas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-red-600 flex items-center justify-center transition-colors" data-testid="social-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-red-600 flex items-center justify-center transition-colors" data-testid="social-facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6 tracking-wider">Contacto</h4>
            <div className="space-y-4 text-white/40">
              <a href="#" className="flex items-center gap-3 hover:text-red-500 transition-colors">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Calle Principal #123</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-red-500 transition-colors">
                <Phone className="w-4 h-4 text-red-500" />
                <span>+1 234 567 890</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl mb-6 tracking-wider">Horario</h4>
            <div className="space-y-2 text-white/40 text-sm">
              <div className="flex justify-between">
                <span>Lun - Vie</span>
                <span className="text-white">9:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span className="text-red-500">Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2024 BLADE KINGS. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-sm">
            Diseñado con <span className="text-red-500">♦</span> para los que marcan la diferencia
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page
function LandingPage() {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </div>
  );
}

// App with React Router
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
