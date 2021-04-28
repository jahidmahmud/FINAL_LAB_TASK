import React from 'react'

export default function AddEvent() {
    return (
        <div>
        <h1>Add Form</h1>
            <form>
                <table>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td><input type="text" name="title" /></td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td><textarea name="description" rows="3" cols="20"></textarea></td>
                        </tr>
                        <tr>
                            <td>Importance</td>
                            <td>
                                <select name="importance">
                                    <option value="high">High</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="less">Less</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td><input type="date" name="date" /> </td>
                        </tr>
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
