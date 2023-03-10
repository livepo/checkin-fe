import { View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import { AtButton, AtList, AtListItem, AtNavBar } from 'taro-ui';
import request from '../../services/request';
import Taro from '@tarojs/taro';

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
        <View>签到用户列表</View>
      </AtNavBar>
      <AtList>
        {users.map(item => (
          <AtListItem
            title={item.username}
            thumb={item.avatar}
            extraText="删除"
          />
        ))}
      </AtList>
    </View>
  );
}
