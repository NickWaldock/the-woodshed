import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/PdfPreview.module.css";

const PdfPreview = () => {
	const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    subtitle: "",
    description: "",
    instrument: "",
    tags: "",
    file: "",
  });
  const { title, subtitle, description, instrument, tags, file } = postData;
  const fileInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const {
          title,
          subtitle,
          description,
          instrument,
          tags,
          file,
          is_owner,
        } = data;

        is_owner
          ? setPostData({
              title,
              subtitle,
              description,
              instrument,
              tags,
              file,
            })
          : history.push("/");
      } catch (err) {console.log(err)}
    };
		handleMount();
  }, [history, id]);

  // Function to allow the form fields to continually display inputted data
  // const handleChange = (event) => {
  //   setPostData({
  //     ...postData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // Function to handle changing and previewing PDF files before submission
  const handleChangeFile = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(file);
      setPostData({
        ...postData,
        file: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  return (
    <div className={`${styles.Container} embed-responsive embed-responsive-1by1`}>
      <object className="embed-responsive-item" data={file}></object>
    </div>
  );
};

export default PdfPreview;
