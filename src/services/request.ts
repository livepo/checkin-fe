import Taro from '@tarojs/taro';

const baseUrl = 'https://lottery.livepo.top/api/v1';

export default (options: any) => {
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...options.data,
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: (options.method || 'get').toUpperCase(),
  }).then(res => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (data.code !== 0) {
        Taro.showToast({
          title: data.msg,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};
