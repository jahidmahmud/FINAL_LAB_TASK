import React from 'react'

export default function List() {
    return (
        <div>
        <h1>Event List</h1>
            <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Importance</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>King of jungle</td>
                            <td>Lion is the king of jungle</td>
                            <td>High</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}
