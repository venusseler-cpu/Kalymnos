import { motion } from "motion/react";
import { 
  ChevronLeft, 
  Leaf, 
  Info,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook
} from "lucide-react";
import { Link } from "react-router-dom";

const MENU_SECTIONS = [
  {
    title: "Specials",
    subtitle: "Unsere aktuellen Empfehlungen",
    categories: [
      {
        name: "Vorspeise",
        items: [
          { id: 90, name: "Trio", description: "Die Klassiker unter den griechischen Dips. Tzatziki, Auberginencreme und Pikante Fetacreme. Dazu gegrilltes Pita Brot", price: "7,50", veggie: true }
        ]
      },
      {
        name: "Hauptgang",
        items: [
          { id: 91, name: "Kritharaki Kotopoulo", description: "Kritharaki mit Tomatensoße, Hähnchenfilet und geriebenen Schafskäse. Dazu servieren wir einen gemischten Salat", price: "16,50" },
          { id: "91v", name: "Kritharaki Vegetarisch", description: "Kritharaki mit Tomatensoße und geriebenen Schafskäse (ohne Hähnchen). Dazu servieren wir einen gemischten Salat", price: "13,50", veggie: true },
          { id: 92, name: "Giros Bowl", description: "Giros, Pommes, geriebener Gouda, Cremige Cocktail-Greek Soße, Zwiebeln, Tomaten und Tzatziki", price: "16,50" },
          { id: 93, name: "Bifteki Kolonaki", description: "1 großes Bifteki gefüllt mit Cheddar, würzige Cheddar Soße, Pommes, Käsebällchen und Tzatziki. Dazu servieren wir einen gemischten Salat", price: "25,00" },
          { id: 94, name: "Grill Mix Piräus", description: "Giros, 2 griechische Souvlaki, Cremige Cocktail-Greek Soße, Tzatziki und Pommes mit geriebenen Schafskäse. Dazu servieren wir einen gemischten Salat", price: "25,00" },
          { id: 95, name: "Grill Mix Venizelos", description: "Giros, 2 Lammkoteletts, 2 griechische Souvlaki, Pommes, Tzatziki und Pita Brot. Dazu servieren wir einen gemischten Salat", price: "29,00" }
        ]
      }
    ]
  },
  {
    title: "Vorspeisen",
    items: [
      { id: 1, name: "Tzatziki", description: "Joghurt mit Gurken und Knoblauch", price: "5,40", veggie: true },
      { id: 2, name: "Pita Aioli", description: "Gegrilltes Pita Brot mit Aioli Creme", price: "4,00", veggie: true },
      { id: 3, name: "Tirokroketes", description: "Frittierte Käsebällchen mit einer pikanten Tomatensoße", price: "6,80", veggie: true },
      { id: 4, name: "Elies", description: "Chalkidiki und Kalamata Oliven", price: "5,20", veggie: true },
      { id: 5, name: "Melitzanosalata", description: "Auberginencreme mit Knoblauch, Chili und dazu gegrilltes Pita Brot", price: "9,00", veggie: true },
      { id: 6, name: "Ktipiti", description: "Pikante Fetacreme", price: "8,00", veggie: true },
      { id: 7, name: "Panzari", description: "Klein geschnittene Rote Bete in einer hausgemachten Knoblauchmayonnaise", price: "8,00", veggie: true },
      { id: 8, name: "Bougourdi", description: "Ein kleiner Auflauf mit Feta, Chili, Tomaten, Zwiebeln, Peperoni, Paprika und mit Gouda Käse überbacken", price: "9,50", veggie: true },
      { id: 9, name: "Vorspeisenteller Leros", description: "Mit Tzatziki, Dolmades, Panzari, Ktipiti, Tomaten, Feta und Oliven", price: "14,50" },
      { id: 10, name: "Dolmades", description: "Warme gefüllte Weinblätter mit Reis und Hackfleisch, dazu servieren wir Tzatziki", price: "8,50" },
      { id: 11, name: "Saganaki Meli", description: "Gebackener Fetakäse in einer Sesampanade und mit Honig", price: "8,50", veggie: true },
      { id: 12, name: "Gigantes", description: "Riesenbohnen aus dem Backofen mit Tomatensoße und geriebenen Schafskäse", price: "8,50", veggie: true },
      { id: 13, name: "Tiri Karamela", description: "Schafskäse aus dem Ofen mit einer Honig-Balsamico Creme, Zwiebeln und geriebenen Walnüssen", price: "9,50", veggie: true },
      { id: 14, name: "Saganaki", description: "Gebackener Fetakäse mit einer knusprigen Panade, dazu servieren wir Tzatziki", price: "8,00", veggie: true },
      { id: 15, name: "Vorspeisenteller Paros", description: "Gebratene Hackbällchen, Auberginen, Zucchini, Saganaki und Tzatziki", price: "14,50" },
      { id: 16, name: "Midia", description: "Miesmuscheln in einer Tomatensoße aus dem Backofen mit Olivenöl, Knoblauch und geriebenen Schafskäse", price: "12,00" },
      { id: 17, name: "Peperonis vom Grill", description: "Mit Öl und Knoblauch", price: "6,50", veggie: true },
      { id: 18, name: "Feta Fourno", description: "Fetakäse aus dem Backofen mit Öl und Knoblauch", price: "8,50", veggie: true },
      { id: 19, name: "Florinis", description: "Rote Paprikaschoten gefüllt mit Fetakäse aus dem Backofen, dazu Sesam und Balsamico Creme", price: "9,00", veggie: true },
      { id: 20, name: "Kolokithakia", description: "Knusprig gebratene Zucchini und dazu Tzatziki", price: "8,00", veggie: true },
      { id: 21, name: "Melitzana Fourno", description: "Geschmorte Auberginen aus dem Ofen mit Knoblauch, Cherrytomaten, Tomatensoße und frisch geriebenen Feta", price: "9,50", veggie: true }
    ]
  },
  {
    title: "Salate",
    items: [
      { id: 22, name: "Hausgemachter Krautsalat", price: "4,80", veggie: true },
      { id: 23, name: "Salata Thissio", description: "Grüner Salat mit Minze, Basilikum, Cherrytomaten, Pinienkerne, Zwiebeln, geriebener Parmesan und Balsamico Dressing", price: "9,00", veggie: true },
      { id: 24, name: "Choriatiki", description: "Tomaten, Gurken, Paprika, Zwiebeln, Oliven und Fetakäse", price: "12,00", veggie: true },
      { id: 25, name: "Salata Kifisia", description: "Grüner Salat mit Tomaten, Zwiebeln, Croutons, Parmesandressing, Schafskäse und Hähnchenfilet", price: "13,00" },
      { id: 26, name: "Salata Kalymnos", description: "Grüner Salat mit Tomaten, Gurken, Zwiebeln, Ei, Thunfisch und dazu Joghurt Kräuterdressing", price: "13,00" }
    ]
  },
  {
    title: "Vom Grill",
    items: [
      { id: 29, name: "Giros", description: "Mit gemischtem Salat, Tzatziki und Tomatenreis", price: "15,00" },
      { id: 30, name: "Giros mit Pita", description: "Giros mit gemischtem Salat, Pita Brot und dazu Tzatziki", price: "16,00" },
      { id: 31, name: "2 Souvlaki Spieße", description: "Mit gemischtem Salat, Tzatziki und Tomatenreis", price: "16,50" },
      { id: 32, name: "Rinderleber", description: "Mit gemischtem Salat, Tomatenreis und Tzatziki", price: "16,00" },
      { id: 33, name: "4 Bifteki", description: "Mit gemischtem Salat, Tzatziki und Tomatenreis", price: "16,00" },
      { id: 34, name: "Putenbrustfilet", description: "Mit Pommes, gemischtem Salat und Tzatziki", price: "16,50" },
      { id: 35, name: "Hähnchenbrustfilet", description: "Mit Pommes, gemischtem Salat und Tzatziki", price: "16,50" },
      { id: 36, name: "Argos-Platte", description: "1 Putenfilet, Giros, Tomatenreis, Tzatziki und ein gemischter Salat", price: "17,00" },
      { id: 37, name: "Atlas-Platte", description: "1 Souvlaki, 1 Schweinefilet, 1 Rinderleber, 1 Bifteki, 1 Lammkotelett, Giros, Tomatenreis, Tzatziki und ein gemischter Salat", price: "27,00" },
      { id: 38, name: "Helios-Platte", description: "1 Putenfilet, 1 Souvlaki, Tomatenreis, Tzatziki und ein gemischter Salat", price: "17,50" },
      { id: 39, name: "Larissa-Platte", description: "Giros, 2 Rinderleber, Tomatenreis, Tzatziki und ein gemischter Salat", price: "18,50" },
      { id: 40, name: "Athen-Platte", description: "1 Souvlaki, 2 Bifteki, Giros, Tomatenreis, Tzatziki und ein gemischter Salat", price: "21,00" },
      { id: 41, name: "Meteora-Platte", description: "Giros, 1 Bifteki, 1 Rinderleber, Tomatenreis, gemischter Salat und Tzatziki", price: "18,50" },
      { id: 42, name: "Zeus-Platte", description: "1 Souvlaki, Giros, Tomatenreis, Tzatziki und ein gemischter Salat", price: "17,00" },
      { id: 43, name: "Kalymnos-Platte", description: "1 Schweinesteak, 1 Rinderleber, 1 Schweinefilet, 1 Lammkotelett, Tomatenreis, gemischter Salat und Tzatziki", price: "20,00" },
      { id: 44, name: "Midas-Platte", description: "1 Schweinesteak, 1 Souvlaki, Giros, Tomatenreis, gemischter Salat und Tzatziki", price: "22,00" },
      { id: 45, name: "Trikala-Platte (2 Pers.)", description: "Giros, 2 Bifteki, 2 Schweinesteak, Tzatziki, Tomatenreis und ein großer gemischter Salat", price: "43,00" },
      { id: 46, name: "Wein-Platte (2 Pers.)", description: "2 Bifteki, 2 Souvlaki, 2 Rinderleber, Giros, Tomatenreis, Tzatziki und ein großer gemischter Salat. Inkl. 0,75l Wein", price: "56,00" }
    ]
  },
  {
    title: "Vom Lamm",
    items: [
      { id: 48, name: "Paidakia", description: "5 Lammkoteletts mit Tomatenreis, dazu ein gemischter Salat und Tzatziki", price: "24,00" }
    ]
  },
  {
    title: "Fleischgerichte",
    items: [
      { id: 49, name: "Schweineschnitzel", description: "Knusprig paniert, mit Pommes, Remoulade und gemischtem Salat", price: "14,00" },
      { id: 50, name: "Hähnchenschnitzel", description: "Knusprig paniert, mit Kroketten, Remoulade und gemischtem Salat", price: "14,50" },
      { id: 51, name: "4 Souvlaki original", description: "Griechische Art am Holzspieß, mit Pommes, Tzatziki, Senf und gemischtem Salat", price: "21,00" },
      { id: 52, name: "Giros Pfanne", description: "In Sahnesoße mit Grana Padano, dazu Tomatenreis und gemischter Salat", price: "20,00" },
      { id: 53, name: "4 Schweineröllchen", description: "Gefüllt mit Fetakäse, Paprika, Peperoni und Tomaten, dazu Pommes, Tzatziki und gemischter Salat", price: "21,00" },
      { id: 54, name: "2 Spezialbifteki", description: "Gefüllt mit Fetakäse, Paprika, Peperoni, Tomaten in Tomatensoße, dazu Pommes und gemischter Salat", price: "23,00" },
      { id: 55, name: "1 großes Bifteki", description: "Gefüllt mit Fetakäse, dazu Tomatenreis, Tzatziki und gemischter Salat", price: "20,00" }
    ]
  },
  {
    title: "Überbacken (Metaxasoße)",
    items: [
      { id: 56, name: "Giros überbacken", price: "20,00" },
      { id: 57, name: "4 Bifteki überbacken", price: "20,00" },
      { id: 58, name: "Souvlaki überbacken", price: "21,00" },
      { id: 59, name: "Hähnchenbrustfilet überbacken", price: "20,00" },
      { id: 60, name: "Putenbrustfilet überbacken", price: "20,00" },
      { id: 61, name: "4 Schweineröllchen überbacken", price: "24,00" },
      { id: 62, name: "Kritharaki überbacken", description: "Mit Gouda Käse und Metaxasoße, dazu gemischter Salat", price: "16,00", veggie: true }
    ]
  },
  {
    title: "Aus dem Backofen",
    subtitle: "Serviert mit Krautsalat",
    items: [
      { id: 63, name: "Patata", description: "Kartoffelauflauf mit Champignons, Sahne und Gouda Käse überbacken", price: "15,00", veggie: true },
      { id: 64, name: "Spaghetti mit Hackfleisch", description: "Knoblauch, Tomatensoße und mit Gouda Käse überbacken", price: "15,00" },
      { id: 65, name: "Kritharaki mit Hackfleisch", description: "Knoblauch, Tomatensoße und mit Gouda Käse überbacken", price: "15,00" }
    ]
  },
  {
    title: "Fischgerichte",
    items: [
      { id: 66, name: "Garides", description: "7 Scampis mit Knoblauch-Dip, Cocktail-Dip und dazu ein gemischter Salat", price: "23,00" },
      { id: 67, name: "Calamaris", description: "Mit Tomatenreis, dazu ein gemischter Salat und Aioli", price: "21,00" },
      { id: 68, name: "Calamaris & Giros", description: "Mit Tomatenreis, dazu ein gemischter Salat und Tzatziki", price: "19,50" },
      { id: 69, name: "Calamaris & Souvlaki", description: "Mit Tomatenreis, dazu ein gemischter Salat und Tzatziki", price: "20,00" }
    ]
  },
  {
    title: "Dessert",
    items: [
      { id: 100, name: "Thira", description: "Griechischer Joghurt mit Honig und Walnüssen", price: "5,50" },
      { id: 101, name: "Limani", description: "Griechischer Joghurt mit Honig, Walnüssen, Blaubeeren und Weiße Raspelschokolade", price: "6,60" },
      { id: 102, name: "Oniro", description: "Verschiedene Eissorten mit Sahne, Schokoladensoße, Karamellsoße, gemahlene Haselnüsse, Brownies und Oreo Cookies", price: "7,40" },
      { id: 103, name: "Phidias", description: "Eine Kugel Vanilleeis mit einem Espresso übergossen, Karamellsoße, Kakao und Keksstückchen", price: "5,10" },
      { id: "eis", name: "Kugel Eis", description: "Vanille, Schokolade oder Erdbeere", price: "1,80" }
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-med-white text-aegean-blue selection:bg-sand-beige selection:text-aegean-blue">
      {/* Navigation (simplified for menu) */}
      <nav className="fixed w-full z-50 bg-med-white/95 backdrop-blur-md py-6 border-b border-premium-gold/20">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-aegean-blue hover:text-premium-gold transition-colors duration-300">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Zur Startseite</span>
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="font-serif text-2xl tracking-tighter leading-none font-bold">Kalymnos</h1>
            <span className="text-[8px] mt-1 opacity-60 tracking-widest font-bold">THE KITCHEN</span>
          </div>
          <div className="w-24 hidden md:block" /> {/* Spacer */}
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <header className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block border border-aegean-blue/30 px-6 py-2 mb-6"
          >
            <p className="text-aegean-blue text-[10px] uppercase tracking-[0.4em] font-bold">SPEISEKARTE</p>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-aegean-blue mb-6 tracking-tight"
          >
            Authentisch Griechisch
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center gap-4 text-aegean-blue/40"
          >
            <div className="h-px w-8 bg-premium-gold/30"></div>
            <p className="italic text-lg font-serif">A tradition of excellence since 1993</p>
            <div className="h-px w-8 bg-premium-gold/30"></div>
          </motion.div>
        </header>

        {/* Menu Grid */}
        <div className="space-y-32">
          {MENU_SECTIONS.map((section, idx) => (
            <motion.section 
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-aegean-blue mb-4">{section.title}</h2>
                {section.subtitle && (
                  <p className="text-aegean-blue text-xs uppercase tracking-[0.2em] font-bold italic">{section.subtitle}</p>
                )}
                <div className="w-12 h-px bg-premium-gold/30 mt-6" />
              </div>

              {section.categories ? (
                <div className="space-y-16">
                  {section.categories.map(cat => (
                    <div key={cat.name}>
                      <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-olive-green mb-10 border-b border-olive-green/10 pb-2 inline-block">{cat.name}</h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                        {cat.items.map(item => (
                          <MenuItem key={item.id} {...item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                  {section.items?.map(item => (
                    <MenuItem key={item.id} {...item} />
                  ))}
                </div>
              )}
            </motion.section>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-32 p-12 bg-aegean-blue text-med-white sophisticated-border luxury-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Info size={120} />
          </div>
          <h3 className="font-serif text-2xl mb-6 font-bold italic">Hinweise</h3>
          <div className="space-y-6 text-sm text-med-white/70 font-light leading-relaxed">
            <p>Alle Preise in € inkl. MwSt. Bei Fragen zu Allergenen wenden Sie sich bitte an unser Personal.</p>
            <div className="grid md:grid-cols-2 gap-8 text-[11px] uppercase tracking-widest pt-6 border-t border-med-white/10">
              <div className="space-y-2">
                <p><span className="text-premium-gold font-bold">Extras:</span> Tomaten oder Bauernsalat statt Beilage: +2,50€</p>
                <p>Pommes statt Reis: +2,50€</p>
              </div>
              <div className="space-y-2">
                <p>Kroketten statt Reis: +3,00€</p>
                <p>Käsebällchen statt Reis: +3,00€</p>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <Leaf size={16} className="text-olive-green" />
              <span className="text-[10px] tracking-widest font-bold">V = Vegetarisch</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-med-white pt-24 pb-12 px-6 border-t border-premium-gold/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-aegean-blue/80">
          <div>
            <h1 className="font-serif text-3xl mb-1 italic">Kalymnos</h1>
            <p className="text-[10px] uppercase tracking-widest text-sand-beige mb-8">since 1993</p>
            <p className="text-sm italic leading-loose">
              Erleben Sie griechische Leidenschaft, die man schmecken kann.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full border border-sand-beige/30 flex items-center justify-center hover:text-premium-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-sand-beige/30 flex items-center justify-center hover:text-premium-gold transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-8 italic">Kontakt</h4>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <MapPin className="text-premium-gold shrink-0" size={18} />
                <p>Am Wall 123-125<br />28195 Bremen</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-premium-gold shrink-0" size={18} />
                <p>+49 (0) 421 123 456 78</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-8 italic">Öffnungszeiten</h4>
            <div className="space-y-2 text-xs font-light">
              <p>Di – Do: 17:00 – 23:00</p>
              <p>Fr – Sa: 17:00 – 00:00</p>
              <p>Sonntag: 12:00 – 22:00</p>
              <p className="text-sand-beige italic">Montag: Ruhetag</p>
            </div>
          </div>

          <div className="text-right flex flex-col items-end">
            <button className="bg-aegean-blue text-med-white px-10 py-4 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-premium-gold transition-all shadow-xl">
              RESERVIEREN
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuItem({ id, name, description, price, veggie }: any) {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-2 group-hover:-translate-y-0.5 transition-transform duration-300">
        <h4 className="text-lg font-serif font-bold text-aegean-blue flex items-center gap-2">
          <span className="text-aegean-blue/40 text-xs font-sans tracking-tighter">#{id}</span>
          {name}
          {veggie && <Leaf size={14} className="text-olive-green" />}
        </h4>
        <div className="flex-1 mx-4 border-b border-dotted border-aegean-blue/30" />
        <span className="text-aegean-blue font-serif font-bold">{price} €</span>
      </div>
      {description && (
        <p className="text-aegean-blue/50 text-sm font-light italic leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
