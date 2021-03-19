import {observable, action, makeAutoObservable} from "mobx";
import {createContext} from "react";

export interface IParsedData {
    data: IEmployee,
    errors: any[]
    meta: { [key: string]: any }
}

export interface IEmployee {
    id: number,
    age: string,
    email: string,
    experience: string,
    expiration_date: string,
    full_name: string,
    has_children: string,
    license_number: string,
    license_states: string,
    phone: string,
    yearly_income: string,
    duplicate_with: number
}

export interface IEmployeesStore {
    employees: IEmployee[],
    setEmployeesData: (data: IParsedData[]) => void
}

class EmployeesStore implements IEmployeesStore {

    @observable employees: IEmployee[] = [];

    @action setEmployeesData = (data: IParsedData[]) => {
        const employees = data.map((parsedData: IParsedData, index: number) => {
            return {...parsedData.data, id: index};
        });
        this.findDuplicates(employees);
        this.employees = employees;
    };

    constructor() {
        makeAutoObservable(this)
    }

    private findDuplicates(employees: IEmployee[]): void {
        employees.forEach((employee: IEmployee, index: number) => {
            const indexDuplicate = this.getDuplicate(employee, employees);
            if (indexDuplicate >= 0 && indexDuplicate !== index) {
                employee.duplicate_with = indexDuplicate
            }
        });
    }

    private getDuplicate(employee: IEmployee, employees: IEmployee[]): number {
        return employees.findIndex((item: IEmployee) => {
            return employee.email && item.email.trim() === employee.email.trim() ||
                employee.phone && item.phone.trim() === employee.phone.trim();
        });
    }
}

export default createContext(new EmployeesStore())
