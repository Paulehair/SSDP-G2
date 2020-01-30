import React from 'react'
import { ConfigProvider } from 'antd'
import frFR from 'antd/es/locale/fr_FR'
import 'antd/dist/antd.css'
import { Calendar } from 'antd'

export default () => (
  <ConfigProvider locale={frFR}>
    <Calendar fullscreen={false} locale={frFR} />
  </ConfigProvider>
)
