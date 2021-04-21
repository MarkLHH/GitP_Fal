import React from 'react';

// Widgets
import WidgetsSectionTitle from '../../widgets/WidgetsSectionTitle';
import WeeklySales from '../../dashboard-alt/WeeklySales'; // Need to have a copy of this file in this directory to create own card, now will use the template one to show things
import TotalOrder from '../../dashboard-alt/TotalOrder'; // Need to have a copy of this file in this directory to create own card, now will use the template one to show things
import TotalSales from '../../dashboard-alt/TotalSales'; // Need to have a copy of this file in this directory to create own card, now will use the template one to show things

// Data
import weeklySales from '../../../data/dashboard/weeklySales';
import totalSales from '../../../data/dashboard/totalSales';

const sectionOne = () => {
	<>
		<WidgetsSectionTitle
			title="This is section 1 for Mark's Page"
			subtitle="This are some text for the subtitle"
			className="mb-4 mt-3"
			icon="percentage"
		/>
		<Row noGutters>
			<Col md={6} lg={4} xl={6} className="col-xxl-4 mb-3 pr-md-2">
				<WeeklySales data={weeklySales} />
			</Col>
			<Col md={6} lg={4} xl={6} className="col-xxl-4 mb-3 pr-md-2 pr-lg-2 pr-xl-2 pr-xxl-0 mb-3">
				<TotalOrder data={totalOrder} />
			</Col>
		</Row>
		<Row noGutters>
			<Col md={6} lg={4} xl={6} className="col-xxl-4 mb-3 pr-md-2">
				<TotalSales data={totalSales} />
			</Col>
		</Row>
	</>
};

