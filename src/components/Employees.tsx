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
                <span>Click to add scv file</span>
            </CSVReader>
            {
                employees.length === 0
                ?
                    <div className="d-flex justify-content-center mt-2">
                        Waiting for file
                    </div>
                    :
                    <table className="table mt-3">
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
                            employees.map((data: IEmployee) => {
                                return(
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.full_name}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.email}</td>
                                        <td className={ageValidator(data.age) ? '' : 'bg-danger'}>
                                            {data.age}
                                        </td>
                                        <td className={experienceValidator(data.experience, data.age) ? '' : 'bg-danger'}>
                                            {data.experience}
                                        </td>
                                        <td>{data.yearly_income}</td>
                                        <td className={hasChildrenValidator(data.has_children) ? '' : 'bg-danger'}>
                                            {data.has_children}
                                        </td>
                                        <td>{data.license_states}</td>
                                        <td>{data.expiration_date}</td>
                                        <td className={licenseValidator(data.license_number) ? '' : 'bg-danger'}>
                                            {data.license_number}
                                        </td>
                                        <td>{data.duplicate_with}</td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
            }

        </div>

    )
};

export default observer(Employees)
