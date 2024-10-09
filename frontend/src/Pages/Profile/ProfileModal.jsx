import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { updateProfileAction } from '../../Redux/Auth/auth.action';
import { Avatar, IconButton, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  overFlow: 'scroll-y',
  borderRadius: 3,
};

export default function ProfileModal({ open, handleClose}) {

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        console.log("values" ,values)
    }

    const formik = useFormik({
        initialValues:{
            firstName: "",
            lastName: "",
        },
        onSubmit: (values) => {
            console.log("Submitted values:" ,values)
            dispatch(updateProfileAction(values))
        }
    })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <IconButton onClick={handleClose}>
                        <Close/>
                    </IconButton>
                    <p>Edit Profile</p>
                </div>
                <Button type='submit'>Save</Button>
            </div>
            <div>
                <div className='h-[15rem]'>
                    <img className='w-full h-full rounded-t-md' src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='pl-5'>
                    <Avatar
                        className='transform -translate-y-24'
                        sx={{width: '10rem', height: '10rem'}}
                        src="https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg"
                    />
                </div>
            </div>
            <div className='space-y-3'>
                <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                />
                <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
