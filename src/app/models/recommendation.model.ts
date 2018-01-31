export interface Recommendation {
    id: number;
    title: string;
    rating: number;
    cover_image: string;
    author: { id: number, name: string; };
    reason: { id: number, title: string; };
}
