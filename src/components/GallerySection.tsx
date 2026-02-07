import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import carSuv from "@/assets/car-suv.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carCompact from "@/assets/car-compact.jpg";
import carConvertible from "@/assets/car-convertible.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryFleet from "@/assets/gallery-fleet.jpg";
import galleryHandover from "@/assets/gallery-handover.jpg";
import heroImage from "@/assets/hero-car.jpg";

const galleryImages = [
  { src: heroImage, alt: "Premium red sports car on road" },
  { src: galleryFleet, alt: "Our car fleet" },
  { src: galleryInterior, alt: "Premium car interior" },
  { src: carSedan, alt: "Luxury sedan" },
  { src: carConvertible, alt: "Convertible sports car" },
  { src: galleryHandover, alt: "Car keys handover" },
  { src: carCompact, alt: "Compact city car" },
  { src: carSuv, alt: "SUV Premium" },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-background">
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
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Çdo makinë flet{" "}
            <span className="text-primary">vetë.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Shiko cilësinë, pastërtinë dhe stilin e makinave tona.
          </p>
        </motion.div>

        {/* Gallery Grid - symmetrical 4 columns, 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/3]"
              onClick={() => setLightboxImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
              aria-label="Mbyll"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
