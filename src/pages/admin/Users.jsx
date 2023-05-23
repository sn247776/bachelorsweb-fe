import React, { useEffect } from 'react'
import Sidebar from '../../components/admin/SidBar'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserRole, deleteUser, getAllUsers } from '../../redux/actions/admin';
import { toast } from 'react-hot-toast';

import { TableRow, TableCell, Button, IconButton, CircularProgress, TableContainer ,Table,TableHead,TableBody  } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';


const Users = () => {
  const { users, loading, error, message } = useSelector(state => state.admin);

  const dispatch = useDispatch();

  const updateHandler = userId => {
    dispatch(updateUserRole(userId));
  };
  const deleteButtonHandler = userId => {
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }

    dispatch(getAllUsers());
  }, [dispatch, error, message]);

  return (
    <Box display={"flex"}>
    <Sidebar/>
    <Box m={5} width={"100%"}>
      <Box fontSize={"40px"} margin={"10px 0"}>
        All Users
      </Box>
    <TableContainer>
  <Table>

    <TableHead>
      <TableRow>
        {/* <TableCell>Id</TableCell> */}
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Role</TableCell>
        <TableCell>Subscription</TableCell>
        <TableCell>Change Role</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {users &&
        users.map((item) => (
          <Row
            updateHandler={updateHandler}
            deleteButtonHandler={deleteButtonHandler}
            key={item._id}
            item={item}
            loading={loading}
          />
        ))}
    </TableBody>
  </Table>
</TableContainer>
      
    </Box>
  </Box>
  )
}

export default Users

function Row({ item, updateHandler, deleteButtonHandler, loading }) {
  return (
    <TableRow>
      {/* <TableCell>#{item._id}</TableCell> */}
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.role}</TableCell>
      <TableCell>
        {item.subscription && item.subscription.status === 'active'
          ? 'Active'
          : 'Not Active'}
      </TableCell>

      <TableCell>
        <Button
          onClick={() => updateHandler(item._id)}
   
 
          disabled={loading}
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: 600,
            fontSize: "16px",
 
            textTransform: "none",
          }}
          startIcon={loading ? <CircularProgress size={20} color="primary" /> : null}
        >
          Change Role
        </Button>
      </TableCell>
      <TableCell>
      <IconButton
          onClick={() => deleteButtonHandler(item._id)}
          color="secondary"
          disabled={loading}
        >
          <DeleteOutline />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}