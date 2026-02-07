import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Users, Fuel, Settings, ChevronLeft, ChevronRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cars } from "@/data/cars";

export const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Preload all images on mount for zero-glitch transitions
  useEffect(() => {
    if (car) {
      car.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [car]);

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">
            Makina nuk u gjet
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Kthehu në faqen kryesore
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const goToImage = (index: number) => {
    setDirection(index > currentImage ? 1 : -1);
    setCurrentImage(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 lg:pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/makinat"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Kthehu te Makinat
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Slider */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-muted">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.img
                      key={currentImage}
                      src={car.images[currentImage]}
                      alt={`${car.name} - foto ${currentImage + 1}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "tween", duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.3 },
                      }}
                      className="absolute inset-0 w-full h-full object-cover will-change-transform"
                      draggable={false}
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                    aria-label="Foto e mëparshme"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                    aria-label="Foto e radhës"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 bg-black/60 text-white text-sm rounded-full">
                    {currentImage + 1} / {car.images.length}
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4">
                {car.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`relative flex-1 aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImage
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${car.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Car Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {car.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                {car.name}
              </h1>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {car.description}
              </p>

              {/* Specs */}
              <div className="flex flex-wrap items-center gap-6 mb-8 p-4 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Ulëse</p>
                    <p className="font-semibold text-foreground">{car.seats}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Karburant</p>
                    <p className="font-semibold text-foreground">{car.fuel}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Transmision</p>
                    <p className="font-semibold text-foreground">{car.transmission}</p>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-1">Çmimi duke filluar nga</p>
                <p className="text-4xl font-bold text-foreground">{car.price}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Karakteristikat</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {car.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                  asChild
                >
                  <a href="tel:+355123456789">
                    <Phone className="mr-2 h-5 w-5" />
                    Rezervo me Telefon
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1"
                  asChild
                >
                  <a href="https://wa.me/355123456789" target="_blank" rel="noopener noreferrer">
                    Rezervo me WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetail;
