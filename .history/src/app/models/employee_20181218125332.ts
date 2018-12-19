export class Employee {
     phone_number: string;
     email: string;
     github_user: string;
     birth_date: Date;
     gender: string;
     race: string;
     years_worked: number;
     age: number;
     days_to_birthday: number;

    position: {
        id: number;
        level: string;
        name: string;
        sort: number;
    // tslint:disable-next-line:semicolon
    }
}

export class User {
    public email: string;
    public first_name: string;
    public id: number;
    public is_active: boolean;
    public is_staff: boolean;
    public last_name: string;
    public username: string;
}
