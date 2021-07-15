import React from 'react';
import { Pie } from '../charts';

const PiePage: React.FC = () => {
  const data = [
    { country: 'Asia', year: '1750', value: 502 },
    { country: 'Asia', year: '1800', value: 635 },
    { country: 'Europe', year: '1750', value: 163 },
    { country: 'Europe', year: '1800', value: 203 },
  ];

  const config = {
    data,
    width: 400,
    height: 400,
    meta: {
      country: {
        alias: '国家',
        range: [0, 1],
      },
      value: {
        alias: '数量',
        formatter: (v: number) => {
          return `${v}个`;
        },
      },
    },
    angleField: 'value',
    colorField: 'country',
  };

  let chart: any;

  // 导出图片
  const downloadImage = () => {
    chart?.downloadImage();
  };

  // 获取图表 base64 数据
  const toDataURL = () => {
    console.log(chart?.toDataURL());
  };

  return (
    <div>
      <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
        导出图片
      </button>
      <button type="button" onClick={toDataURL}>
        获取图表信息
      </button>
      <Pie {...config} onReady={(chartInstance) => (chart = chartInstance)} />
    </div>
  );
};
export default PiePage;
