import { Component, useState } from 'react';
import { Button, View } from '@tarojs/components';
import {
  AtList,
  AtListItem,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader,
} from 'taro-ui';
import './index.less';
import Taro from '@tarojs/taro';
import { QRCode } from 'taro-code';
import React from 'react';

export default function Index() {
  const [showQrCode, setShowQrCode] = useState<boolean>(false);

  return (
    <View className="index">
      <AtList>
        <AtListItem
          title="生成签到二维码"
          onClick={() => setShowQrCode(true)}
          iconInfo={{ size: 25, color: '#78A4FA', value: 'bookmark' }}
        />
        <AtListItem
          title="签到用户列表"
          onClick={() => Taro.navigateTo({ url: '/pages/userlist/index' })}
          arrow="right"
          iconInfo={{ size: 25, color: '#78A4FA', value: 'user' }}
        />
        <AtListItem
          title="交换贺卡"
          arrow="right"
          onClick={() => Taro.navigateTo({ url: '/pages/exchangeCard/index' })}
          iconInfo={{ size: 25, color: '#78A4FA', value: 'money' }}
        />
        <AtListItem
          title="抽奖"
          arrow="right"
          onClick={() => Taro.navigateTo({ url: '/pages/lottery/index' })}
          iconInfo={{ size: 25, color: '#78A4FA', value: 'heart' }}
        />
        <AtListItem
          title="员工风采"
          arrow="right"
          onClick={() => Taro.navigateTo({ url: '/pages/member/index' })}
          iconInfo={{ size: 25, color: '#78A4FA', value: 'camera' }}
        />
      </AtList>

      <AtModal isOpened={showQrCode}>
        <AtModalHeader>请扫描二维码签到</AtModalHeader>
        <AtModalContent>
          <View style={{ margin: '0 auto', textAlign: 'center' }}>
            <QRCode
              style={{ height: '80%' }}
              text="https://lottery.livepo.top/#/pages/checkin/index"
            />
          </View>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => setShowQrCode(false)}>取消</Button>
        </AtModalAction>
      </AtModal>
    </View>
  );
}
