// ── Local Product Hero Images ──
import wallpaper1 from '../assets/products/wallpaper-1.png';
import wallpaper2 from '../assets/products/wallpaper-2.png';
import wallpaper3 from '../assets/products/wallpaper-3.png';
import flooring1 from '../assets/products/wooden-flooring-1.png';
import flooring2 from '../assets/products/wooden-flooring-2.png';
import flooring3 from '../assets/products/wooden-flooring-3.png';
import curtains1 from '../assets/products/curtains-1.png';
import curtains2 from '../assets/products/curtains-2.png';
import curtains3 from '../assets/products/curtains-3.png';
import blinds1 from '../assets/products/blinds-1.png';
import blinds2 from '../assets/products/blinds-2.png';
import blinds3 from '../assets/products/blinds-3.png';
import stretchCeiling1 from '../assets/products/stretch-ceiling-1.png';
import stretchCeiling2 from '../assets/products/stretch-ceiling-2.png';
import stretchCeiling3 from '../assets/products/stretch-ceiling-3.png';
import acoustic1 from '../assets/products/acoustic-panel-1.png';
import acoustic2 from '../assets/products/acoustic-panel-2.png';
import acoustic3 from '../assets/products/acoustic-panel-3.png';
import acoustic4 from '../assets/products/acoustic-panel-4.png';
import verticalGarden1 from '../assets/products/vertical-garden-1.png';
import verticalGarden2 from '../assets/products/vertical-garden-2.png';
import verticalGarden3 from '../assets/products/vertical-garden-3.png';
import cladding1 from '../assets/products/cladding-1.png';
import cladding2 from '../assets/products/cladding-2.png';
import cladding3 from '../assets/products/cladding-3.png';
import cladding4 from '../assets/products/cladding-4.png';
import cladding5 from '../assets/products/cladding-5.png';
import carpets1 from '../assets/products/carpets-1.png';
import carpets2 from '../assets/products/carpets-2.png';
import carpets3 from '../assets/products/carpets-3.png';
import pergolas1 from '../assets/products/pergolas-1.png';
import pergolas2 from '../assets/products/pergolas-2.png';
import pergolas3 from '../assets/products/pergolas-3.png';
import pergolas4 from '../assets/products/pergolas-4.png';
import sofa1 from '../assets/products/sofa-upholstery-1.png';
import sofa2 from '../assets/products/sofa-upholstery-2.png';
import sofa3 from '../assets/products/sofa-upholstery-3.png';
import sofa4 from '../assets/products/sofa-upholstery-4.png';
import sofa5 from '../assets/products/sofa-upholstery-5.png';
import sofa6 from '../assets/products/sofa-upholstery-6.png';
export const products = [
    {
        id: "wallpaper",
        title: "Wallpaper",
        image: wallpaper1,
        gallery: [
            wallpaper1,
            wallpaper2,
            wallpaper3
        ],
        description: "Exclusive customized 3D and 5D wallpapers. From royal damask patterns to modern geometrics.",
        longDescription: "Transform your walls into works of art with our curated collection of international wallcoverings. As part of our complete interior solutions, whether you prefer the subtle elegance of linen textures, the opulence of metallic damask, or the bold statement of 5D geometric designs, our wallpapers are chosen for their premium product quality-durability, washability, and colorfastness. Every selection is guided by balance-between innovation and timelessness.",
        material: "Non-Woven, Vinyl, Fabric-Backed",
        durability: "Washable, Scrubbable, Fade-Resistant",
        bestUse: "Accent Walls, Bedrooms, Dining Areas"
    },
    {
        id: "wooden-flooring",
        title: "Wooden Flooring",
        image: flooring1,
        gallery: [
            flooring1,
            flooring2,
            flooring3
        ],
        description: "Premium hardwood and laminate flooring that brings warmth and durability to your home.",
        longDescription: "Bring the timeless warmth of nature into your home with our engineered and laminate wooden flooring. Featuring high-definition wood grain textures and a robust core, our floors are designed to withstand daily wear while providing a quiet, comfortable walking surface. Every flooring choice is guided by balance-between innovation and timelessness-delivering premium product quality as part of our complete interior solutions.",
        material: "Engineered Wood, HDF Laminate",
        durability: "Scratch & Stain Resistant (AC4/AC5)",
        bestUse: "Bedrooms, Living Areas, Home Gyms"
    },
    {
        id: "stretch-ceiling",
        title: "Stretch Ceilings",
        image: stretchCeiling1,
        gallery: [
            stretchCeiling1,
            stretchCeiling2,
            stretchCeiling3
        ],
        description: "Modern, glossy, and 3D stretch ceilings that redefine luxury. Perfect for living rooms and commercial spaces.",
        longDescription: "Our premium Stretch Ceilings offer a flawless, mirror-like finish that visually expands your space. Manufactured using high-quality PVC polymer, these ceilings are not only aesthetic but also functional-offering water resistance, acoustic benefits, and the ability to hide wiring and HVAC ducts seamlessly. A key component of our complete interior solutions, each ceiling delivers premium product quality guided by balance-between innovation and timelessness.",
        material: "High-Grade PVC Polymer",
        durability: "Water & Moisture Resistant, 10+ Years",
        bestUse: "Living Rooms, Commercial Lobbies, Pools"
    },
    {
        id: "sofa-upholstery",
        title: "Sofa & Upholstery",
        image: sofa1,
        gallery: [
            sofa1,
            sofa2,
            sofa3,
            sofa4,
            sofa5,
            sofa6
        ],
        description: "High-quality upholstery fabrics updates.",
        longDescription: "Revitalize your furniture with our luxury grade upholstery fabrics. We offer a vast range of textures including velvets, chenilles, jacquards, and performance leathers. Designed for high-traffic usage, our fabrics blend softness with extreme durability.",
        material: "Velvet, Chenille, Jacquard, Leather",
        durability: "High Martindale Cycle (>50,000)",
        bestUse: "Sofas, Headboards, Accent Chairs"
    },
    {
        id: "decking-cladding",
        title: "Decking & Cladding",
        image: cladding1,
        gallery: [
            cladding1,
            cladding2,
            cladding3,
            cladding4,
            cladding5
        ],
        description: "Exterior and interior cladding options.",
        longDescription: "Enhance your facade or interior feature walls with our durable Cladding solutions. From WPC (Wood Plastic Composite) to HPL (High Pressure Laminate), our cladding offers the look of natural wood or stone with zero maintenance issues like termite or rot.",
        material: "WPC, HPL, Natural Stone",
        durability: "Weatherproof, Termite Proof",
        bestUse: "Facades, Balconies, Feature Walls"
    },
    {
        id: "curtains",
        title: "Curtains",
        image: curtains1,
        gallery: [
            curtains1,
            curtains2,
            curtains3
        ],
        description: "Beautiful curtains to enhance your windows.",
        longDescription: "Dress your windows in elegance with our bespoke curtaining solutions. We offer thousands of fabric choices from sheers to heavy velvets. Our team handles everything from measurement to stitching with various heading styles like Eyelet, Pleated, or Ripple Fold-ensuring a seamless customer experience and premium product quality at every step.",
        material: "Cotton, Linen, Silk, Velvet",
        durability: "Fade Resistant Lining Available",
        bestUse: "Living Rooms, Bedrooms, Large Windows"
    },
    {
        id: "blinds",
        title: "Blinds",
        image: blinds1,
        gallery: [
            blinds1,
            blinds2,
            blinds3
        ],
        description: "Zebra, Roller, and Roman blinds for perfect light control.",
        longDescription: "Experience precise light control and privacy with our automated and manual blinds. From the dual-layer versatility of Zebra blinds to the classic elegance of Roman shades, our window treatments are custom-manufactured to fit your windows perfectly. Available with Somfy motorization for smart home integration-delivering complete interior solutions with premium product quality.",
        material: "Polyester, Linen, Blackout Fabrics",
        durability: "UV Resistant, Dust Repellent",
        bestUse: "Home Offices, Bedrooms, Conference Rooms"
    },
    {
        id: "acoustic-panels",
        title: "Acoustic Panels",
        image: acoustic1,
        gallery: [
            acoustic1,
            acoustic2,
            acoustic3,
            acoustic4
        ],
        description: "Soundproofing acoustic panels for studios and homes.",
        longDescription: "Achieve auditory perfection with our designer Acoustic Panels. Ideal for home theaters, conference rooms, and recording studios, these panels absorb reverberation and noise without compromising on style. Available in hex grids, slats, and custom shapes-our acoustic solutions showcase premium product quality guided by balance-between innovation and timelessness.",
        material: "Polyester Fiber, Wood Slats",
        durability: "Impact Resistant, Fire Retardant",
        bestUse: "Home Theaters, Recording Studios, Offices"
    },
    {
        id: "pergolas-gazebos",
        title: "Pergolas & Gazebos",
        image: pergolas1,
        gallery: [
            pergolas1,
            pergolas2,
            pergolas3,
            pergolas4
        ],
        description: "Enhance your outdoor space with pergolas.",
        longDescription: "Create a luxurious outdoor retreat with our automated Aluminium Pergolas. Featuring localized bioclimatic louvers, you can control sun and shade with the touch of a button. Integrated rain sensors and LED lighting make your patio usable 24/7, year-round.",
        material: "Powder Coated Aluminium",
        durability: "Rust Proof, Weather Resistant",
        bestUse: "Gardens, Rooftops, Patios"
    },
    {
        id: "wall-to-wall-carpets",
        title: "Carpet & Rugs",
        image: carpets1,
        gallery: [
            carpets1,
            carpets2,
            carpets3
        ],
        description: "Seamless luxury carpeting for expansive comfort.",
        longDescription: "Step onto a cloud of luxury with our premium wall-to-wall carpeting. Sourced from the finest mills, these carpets offer superior softness, stain resistance, and acoustic dampening properties. Perfect for creating a cohesive, cozy atmosphere in master bedrooms and luxury hotel suites.",
        material: "Wool, Nylon, Polypropylene Blends",
        durability: "Stain Resistant, Crush Resistant",
        bestUse: "Master Bedrooms, Hotel Corridors, Private Offices"
    },
    {
        id: "vertical-garden",
        title: "Vertical Garden",
        image: verticalGarden1,
        gallery: [
            verticalGarden1,
            verticalGarden2,
            verticalGarden3
        ],
        description: "Lush artificial vertical gardens for vibrant interiors.",
        longDescription: "Transform your urban spaces with our bespoke vertical gardens, blending nature with architectural design for a sustainable, lush environment. Our high-fidelity artificial foliage looks incredibly realistic and requires zero watering or maintenance, making it perfect for indoor feature walls or shaded balconies.",
        material: "UV Stabilized Polyethylene",
        durability: "UV Resistant, Maintenance Free",
        bestUse: "Lobbies, Balconies, Indoor Feature Walls"
    }
];
