import Head from 'next/head'
import styled from 'styled-components'
import videojs  from 'video.js'
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
      player.responsive(true)
     // player.fetchFlv({
     //   isLive: false
    //  }).start()
    }
   

 });

  

  return (
  <>
      <Head>
        <title>Bluamoeba Portal</title>
       
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" /> 
         </Head>
      
      <Section>

     <H1>Welcome Bluamoeba Live Portal</H1>

<video width="900px" height="540px"  preload="auto"  controls  ref={videoRef} className="video-js video-fluid vjs-theme-fantasy" />
  


   
</Section>
</>
  )
}

const Section = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const H1 = styled.h1`
font-family:Arial, Helvetica, sans-serif;
padding-bottom:10px;
`

