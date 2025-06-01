function getchannels() {
    let channeldb = [
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-inubyte2000.github.io/tvazul/v1/banners/bobross.svg"],
        ["http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/newsnation.svg"],
        ["http://v2.weatherscan.net/", "https://backend-inubyte2000.github.io/tvazul/v1/banners/weather.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tnt.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74", "https://backend-inubyte2000.github.io/tvazul/v1/banners/paramount.svg"],
        ["https://fl3.moveonjoy.com/FREE_FORM/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/freeform.svg"],
        ["https://retroblast.tv/hls/stream.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/cn.png"],
        ["https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/awe.png"],
        ["https://streaming-live.rtp.pt/liverepeater/smil:rtpi.smil/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/rtp.svg"],
        ["https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/sic.png"],
        ["https://d277k9d1h9dro4.cloudfront.net/out/v1/293e7c3464824cbd8818ab8e49dc5fe9/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/sicnoticias.svg"],
        ["https://raw.githubusercontent.com/ipstreet312/freeiptv/master/ressources/tvipt/sh/tvi.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tvi.png"],
        ["https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/recordtv.png"],
        ["https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/sbt.png"],
        ["https://player-tvcultura.stream.uol.com.br/live/tvcultura_lsd.m3u8?vhost=player-tvcultura.stream.uol.com.br", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tvcultura.svg"],
        ["https://video04.logicahost.com.br/tvpampa/tvpampa/chunklist_w1441945147.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/redebrasil.png"],
    ];
    return channeldb;
}

function checkupdate() {
    needupdate = 0;
    return needupdate;
}

function geturl() {
    url = "";
    return url
}