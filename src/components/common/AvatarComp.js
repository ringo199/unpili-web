import { Avatar } from 'antd';
import PropTypes from 'prop-types';

const AvatarComp = ({ url }) => {
  return (
    <div>
      {url ? <Avatar src={url} /> : <Avatar icon='user' />}
    </div>
  );
};

export default AvatarComp;

AvatarComp.propTypes = {
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
};
