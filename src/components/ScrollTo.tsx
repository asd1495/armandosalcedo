export const scrollTo = (sectionId: string): void => {
    if (typeof document === 'undefined') return;
    
    const section = document.getElementById(sectionId);
    if (section) {
        const headerOffset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offSetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offSetPosition,
            behavior: 'smooth',
        });
    }
};