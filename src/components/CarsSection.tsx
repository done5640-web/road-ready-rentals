import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Fuel, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cars } from "@/data/cars";

const CarCard = ({ car, index }: { car: typeof cars[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden card-elevated"
    >
      {/* Image */}
      <Link to={`/makina/${car.id}`} className="block relative h-56 overflow-hidden">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {car.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link to={`/makina/${car.id}`}>
          <h3 className="text-xl font-display font-bold text-foreground mb-4 hover:text-primary transition-colors">
            {car.name}
          </h3>
        </Link>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            <span>{car.seats}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="h-4 w-4" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-foreground">{car.price}</span>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group/btn" asChild>
            <Link to={`/makina/${car.id}`}>
              Rezervo
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const CarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="makinat" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Makinat Tona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Zgjidh makinën për{" "}
            <span className="text-primary">udhëtimin tënd</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Qytet, biznes apo aventura – kemi makinën e duhur për ty.
          </p>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
