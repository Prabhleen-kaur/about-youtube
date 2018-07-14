var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var youTube = /** @class */ (function () {
    function youTube(videoTitle, noOfComments, Likes, noOfDislikes, publishedOn, channelName, videoDuration, autoloop, audioStateDefault, allowFullScreen, noOfShareInVideo, addToWishList) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.noOfComments = noOfComments;
        this.Likes = Likes;
        this.noOfDislikes = noOfDislikes;
        this.publishedOn = publishedOn;
        this.channelName = channelName;
        this.videoDuration = videoDuration;
        this.autoloop = autoloop;
        this.audioStateDefault = audioStateDefault;
        this.allowFullScreen = allowFullScreen;
        this.noOfShareInVideo = noOfShareInVideo;
        this.addToWishList = addToWishList;
        this.getvideoTitle = function () {
            return _this.videoTitle;
        };
        this.getLikes = function () {
            return _this.Likes;
        };
        this.getnoOfDislikes = function () {
            return _this.noOfDislikes;
        };
        this.getpublishedOn = function () {
            return _this.publishedOn;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.videoTitle = videoTitle;
        this.noOfComments = noOfComments;
        this.Likes = Likes;
        this.noOfDislikes = noOfDislikes;
        this.publishedOn = publishedOn;
        this.channelName = channelName;
        this.videoDuration = videoDuration;
        this.autoloop = autoloop;
        this.audioStateDefault = audioStateDefault;
        this.allowFullScreen = allowFullScreen;
        this.noOfShareInVideo = noOfShareInVideo;
        this.addToWishList = addToWishList;
    }
    return youTube;
}());
var songs = /** @class */ (function (_super) {
    __extends(songs, _super);
    function songs(channelName, titleOfSong, singer, musicType) {
        var _this = _super.call(this, channelName) || this;
        _this.channelName = channelName;
        _this.titleOfSong = titleOfSong;
        _this.singer = singer;
        _this.musicType = musicType;
        _this.noOfSingers = function (singer) {
            if (typeof singer == 'string') {
                return 'song have 1 singer';
            }
            else {
                var message = "song have $(singer.length)singers";
            }
        };
        _this.getsinger = function () {
            return _this.singer;
        };
        _this.getmusicType = function () {
            return _this.musicType;
        };
        _this.titleOfSong = titleOfSong;
        _this.singer = singer;
        _this.musicType = musicType;
        return _this;
    }
    return songs;
}(youTube));
var movie = /** @class */ (function (_super) {
    __extends(movie, _super);
    function movie(channelName, titleOfMovie, category, movieSynopsis) {
        var _this = _super.call(this, channelName) || this;
        _this.channelName = channelName;
        _this.titleOfMovie = titleOfMovie;
        _this.category = category;
        _this.movieSynopsis = movieSynopsis;
        _this.getcategory = function () {
            return _this.category;
        };
        _this.getmovieSynopsis = function () {
            return _this.movieSynopsis;
        };
        _this.titleOfMovie = titleOfMovie;
        _this.category = category;
        _this.movieSynopsis = movieSynopsis;
        return _this;
    }
    return movie;
}(youTube));
var video = new youTube("abc", 1000, 100000, 2009, "30th may 2018", "xyz", "4 min", true, "ON", true, 200, false);
console.log("" + JSON.stringify(video));
var songsVideo = new songs(video.getChannelName(), 'abc', 'xyz', 'entertainment');
console.log("" + JSON.stringify(songsVideo));
var movieVideo = new movie(video.getChannelName(), 'sanju', 'Biopic', 'Biography of Sanjay Dutt');
console.log("" + JSON.stringify(movieVideo));
