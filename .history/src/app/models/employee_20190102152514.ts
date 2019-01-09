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
     physical_address: string;
     id_number: number;

    Position: {
        id: number;
        level: string;
        name: string;
        sort: number;
    };

    User: {
         email: string;
         first_name: string;
         id: number;
         is_active: boolean;
         is_staff: boolean;
         last_name: string;
         username: string;
    };
}
