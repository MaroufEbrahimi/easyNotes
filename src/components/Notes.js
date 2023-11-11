import React from "react";

const Notes = () =>{

    const notes = [
        {
            id: 1,
            title: 'My first title',
            body: "My first description"
        },
         {
            id: 2,
            title: 'My second title',
            body: "My second description"
        },
         {
            id: 3,
            title: 'My third title',
            body: "My third description"
        }
    ]

    return (
        <table border={1}>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>

            {
                notes.map(item => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))
            }
        </table>
    )
}

export default Notes