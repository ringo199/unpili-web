import PropTypes from 'prop-types';

const UserDetail = (props) => {
  console.log('props', props);

  return (
    <div>
      <h1>视频标题：{props.title}</h1>
      <h1>up： {props.createUser}</h1>
      <video width='320' height='240' src={props.url} controls />
    </div>
  );
};

export default UserDetail;

UserDetail.propTypes = {
  router: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  createUser: PropTypes.string.isRequired
};
