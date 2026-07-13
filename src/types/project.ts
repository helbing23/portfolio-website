export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    previewGif?: string; // Optional GIF preview URL
    liveUrl?: string;
    githubUrl?: string;
    caseStudySlug?: string; // Links to /projects/case-study/[slug]
    category?: string;
}