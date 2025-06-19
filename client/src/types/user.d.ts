export type User = {
    id: string;
    name: string;
    bio: string;
    interests: string[];
    avatar?: string;
}

export type Feed = {
    id: string;
    title: string;
    description: string;
}