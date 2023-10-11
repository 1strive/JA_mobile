import React from 'react'
import { SafeAreaView, Platform } from 'react-native'
import { WebView } from 'react-native-webview'

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <WebView
        source={{
          uri: `${Platform.OS === 'android' ? 'file:///android_asset/' : ''
            }Web.bundle/index.html`,
          // uri: `https://www.juejin.cn`,
          // uri: 'http://localhost:8000/'
        }}
        originWhitelist={['*']}
        style={{
          flex: 1,
        }}
      />
    </SafeAreaView>
  )
}

export default App
