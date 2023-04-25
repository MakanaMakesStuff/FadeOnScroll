/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Image from "next/image"
import one from "../../public/images/pexels-elif-tekkaya-5616132.jpg"
import two from "../../public/images/pexels-lina-kivaka-1813504.jpg"
import three from "../../public/images/pexels-victor-jung-983587.jpg"
import hero from "../../public/images/pexels-yente-van-eynde-2403392.jpg"
import styles from "@/styles/Home.module.scss"
import OnScroll from "@/components/OnScroll/OnScroll"

export default function Home() {
  return (
    <>
      <Head>
        <title>On Scroll Animation</title>
        <meta
          name="description"
          content="This is a web app example of a scroll into view animation component written in react"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <OnScroll animation="fadeInBottom" id="title" persist={false}>
          <h1 className={styles.title} id="title">
            The Dine
          </h1>
        </OnScroll>

        <OnScroll animation="fadeInBottom" id="subTitle" persist={false}>
          <h3 className={styles.subTitle} id="subTitle">
            Food is an experience.
          </h3>
        </OnScroll>

        <Image src={hero.src} width={1500} height={1500} alt="Hero Image" />
      </main>

      <OnScroll animation="fadeInLeft" id="sectionOne" persist={false}>
        <section className={styles.section} id="sectionOne">
          <div className={styles.left}>
            <Image
              src={one.src}
              width={700}
              height={700}
              alt="First Feature Image"
            />
          </div>

          <div className={styles.right}>
            <div className={styles.inner}>
              <h3 className={styles.preTitle}>WHO WE ARE</h3>
              <h1 className={styles.title}>Master Chefs</h1>
              <p className={styles.message}>
                whether it's cooking for the kids or a date night out, we have
                the skills to make your night out an awesome experience.
              </p>
            </div>
          </div>
        </section>
      </OnScroll>

      <OnScroll animation="fadeInRight" id="sectionTwo" persist={false}>
        <section className={styles.section} id="sectionTwo">
          <div className={styles.left}>
            <Image
              src={two.src}
              width={700}
              height={700}
              alt="Second Feature Image"
            />
          </div>

          <div className={styles.right}>
            <div className={styles.inner}>
              <h3 className={styles.preTitle}>THE WHY</h3>
              <h1 className={styles.title}>We Care</h1>
              <p className={styles.message}>
                this isn't just a job. Cooking is a lifestyle and we care about
                our work. More importantly, we care about our customers.
              </p>
            </div>
          </div>
        </section>
      </OnScroll>

      <OnScroll animation="fadeInLeft" id="sectionThree" persist={false}>
        <section className={styles.section} id="sectionThree">
          <div className={styles.left}>
            <Image
              src={three.src}
              width={700}
              height={700}
              alt="Second Feature Image"
            />
          </div>

          <div className={styles.right}>
            <div className={styles.inner}>
              <h3 className={styles.preTitle}>THE WHERE</h3>
              <h1 className={styles.title}>Lets Eat!</h1>
              <p className={styles.message}>
                you can find us where the sun shines 24/7 and the wind smells
                like jasmine and sweet honey dew. Under the rainbow is where we
                will meet!
              </p>
            </div>
          </div>
        </section>
      </OnScroll>
    </>
  )
}
