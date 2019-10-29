import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/components-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';




const ShopPage = ({match})=> (
			<div className="Shop-Page">
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
			</div>
		);


	

export default ShopPage;
