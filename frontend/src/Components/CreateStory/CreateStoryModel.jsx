import React, { useState } from 'react';
import Modal from '@mui/material/Modal';

const CreateStoryModel = ({ handleClose2, open2 }) => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., upload the file and caption
    console.log('File:', file);
    console.log('Caption:', caption);
    // Close the modal after submission
    handleClose2();
  };

  return (
    <div>
  <Modal
    open={open2}
    onClose={handleClose2}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
          onClick={handleClose2}
        >
          Close
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Upload Story</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
              Select File (Image or Video):
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              accept="image/*, video/*"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-1">
              Caption:
            </label>
            <input
              type="text"
              id="caption"
              name="caption"
              value={caption}
              onChange={handleCaptionChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClose2}
              className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  </Modal>
</div>

  );
};

export default CreateStoryModel;
