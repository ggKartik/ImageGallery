import React, { Fragment, useEffect  } from "react";
import { oneimageaction, clearerr ,deleteimageaction} from "../../Redux/actions/imageAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import "./Image.css";
import { useNavigate } from "react-router-dom";
const Image = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { error, loading, image } = useSelector((state) => state.oneImage);
  const { success } = useSelector((state) => state.editimage);

  const params = useParams();
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearerr());
    }
    dispatch(oneimageaction(params.id));
  }, [dispatch, error,success]);
  const Editclicked = (e) => {
    e.preventDefault();
    navigate(`/${image._id}/edit`);
  };
  const Deleteclicked = (e) => {
    e.preventDefault();
    dispatch(deleteimageaction(params.id));
    navigate(`/`);
  };
  
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div id="container">
          <div className="product-details">
            <h1>{image && image.imgName}</h1>
            <p className="information">{image && image.imgDetails}</p>

            <Stack direction="row" spacing={2} className="btn-row">
              <Button onClick={Editclicked} variant="contained" endIcon={<EditIcon />}>
                Edit
              </Button>
              <Button onClick={Deleteclicked} variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </Stack>
          </div>

          <div className="product-image">
            <img src={image && image.imgUrl} alt={image && image.imgName} />
          </div>
        </div>

      )}
    </Fragment>
  );
};

export default Image;
