import Head from 'next/head';
import classNames from 'classnames';

import styles from './index.module.scss';
import flex from '../components/util/flex.module.scss';
import SignupForm from '../components/SignupForm';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Revolt</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=0.75, user-scalable=0"></meta>
                <meta property="og:title" content="REVOLT" />
                <meta property="og:description" content="Don't bother with chat apps that don't respect your privacy. REVOLT is a brand new chat platform designed around you." />
                <meta property="og:url" content="https://revolt.chat" />
                <meta property="og:image" content="/embed.png" />
                <meta property="twitter:card" content="summary_large_image"></meta>
                <meta property="twitter:image" content="/embed.png"></meta>
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="720" />
            </Head>
        
            <main>
                <div className={styles.hero}>
                    <div className={styles.nav}>
                        <img className={styles.logo} src="/logo.svg" />
                    </div>
                    <div className={classNames(styles.body, flex.columns)}>
                        <div className={classNames(flex.column, styles.heroText)}>
                            <div className={styles.primary}>
                                <h2>Don't bother with chat apps that don't respect your privacy.</h2>
                                <h3>Communication is critical.<br/>Privacy is essential.</h3>
                                <SignupForm />
                            </div>
                        </div>
                        <div className={classNames(flex.column, styles.heroImage)}>
                            <div className={styles.container}>
                                <img src="/concept_inner.svg" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroFix}></div>
                </div>
            </main>
        </div>
    );
}