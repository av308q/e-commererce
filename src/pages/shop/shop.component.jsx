import React from 'react';

import CollectionsOverview from '../../components/components-overview/collections-overview.components';


import {selectCollections} from '../../redux/shop/shop-selector'

const ShopPage = ({collections })=> (
			<div className="Shop-Page">
				<CollectionsOverview/>
			</div>
		);


		const mapSateToProps = createStructuredSelector({
			collections: selectCollections
		});

export default ShopPage;
