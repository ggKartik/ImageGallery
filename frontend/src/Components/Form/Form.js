import {  useState, React } from "react";
import { addimageaction } from "../../Redux/actions/imageAction";
import {  useDispatch } from "react-redux";
import './Form.css'
const Form = () => {
const dispatch = useDispatch();
  const [formdata, setformdata] = useState({
    imgName: "",
    imgDetails: "",
    imgUrl: "",
  });
  // Used to change the data fetched from editform
  const changedata = (e) => {
    const fieldname = e.target.name;
    const value = e.target.value;
    // fetch old data
    const newformdata = { ...formdata };
    // update given field with value
    newformdata[fieldname] = value;
    // updating data
    setformdata(newformdata);
  };
  // function made to add new data to table
  const adddata = (e) => {
    e.preventDefault();
    dispatch(addimageaction(formdata))
    dispatch({type:"ADD_IMAGE_RESET"});
    // call axios
    // resetting the state
    setformdata({
        imgName: "",
        imgDetails: "",
        imgUrl: "",
    });
  };
  return (
    <div className="card-form">
      <form className="signup" onSubmit={adddata}>
        <div className="form-title">Add a new Image</div>
        <div className="form-body">
          <div className="row">
            <input
              type="text"
              placeholder="Image Name*"
              name="imgName"
              value={formdata.imgName}
              onChange={changedata}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Image URL*"
              name="imgUrl"
              value={formdata.imgUrl}
              onChange={changedata}
              autoComplete="off"
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Image Details*"
              name="imgDetails"
              value={formdata.imgDetails}
              onChange={changedata}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="rule"></div>
        <div className="form-footer">
          <button type="submit"><span style={{color: "white"}}>Add Data</span></button>
        </div>
      </form>
    </div>
  );
};

export default Form;
