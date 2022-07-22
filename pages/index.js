import Head from 'next/head'
import styled from 'styled-components'
import dynamic from "next/dynamic";

import JWPlayer from '../components/common/JW';





export default function  Home() {



  

  return (
  <>
      
      <Head>
        <title>Bluamoeba Portal</title>
        <script src="https://cdn.jwplayer.com/libraries/ahm5JgZo.js" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" /> 
         </Head>
      
      <Section>

     <H1>Welcome Bluamoeba Live Streaming Portal </H1>
     <MainContentMid>
     <MainPlayerJW source='https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe.m3u8'></MainPlayerJW>


     </MainContentMid>
 
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




const MainContentMid = styled.div`
  padding: 5px 5px 10px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
const H1 = styled.h1`
font-family:Arial, Helvetica, sans-serif;
padding-bottom:10px;
`

const MainPlayerJW = styled(JWPlayer)`
 width: 960px;
  height: 540px;
`
