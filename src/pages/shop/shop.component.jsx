import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/components-overview/collections-overview.components';




const ShopPage = ({match})=> (
			<div className="Shop-Page">
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
			</div>
		);


	

export default ShopPage;
