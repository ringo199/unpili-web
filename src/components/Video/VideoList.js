
import { Table } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';

const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title',
  render: (text, rows) => (
    <Link href={`/video/[videoPage]`} as={`/video/${rows.id}`}>
      <a>{text}</a>
    </Link>
  )
}, {
  title: '封面图',
  dataIndex: 'cover',
  key: 'cover',
}, {
  title: '资源路径',
  dataIndex: 'url',
  key: 'url',
}];

const VideoList = ({ rows }) => {
  return (
    <Table
      rowKey={record => record.id}
      style={{ minWidth: '600px' }}
      dataSource={rows}
      columns={columns}
      bordered
    />
  );
};

VideoList.propTypes = {
  rows: PropTypes.array.isRequired
};

export default VideoList;