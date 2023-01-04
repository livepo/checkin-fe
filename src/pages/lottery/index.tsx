import { View } from '@tarojs/components';
import React, { useState } from 'react';
import {
  AtButton,
  AtForm,
  AtInput,
  AtNavBar,
  AtTabs,
  AtTabsPane,
} from 'taro-ui';
import request from '../../services/request';
import Taro from '@tarojs/taro';

export default function Index() {
  const [current, setCurrent] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const tabList = [
    { title: '一等奖', order: 0 },
    { title: '二等奖', order: 1 },
    { title: '三等奖', order: 2 },
  ];
  return (
    <View>
      <AtNavBar
        onClickLeftIcon={() => Taro.navigateBack()}
        color="#000"
        leftIconType="chevron-left"
        style={{ marginBottom: '20px' }}
      >
        <View>年会抽奖</View>
      </AtNavBar>
      <AtTabs
        current={current}
        scroll
        tabList={tabList}
        onClick={index => setCurrent(index)}
      >
        {tabList.map(item => (
          <AtTabsPane current={item.order} index={item.order}>
            <AtForm>
              <AtInput
                name="description"
                onChange={(value: string) => setDescription(value)}
                title="奖品描述"
              />
              <AtInput
                name="amount"
                type="number"
                onChange={(value: number) => setAmount(value)}
                title="中奖人数"
              />
              <AtButton
                type="primary"
                onClick={() =>
                  request({
                    url: '/lottery-setup',
                    method: 'POST',
                    data: {
                      label: tabList[item.order].title,
                      description: description,
                      amount: amount,
                    },
                  })
                }
              >
                确认
              </AtButton>
            </AtForm>
            <AtButton>开始抽奖</AtButton>
          </AtTabsPane>
        ))}
      </AtTabs>
    </View>
  );
}
