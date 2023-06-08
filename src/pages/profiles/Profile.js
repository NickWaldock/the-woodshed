import React from 'react';
import styles from '../../styles/Profile.module.css';
import btnStyles from '../../styles/Button.module.css';
import { useCurrentUser } from '../../contexts/CurrentUserContexts';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';

const Profile = (props) => {
    const {profile, mobile, imageSize=55} = props;
    const {id, following_id, image, owner} = profile;

    // Get which user is logged in to hide their profile
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && 'flex-column'}`}
    >
      <div>
				<Link className='align-self-center' to={`/profiles/${id}`}>
					<Avatar src={image} height={imageSize} />
				</Link>
				<div className={`mx-2 ${styles.WordBreak}`}>
					<strong>{owner}</strong>
				</div>
			</div> 
    </div>
  )
}

export default Profile