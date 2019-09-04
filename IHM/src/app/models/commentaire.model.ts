export interface Commentaire {
    id: string;
    content: string;
    userId: number;
    actorId: number;
    created_at: Date;
    updated_at: Date;
}