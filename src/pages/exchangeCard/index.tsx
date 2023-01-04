import { View } from '@tarojs/components';
import { AtButton, AtList, AtListItem, AtNavBar } from 'taro-ui';
import { useEffect, useState } from 'react';
import React from 'react';
import request from '../../services/request';
import Taro from '@tarojs/taro';

export default function Index() {
  const [pairs, setPairs] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const findUsernameByID = (id: number) => {
    for (let user of users) {
      console.log('user', user);
      if (user.id == id) {
        return user.username;
      }
    }
    return '-';
  };

  useEffect(() => {
    request({ url: '/checkin-users' }).then(resp => setUsers(resp.data));
  }, []);

  useEffect(() => {
    request({ url: '/exchange-card-pairs' }).then(resp => setPairs(resp.data));
  }, []);
  return (
    <View>
      <AtNavBar
        style={{ marginBottom: '20px' }}
        onClickLeftIcon={() => Taro.navigateBack()}
        color="#000"
        leftIconType="chevron-left"
      >
        <View>交换贺卡</View>
      </AtNavBar>
      <AtButton
        onClick={() =>
          request({
            url: '/generate-exchange-card-pairs',
            method: 'POST',
          }).then(() =>
            request({ url: '/exchange-card-pairs' }).then(resp =>
              setPairs(resp.data),
            ),
          )
        }
      >
        随机互送贺卡
      </AtButton>
      {users && (
        <AtList>
          {pairs.map(item => (
            <AtListItem
              title={
                findUsernameByID(item.send_id) +
                '-->' +
                findUsernameByID(item.recv_id)
              }
            />
          ))}
        </AtList>
      )}
    </View>
  );
}
