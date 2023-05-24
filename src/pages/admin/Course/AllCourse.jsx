import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/admin/SidBar'
import { Box } from '@mui/material'

import { TableRow, TableCell, Button, IconButton, CircularProgress, TableContainer ,Table,TableHead,TableBody  } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { getAllCourses, getCourseLectures } from '../../../redux/actions/course';
import { addLecture, deleteCourse, deleteLecture } from '../../../redux/actions/admin';
import AdminLectures from './AdminLectures';


const AllCourse = () => {

  const { courses, lectures } = useSelector(state => state.course);
  const { loading, error, message } = useSelector(state => state.admin);
  const [showleacture, setShowLeacture] = useState(false);

  
  const handleClick = () => {
    setShowLeacture(!showleacture);
  };


  const dispatch = useDispatch();
  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  
  const coureDetailsHandler = (courseId, title) => {
    dispatch(getCourseLectures(courseId));
    handleClick();
    setCourseId(courseId);
    setCourseTitle(title);
    
  };
  const deleteButtonHandler = courseId => {
    console.log(courseId);
    dispatch(deleteCourse(courseId));
  };

  const deleteLectureButtonHandler = async (courseId, lectureId) => {
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId));
  };

  const addLectureHandler = async (e, courseId, title, description, video) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('file', video);

    await dispatch(addLecture(courseId, myForm));
    dispatch(getCourseLectures(courseId));
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

    dispatch(getAllCourses());
  }, [dispatch, error, message,]);

  return (
    <Box display={"flex"}>
    <Sidebar/>
    <Box m={5} width={"100%"}>
      <Box fontSize={"40px"} margin={"10px 0"}>
        All Courses
      </Box>
    <TableContainer>
  <Table>

    <TableHead>
      <TableRow>
        {/* <TableCell>Id</TableCell> */}
        <TableCell>Poster</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Category</TableCell>
        <TableCell>Creator</TableCell>
        <TableCell>Views</TableCell>
        <TableCell>Lectures</TableCell>
        <TableCell>View Lectures</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {courses &&
        courses.map((item) => (
          <Row
          coureDetailsHandler={coureDetailsHandler}
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
    <Box display={showleacture ? "" : "none"}>
      <AdminLectures handleClick={handleClick}           id={courseId}
          courseTitle={courseTitle}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
          lectures={lectures}
          loading={loading}/>
    </Box>
  </Box>
  )
}

export default AllCourse

function Row({ item, coureDetailsHandler, deleteButtonHandler, loading }) {
  return (
    <TableRow>
      {/* <TableCell>#{item._id}</TableCell> */}
      <TableCell><img src={item.poster.url} height={"50px"} /></TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>
        {item.createdBy}
      </TableCell>
      <TableCell>{item.views}</TableCell>
      <TableCell>{item.numOfVideos}</TableCell>

      <TableCell>
        <Button
        onClick={() => coureDetailsHandler(item._id, item.title)}
          disabled={loading}
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            width:"140px",
            height:"40px",
            textTransform: "none",
          }}
          
        >
          View Lectures
        </Button>
      </TableCell>
      <TableCell>
      <IconButton
          
          color="secondary"
          disabled={loading}
          onClick={() => deleteButtonHandler(item._id)}
        >
          <DeleteOutline />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}