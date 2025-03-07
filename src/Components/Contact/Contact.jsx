import React from 'react'

const Contact = ({ closeContactForm }) => {
    return (
      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Us</h3>
                  <div className="mt-2">
                    <form>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" id="name" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mt-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea name="message" id="message" rows="4" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeContactForm}>Close</button>
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  

export default Contact