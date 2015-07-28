# CloudEx
浏览器云插件，可根据网址动态加载插件代码

>支持谷歌chrome浏览器，360浏览器和其他能够支持`.crx`浏览器扩展的浏览器。

浏览器安装本插件后，可根据服务器设置的网址，在不同网址自动加载预定的js脚本到当前网页。支持`http`和`https`。可作为插件测试环境用于项目开发调试，也可完善后作为脚本平台使用，如页游插件平台等。

###安装

`extensions`文件夹中是插件源代码，修改其中`config.js`中的服务器地址为您的服务器地址，根据需求完善`popup.html`页面的界面和其他功能后，打包为crx扩展。

`server`文件夹为服务器端文件，根据扩展请求的网址分发不同的js脚本给浏览器扩展。脚本文件存放在`storage`文件夹中，以base64编码后的域名和网址作为默认脚本名。自带百度首页的示例，加载后会在百度首页下方插入一个CloudEx运行提示。

**重要:** 这是一个基本功能框架，只提供基础功能，也就是说并不包含ui美化，用户认证，脚本管理等功能，使用前请根据需求自行完善代码功能。


