import {Navbar, Text, useTheme} from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

export const CustomNavbar = () => {
    const {isDark} = useTheme();
    return (
        <Navbar isBordered={isDark} variant="sticky">
            <Navbar.Brand>
                <NextLink href="/" passHref>
                    <>
                        <Image
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                            alt="icono de la app"
                            width={70}
                            height={70}
                        />
                        <>
                            <Text b h2 color="inherit" hideIn="xs">
                                P
                            </Text>
                            <Text b h3 color="inherit" hideIn="xs">
                                okemon
                            </Text>
                        </>
                    </>

                </NextLink>
            </Navbar.Brand>
            <Navbar.Content>
                <NextLink href="/favorites" passHref>
                    <div>
                        <Text>Favoritos</Text>
                    </div>
                </NextLink>
            </Navbar.Content>
        </Navbar>
    );
};

export default Navbar;
