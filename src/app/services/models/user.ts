export interface User {
    displayName?: string;
    email?: string;
    password?: string;
}

export interface UserInfo {
    name?: string;
    sex?: string; 
    dob?: any;
    selectedState?: {
        id?: number, 
        nome?: string, 
        sigla?: string
    }; 
    selectedCity?: {
        id?: number, 
        nome?: string, 
        estado?: number
    };
    formation?: string;
    otherFormation?: string;
    actionArea?: string;
    otherArea?: string;
    pastXp?: string;
    pastXpClass?: string;
    otherPastXpClass?: string;
    favorites?: Array<number>
}