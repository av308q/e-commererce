import david from "./david.jpeg";

import thumb from "./thumb.jpeg";

const INITIAL_STATE = {
	sections: [
		{
			title: "hats",
			imageUrl: thumb,
			size: "small",
			id: 1,
			linkUrl: "shop/hats"
		},
		{
			title: "jackets",
			imageUrl: "https://i.ibb.co/3N7kr6n/new-paul.png",
			id: 2,
			linkUrl: "shop/jackets"
		},
		{
			title: "sneakers",
			imageUrl: "https://i.ibb.co/9gpSd8g/United-boost.jpg",
			id: 3,
			linkUrl: "shop/sneakers"
		},
		{
			title: "womens",
			imageUrl: "https://i.ibb.co/5vTVCmQ/women-united.jpg",
			size: "large",
			id: 4,
			linkUrl: "shop/womens"
		},
		{
			title: "mens",
			imageUrl: david,
			size: "large",
			id: 5,
			linkUrl: "shop/mens"
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
