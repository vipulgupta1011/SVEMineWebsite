// Import local assets
import adaniLogo from '../assets/companyphotos/Adani.webp';
import agrawalLogo from '../assets/companyphotos/Agrawal-Pg-College.webp';
import auBankLogo from '../assets/companyphotos/Au-Small-Finance.webp';
import audiLogo from '../assets/companyphotos/Audi.webp';
import bhamashahLogo from '../assets/companyphotos/Bhamashah-Technohub.webp';
import gravitaLogo from '../assets/companyphotos/Gravita.webp';
import hgielLogo from '../assets/companyphotos/Hgiel.webp';
import hondaLogo from '../assets/companyphotos/Honda.webp';
import jayshreeLogo from '../assets/companyphotos/Jayshree-Periwal-International-School.webp';
import kiaLogo from '../assets/companyphotos/Kia.webp';
import radianceManglamLogo from '../assets/companyphotos/Manglam-Radiance.webp';
import nexaLogo from '../assets/companyphotos/Nexa.webp';
import nirvanaLogo from '../assets/companyphotos/Nirvana.webp';
import rkMarbleLogo from '../assets/companyphotos/RK-Marble.webp';
import radissonLogo from '../assets/companyphotos/Radisson.webp';
import sbiLogo from '../assets/companyphotos/Sbi-logo.webp';
import shahpuraLogo from '../assets/companyphotos/Shahpura-Hotels.webp';
import xaviersLogo from '../assets/companyphotos/St.xaviers-College.webp';
import tholiasLogo from '../assets/companyphotos/Tholias-Kuber.webp';
import cheerSagarLogo from '../assets/companyphotos/cheer-Sagar.webp';
import theLegendLogo from '../assets/companyphotos/the-Legend.webp';
import indianOilLogo from '../assets/companyphotos/IndianOil.webp';
import ehccLogo from '../assets/companyphotos/EHCC.webp';
import bharatPetroleumLogo from '../assets/companyphotos/BharatPetroleum.webp';
import policeHeadquarterLogo from '../assets/companyphotos/Police-Headquarter.webp';
import kgkRealtyLogo from '../assets/companyphotos/KGK-Realty.webp';
import manglamLogo from '../assets/companyphotos/Manglam.webp';
import westinLogo from '../assets/companyphotos/Westin.webp';
import jecrcLogo from '../assets/companyphotos/JECRC.webp';
import akshayaPatraLogo from '../assets/companyphotos/Akshaya-Patra.webp';
import dynamicCablesLogo from '../assets/companyphotos/Dynamic-Cables.webp';
import apexLogo from '../assets/companyphotos/Apex.webp';
import sdmhLogo from '../assets/companyphotos/SDMH.webp';
import rasClubLogo from '../assets/companyphotos/Ras-Club.webp';
import jaiClubLogo from '../assets/companyphotos/Jai-Club.webp';
import rajasthanGovernanceLogo from '../assets/companyphotos/Rajasthan-Governance.webp';

const clients = [
    { name: "Radisson", logo: radissonLogo },
    { name: "SBI", logo: sbiLogo },
    { name: "KIA", logo: kiaLogo },
    { name: "Honda", logo: hondaLogo },
    { name: "Audi", logo: audiLogo },
    { name: "NEXA", logo: nexaLogo },
    { name: "RK Marble", logo: rkMarbleLogo },
    { name: "AU Small Finance Bank", logo: auBankLogo },
    { name: "Adani", logo: adaniLogo },
    { name: "Gravita", logo: gravitaLogo },
    { name: "Tholia's Kuber", logo: tholiasLogo },
    { name: "Agrawal PG College", logo: agrawalLogo },
    { name: "Bhamashah Technohub", logo: bhamashahLogo },
    { name: "HGIEL", logo: hgielLogo },
    { name: "Jayshree Periwal Int. School", logo: jayshreeLogo },
    { name: "Manglam Radiance", logo: radianceManglamLogo },
    { name: "Nirvana", logo: nirvanaLogo },
    { name: "Shahpura Hotels", logo: shahpuraLogo },
    { name: "St. Xavier's College", logo: xaviersLogo },
    { name: "Cheer Sagar", logo: cheerSagarLogo },
    { name: "Indian Oil", logo: indianOilLogo },
    { name: "EHCC", logo: ehccLogo },
    { name: "Bharat Petroleum", logo: bharatPetroleumLogo },
    { name: "Police Headquarter", logo: policeHeadquarterLogo },
    { name: "KGK Realty", logo: kgkRealtyLogo },
    { name: "Manglam", logo: manglamLogo },
    { name: "Westin", logo: westinLogo },
    { name: "JECRC", logo: jecrcLogo },
    { name: "Akshaya Patra", logo: akshayaPatraLogo },
    { name: "Dynamic Cables", logo: dynamicCablesLogo },
    { name: "Apex", logo: apexLogo },
    { name: "SDMH", logo: sdmhLogo },
    { name: "Ras Club", logo: rasClubLogo },
    { name: "Jai Club", logo: jaiClubLogo },
    { name: "The Legend", logo: theLegendLogo },
    { name: "Rajasthan Governance", logo: rajasthanGovernanceLogo }
];

export default function ClientShowcase() {
    return (
        <section className="py-20 bg-[#f4e9e2] border-t border-soft-border">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-heading tracking-wide mb-6">Trusted by the Best: <span className="italic text-cta">Our Corporate & Commercial Portfolio</span></h2>
                    <p className="text-body-text max-w-2xl mx-auto font-light text-lg">
                        From luxury hospitality groups like Radisson to corporate leaders like KIA and SBI, we are the trusted partner for premium interior infrastructure in India.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 p-6 flex items-center justify-center rounded-sm h-32 transition-all duration-300 group cursor-default"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                loading="lazy"
                                className="max-h-12 w-auto max-w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
