export class Employee {
    public phone_number: string;
    public email: string;
    public github_user: string;
    public birth_date: Date;
    public gender: string;
    public race: string;
    public years_worked: number;
    public age: number;
    public days_to_birthday: number;

    position: {
        id: number;
        level: string;
        name: string;
        sort: number;
    };
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
