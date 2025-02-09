'use client';
import { MovingBorderStyle } from "../ui/MovingBorder";
import Image from 'next/image';

interface Client {
    id: number;
    name: string;
    logo: string;
}

const clients: Client[] = [
    { id: 1, name: 'Client 1', logo: 'https://europereels.com/wp-content/uploads/2018/12/europereels-logo-1.svg' },
    { id: 2, name: 'Client 2', logo: 'https://riverdreamers.com/wp-content/uploads/2023/03/riverdreamers-logo.png' },
    { id: 3, name: 'Client 3', logo: 'https://www.atithyam.com/wp-content/themes/atithyam/content/images/logo/atithyam-logo.png' },
    { id: 4, name: 'Client 4', logo: 'http://wedoogle.in/img/we-logo15.png' },
    { id: 5, name: 'Client 5', logo: 'https://bigfatweddings.in/wp-content/uploads/2021/06/logo2-300x141-1.png' },
    { id: 6, name: 'Client 6', logo: 'https://funktionjunction.in/wp-content/uploads/2019/06/logowhite.png' },
    { id: 7, name: 'Client 7', logo: 'https://www.cashforcaraustralia.com.au/img/logo.webp' },
    { id: 8, name: 'Client 8', logo: 'https://localcash4car.com.au/wp-content/uploads/2021/05/LC4CPerth-Logo.png' },
    { id: 9, name: 'Client 9', logo: 'https://dalalstreetnews.com/wp-content/uploads/2023/07/cropped-Group_7__yy-1.png.webp' },
    { id: 10, name: 'Client 10', logo: 'https://oceanpalate.com/wp-content/uploads/2023/02/ocean-palate.png' },
    { id: 11, name: 'Client 4', logo: 'https://consultpai.com/wp-content/uploads/2021/09/consultpai-logo.png' },
    { id: 12, name: 'Client 5', logo: 'http://blueoceanbeverages.com/wp-content/uploads/BoB_Logo_Name.png' },
];

const MIN_GRID_ITEMS = 6; // Minimum number of grid items for desktop

export default function ClientLogos() {
    // Fill array with empty items to maintain grid layout on desktop
    const fillEmptySlots = () => {
        const items = [...clients];
        const emptySlots = Math.max(0, MIN_GRID_ITEMS - items.length);
        for (let i = 0; i < emptySlots; i++) {
            items.push({ id: -i - 1, name: '', logo: '' });
        }
        return items;
    };

    return (
        <div className="w-full">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {fillEmptySlots().map((client) => (
                    <MovingBorderStyle 
                        key={client.id}
                        borderRadius="6px"
                        className={`flex items-center justify-center gap-1 p-4 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800
                            ${client.logo ? 'hover:bg-gray-800/90' : ''}`}
                    >
                        {client.logo && (
                            <Image 
                                src={client.logo}
                                alt={client.name}
                                className="max-h-8 w-auto filter grayscale hover:grayscale-0 transition-all"
                                width={32}
                                height={32}
                            />
                        )}
                    </MovingBorderStyle>
                ))}
            </div>

            {/* Mobile Marquee */}
            <div className="md:hidden relative overflow-hidden mb-8">
                <div className="flex animate-marquee">
                    {/* First set of logos */}
                    {clients.map((client) => (
                        <div 
                            key={client.id}
                            className="flex-none w-1/3 flex items-center justify-center p-4"
                        >
                            <Image 
                                src={client.logo}
                                alt={client.name}
                                className="max-h-12 w-auto"
                                width={32}
                                height={32}
                            />
                        </div>
                    ))}
                    {/* Duplicate set of logos for seamless loop */}
                    {clients.map((client) => (
                        <div 
                            key={`duplicate-${client.id}`}
                            className="flex-none w-1/3 flex items-center justify-center p-4"
                        >
                            <Image 
                                src={client.logo}
                                alt={client.name}
                                className="max-h-12 w-auto"
                                width={32}
                                height={32}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="w-32 h-16 relative">
                    <Image
                        src="/images/clients/creative-capsule.png"
                        alt="Creative Capsule"
                        fill
                        className="object-contain"
                        sizes="(max-width: 128px) 100vw, 128px"
                    />
                </div>

                <div className="w-32 h-16 relative">
                    <Image
                        src="/images/clients/invicta.png"
                        alt="Invicta eSolutions"
                        fill
                        className="object-contain"
                        sizes="(max-width: 128px) 100vw, 128px"
                    />
                </div>

                <div className="w-32 h-16 relative">
                    <Image
                        src="/images/clients/sourceitout.png"
                        alt="Source it Out"
                        fill
                        className="object-contain"
                        sizes="(max-width: 128px) 100vw, 128px"
                    />
                </div>
            </div>
        </div>
    );
}