
import list from './list';
import login from './login';
import register from './register';

const userSagas = [
  ...list,
  ...login,
  ...register
];

export default userSagas;