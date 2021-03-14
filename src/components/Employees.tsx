import React, {useContext} from "react";
import EmployeesStore, {IEmployee} from "../store/EmployeesStore";
import {CSVReader} from "react-papaparse";
import {observer} from "mobx-react";

const Employees = (): JSX.Element => {

    const employeesStore = useContext(EmployeesStore);
    const { employees, setEmployeesData } = employeesStore;

    return (
        <div>
            <CSVReader
                onFileLoad={(data) => { setEmployeesData(data)} }
                config={{header: true}}>
                <span>scv</span>
            </CSVReader>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ful nme</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Experience</th>
                    <th scope="col">Yearly income</th>
                    <th scope="col">Has children</th>
                    <th scope="col">License states</th>
                    <th scope="col">Expiration date</th>
                    <th scope="col">License number</th>
                    <th scope="col">Duplicate with</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map((data: IEmployee, index: number) => {
                        return(
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.ful_name}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.age}</td>
                                <td>{data.experience}</td>
                                <td>{data.yearly_income}</td>
                                <td>{data.has_children}</td>
                                <td>{data.license_states}</td>
                                <td>{data.expiration_date}</td>
                                <td>{data.license_number}</td>
                                <td>{data.duplicate_with}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>

    )
};

export default observer(Employees)
