import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
  {
    IdCliente: 1,
    Nombre: 'Facundo',
    Apellido: 'Dip',
    Estado: 'A'
  },
  {
    IdCliente: 2,
    Nombre: 'Pichi',
    Apellido: 'Carrizo',
    Estado: 'A'
  },
  {
    IdCliente: 3,
    Nombre: 'Benjamin',
    Apellido: 'Cascales',
    Estado: 'A'
  },
  {
    IdCliente: 4,
    Nombre: 'Fortune',
    Apellido: 'Miss',
    Estado: 'B'
  },
  {
    IdCliente: 5,
    Nombre: 'Tristana',
    Apellido: 'ADC',
    Estado: 'B'
  }
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.IdCliente = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map(elemento => elemento.IdCliente === data.IdCliente ? data : elemento);
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Seguro de eliminar el registro con el id: ${ id }?`);

    if (isDelete) {
      let newData = db.filter(elemento => elemento.IdCliente !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className='grid-1-2'>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;