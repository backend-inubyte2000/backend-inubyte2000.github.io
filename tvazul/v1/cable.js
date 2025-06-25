function getchannels() {
    let channeldb = [
        ["index.html", "NULL"],
        ["index2.html#https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-inubyte2000.github.io/tvazul/v1/banners/bobross.svg"],
        ["index3.html#http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/newsnation.svg"],
        ["index2.html#http://v2.weatherscan.net/", "https://backend-inubyte2000.github.io/tvazul/v1/banners/weather.svg"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tnt.svg"],
        ["index2.html#https://pluto.tv/us/live-tv/5cb0cae7a461406ffe3f5213", "https://backend-inubyte2000.github.io/tvazul/v1/banners/paramount.svg"],
        ["index3.html#https://fl3.moveonjoy.com/FREE_FORM/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/freeform.svg"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/cn.png"],
        ["index3.html#https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/awe.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/smil:rtpi.smil/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/rtp1.svg"],
        ["index3.html#https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/sic.png"],
        ["index3.html#https://d277k9d1h9dro4.cloudfront.net/out/v1/293e7c3464824cbd8818ab8e49dc5fe9/index.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/sicnoticias.svg"],
        ["index3.html#https://raw.githubusercontent.com/ipstreet312/freeiptv/master/ressources/tvipt/sh/tvi.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tvi.png"],
        ["index3.html#https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tvificao.png"],
        ["index3.html#https://video-auth4.iol.pt/live_tvi_reality/live_tvi_reality/edge_servers/tvireality-720_passthrough/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/tvireality.png"],
        ["index3.html#https://video-auth2.iol.pt/live_vmais/live_vmais/edge_servers/vmais-720p/playlist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/vplus.png"],
        ["index3.html#https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://backend-inubyte2000.github.io/tvazul/v1/banners/recordtv.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["Bob Ross", "24/7 Joy of Painting"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "24/7 Weather Service"],
        ["TNT", "Movies and sports"],
        ["Paramount", "24/7 Paramount films"],
        ["Freeform", "Disney films"],
        ["Cartoon Network", "Cartoons for all ages"],
        ["AWE Encore", "Travel content 24/7"],
        ["RTP 1", "Conteúdo geral"],
        ["SIC", "Tele novelas"],
        ["SIC Notocias", "Cobertura noticiosa 24-7"],
        ["TVi", "Telenovelas e reality shows"],
        ["TVi Ficao", "Telenovelas"],
        ["TVi Reality", "Reality shows"],
        ["V+", "Telenovelas e reality shows"],
        ["Record TV", "Telenovelas e conteúdos gerais"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}