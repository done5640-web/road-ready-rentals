import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Wallet, Zap, HeadphonesIcon, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Makina të pastra dhe të sigurta",
    description: "Çdo makinë dezinfektohet dhe kontrollohet para çdo qiraje.",
  },
  {
    icon: Wallet,
    title: "Çmime të qarta, pa tarifa të fshehura",
    description: "Ajo që shihni është ajo që paguani. Transparencë e plotë.",
  },
  {
    icon: Zap,
    title: "Rezervim i shpejtë",
    description: "Procesi më i shpejtë i rezervimit. Online ose me telefon.",
  },
  {
    icon: HeadphonesIcon,
    title: "Mbështetje miqësore",
    description: "Ekipi ynë është gjithmonë gati t'ju ndihmojë 24/7.",
  },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-6">
              Pse Ne?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Pse të na zgjidhni{" "}
              <span className="text-primary">ne?</span>
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-10">
              Ne nuk jemi thjesht një kompani qiraje makinash. Jemi partneri juaj i besuar për çdo udhëtim.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {["Flota e gjerë makinash", "Dorëzim dhe marrje fleksibël", "Siguracion i plotë", "Asistencë rrugore 24/7"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-accent-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-background text-foreground p-6 rounded-2xl card-elevated"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
