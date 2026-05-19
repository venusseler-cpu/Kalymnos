import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, GlassWater, Sparkles, CheckCircle2 } from "lucide-react";

export default function EndlessDrinkPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-med-white font-sans text-aegean-blue selection:bg-premium-gold/30">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-sand-beige/20">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-premium-gold transition-colors"
        >
          <ArrowLeft size={14} />
          Zurück zur Startseite
        </Link>
        <div className="flex flex-col items-center">
          <span className="font-serif text-xl font-bold tracking-tighter">Kalymnos</span>
          <span className="text-[7px] uppercase tracking-[0.3em] opacity-60">FEINE GRIECHISCHE KÜCHE</span>
        </div>
        <div className="w-24 hidden md:block" />
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-aegean-blue/5 rounded-full mb-8 border border-premium-gold/20"
          >
            <GlassWater className="text-premium-gold" size={32} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-aegean-blue mb-6 tracking-tighter"
          >
            Ihr Gratis-Ouzo <br /> wartet!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-aegean-blue/60 text-lg md:text-xl font-light italic max-w-2xl mx-auto"
          >
            Als Dankeschön für Ihren Besuch schenken wir Ihnen einen Ouzo. <br />
            Registrieren Sie sich und genießen Sie!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Benefits Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >


            <div className="text-center p-6 border border-dotted border-sand-beige/40">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-premium-gold mb-2">Scannen & Genießen</p>
              <p className="text-xs text-aegean-blue/50 italic leading-relaxed">
                Dieses Angebot gilt nur für Gäste im Restaurant Kalymnos. <br />
                Bitte zeigen Sie die Bestätigung Ihrem Kellner. <br />
                Gültig für heute Abend.
              </p>
            </div>
          </motion.div>

          {/* Integration Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-aegean-blue p-1 luxury-shadow rounded-sm h-full flex flex-col min-h-[800px]"
          >
            <div className="bg-white flex-1 flex flex-col">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/wq7S1XgxaGF7OZ6zOufg"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
                id="inline-wq7S1XgxaGF7OZ6zOufg" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="ouzo"
                data-height="775"
                data-layout-iframe-id="inline-wq7S1XgxaGF7OZ6zOufg"
                data-form-id="wq7S1XgxaGF7OZ6zOufg"
                title="ouzo"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Background Decor */}
      <div className="fixed bottom-0 right-0 w-64 h-64 bg-premium-gold/5 blur-[100px] pointer-events-none -z-10" />
      <div className="fixed top-0 left-0 w-64 h-64 bg-aegean-blue/5 blur-[100px] pointer-events-none -z-10" />
    </div>
  );
}
