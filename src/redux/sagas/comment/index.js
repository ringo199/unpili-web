import list from './list';
import save from './save';
import detail from './detail';

const commentSagas = [
  ...list,
  ...save,
  ...detail
];

export default commentSagas;
