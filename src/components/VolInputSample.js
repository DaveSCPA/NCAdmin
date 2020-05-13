import React from 'react';
import { useFormik } from 'formik';

function VolInputSample() {
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      id: '',
      zipcode: '',
    },
    onSubmit: (values) => {
      console.log('Form Data', values);
    },
  });

  // console.log('form values:', formik.values);
  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='fname'>First Name</label>
        <input
          type='text'
          id='fname'
          name='fname'
          onChange={formik.handleChange}
          value={formik.values.fname}
        />

        <label htmlFor='lname'>Last Name</label>
        <input
          type='text'
          id='lname'
          name='lname'
          onChange={formik.handleChange}
          value={formik.values.lname}
        />

        <label htmlFor='id'>ID</label>
        <input
          type='text'
          id='id'
          name='id'
          onChange={formik.handleChange}
          value={formik.values.id}
        />

        <label htmlFor='zipcode'>Zip Code</label>
        <input
          type='text'
          id='zipcode'
          name='zipcode'
          onChange={formik.handleChange}
          value={formik.values.zipcode}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default VolInputSample;
