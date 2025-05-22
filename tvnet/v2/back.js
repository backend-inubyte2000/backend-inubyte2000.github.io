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
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74", "https://backend-inubyte2000.github.io/tvnet/v2/ch8.png"],
        ["https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch9.png"],
        ["https://www.rtp.pt/play/direto/rtp1", "https://backend-inubyte2000.github.io/tvnet/v2/ch10.png"],
        ["https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch11.png"],
        ["https://d277k9d1h9dro4.cloudfront.net/out/v1/293e7c3464824cbd8818ab8e49dc5fe9/index.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch12.png"],
        ["https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch13.png"],
        ["https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch14.png"],
        ["https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch15.png"],
        ["https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch16.png"],
        ["https://video09.logicahost.com.br/redebrasiloficial/redebrasiloficial/playlist.m3u8", "https://backend-inubyte2000.github.io/tvnet/v2/ch17.png"]
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