import Head from 'next/head'
//import 'videojs-fetch-flv'

import styled from 'styled-components'
import videojs  from 'video.js'
//import "videojs-contrib-hls.js"
import dynamic from "next/dynamic";
export const flvjs = dynamic(
  () => import("videojs-contrib-hls.js"),
  {
    ssr: false,
  }
)
import { useRef, useEffect } from "react";




export default function  Home() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
  const player=  videojs(videoRef.current, {

        sources: [
          {
            src: 'https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe.m3u8',
           type: 'application/x-mpegURL'
          }
        ]
      
      });
      player.play()
     // player.fetchFlv({
     //   isLive: false
    //  }).start()
    }
   

 });

  

  return (
    <div >
      <Head>
        <title>Bluamoeba Portal</title>
       
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" /> 
         </Head>
      
      <Section>
     

<video width="900px" height="540px"  preload="auto" controls  ref={videoRef} className="video-js " />
  


     

  
   
</Section>
    </div>
  )
}

const Section = styled.section`
  flex: 1 1 100%;
  height: 100%;
`

