export interface APIUser {
    login: string;
    name:string;
    followes: string;
    following: string;
    public_repo: number;
    avatar_url: string;
    blog?: string;
    company?: string;
    email?: string;
    location?: string;
}


export interface APIRepo {
    name: string;
    owner: {
        login: string;

    };
    stargazers_count: number;
    forks: number;
    html_url: string;
    language?: string;
    description?: string;    
}