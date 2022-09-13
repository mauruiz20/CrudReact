import React from 'react';

const CrudTableRow = ({ elemento, setDataToEdit, deleteData }) => {

  let { IdCliente, Nombre, Apellido, Estado } = elemento;

  return (
    <tr>
      <td>{Nombre}</td>
      <td>{Apellido}</td>
      <td>{Estado}</td>
      <td>
        <button onClick={() => setDataToEdit(elemento)}>Editar</button>
        <button onClick={() => deleteData(IdCliente)}>Borrar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;