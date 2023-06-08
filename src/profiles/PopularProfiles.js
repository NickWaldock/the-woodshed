import React, { useEffect, useState } from 'react'
import appStyles from '../../src/App.module.css'
import { Container } from 'react-bootstrap'
import { axiosReq } from '../api/axiosDefaults';

const PopularProfiles = () => {
	const [profileData, setProfileData] = useState({
    pageProfile: {results: [] },
		popularProfiles: { results: [] },
	});
	const {popularProfiles} = profileData;
	const currentUser = useCurrentUser();

	useEffect(() => {
		const handleMount = async () => {
			try {
				const {data} = await axiosReq.get(
					'/profiles/?ordering=-followers_count'
				);
				setProfileData(prevState => ({
					...prevState,
					popularProfiles: data,
				}));
			} catch(err){
				console.log(err)
			}
		};
		handleMount();
	}, [currentUser]);

  return (
    <Container className={appStyles.Content}>
        <p>Most followed profiles</p>
    </Container>
  )
}

export default PopularProfiles