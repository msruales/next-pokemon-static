import Head from 'next/head';
import {FC, PropsWithChildren} from 'react';
import {CustomNavbar} from '@/components/ui/Navbar';

interface Props extends PropsWithChildren {
    title: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin
export const Layout: FC<Props> = ({children, title}) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="autor" content="Marcos Ruales"/>
                <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
                <meta name="keywords" content={`${title}, pokemon, pokedex`}/>

                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <CustomNavbar/>
            <main style={{padding: '0px 20px 0px 20px'}}>

                {children}
            </main>

        </>
    );
};

export default Layout;
