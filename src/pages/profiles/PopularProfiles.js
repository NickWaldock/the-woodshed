import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import Asset from "../../components/Asset";

const PopularProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });
  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [currentUser]);

  // Display popular profiles, or spinner when data is loading
  return (
    <Container
      className={`${appStyles.Content} 
				${mobile && 'd-lg-none text-center mb-3'}`}
    >
      {popularProfiles.results.length ? (
        <>
          <p>Most followed profiles</p>
					{mobile ? (
						<div className='d-flex justify-content-around'>
							{popularProfiles.results.slice(0, 4).map((profile) => (
            		<p key={profile.id}>{profile.owner}</p>
          ))}
						</div>
					) : (
						<div>
							{popularProfiles.results.map((profile) => (
								<p key={profile.id}>{profile.owner}</p>
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
