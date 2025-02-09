import { ReactElement, JSXElementConstructor } from 'react';

export interface Experience {
    id: string;
    title: string;
    company: string;
    companyShort: string;
    companyDesc: string;
    startDate: string;
    endDate: string;
    location: string;
    link: string;
    favicon: string;
    technologies: ReactElement<any, string | JSXElementConstructor<any>>[];
}