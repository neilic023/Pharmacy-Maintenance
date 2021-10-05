import React, { useState, useEffect } from 'react';

import req from '../axios';
const EditProduct = props => {
  const [updateProduct, setUpdateProduct] = useState({
    name: '',
    manufacturer: '',
    price: '',
    expiryDate: '',
  });

  const { name, manufacturer, price, expiryDate } = updateProduct;
  const onInputChange = e => {
    e.persist();
    setUpdateProduct({
      ...updateProduct,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const onSubmitHandler = async e => {
    e.preventDefault();
    await req.put(`/products/${props.editModal.id}`, updateProduct);
    props.onCloseModal();
  };

  const getProducts = () => {
    setUpdateProduct(props.editModal);
  };

  const cancelHandler = () => {
    props.onCloseModal();
  };

  return (
    <div>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Edit product
                  </h3>
                  <div className="w-full max-w-xs">
                    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          for="username"
                        >
                          Product name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="uname"
                          type="text"
                          placeholder="Product name"
                          defaultValue={name}
                          onChange={e => onInputChange(e)}
                          name="name"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Manufacturer
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="ajdi"
                          type="text"
                          defaultValue={manufacturer}
                          onChange={e => onInputChange(e)}
                          name="manufacturer"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Price
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="ajd"
                          type="number"
                          defaultValue={price}
                          onChange={e => onInputChange(e)}
                          name="price"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Date of exp
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="aj"
                          type="date"
                          defaultValue={expiryDate}
                          onChange={e => onInputChange(e)}
                          name="expiryDate"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={onSubmitHandler}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Submit
              </button>
              <button
                onClick={cancelHandler}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
