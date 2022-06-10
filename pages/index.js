import Head from 'next/head'
import styled from 'styled-components'





export default function  Home() {
 

  return (
  <>
      <Head>
        <title>Bluamoeba Portal</title>
       
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" /> 
         </Head>
      
      <Section>

     <H1>Welcome Bluamoeba Live Portal</H1>

  


   
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

