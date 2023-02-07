interface UserDataRespose {
    results: Result[]
}

 interface Result {
    gender: string;
    name: {
        first: string;
        last: string;
        title:string;
    };
    location: string;
    email: string;
    dob: string;
    phone: string;
    cell: string;
    id: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
}
export type {UserDataRespose, Result}