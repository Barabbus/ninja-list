import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>      
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam iusto debitis nihil animi culpa non, deleniti repudiandae repellat, vitae aperiam suscipit corrupti sit, quae quam?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum ipsum minima blanditiis cum, perspiciatis ducimus quo quia odit vitae, animi quidem, quasi illum nobis fugit vel placeat quae mollitia.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>      
      </div>
    </>
  )
}
