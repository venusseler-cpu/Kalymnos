import { motion, AnimatePresence } from "motion/react";
import { 
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Star, 
  Menu as MenuIcon, 
  X,
  ChevronRight,
  ChevronLeft,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY);

const DISHES = [
  {
    id: 1,
    name: "Gyros Bowl Deluxe",
    description: "Zartes Karussellfleisch auf einem Bett aus griechischem Reis, dazu hausgemachtes Tzatziki und Kalamata-Oliven.",
    price: "18.50 €",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Bifteki Kolonaki",
    description: "Saftiges Hacksteak gefüllt mit cremigem Feta, serviert mit gegrilltem Gemüse und Rosmarinkartoffeln.",
    price: "21.00 €",
    image: "/src/assets/images/regenerated_image_1779210860341.webp"
  },
  {
    id: 3,
    name: "Saganaki Meli",
    description: "Gebackener Schafskäse in einer knusprigen Sesamkruste, verfeinert mit griechischem Honig und Thymian.",
    price: "12.50 €",
    image: "/src/assets/images/regenerated_image_1779210860932.webp"
  },
  {
    id: 4,
    name: "Grill Mix Piräus",
    description: "Eine Auswahl feinster Grillspezialitäten: Lammkotelett, Souvlaki und Bifteki, serviert mit Salat.",
    price: "26.50 €",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Griechische Dips",
    description: "Trio aus Tzatziki, Taramas und Tirokafteri, serviert mit warmem Pitabrot aus dem Steinofen.",
    price: "9.50 €",
    image: "/src/assets/images/regenerated_image_1779210861647.webp"
  },
  {
    id: 6,
    name: "Meeresfrüchte-Platte",
    description: "Gegrillter Oktopus, Calamari und Riesengarnelen mit Olivenöl-Zitronen-Dressing.",
    price: "29.00 €",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800"
  }
];

const REVIEWS = [
  {
    name: "Michael Schmidt",
    date: "Vor 2 Wochen",
    rating: 5,
    text: "Das beste griechische Restaurant in Bremen! Das Ambiente ist unglaublich elegant und das Essen einfach authentisch. Der Grill Mix Piräus ist ein Muss."
  },
  {
    name: "Elena Weber",
    date: "Vor 1 Monat",
    rating: 5,
    text: "Wir kommen seit Jahren hierher. Die Qualität ist seit 1993 konstant hoch. Besonders die Vorspeisen und der Service sind erstklassig."
  },
  {
    name: "Lukas Müller",
    date: "Vor 3 Tagen",
    rating: 5,
    text: "Moderne griechische Küche auf höchstem Niveau. Kein Kitsch, dafür viel Geschmack und Klasse. Das Saganaki Meli war göttlich!"
  }
];

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen selection:bg-sand-beige selection:text-aegean-blue overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-med-white/98 backdrop-blur-md py-4 border-premium-gold/20" 
            : "bg-transparent py-8 border-transparent"
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.25em] ${isScrolled ? 'text-aegean-blue' : 'text-med-white'}`}>
          <div className="hidden lg:flex gap-10 items-center">
            <a href="#about" className="hover:text-premium-gold transition-colors duration-300">Erlebnis</a>
            <Link to="/menu" className="hover:text-premium-gold transition-colors duration-300">Unsere Küche</Link>
            <a href="#gallery" className="hover:text-premium-gold transition-colors duration-300">Geschichte</a>
          </div>

          <div className="flex flex-col items-center">
            <h1 className={`font-serif text-3xl md:text-4xl tracking-tighter normal-case leading-none font-bold ${isScrolled ? 'text-aegean-blue' : 'text-med-white'}`}>
              Kalymnos
            </h1>
            <span className={`text-[8px] mt-1.5 opacity-60 ${isScrolled ? 'text-aegean-blue' : 'text-med-white'}`}>FEINE GRIECHISCHE KÜCHE</span>
          </div>

          <div className="hidden lg:flex gap-10 items-center">
            <a href="#reviews" className="hover:text-premium-gold transition-colors duration-300">Bewertungen</a>
            <Link to="/endless-drink" className="hover:text-premium-gold transition-colors duration-300">Gratis Ouzo</Link>
            <a href="#contact" className="hover:text-premium-gold transition-colors duration-300">Kontakt</a>
            <button className={`${isScrolled ? 'bg-aegean-blue text-med-white' : 'bg-med-white text-aegean-blue'} px-8 py-3 text-[10px] font-bold tracking-widest hover:bg-premium-gold hover:text-aegean-blue transition-all duration-500 luxury-shadow`}>
              RESERVIERUNG
            </button>
          </div>

          <button 
            className="lg:hidden text-aegean-blue"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-aegean-blue z-[60] flex flex-col p-8 text-med-white"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 text-2xl font-serif mt-12 items-center">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Über uns</a>
              <Link to="/menu" onClick={() => setMobileMenuOpen(false)}>Unsere Küche</Link>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Galerie</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Bewertungen</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
              <button className="mt-4 bg-premium-gold text-aegean-blue w-full py-4 text-sm font-sans uppercase tracking-[0.2em]">
                Jetzt Reservieren
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 sophisticated-gradient">
          <div className="absolute inset-0 radial-pattern opacity-10" />
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
            alt="Griechische Kulinarik"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative text-center px-6 max-w-5xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block border border-sand-beige/30 px-6 py-2 mb-8"
          >
            <p className="text-sand-beige text-[10px] uppercase tracking-[0.4em] font-bold">
              SEIT 1993
            </p>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-6xl md:text-9xl font-serif font-bold mb-10 leading-[0.9] tracking-tighter"
          >
            Feine griechische <br /> Küche in Bremen.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            <button className="bg-med-white text-aegean-blue px-12 py-5 hover:bg-premium-gold hover:text-aegean-blue transition-all duration-500 uppercase text-[10px] tracking-[0.3em] font-bold luxury-shadow">
              TISCH RESERVIEREN
            </button>
            <div className="flex items-center gap-4 text-med-white/60">
              <div className="h-px w-8 bg-med-white/30"></div>
              <p className="italic text-lg font-serif">Authentisches mediterranes Fine Dining.</p>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-med-white/60 animate-bounce">
          <Clock size={20} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeIn}>
          <p className="text-aegean-blue uppercase tracking-[0.2em] text-sm mb-4 font-semibold">Unsere Geschichte</p>
          <h2 className="text-4xl md:text-6xl text-aegean-blue font-serif mb-8 leading-tight">Griechische Gastfreundschaft im Herzen Bremens</h2>
          <div className="space-y-6 text-aegean-blue/80 leading-relaxed font-light text-lg">
            <p>
              Gegründet im Jahr 1993, ist das Kalymnos seit über drei Jahrzehnten eine Institution für Liebhaber der griechischen Küche in Bremen. Als Familienunternehmen in zweiter Generation verbinden wir die Traditionen unserer Heimat mit einem modernen, kosmopolitischen Flair.
            </p>
            <p>
              Inspiriert von den erstklassigen Restaurants in Santorin und Mykonos, bieten wir eine Atmosphäre, die weit über das klassische Klischee hinausgeht. Bei uns erleben Sie mediterrane Fine Dining Kultur in ihrer reinsten Form.
            </p>
            <div className="flex gap-12 mt-12 pt-8 border-t border-sand-beige/30">
              <div>
                <p className="text-3xl font-serif text-aegean-blue mb-1">30+</p>
                <p className="text-xs uppercase tracking-widest font-semibold text-sand-beige">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-aegean-blue mb-1">Authentisch</p>
                <p className="text-xs uppercase tracking-widest font-semibold text-sand-beige">Importierte Zutaten</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          {...fadeIn}
          className="relative group overflow-hidden"
        >
          <img 
            src="/src/assets/images/regenerated_image_1779210671773.png" 
            alt="Mediterrane Atmosphäre"
            className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 border-[20px] border-med-white pointer-events-none" />
        </motion.div>
      </section>

      {/* Signature Dishes */}
      <section id="menu" className="bg-white py-32 border-y border-premium-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 self-start sticky top-32">
              <p className="text-olive-green uppercase tracking-[0.25em] text-[10px] font-bold mb-6">Spezialitäten des Hauses</p>
              <h2 className="text-5xl font-serif font-bold text-aegean-blue mb-8 leading-tight">Meisterwerke der Küche</h2>
              <p className="text-aegean-blue/60 mb-10 leading-relaxed font-light">
                Unsere Kochkunst ist eine Hommage an die Ägäis. Wir kombinieren frischeste Zutaten mit modernsten Zubereitungsmethoden.
              </p>
              <Link to="/menu" className="inline-block bg-aegean-blue text-white px-10 py-4 text-[10px] font-bold tracking-[0.2em] hover:bg-premium-gold transition-colors duration-500">
                ZUR SPEISEKARTE
              </Link>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
              {DISHES.map((dish) => (
                <motion.div 
                  key={dish.id} 
                  {...fadeIn}
                  className="group relative"
                >
                  <div className="relative overflow-hidden mb-8 aspect-video luxury-shadow">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 sophisticated-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-between items-baseline mb-3 border-b border-sand-beige/20 pb-2">
                    <h3 className="text-xl font-serif font-bold text-aegean-blue">{dish.name}</h3>
                    <span className="text-premium-gold font-serif font-bold">{dish.price}</span>
                  </div>
                  <p className="text-aegean-blue/50 font-light text-sm italic leading-relaxed">
                    {dish.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-med-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <motion.div {...fadeIn} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-sand-beige/20 flex items-center justify-center text-aegean-blue mb-6">
              <Utensils size={28} />
            </div>
            <h3 className="text-xl font-serif italic mb-4">Höchste Qualität</h3>
            <p className="text-aegean-blue/60 text-sm leading-loose">
              Wir verwenden nur das beste Olivenöl aus Kalamata und frische Kräuter von griechischen Inseln.
            </p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-sand-beige/20 flex items-center justify-center text-aegean-blue mb-6">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-serif italic mb-4">Moderne Inspiration</h3>
            <p className="text-aegean-blue/60 text-sm leading-loose">
              Fusion aus traditionellen Rezepten und modernen Anrichtetechniken für ein visuelles Erlebnis.
            </p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-sand-beige/20 flex items-center justify-center text-aegean-blue mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-serif italic mb-4">Beste Lage</h3>
            <p className="text-aegean-blue/60 text-sm leading-loose">
              Genießen Sie Ihr Dinner in einem exklusiven Ambiente direkt im Herzen der Hansestadt Bremen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Bento Style */}
      <section id="gallery" className="pb-24 px-6 bg-med-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
            <motion.div {...fadeIn} className="col-span-2 row-span-2 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Gallery 1" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Gallery 2" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Gallery 3" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="col-span-2 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Gallery 4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-sand-beige/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Quote className="mx-auto text-premium-gold mb-12 opacity-50" size={48} />
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {REVIEWS.map((review, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 shadow-sm border border-sand-beige/20 text-left relative"
                >
                  <div className="flex gap-1 text-premium-gold mb-4">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-aegean-blue/70 italic text-sm leading-relaxed mb-6">"{review.text}"</p>
                  <div>
                    <p className="font-serif italic text-aegean-blue">{review.name}</p>
                    <p className="text-[10px] text-sand-beige uppercase tracking-widest">{review.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-16 flex justify-center gap-4">
            <button className="w-12 h-12 rounded-full border border-aegean-blue/20 flex items-center justify-center hover:bg-aegean-blue hover:text-med-white transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-aegean-blue/20 flex items-center justify-center hover:bg-aegean-blue hover:text-med-white transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-24 flex flex-col items-center bg-aegean-blue text-med-white text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
        </div>
        <motion.div {...fadeIn} className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-8 italic">Ein unvergesslicher Abend erwartet Sie</h2>
          <p className="text-med-white/60 mb-12 text-lg font-light leading-relaxed">
            Sichern Sie sich Ihren Tisch im Herzen von Bremen und erleben Sie die feine griechische Küche von ihrer besten Seite.
          </p>
          <button className="bg-premium-gold text-aegean-blue px-16 py-5 uppercase text-xs tracking-[0.3em] font-bold hover:bg-med-white transition-all shadow-2xl">
            Jetzt Reservieren
          </button>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative">
        {hasValidKey ? (
          <APIProvider apiKey={API_KEY} version="weekly">
            <Map
              defaultCenter={{ lat: 53.13606, lng: 8.71107 }}
              defaultZoom={17}
              mapId="KALYMNOS_MAP_ID"
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              style={{ width: '100%', height: '100%' }}
              gestureHandling={'greedy'}
              disableDefaultUI={false}
            >
              <AdvancedMarker position={{ lat: 53.13606, lng: 8.71107 }}>
                <Pin background="#003566" glyphColor="#fff" borderColor="#c5a059" />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        ) : (
          <div className="w-full h-full relative group cursor-pointer overflow-hidden">
            {/* Elegant Background Pattern representing a map */}
            <div className="absolute inset-0 bg-[#f0f0f0] flex flex-col">
              <div className="flex-1 border-r border-[#e0e0e0] flex">
                <div className="w-1/3 border-b border-[#e0e0e0] bg-[#f8f8f8]"></div>
                <div className="flex-1 bg-med-white"></div>
              </div>
              <div className="h-1/3 border-t border-[#e0e0e0] bg-[#fdfdfd]"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10">
              <div className="max-w-md bg-white/95 backdrop-blur-sm p-10 luxury-shadow border border-premium-gold/30 scale-95 group-hover:scale-100 transition-transform duration-700">
                <div className="w-16 h-16 bg-aegean-blue/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="text-premium-gold animate-pulse" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-aegean-blue mb-4 uppercase tracking-tighter">Besuchen Sie das Kalymnos</h3>
                <p className="text-aegean-blue/60 text-sm mb-8 leading-relaxed italic">
                  Grambker Dorfstraße 2, 28719 Bremen
                </p>
                


                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Restaurant+Kalymnos+Grambker+Dorfstraße+2+Bremen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-aegean-blue text-med-white px-8 py-3 text-[10px] font-bold tracking-[0.2em] hover:bg-premium-gold transition-colors duration-500"
                >
                  IN GOOGLE MAPS ÖFFNEN
                </a>
              </div>
            </div>
            
            {/* Visual aesthetic lines to mimic a map */}
            <div className="absolute top-[40%] left-0 w-full h-[2px] bg-sand-beige/10 -rotate-2"></div>
            <div className="absolute top-0 left-[30%] w-[2px] h-full bg-sand-beige/10 rotate-1"></div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-med-white pt-24 pb-12 px-6 border-t border-sand-beige/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-aegean-blue/80">
          <div>
            <h1 className="font-serif text-3xl mb-1 italic">Kalymnos</h1>
            <p className="text-[10px] uppercase tracking-widest text-sand-beige mb-8">since 1993</p>
            <p className="text-sm italic leading-loose">
              Wir freuen uns darauf, Sie in unserem Haus begrüßen zu dürfen. Erleben Sie griechische Leidenschaft, die man schmecken kann.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full border border-sand-beige/30 flex items-center justify-center hover:text-premium-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-sand-beige/30 flex items-center justify-center hover:text-premium-gold transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-8 italic">Besuchen Sie Uns</h4>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <MapPin className="text-premium-gold shrink-0" size={18} />
                <p>Grambker Dorfstraße 2<br />28719 Bremen, Deutschland</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-premium-gold shrink-0" size={18} />
                <p>+49 (0) 421 644 04 24</p>
              </div>
              <div className="flex gap-4">
                <Utensils className="text-premium-gold shrink-0" size={18} />
                <p>info@kalymnos-bremen.de</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-8 italic">Öffnungszeiten</h4>
            <div className="space-y-4 text-sm font-light">
              <div className="flex justify-between border-b border-sand-beige/10 pb-2">
                <span>Di – Do</span>
                <span>17:00 – 23:00</span>
              </div>
              <div className="flex justify-between border-b border-sand-beige/10 pb-2">
                <span>Fr – Sa</span>
                <span>17:00 – 00:00</span>
              </div>
              <div className="flex justify-between border-b border-sand-beige/10 pb-2">
                <span>Sonntag</span>
                <span>12:00 – 22:00</span>
              </div>
              <div className="flex justify-between text-sand-beige italic">
                <span>Montag</span>
                <span>Ruhetag</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-8 italic">Newsletter</h4>
            <p className="text-xs mb-6 uppercase tracking-widest leading-loose">Erhalten Sie Einladungen zu exklusiven Weinabenden & Events.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="E-Mail Adresse" 
                className="bg-transparent border border-sand-beige/30 px-4 py-3 text-sm w-full outline-none focus:border-premium-gold transition-colors"
              />
              <button className="bg-aegean-blue text-med-white px-4 py-3 hover:bg-premium-gold transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 border-t border-sand-beige/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Kalymnos Bremen. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-premium-gold transition-colors">Impressum</a>
            <a href="#" className="hover:text-premium-gold transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-premium-gold transition-colors">Cookies</a>
          </div>
          <p className="text-sand-beige italic lowercase normal-case">Mit Leidenschaft für die hellenische Kultur entworfen</p>
        </div>
      </footer>
    </div>
  );
}
