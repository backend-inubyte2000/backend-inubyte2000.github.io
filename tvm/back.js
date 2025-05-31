function getchannels() {
    channels = [
        ["https://therokuchannel.roku.com/watch/34335ef32c02519d897664a78767cc59", "loading.png"],
        ["NULL", "NULL"],
        ["https://osm-use2.sr.roku.com/osm/v1/hls/use2/variant/929552e0c0b64d2c8292207463d052eb/live_720.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch2.png"],
        ["http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch3.png"],
        ["http://v1.weatherscan.net/", "https://backend-inubyte2000.github.io/tvnet/v2/ch4.png"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/62ba60f059624e000781c436/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c25e430-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=1b7de8e4-d114-4438-b098-6f7aee77b4be", "https://backend-inubyte2000.github.io/tvnet/v2/ch5.png"],
        ["https://retroblast.tv/hls/stream.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch6.png"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch7.png"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5fd7bca3e0a4ee0007a38e8c/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2cc208-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=9c78a281-5d61-4850-8b62-74632f015343", "https://backend-inubyte2000.github.io/tvnet/v2/ch8.png"],
        ["https://master.nhkworld.jp/nhkworld-tv/playlist/live.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch9.png"],
        ["http://vthanh.utako.moe/NHK_G/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch10.gif"],
        ["http://vthanh.utako.moe/NHK_E/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch11.gif"],
        ["http://vthanh.utako.moe/Nippon_TV/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch12.gif"],
        ["http://vthanh.utako.moe/TV_Asahi/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch13.gif"],
        ["https://tbs5.mov3.co/hls/tbs.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch14.gif"],
        ["http://vthanh.utako.moe/TV_Tokyo/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch15.gif"],
        ["http://vthanh.utako.moe/Fuji_TV/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch16.gif"],
        ["http://vthanh.utako.moe/Tokyo_MX1/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch17.gif"]
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
        "https://tbs5.mov3.co/hls/tbs.m3u8",
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
        ["NEWSNAT", "https://backend-inubyte2000.github.io/tvnet/v2/ch3.png"],
        ["WEATHER", "https://backend-inubyte2000.github.io/tvnet/v2/ch4.png"],
        ["00REPLAY", "https://backend-inubyte2000.github.io/tvnet/v2/ch5.png"],
        ["CARNET", "https://backend-inubyte2000.github.io/tvnet/v2/ch6.png"],
        ["TOONAMI", "https://backend-inubyte2000.github.io/tvnet/v2/ch7.png"],
        ["VEVOY2K", "https://backend-inubyte2000.github.io/tvnet/v2/ch8.png"],
        ["NHKWORL", "https://backend-inubyte2000.github.io/tvnet/v2/ch9.png"],
        ["NHKG", "https://backend-inubyte2000.github.io/tvnet/v2/ch10.gif"],
        ["NHKE", "https://backend-inubyte2000.github.io/tvnet/v2/ch11.gif"],
        ["NTV", "https://backend-inubyte2000.github.io/tvnet/v2/ch12.gif"],
        ["TVASAHI", "https://backend-inubyte2000.github.io/tvnet/v2/ch13.gif"],
        ["TBS", "https://backend-inubyte2000.github.io/tvnet/v2/ch14.gif"],
        ["TVTOKYO", "https://backend-inubyte2000.github.io/tvnet/v2/ch15.gif"],
        ["FUJITV", "https://backend-inubyte2000.github.io/tvnet/v2/ch16.gif"],
        ["TOKYOMX", "https://backend-inubyte2000.github.io/tvnet/v2/ch17.gif"]
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