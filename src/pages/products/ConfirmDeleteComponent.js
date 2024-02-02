import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfirmDeleteComponent = ({ onDelete, id }) => {
    const handleDelete = () => {
        toast.warning(
            <>
                <div>
                    <p>Are you sure you want to delete this entry?</p>
                    <button className="btn btn-primary" type="submit" style={{margin: '20px'}} onClick={() => {onDelete(id); toast.dismiss();}}>Confirm</button>
                    <button className="btn btn-primary" type="submit" style={{margin: '20px'}} onClick={() => toast.dismiss()}>Cancel</button>
                </div>
            </>,
            {
                position: 'top-center',
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                closeButton: false,
            }
        );
    };

    return (
        <button
            type="button" className="btn btn-danger"
            onClick={handleDelete}
        >
            Delete
        </button>
    );
};

export default ConfirmDeleteComponent;
