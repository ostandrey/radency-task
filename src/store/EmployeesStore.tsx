import { observable, action } from "mobx";
import {createContext} from "react";


class EmployeesStore {

    @observable employees: any = [];

    @action setEmployeesData = (data: any) => {
        this.employees = data;
        console.log(data)
    }
}

export default createContext(new EmployeesStore())
