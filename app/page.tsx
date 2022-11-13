import Head from "next/head";

import styles from './styles.module.scss';
import CommentedKeysIcon from './commented-keys.svg';

const Page = () => (<>
    <Head>
        <title>commented-keys - Fetch commented authorized_keys</title>
        <meta name="description" content="Fetch authorized_keys with comments from providers such as GitHub" />
    </Head>

    <main>
        <pre className={styles.hero}>
            <span className={styles.comment}># Fetch your SSH public keys instantly on your server!</span>
            <div>
                <span className={styles.title}>
                    <CommentedKeysIcon viewBox="0 0 640 640" />
                    commented-keys
                </span>
                <p className={styles.ghost}>
                    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDGGLuoOhA2CegyoITnZbzHkX9B<br />
                    ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBYRVadSYWlBjXq2x6kICXSMemjX<br />
                    ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAy<br />
                    ssh-dss AAAAB3NzaC1kc3MAAACBALi6+Sdl4XcvQ6K8p3I7HA+gxmGxVaBj3AZp
                </p>
            </div>
            <span className={styles.comment}># Comment your authorized_keys fetched from GitHub!</span>
        </pre>
    </main>
</>);

export default Page;
