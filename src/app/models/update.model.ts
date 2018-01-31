export interface Update {
    type: string;
    datetime: number;
    user: { id: number, name: string; };
    likes: {
        total: number;
        top: { id: number; name: string; }
    };
    friends_with?: { id: number; name: string; };
    book?: {
        id: number;
        title: string;
        description: string;
        author: { id: number; name: string; }
    };
}
