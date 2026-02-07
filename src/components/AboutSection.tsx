import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Heart, Award } from "lucide-react";
import handoverImage from "@/assets/gallery-handover.jpg";

const features = [
  {
    icon: Shield,
    title: "Siguri e Plotë",
    description: "Makina të sigurta dhe të mirëmbajtura",
  },
  {
    icon: Clock,
    title: "Shërbim 24/7",
    description: "Mbështetje e vazhdueshme çdo orë",
  },
  {
    icon: Heart,
    title: "Kujdes i Veçantë",
    description: "Vëmendje e veçantë për çdo klient",
  },
  {
    icon: Award,
    title: "Cilësi Premium",
    description: "Vetëm makinat më të mira",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="rreth-nesh" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden card-elevated">
              <img
                src={handoverImage}
                alt="Car keys handover moment"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Rreth Nesh
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Besoni në eksperiencën{" "}
              <span className="text-primary">tonë.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Te Rental Car Ago, besojmë se marrja me qira e një makine duhet të jetë e thjeshtë, e shpejtë dhe e këndshme.
            </p>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              Ne ofrojmë makina të mirëmbajtura, çmime transparente dhe shërbim miqësor për çdo klient. Misioni ynë është t'ju ofrojmë lirinë për të udhëtuar pa stres.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
