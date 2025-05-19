function getchannels() {
    channels = [
        ["https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8", "loading.png"],
        ["NULL", "NULL"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-inubyte2000.github.io/tvnet/v2/ch2.png"],
        ["http://fl3.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch3.png"],
        ["http://v2.weatherscan.net/", "https://backend-inubyte2000.github.io/tvnet/v2/ch4.png"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch5.png"],
        ["https://retroblast.tv/hls/stream.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch6.png"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch7.png"],
        ["https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch8.png"],
        ["http://mytv.dothome.co.kr/ch/catv/7.php", "https://backend-inubyte2000.github.io/tvnet/v2/ch9.png"],
        ["http://mytv.dothome.co.kr/ch/catv/1.php", "https://backend-inubyte2000.github.io/tvnet/v2/ch10.png"],
        ["http://mytv.dothome.co.kr/ch/catv/3.php", "https://backend-inubyte2000.github.io/tvnet/v2/ch11.png"],
        ["https://ebsonair.ebs.co.kr/groundwavefamilypc/familypc1m/playlist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch12.png"],
        ["https://ebsonair.ebs.co.kr/plus2familypc/familypc1m/playlist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch13.png"],
        ["http://www.hwado.net/webtv/catv/502_76142D8F.php", "https://backend-inubyte2000.github.io/tvnet/v2/ch14.png"],
        ["http://www.hwado.net/webtv/catv/503_CFEA7803.php", "https://backend-inubyte2000.github.io/tvnet/v2/ch15.png"],
        ["http://www.hwado.net/webtv/catv/52_440DDPPJ.php", "https://backend-inubyte2000.github.io/tvnet/v2/ch16.png"],
        ["https://tv.nknews.org/tvhls/stream.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch17.png"]
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