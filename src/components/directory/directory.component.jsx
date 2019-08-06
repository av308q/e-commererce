import React from "react";

import MenuItem from "../menu-item/menu-item.componets";

import david from './david.jpeg'

import thumb from './thumb.jpeg';

import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "hats",
					imageUrl: thumb,
					size: "small",
					id: 1,
					linkUrl: "shop"
				},
				{
					title: "jackets",
					imageUrl: "https://i.ibb.co/3N7kr6n/new-paul.png",
					id: 2,
					linkUrl: "shop"
				},
				{
					title: "sneakers",
					imageUrl: "https://i.ibb.co/9gpSd8g/United-boost.jpg",
					id: 3,
					linkUrl: "shop"
				},
				{
					title: "womens",
					imageUrl: "https://i.ibb.co/5vTVCmQ/women-united.jpg",
					size: "large",
					id: 4,
					linkUrl: "shop"
				},
				{
					title: "mens",
					imageUrl: david,
					size: "large",
					id: 5,
					linkUrl: "shop"
				}
			]
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
