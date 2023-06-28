import { rest } from "msw";


// Define a mock API response for automated testing
const baseURL = 'https://the-woodshed-api.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
		return res(ctx.json({
			"pk": 7,
			"username": "DerrickLovesDrums",
			"email": "",
			"first_name": "",
			"last_name": "",
			"profile_id": 7,
			"profile_image": "https://res.cloudinary.com/dnqpruigq/image/upload/v1/woodshed_media/../woodshed_media/profile-default_iqrrx0.png"
			}));
	}),
	rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
		return res(ctx.status(200));
	}),
  ];
