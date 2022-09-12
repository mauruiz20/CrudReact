import React, { useState } from 'react';

const initialForm = {
  IdCliente: null,
  Nombre: '',
  Apellido: '',
  Estado: 'A'
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.Nombre || !form.Apellido) {
      alert('Datos incompletos');
      return;
    }

    if (form.IdCliente === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='Nombre'
          placeholder='Nombre'
          onChange={handleChange}
          value={form.Nombre} />
        <input
          type='text'
          name='Apellido'
          placeholder='Apellido'
          onChange={handleChange}
          value={form.Apellido} />
        <input type='submit' value='Enviar' />
        <input type='reset' value='Limpiar' onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;