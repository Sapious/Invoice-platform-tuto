import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useClickAway } from "react-use";
const NewInvoice = ({ closeModal }) => {
  const modalRef = useRef(null);

  useClickAway(modalRef, () => {
    closeModal(false);
  });
  const [Items, setItems] = useState([
    {
      name: "",
      description: "",
      quantity: "",
      unitPrice: "",
      subTotal: "",
    },
  ]);

  return (
    <div className="fixed h-full w-full left-0 top-0 bg-secondary bg-opacity-20 z-20">
      <div
        ref={modalRef}
        className="relative bg-white w-1/3 float-right py-4 px-6 h-screen shadow-md overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="text-dark font-semibold text-lg">
            Create New Invoice
          </div>
          <i
            onClick={(e) => {
              closeModal(false);
            }}
            className="fas fa-times text-dark text-lg cursor-pointer"></i>
        </div>
        <form>
          <div className="py-4 px-2 border-primary-shade border border-opacity-40 bg-blue-600 bg-opacity-20 rounded-md flex flex-col gap-2 my-4">
            <label htmlFor="buyer" className="text-dark font-medium ">
              Buyer Email
            </label>
            <input
              name="buyer"
              placeholder="Email"
              className="p-2  rounded focus:outline-none w-full text-dark"
              type="text"
            />
          </div>
          <div className="flex justify-between items-center gap-4 my-4">
            <div>
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="email">
                Issued at
              </label>
              <input
                type="date"
                name="issueDate"
                id="issueDate"
                placeholder="Issued at"
                className=" appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="email">
                Due on
              </label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Due on"
                className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          {Items.map((el, index) => {
            return (
              <div className="flex justify-between items-end gap-2 w-full mb-2">
                <div class="w-6/12">
                  <label
                    class="block text-dark text-sm font-normal mb-2"
                    for="name">
                    Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                    name="name"
                    id="name"
                    type="text"
                    required
                    placeholder="Name"
                  />
                </div>

                <div class="w-2/12">
                  <label
                    class="block text-dark text-sm font-normal mb-2"
                    for="quantity">
                    Quantity
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                    name="quantity"
                    id="quantity"
                    type="number"
                    min={0}
                    required
                    placeholder="Qty"
                  />
                </div>
                <div class="w-2/12">
                  <label
                    class="block text-dark text-sm font-normal mb-2"
                    for="unitPrice">
                    Price
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                    name="unitPrice"
                    id="unitPrice"
                    type="number"
                    min={0}
                    required
                    placeholder="Price"
                  />
                </div>
                <div className="text-dark text-lg w-1/12 mb-2">1000</div>
                <div
                  onClick={(e) => {
                    if (Items.length > 1) {
                      const newArr = Items.filter((el, i) => i !== index);
                      setItems(newArr);
                    }
                  }}
                  className="text-dark text-lg w-1/12 mb-2">
                  1000
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center gap-2 w-full ">
            <div
              className="flex justify-start items-center group cursor-pointer gap-4 w-8/12 py-2 px-3"
              onClick={(e) =>
                setItems([
                  ...Items,
                  {
                    name: "",
                    description: "",
                    quantity: "",
                    unitPrice: "",
                    subTotal: "",
                  },
                ])
              }>
              <i class="fas fa-plus text-primary group-hover:text-primary-shade"></i>
              <span className=" text-primary group-hover:text-primary-shade font-semibold">
                Add item
              </span>
            </div>
            <div className="w-4/12 flex justify-start items-center">
              <div className="text-dark font-semibold capitalize w-2/4 px-1">
                Total:
              </div>
              <div className="text-dark font-semibold w-2/4">1000</div>
            </div>
          </div>
          <div class="mb-4 w-full">
            <label
              class="block text-dark text-sm font-normal mb-2"
              for="description">
              Description
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              id="description"
              type="text"
              required
              placeholder="Description"
            />
          </div>
          <div className="flex justify-end items-center gap-4">
            <button
              onClick={(e) => {
                closeModal(false);
              }}
              class="px-4 py-2 font-semibold rounded text-dark border-secondary-shade border-opacity-40 border inline-block bg-secondary hover:bg-secondary-shade focus:bg-secondary-shade"
              type="button">
              Cancel
            </button>
            <button
              class="px-4 py-2 font-semibold rounded text-white inline-block bg-primary hover:bg-primary-shade focus:bg-primary-shade"
              type="button">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

NewInvoice.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export default NewInvoice;
