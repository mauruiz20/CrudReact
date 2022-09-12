import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? <tr><td colSpan='3'>Sin datos</td></tr> :
            data.map(elemento => <CrudTableRow key={elemento.IdCliente} elemento={elemento} />)}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;