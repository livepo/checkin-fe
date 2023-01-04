import { View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import { AtNavBar } from 'taro-ui';
import request from '../../services/request';
import Taro from '@tarojs/taro';
import { Swiper, SwiperItem } from '@tarojs/components';

export default function Index() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    request({ url: '/checkin-users' }).then(resp => setUsers(resp.data));
  }, []);

  return (
    <View>
      <AtNavBar
        onClickLeftIcon={() => Taro.navigateBack()}
        color="#000"
        leftIconType="chevron-left"
        style={{ marginBottom: '20px' }}
      >
        <View>员工风采展示</View>
      </AtNavBar>
      <View style={{ margin: '0 auto', textAlign: 'center' }}>
        <Swiper autoplay>
          {users.map(item => (
            <SwiperItem>{item.username}</SwiperItem>
          ))}
        </Swiper>
      </View>
    </View>
  );
}
