import { View } from '@tarojs/components';
import React, { useState } from 'react';
import { AtForm, AtImagePicker, AtButton, AtInput } from 'taro-ui';
import request from '../../services/request';

export default function Index() {
  const [username, setUsername] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [poster, setPoster] = useState<string>('');

  return (
    <View>
      <View style={{ marginBottom: '20px', textAlign: 'center' }}>
        填写签到信息
      </View>
      <AtForm>
        <AtInput
          name="name"
          title="姓名"
          type="text"
          onChange={(value: string) => setUsername(value)}
        />
        <View style={{ margin: '0 auto', textAlign: 'center' }}>
          上传头像
          <AtImagePicker files={undefined} onChange={undefined} />
        </View>
        <View style={{ margin: '0 auto', textAlign: 'center' }}>
          上传生活照
          <AtImagePicker files={undefined} onChange={undefined} />
        </View>
        <AtButton
          type="primary"
          onClick={() =>
            request({
              method: 'POST',
              url: '/checkin',
              data: {
                username: username,
                avatar: avatar,
                poster: poster,
              },
            })
          }
        >
          提交
        </AtButton>
      </AtForm>
    </View>
  );
}
