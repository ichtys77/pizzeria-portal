import * as React from 'react';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import Typography from '@material-ui/core/Typography';

const data = [
  { status: 'new', orderCount: 9 },
  { status: 'ordered', orderCount: 10 },
  { status: 'ready', orderCount: 9 },
  { status: 'in delivery', orderCount: 2 },
  { status: 'delivered', orderCount: 6 },
  { status: 'done', orderCount: 13 },
  { status: 'cancelled', orderCount: 2 },
];

class ChartBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Chart
        data={chartData}
      >
        <ArgumentAxis />
        <ValueAxis max={7} />
        <BarSeries
          valueField="orderCount"
          argumentField="status"
        />
        <Typography variant="h5">ORDERS STATS in last 2 hours</Typography>
        <Animation />
      </Chart>
    );
  }
}

export default ChartBar;
