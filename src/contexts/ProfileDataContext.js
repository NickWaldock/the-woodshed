import { createContext, useContext, useState, useEffect } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import { axiosReq, axiosRes } from "../api/axiosDefaults";


export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children}) => {
	const [profileData, setProfileData] = useState({
		pageProfile: { results: [] },
		popularProfiles: { results: [] },
	});
	
	const currentUser = useCurrentUser();

	const handleFollow = async (clickedProfile) => {
		try {
			const {data} = await axiosRes.post('/followers/', {
				followed: clickedProfile.id
			});

		} catch(err){
			console.log(err)
		}
	};

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

return (
	<ProfileDataContext.Provider value={profileData}>
		<SetProfileDataContext.Provider value={{setProfileData, handleFollow}}>
			{children}
		</SetProfileDataContext.Provider>
	</ProfileDataContext.Provider>
	)
};

