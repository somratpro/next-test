import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <main className="wrapper">
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </main>
  )
}

export default MyApp;