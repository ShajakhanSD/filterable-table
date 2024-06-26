import { useState } from "react";
import { tableData } from "./data";

export function FilterTable() {
const [search, setSearch] = useState("");
    return (
        <>
    <div className="container mt-3">
            <h1 className="text-info fs-3">Filter Table</h1>
            <form className="my-3 d-flex justify-content-center">
                <input className="form-control w-50" type="text" placeholder="Search Here" onChange={(e) => setSearch(e.target.value)} />
            </form>
            <table className="table table-striped table-info">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.filter((item) => {
                        return search === "" ? item :
                            item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                            item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                            item.email.toLowerCase().includes(search.toLowerCase()) ||
                            item.phone.includes(search);
                    }).map((item, index) => (
                        <tr key={index}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}


