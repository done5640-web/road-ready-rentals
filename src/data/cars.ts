import carSuv from "@/assets/car-suv.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carCompact from "@/assets/car-compact.jpg";
import carConvertible from "@/assets/car-convertible.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryFleet from "@/assets/gallery-fleet.jpg";
import galleryHandover from "@/assets/gallery-handover.jpg";
import heroImage from "@/assets/hero-car.jpg";

export interface Car {
  id: number;
  name: string;
  category: string;
  images: string[];
  seats: string;
  fuel: string;
  transmission: string;
  price: string;
  description: string;
  features: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    name: "SUV Premium",
    category: "Familje & Aventura",
    images: [carSuv, galleryFleet, galleryInterior, galleryHandover],
    seats: "5-7",
    fuel: "Diesel",
    transmission: "Automatik",
    price: "€45/ditë",
    description:
      "SUV i fuqishëm dhe i rehatshëm, perfekt për familje ose aventura jashtë qytetit. Me hapësirë të bollshme dhe komoditet premium.",
    features: [
      "Klimë automatike me dy zona",
      "Kamera parkimi 360°",
      "Sistem navigimi GPS",
      "Sediljet e ngrohta",
      "Hapësirë e madhe bagazhi",
      "Bluetooth & USB",
    ],
  },
  {
    id: 2,
    name: "Sedan Luksoz",
    category: "Biznes & Komoditet",
    images: [carSedan, galleryInterior, galleryHandover, heroImage],
    seats: "5",
    fuel: "Benzinë",
    transmission: "Automatik",
    price: "€55/ditë",
    description:
      "Sedan elegante për udhëtime biznesi ose ngjarje speciale. Dizajn modern me teknologji të avancuar.",
    features: [
      "Enterier lëkure",
      "Sistem audio premium",
      "Asistent parkimi",
      "Ndriçim ambiental LED",
      "Kontroll kruiz adaptiv",
      "Ekran me prekje",
    ],
  },
  {
    id: 3,
    name: "Compact City",
    category: "Qytet & Ekonomik",
    images: [carCompact, galleryFleet, galleryHandover, galleryInterior],
    seats: "5",
    fuel: "Benzinë",
    transmission: "Manual",
    price: "€25/ditë",
    description:
      "Makina ideale për qytetin. Ekonomike në karburant dhe e lehtë për tu parkuar kudo.",
    features: [
      "Konsum i ulët karburanti",
      "Kompakte dhe e shkathët",
      "Klimë manuale",
      "Radio Bluetooth",
      "Sensor parkimi",
      "ABS & Airbag",
    ],
  },
  {
    id: 4,
    name: "Convertible Sport",
    category: "Aventura & Stil",
    images: [carConvertible, heroImage, galleryInterior, galleryFleet],
    seats: "2",
    fuel: "Benzinë",
    transmission: "Automatik",
    price: "€75/ditë",
    description:
      "Përjeto lirinë me kabrioletën tonë sportive. Perfekte për rivierën shqiptare dhe udhëtime të paharrueshme.",
    features: [
      "Çati e hapur automatike",
      "Motor sportiv i fuqishëm",
      "Sistem zhurmë sportive",
      "Sediljet sportive",
      "Sistem audio Bose",
      "Kontroll lançimi",
    ],
  },
];
