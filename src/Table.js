import React from 'react'

const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )

}

const TableBody = (props) => {
    const arrayCharacter = props.characterData.characterData.characters
    const characterRemove = props.removeCharacter.removeCharacter
    const rows = arrayCharacter.map((row,index) => (
        <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => characterRemove(index)}>Delete</button>
        </td>
      </tr>
    ))

    return <tbody>{rows}</tbody>
}


const Table = (props) => {
    const characterData = props
    const removeCharacter = props
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
}

export default Table
