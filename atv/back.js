function getchannels() {
    let channeldb = [
        ["https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8", "https://www.videouniversity.com/files/smpte2.gif"],
        ["https://www.youtube.com/embed/R3GfuzLMPkA", "https://static.wikia.nocookie.net/logo-timeline/images/2/25/Youtubeicon.jpg/revision/latest?cb=20210325025222"],
        ["NULL", "NULL"]
    ];
    return channeldb;
}function docom() {
    needupdate = checkupdate();
    if (needupdate == 1) {
        url = geturl();
        alert = ("An update is required please press ok to get the latest update");
        document.location = url;
    }
    if (needupdate == 0) {
        const mainui = document.getElementById("mainui").innerHTML = '';
        channels = [];
        channels = getchannels();
        for (var i = 0; i < channels.length; i++) {  
            if (channels[i][0] == "NULL") {
                const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"  onmouseover="hoverfx()"></div>';
            }
            else {
                const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"  onmouseover="hoverfx()"><a href="'  + channels[i][0] +  '"><img src="'  + channels[i][1] +  '" class="logo"  onmouseover="hoverfx()"></a></div>';
            }
        }
    }
}

function checkupdate() {
    needupdate = 1;
    return needupdate;
}

function geturl() {
    url = "https://www.youtube.com/watch?v=r8E0CbYZcjE"
    return url
}
