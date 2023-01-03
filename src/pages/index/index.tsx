import { Component, useState } from 'react';
import { Button, View } from '@tarojs/components';
import { AtList, AtListItem, AtModal } from 'taro-ui';
import './index.less';
import Taro from '@tarojs/taro';
import { QRCode } from 'taro-code';

export default function Index() {
  const [showQrCode, setShowQrCode] = useState<boolean>(false);

  return (
    <View className="index">
      <AtList>
        <AtListItem
          title="生成签到二维码"
          onClick={() => setShowQrCode(true)}
        />
        <AtListItem
          title="签到用户列表"
          onClick={() => undefined)}
          arrow="right"
        />
        <AtListItem title="交换贺卡" arrow="right" />
        <AtListItem title="抽奖" arrow="right" />
      </AtList>

      <AtModal
        isOpened={showQrCode}
        title="扫码签到"
        cancelText="关闭"
        onCancel={() => setShowQrCode(false)}
        content="qrcode here"
      />
    </View>
  );
}
