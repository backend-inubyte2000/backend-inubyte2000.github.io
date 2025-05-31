function getchannels() {
    channels = [
        ["https://therokuchannel.roku.com/watch/34335ef32c02519d897664a78767cc59", "loading.gif"],
        ["NULL", "NULL"],
        ["https://osm-use2.sr.roku.com/osm/v1/hls/use2/variant/929552e0c0b64d2c8292207463d052eb/live_720.m3u8", "https://backend-inubyte2000.github.io/tvm/ch2.gif"],
        ["http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-inubyte2000.github.io/tvm/ch3.gif"],
        ["http://v1.weatherscan.net/", "https://backend-inubyte2000.github.io/tvm/ch4.gif"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/62ba60f059624e000781c436/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c25e430-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=1b7de8e4-d114-4438-b098-6f7aee77b4be", "https://backend-inubyte2000.github.io/tvm/ch5.gif"],
        ["https://retroblast.tv/hls/stream.m3u8", "https://backend-inubyte2000.github.io/tvm/ch6.gif"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-inubyte2000.github.io/tvm/ch7.gif"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5fd7bca3e0a4ee0007a38e8c/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2cc208-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=9c78a281-5d61-4850-8b62-74632f015343", "https://backend-inubyte2000.github.io/tvm/ch8.gif"],
        ["https://master.nhkworld.jp/nhkworld-tv/playlist/live.m3u8", "https://backend-inubyte2000.github.io/tvm/ch9.gif"],
        ["http://vthanh.utako.moe/NHK_G/index.m3u8", "https://backend-inubyte2000.github.io/tvm/ch10.gif"],
        ["http://vthanh.utako.moe/NHK_E/index.m3u8", "https://backend-inubyte2000.github.io/tvm/ch11.gif"],
        ["http://vthanh.utako.moe/Nippon_TV/index.m3u8", "https://backend-inubyte2000.github.io/tvm/ch12.gif"],
        ["http://vthanh.utako.moe/TV_Asahi/index.m3u8", "https://backend-inubyte2000.github.io/tvm/ch13.gif"],
        ["http://vthanh.utako.moe/TBS/index.m3u8", "https://backend-inubyte2000.github.io/tvm/ch14.gif"],
        ["http://vthanh.utako.moe/TV_Tokyo/index.m3u8", "https://backend-inubyte2000.github.io/tvm/ch15.gif"],
        ["http://vthanh.utako.moe/Fuji_TV/index.m3u8", "https://backend-inubyte2000.github.io/tvm/ch16.gif"],
        ["http://vthanh.utako.moe/Tokyo_MX1/index.m3u8", "https://backend-inubyte2000.github.io/tvm/ch17.gif"]
    ];
    return channels;
}

function getbox() {
    channels = [
        "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",
        "NULL",
        "https://therokuchannel.roku.com/watch/34335ef32c02519d897664a78767cc59",
        "http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8",
        "http://v1.weatherscan.net/",
        "https://pluto.tv/us/live-tv/62ba60f059624e000781c436",
        "https://retroblast.tv/hls/stream.m3u8",
        "http://api.toonamiaftermath.com:3000/est/playlist.m3u8",
        "https://pluto.tv/us/live-tv/5fd7bca3e0a4ee0007a38e8c",
        "https://master.nhkworld.jp/nhkworld-tv/playlist/live.m3u8",
        "http://vthanh.utako.moe/NHK_G/index.m3u8",
        "http://vthanh.utako.moe/NHK_E/index.m3u8",
        "http://vthanh.utako.moe/Nippon_TV/index.m3u8",
        "http://vthanh.utako.moe/TV_Asahi/index.m3u8",
        "http://vthanh.utako.moe/TBS/index.m3u8",
        "http://vthanh.utako.moe/TV_Tokyo/index.m3u8",
        "http://vthanh.utako.moe/Fuji_TV/index.m3u8",
        "http://vthanh.utako.moe/Tokyo_MX1/index.m3u8"
    ];
    return channels;
}

function getinfo() {
    chdb = [
        ["NULL", "No Info"],
        ["NULL", "No Info"],
        ["PBS", "Educational Programming"],
        ["NEWSNAT", "24/7 News Service."],
        ["WEATHER", "24/7 Weather Service."],
        ["00REPLAY", "Free Movie Channel."],
        ["CARNET", "Cartoon Programming."],
        ["TOONAMI", "Cartoon and Anime Programming"],
        ["VEVOY2K", "Music Video Channel."],
        ["NHKWORLD", "News, Education, and General Programming.  ニュース、教育、一般番組。"],
        ["NHKG", "一般的なプログラミング。"],
        ["NHKE", "教育プログラミング。"],
        ["NTV", "ニュースアニメと一般番組。"],
        ["TVASAHI", "アニメと一般番組。"],
        ["TBS", "一般的なプログラミング。"],
        ["TVTOKYO", "アニメと一般番組。"],
        ["FUJITV", "アニメと一般番組。"],
        ["TOKYOMX", "アニメと一般番組。"]
    ];
    return chdb;
}

function getupdate() {
    update = 0;
    return update
}

function getupdateurl() {
    updateurl = "";
    return updateurl
}