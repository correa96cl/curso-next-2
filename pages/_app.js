// import App from 'next/app'

function MyApp({ Component, pageProps }) {
    return (
    <>
    <style>
        {`
        {font-family: sans-serif;}
        `}
    </style>
    <Component {...pageProps}  />
    </>
    )
  }
  
  
  export default MyApp