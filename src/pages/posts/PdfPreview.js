import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/PdfPreview.module.css";

const PdfPreview = ({ data, postId }) => {
  // const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    subtitle: "",
    description: "",
    instrument: "",
    tags: "",
    file: "",
  });

  // All post instance data is required to be called to gain access to the file
  const { title, subtitle, description, instrument, tags, file } = postData;

  // const fileInput = useRef(null);
  
  const history = useHistory();

  // Find post id from url for component in detail view
  // If not use destructured postId prop for list views
  const paramId = useParams();
  const id = postId || paramId.id;

  const [post, setPost] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
				const {data: post} = await Promise.all([
					axiosReq.get(`/posts/${id}`)
				])
				setPost({results: [post]});
      } catch (err) {
        console.log(err);
      }
    };
		handleMount();
  }, [id]);

  return (
    <div
      className={`${styles.Container} embed-responsive embed-responsive-1by1`}
    >
      <object 
        className="embed-responsive-item" 
        data={data}
        alt='PDF File'
        aria-labelledby="PDF Preview"
        aria-label="PDF Preview"
      ></object>
    </div>
  );
};

export default PdfPreview;
