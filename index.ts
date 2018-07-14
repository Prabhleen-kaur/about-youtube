class youTube{

 constructor (protected videoTitle?:String,  protected noOfComments?:number,  protected Likes ?: number , protected noOfDislikes ?: number ,protected publishedOn?:String,protected channelName?:String , protected videoDuration ?: String,protected autoloop ?: Boolean,protected audioStateDefault ?: String, protected allowFullScreen ?: Boolean,protected noOfShareInVideo ?: number, protected addToWishList ?: Boolean)
{
    this.videoTitle=videoTitle;
    this.noOfComments=noOfComments;
     this.Likes=Likes;
    this.noOfDislikes=noOfDislikes;
    this.publishedOn=publishedOn;
   this.channelName=channelName;
    this.videoDuration=videoDuration;
    this.autoloop=autoloop;
    this.audioStateDefault=audioStateDefault;
    this.allowFullScreen=allowFullScreen;
    this.noOfShareInVideo=noOfShareInVideo;
    this.addToWishList=addToWishList;
    }
  
    getvideoTitle = ()=>
    {
 return this.videoTitle;
}

getLikes=()=>
{
    return this.Likes;
}
getnoOfDislikes=()=>
{
    return this.noOfDislikes;
}
getpublishedOn =()=>
{
    return this.publishedOn;
}
getChannelName =()=>
{
    return this.channelName;
}
}
class songs extends youTube{
    constructor(protected channelName?:String,public titleOfSong?:String,public singer?:any,public musicType?: String)
    {
super(channelName)
this.titleOfSong=titleOfSong;
this.singer=singer;
this.musicType=musicType;
   }
   noOfSingers = (singer:any)=>
   {
if(typeof singer =='string')
{
    return'song have 1 singer';
}
else{
    let message = "song have $(singer.length)singers"
}
   }
 
  
    getsinger =()=>
    {
return this.singer;
    }
    getmusicType =()=>
    {
        return this.musicType;
    }
}
class movie extends youTube
{
    constructor(protected channelName?:String,public titleOfMovie?:String,public category?:string,public movieSynopsis?: string)
{
    super(channelName)
    this.titleOfMovie=titleOfMovie;
    this.category=category;
    this.movieSynopsis=movieSynopsis;
}
getcategory =()=>
{
    return this.category;
}
getmovieSynopsis =()=>
{
    return this.movieSynopsis;
}
}
let video = new youTube("abc",1000,100000,2009,"30th may 2018","xyz","4 min",true,"ON",true,200,false);
console.log(`${JSON.stringify(video)}`);

let songsVideo = new songs(video.getChannelName(),'abc','xyz','entertainment');
console.log(`${JSON.stringify(songsVideo)}`);
let movieVideo = new movie(video.getChannelName(),'sanju','Biopic','Biography of Sanjay Dutt');
console.log(`${JSON.stringify(movieVideo)}`);






