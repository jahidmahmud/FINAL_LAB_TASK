import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function EditEvent() {
    const {id:eid}=useParams();
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [importance,setImportance]=useState('');

    useEffect(() => {
        getData();
        }, []);
    async function getData(){
    axios.get('events/edit/' + eid)
      .then(res => {
          console.log(res);
          setTitle(res.data.event.title);
          setDescription(res.data.event.description);
          setImportance(res.data.event.importance);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    console.log(eid);

    async function formSubmit (e) { 
        e.preventDefault();
        
        const data = {
            'title':title,
            'description':description,
            'importance':importance
          };
          console.log(data)
          axios
          .post("events/update/" + eid, data)
          .then((response) => {
          }).catch((err) => {
            console.log( err.data );
          });
        
     } 
    return (
        <div>
        <h1>Edit Form</h1>
            <form onSubmit={formSubmit}>
                <table>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td><input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td><input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Importance</td>
                            <td>
                                <select name="importance" value={importance} onChange={(e)=>setImportance(e.target.value)}>
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
