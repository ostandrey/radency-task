import {observable, action, makeAutoObservable} from "mobx";
import {createContext} from "react";

export interface IParsedData {
    data: IEmployee,
    errors: any[]
    meta: { [key: string]: any }
}

export interface IEmployee {
    age: string,
    email: string,
    experience: string,
    expiration_date: string,
    ful_name: string,
    has_children: string,
    license_number: string,
    license_states: string,
    phone: string,
    yearly_income: string,
    duplicate_with: string
}

export interface IEmployeesStore {
    employees: IEmployee[],
    setEmployeesData: (data: IParsedData[]) => void
}

class EmployeesStore implements IEmployeesStore {

    @observable employees: IEmployee[] = [];

    @action setEmployeesData = (data: IParsedData[]) => {
        this.employees = data.map((parsedData: IParsedData) => parsedData.data);
    };

    constructor() {
        makeAutoObservable(this)
    }
}

export default createContext(new EmployeesStore())
