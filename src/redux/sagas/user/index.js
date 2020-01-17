
import list from './list';
import login from './login';
import register from './register';
import info from './info';

const userSagas = [
  ...list,
  ...login,
  ...register,
  ...info
];

export default userSagas;