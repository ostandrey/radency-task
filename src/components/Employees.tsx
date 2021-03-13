import React, {useContext} from "react";
import EmployeesStore from "../store/EmployeesStore";
import {CSVReader} from "react-papaparse";




const Employees = () => {

    const employeesStore = useContext(EmployeesStore);
    const { employees, setEmployeesData } = employeesStore;
    const handleOnDrop = (data: any) => {
        setEmployeesData(data);
        console.log(employees)
    };
    return(
        <div>
            <CSVReader onFileLoad={(data) => {
                console.log(data);
            handleOnDrop(data)}
            }

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
                    employees.map(({data}: any) => {
                            return(
                                <tr key={data.id}>
                                    <th scope="row">1</th>
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
                        }
                    )
                }

                </tbody>
            </table>
        </div>

    )
};

export default Employees
