import { ChartRefConfig } from '../interface';

/**
 * 获取或者绑定图表实例
 */
export const getChart = (chartRef: ChartRefConfig | undefined, chart: any) => {
    if (typeof chartRef === 'undefined') {
        return;
    }
    if (typeof chartRef === 'function') {
        chartRef(chart);
    } else {
        chartRef.current = chart;
    }
};
