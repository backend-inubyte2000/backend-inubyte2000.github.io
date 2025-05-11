function getchannels() {
    channels = [
        ["https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8", "loading.gif"],
        ["NULL", "NULL"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-inubyte2000.github.io/tvnet/v2/ch2.gif"],
        ["http://fl3.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch3.gif"],
        ["http://v2.weatherscan.net/", "https://backend-inubyte2000.github.io/tvnet/v2/ch4.gif"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5fd7bb1f86d94a000796e2c2/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2cc207-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=0728470d-6a7e-40da-b12d-986993b83ec1", "https://backend-inubyte2000.github.io/tvnet/v2/ch5.gif"],
        ["https://retroblast.tv/hls/stream.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch6.gif"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch7.gif"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f4d86f519358a00072b978e/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c265961-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=71f86833-3dd6-41ac-a9b8-4a4ec8873306", "https://backend-inubyte2000.github.io/tvnet/v2/ch8.gif"],
        ["https://master.nhkworld.jp/nhkworld-tv/playlist/live.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch9.gif"],
        ["http://vthanh.utako.moe/NHK_G/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch10.gif"],
        ["http://vthanh.utako.moe/NHK_E/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch11.gif"],
        ["http://vthanh.utako.moe/Nippon_TV/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch12.gif"],
        ["http://vthanh.utako.moe/TV_Asahi/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch13.gif"],
        ["https://tbs5.mov3.co/hls/tbs.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch14.gif"],
        ["http://vthanh.utako.moe/TV_Tokyo/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch15.gif"],
        ["https://fujitv4.mov3.co/hls/fujitv.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch16.gif"],
        ["http://vthanh.utako.moe/Tokyo_MX1/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch17.gif"]
    ];
    return channels;
}

function getupdate() {
    update = 0;
    return update
}

function getupdateurl() {
    updateurl = "";
    return updateurl
}