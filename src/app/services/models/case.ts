export interface Case {
    db_id: string;
    id: string;
    gender: string;
    dob: string;
    notes: string;
    created: string;
    favorites: Array<number>;
}