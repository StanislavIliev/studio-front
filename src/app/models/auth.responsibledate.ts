export interface AuthResponse{
    username: string,
    password: string,
    returnSecureToken: string
}
export interface AuthResponseData{
idToken: string;
username: string;
refreshToken: string;
expiresIn: string;
localId: string;
registered?: boolean;
}

export interface AuthPasswordEmail{
    pass: string,
    email: string
}