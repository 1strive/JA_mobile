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
        javaScriptEnabled={true} // 启用JavaScript执行
        allowFileAccess={true}
        style={{
          flex: 1,
        }}
        decelerationRate='normal'
        scrollEnabled={true}
        useWebKit={true}
        mediaPlaybackRequiresUserAction={true}
        mixedContentMode="compatibility"
        allowingReadAccessToURL="*"
      />
    </SafeAreaView>
  )
}

export default App
