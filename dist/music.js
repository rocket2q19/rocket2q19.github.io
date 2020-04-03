const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    mini: false, //迷你模式
    autoplay: false, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 3, //歌词传递方式
    audio: [ //音频信息,包含以下
        {
            name: '打上花火', //音频名称
            artist: '米津玄师', //音频艺术家
            url: 'https://sharefs.yun.kugou.com/202004032209/a0fec28b71bf0669be76aa494272255f/G122/M08/08/11/WpQEAFpCf7SAYHlTAEa0dcFnq6k852.mp3', //音频外链
            cover: 'https://img3.doubanio.com/view/subject/m/public/s29483393.jpg', //音频封面
            lrc: 'J:\2020Winter\Pytorch_test\dataset\DAOKO × 米津玄師-打上花火.lrc', //音频歌词，配合上面的lrcType使用
            theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
       
    ]
});