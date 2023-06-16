import React from "react";
import appStyles from "../../App.module.css";
import styles from "../../styles/PopularProfiles.module.css"
import { Container } from "react-bootstrap";
import Asset from "../../components/Asset";
import Profile from "./Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";

const PopularProfiles = ({ mobile }) => {

	const {popularProfiles} = useProfileData();

  // Display popular profiles, or spinner when data is loading
  return (
    <Container
      className={`${appStyles.Content} ${styles.Font}
				${mobile && 'd-lg-none text-center mb-3'}`}
    >
      {popularProfiles.results.length ? (
        <>
        <div className={styles.Title}>
          <span >Most</span>
          <span>Followed</span>
          <span>Profiles</span>
        </div>
					{mobile ? (
						<div className='d-flex justify-content-around'>
							{popularProfiles.results.slice(0, 4).map((profile) => (
            		<Profile key={profile.id} profile={profile} mobile />
          ))}
						</div>
					) : (
						<div>
							{popularProfiles.results.map((profile) => (
								<Profile key={profile.id} profile={profile} />
							))}
						</div>
					)}
          
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
