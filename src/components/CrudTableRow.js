import React from 'react';

const CrudTableRow = ({ elemento }) => {
  return (
    <tr>
      <td>{elemento.Nombre}</td>
      <td>{elemento.Apellido}</td>
      <td>{elemento.Estado}</td>
      <td>
        <button>Editar</button>
        <button>Borrar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;