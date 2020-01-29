
export const BASE_URL = process.env.NODE_ENV === 'production' ?
  'http://118.190.36.141/api' : 'http://127.0.0.1:8099/api';

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
   * POST logout
   * 注销
   * @method POST
   */

  logout: '/user/logout',
  /**
   * POST register
   * 注册
   * @method POST
   */
  register: '/user/register',
  /**
   * POST get user info
   * 获取用户信息
   * @method POST
   */
  getUserInfo: '/user/getInfo',
  /**
   * PUT get user info
   * 更新用户信息
   * @method PUT
   */
  updateUserInfo: '/user/updateInfo',
  /**
   * POST save comment
   * 保存评论
   * @method POST
   */
  saveComment: '/comment/save',
  /**
   * GET comment list
   * 保存评论
   * @method GET
   */
  getCommentList: '/comment/list',
};
