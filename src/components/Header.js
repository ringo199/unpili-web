// import Link from 'next/link';
import TopMenu from './TopMenu';
// import getConfig from 'next/config';
import { color_white } from '../constants/CustomTheme';
// import DynamicAntdTheme from 'dynamic-antd-theme';
import Register from '../containers/user/register';
import Login from '../containers/user/login';

// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
// const { publicRuntimeConfig: { staticFolder } } = getConfig();

const Header = () => (
  <div id='header_bar' className='container'>
    <style jsx>{`
      .container {
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        width: 100%;
        height: 60px;
        background-color: ${color_white};
        z-index: 999;
      }
      .logo-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 15px;
        left: 20px;
        cursor: pointer;
      }
      .sys-name {
        display: inline-block;
        margin-left: 10px;
        font-size: 20px;
        font-weight: 600;
      }
      .logo {
        width: 30px;
        height: 30px;
      }
      .right-container {
        position: absolute;
        right: 20px;
        display: flex;
      }
    `}</style>
    <TopMenu></TopMenu>
    {/* <DynamicAntdTheme
      style={{ display: 'flex', marginLeft: '10px' }}
      primaryColor='#52c41a'
    /> */}
    <div className='right-container'>
      <Login />
      <Register />
    </div>
  </div>
);

export default Header;
