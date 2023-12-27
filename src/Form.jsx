import { useState } from "react";

const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [record, setRecord] = useState([]);
    const [edit,setEdit]=useState("");
    const id=Math.floor(Math.random() * 100);

    const handlesubmit = () => {
        let obj = { email, password };
        let all = [...record, obj];
        setRecord(all);
        console.log(all);

        setEmail('')
        setPassword('')
    }

    const handledelete = (id) => {
        let all =[...record];
        let deletedata = all.filter(val => val.id !== id);
        setRecord(deletedata);
    }

    const handleedit = (id) => {
        let all = [...record];
        let editdata = all.find(val => val.id == id);
        setEmail(editdata.email);
        setPassword(editdata.password);
        setEdit(id);
    }

    return (
        <>
            <div className="container">
                <center>
                    <form className="shadow p-3 mt-3">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="text" class="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="button" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
                    </form>

                    <br></br><br></br>

                    <table class="table ">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            record.map((val)=>{
                                return(
                                    <tr>
                                    <td>{id}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>
                                        <button onClick={ () => handledelete(val.id)}  class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                                    </td>
                                    <td>
                                        <button onClick={ () => handleedit(val.id)} class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
                                    </td>
                                </tr>
                                )
                            })
                           }
                        </tbody>
                    </table>
                </center>
            </div>
        </>
    )
}
export default Form;