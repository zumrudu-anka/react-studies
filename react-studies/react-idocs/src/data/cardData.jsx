const articleJsons = import.meta.glob('./articles/*.json', { eager: true });

export const articles = Object.values(articleJsons).map((mod) => mod.default || mod);

// export const cardData = [
    
// ]