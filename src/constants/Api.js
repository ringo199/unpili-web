
export const BASE_URL = process.env.NODE_ENV === 'production' ?
  'http://118.190.36.141/api' : 'http://127.0.0.1:8000/api';

// const API url
export const api = {
  /**
   * Get video list
   * 获取视频列表
   * @method GET
   */
  getVideoList: '/video/list',
  /**
   * Get video list
   * 获取某一视频
   * @method GET
   */
  getOneVideo: '/video/oneVideo',
  /**
   * POST save video
   * 保存已上传的视频
   * @method POST
   */
  uploadSave: '/video/save',
  /**
   * POST save file
   * 上传文件
   * @method POST
   */
  uploadFile: '/video/upload',
  /**
   * POST login
   * 登陆
   * @method POST
   */
  login: '/user/login',
  /**
   * POST register
   * 注册
   * @method POST
   */
  register: '/user/register'
};
