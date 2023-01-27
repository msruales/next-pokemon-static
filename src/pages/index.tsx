import {GetStaticProps, NextPage} from 'next';
import {Layout} from '@/components/layouts';
import {pokeApi} from '@/api';
import {PokemonListResponse, SmallPokemon} from '@/interfaces';
import {Grid} from '@nextui-org/react';
import {PokemonCard} from '@/components/pokemon';

interface Props {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {

    // console.log(pokemons)
    return (
        <Layout title="Listado de Pokemons">
            <Grid.Container gap={2} justify="flex-start">
                {
                    pokemons.map((pokemon) => (

                            <PokemonCard key={pokemon.id} pokemon={pokemon}/>

                        ),
                    )
                }
            </Grid.Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    const pokemons = data.results.map(({url, name}) => {

        const arrayUrl = url.split('/');
        const id = arrayUrl[arrayUrl.length - 2];
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
        return {id, url, img, name};
    });


    return {
        props: {
            pokemons,
        },
    };
};
export default HomePage;
