export interface Book {
    id: number;
    title: string;
    author: { id: number, name: string; };
    tags: { id: string, name: string }[];
    cover_image: string;
}
