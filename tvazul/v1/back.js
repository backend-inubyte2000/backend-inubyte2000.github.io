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
        ["https://www.rtp.pt/play/direto/rtp1", "https://backend-inubyte2000.github.io/tvazul/v1/banners/rtp1.svg"],
        ["https://streaming-live.rtp.pt/liverepeater/smil:rtpi.smil/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/rtp2.svg"],
        ["https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/sic.png"],
        ["https://d277k9d1h9dro4.cloudfront.net/out/v1/293e7c3464824cbd8818ab8e49dc5fe9/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/sicnoticias.svg"],
        ["https://raw.githubusercontent.com/ipstreet312/freeiptv/master/ressources/tvipt/sh/tvi.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tvi.png"],
        ["https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tvificao.png"],
        ["https://video-auth4.iol.pt/live_tvi_reality/live_tvi_reality/edge_servers/tvireality-720_passthrough/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tvireality.png"],
        ["https://video-auth2.iol.pt/live_vmais/live_vmais/edge_servers/vmais-720p/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/vplus.png"],
        ["https://live3.tdm.com.mo/ch2/ch2.live/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tdm.png"],
        ["https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/recordtv.png"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/6806d62369aec5b19cd628c0/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-inubyte2000.github.io/tvazul/v1/banners/hiya.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/604b79c558393100078faeef/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-inubyte2000.github.io/tvazul/v1/banners/anime.png"],
        ["http://mytv.dothome.co.kr/ch/catv/7.php", "https://backend-inubyte2000.github.io/tvazul/v1/banners/kbsworld.png"],
        ["http://mytv.dothome.co.kr/ch/catv/1.php", "https://backend-inubyte2000.github.io/tvazul/v1/banners/kbs1.png"],
        ["http://mytv.dothome.co.kr/ch/catv/3.php", "https://backend-inubyte2000.github.io/tvazul/v1/banners/kbs2.png"],
        ["https://ebsonair.ebs.co.kr/ebs1familypc/familypc1m/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/ebs1.png"],
        ["https://ebsonair.ebs.co.kr/ebs2familypc/familypc1m/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/ebs2.png"],
        ["http://www.hwado.net/webtv/catv/503_CFEA7803.php", "https://backend-inubyte2000.github.io/tvazul/v1/banners/mbc.png"],
        ["https://stream1.knn.co.kr/hls/9ly4534y7dm2xfa123r2_tv/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/sbs.png"],
        ["https://tv.nknews.org/tvhls/stream.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/dprk.png"],
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