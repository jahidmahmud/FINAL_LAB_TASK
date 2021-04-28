import React,{useState} from 'react';
import axios from 'axios';


export default function AddEvent() {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [importance,setImportance]=useState('');
    async function submitData (e) { 
        e.preventDefault();
        
        const data = {
            'title':title,
            'description':description,
            'importance':importance
          };
          console.log(data)
          axios
          .post("events/add", data)
          .then((response) => {
          }).catch((err) => {
            console.log( err.data );
          });
        
     }

    return (
        <div>
        <h1>Add Form</h1>
            <form onSubmit={submitData}>
                <table>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td><input type="text" name="title" onChange={(e)=>setTitle(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td><textarea name="description" rows="3" cols="20" onChange={(e)=>setDescription(e.target.value)}></textarea></td>
                        </tr>
                        <tr>
                            <td>Importance</td>
                            <td>
                                <select name="importance" onChange={(e)=>setImportance(e.target.value)}>
                                    <option value="High">High</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Less">Less</option>
                                </select>
                            </td>
                        </tr>
                        {/* <tr>
                            <td>Date</td>
                            <td><input type="date" name="date" /> </td>
                        </tr> */}
                        <tr>
                            <td></td>
                            <td><button type="submit">Add</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
