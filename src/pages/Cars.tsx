import { Navbar } from "@/components/Navbar";
import { CarsSection } from "@/components/CarsSection";
import { Footer } from "@/components/Footer";

const Cars = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <CarsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Cars;
