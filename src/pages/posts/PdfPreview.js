import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/PdfPreview.module.css";

const PdfPreview = ({postId}) => {
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

	// Find post id from url for component in detail view
	// If not use destructured postId prop for list views
  const paramId = useParams();
	const id = paramId.id || postId;


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

				// console.log(data, "<==data")

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
      } catch (err){console.log(err)}
    };
		handleMount();
  }, [history, id]);

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
