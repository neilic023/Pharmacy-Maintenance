import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import req from '../axios';
import Product from './Product';
import EditProduct from './EditProduct';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [deleted, setDeleted] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editModalData, setEditModalData] = useState({});

  //uzmi podatke sa json servera i setuj ih u state
  const fetchData = async () => {
    try {
      const response = await req.get('/products');
      const result = response;
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = modalData => {
    console.log(modalData);
    setEditModalData(modalData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetchData();
  }, [deleted, showModal]);

  return (
    <React.Fragment>
      <div className="container mx-auto p-1 m-1">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Manufacturer
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date of exp
                      </th>
                      <NavLink to={'/products/add'}>
                        <button className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-1 px-4 rounded-full">
                          Add Product
                        </button>
                      </NavLink>

                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map(product => (
                      <Product
                        key={product.id}
                        product={product}
                        setDeleted={setDeleted}
                        deleted={deleted}
                        onOpenModal={openModal}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <EditProduct editModal={editModalData} onCloseModal={closeModal} />
      )}
    </React.Fragment>
  );
};

export default ProductList;
