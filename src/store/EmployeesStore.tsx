import { observable, action } from "mobx";
import {createContext} from "react";


class EmployeesStore implements IEmployeesStore {

    @observable employees: IEmployee[] = [];

    @action setEmployeesData = (data: any) => {
        this.employees = data;
        console.log(data)
    }
}

export default createContext(new EmployeesStore())
