import './App.css';
import Video from './screens/video/Video';

function App() {
  return (
    <>
        <div className="app">
            <div className = "app__videos">
                <Video
                  url = {"https://v16-webapp.tiktok.com/cd36408c59c862f9dc181b1b31a7c823/61d84952/video/tos/useast2a/tos-useast2a-ve-0068c003/4a80c04b506940deb14b051d310003ed/?a=1988&br=2490&bt=1245&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3tqnz7ThqOUelXq&l=20220107080756010223117079190298A3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajdvcTQ6ZnNtODMzNzczM0ApM2k7ZDM6aWQ0N2RpOTU7ZmdpbmtmcjRnY2dgLS1kMTZzczMwYV8xNmM2YWM1MDAzYS06Yw%3D%3D&vl=&vr="}
                  channel={"tiwa_savage"}
                  description = {"This is some song description"}
                  song={"Music is life..."}
                  likes = {2}
                  messages={130}
                  shares={15}
                  
                />
                <Video
                  url = {"https://v16-webapp.tiktok.com/0663c83203a343597146f954943de077/61d86d49/video/tos/useast2a/tos-useast2a-ve-0068c001/4696da3f214d4612ad733e06c325a6ff/?a=1988&br=3792&bt=1896&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FlWkag3-I&l=202201071041320101921611680200068E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajw2cjo6ZnE5OTMzNzczM0ApZjQzZTo8aTxoNzM2Mzw0N2deaW1vcjQwNG9gLS1kMTZzczU0NjBiMTJeYl4zM142NWI6Yw%3D%3D&vl=&vr="}
                  channel={"ckay"}
                  description = {"This is some song description"}
                  song={"Music is life..."}
                  likes = {12}
                  messages={150}
                  shares={12}
                />
            </div>
        </div>
    </>
  );
}

export default App;
