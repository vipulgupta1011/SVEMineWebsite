import { motion } from 'framer-motion';
import Adorn from "../assets/PartnerCompanies/Adorn.webp";
import AsianPaints from "../assets/PartnerCompanies/AsianPaints.webp";
import Atmosphere from "../assets/PartnerCompanies/Atmosphere.webp";
import Casamance from "../assets/PartnerCompanies/Casamance.webp";
import Ddecor from "../assets/PartnerCompanies/Ddecor.webp";
import DesignersGuild from "../assets/PartnerCompanies/Designers Guild.webp";
import Divine from "../assets/PartnerCompanies/Divine.webp";
import DuPoint from "../assets/PartnerCompanies/DuPoint.webp";
import Excel from "../assets/PartnerCompanies/Excel.webp";
import GMF from "../assets/PartnerCompanies/GMF.webp";
import Greenpanel from "../assets/PartnerCompanies/Greenpanel.webp";
import Greenply from "../assets/PartnerCompanies/Greenply.webp";
import HiMacs from "../assets/PartnerCompanies/Hi-macs.webp";
import Kazage from "../assets/PartnerCompanies/Kazage.webp";
import Livin from "../assets/PartnerCompanies/Livin.webp";
import Marburger from "../assets/PartnerCompanies/Marburger.webp";
import Marvel from "../assets/PartnerCompanies/marvel.webp";
import Merino from "../assets/PartnerCompanies/Merino.webp";
import Mikasa from "../assets/PartnerCompanies/Mikasa.webp";
import NBT from "../assets/PartnerCompanies/NBT.webp";
import Newmat from "../assets/PartnerCompanies/Newmat.webp";
import Nilaya from "../assets/PartnerCompanies/Nilaya.webp";
import RugRepublic from "../assets/PartnerCompanies/RugRepublic.webp";
import Rumors from "../assets/PartnerCompanies/Rumors.webp";
import SaraswatiRugs from "../assets/PartnerCompanies/SaraswatiRugs.webp";
import Somfy from "../assets/PartnerCompanies/Somfy.webp";
import Tesa from "../assets/PartnerCompanies/Tesa.webp";
import Timex from "../assets/PartnerCompanies/Timex.webp";
import Toso from "../assets/PartnerCompanies/Toso.webp";
import Versace from "../assets/PartnerCompanies/Versace.webp";
import Vista from "../assets/PartnerCompanies/Vista.webp";
import Warwik from "../assets/PartnerCompanies/Warwik.webp";

const brands = [
  { name: "Adorn", logo: Adorn },
  { name: "Asian Paints", logo: AsianPaints },
  { name: "Atmosphere", logo: Atmosphere },
  { name: "Casamance", logo: Casamance },
  { name: "D'Decor", logo: Ddecor },
  { name: "Designers Guild", logo: DesignersGuild },
  { name: "Divine", logo: Divine },
  { name: "DuPont", logo: DuPoint },
  { name: "Excel", logo: Excel },
  { name: "GMF", logo: GMF },
  { name: "Greenpanel", logo: Greenpanel },
  { name: "Greenply", logo: Greenply },
  { name: "HI-MACS", logo: HiMacs },
  { name: "Kazage", logo: Kazage },
  { name: "Livin", logo: Livin },
  { name: "Marburger", logo: Marburger },
  { name: "Marvel", logo: Marvel },
  { name: "Merino", logo: Merino },
  { name: "Mikasa", logo: Mikasa },
  { name: "NBT", logo: NBT },
  { name: "Newmat", logo: Newmat },
  { name: "Nilaya", logo: Nilaya },
  { name: "Rug Republic", logo: RugRepublic },
  { name: "Rumors", logo: Rumors },
  { name: "Saraswati Rugs", logo: SaraswatiRugs },
  { name: "Somfy", logo: Somfy },
  { name: "Tesa", logo: Tesa },
  { name: "Timex", logo: Timex },
  { name: "TOSO", logo: Toso },
  { name: "Versace", logo: Versace },
  { name: "Vista", logo: Vista },
  { name: "Warwik", logo: Warwik },
];

function BrandLogo({ brand, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className="group relative aspect-square border border-[#5a3e3e]/10 p-3 flex items-center justify-center bg-transparent hover:bg-blush/30 transition-colors duration-300 cursor-default rounded-lg"
        >
            {brand.logo ? (
                <img
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    loading="lazy"
                    className="object-contain transition-all duration-500 transform group-hover:scale-115"
                    style={{ maxHeight: '85%', maxWidth: '85%', mixBlendMode: 'multiply' }}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                    }}
                />
            ) : null}
            {/* Text fallback-always rendered, shown when no logo or logo fails */}
            <span
                className={`font-serif font-bold text-heading text-center leading-tight tracking-tight group-hover:text-cta transition-colors duration-300 ${brand.logo ? 'hidden' : 'flex'} items-center justify-center`}
                style={{ fontSize: brand.name.length > 12 ? '0.8rem' : brand.name.length > 8 ? '0.95rem' : '1.1rem' }}
            >
                {brand.name}
            </span>
        </motion.div>
    );
}

export default function BrandPartners() {
    return (
        <section className="py-24 bg-primary border-t border-soft-border">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-heading mb-6">A Legacy of Luxury: <span className="italic text-cta">Our Global Brand Partners</span></h2>
                    <p className="text-body-text max-w-2xl mx-auto font-light text-lg">
                        Partnering with the world's most elite textile and decor brands-from Versace to D'Decor-to bring international quality and designer elegance to your doorstep.
                    </p>
                </div>

                {/* 8-column desktop, 3-column mobile grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                    {brands.map((brand, index) => (
                        <BrandLogo key={index} brand={brand} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
