import {Card, Grid} from '@nextui-org/react';
import {FC} from 'react';
import FavoriteCardPokemon from '@/components/pokemon/favorite-card-pokemon';

interface Props {
    favoritePokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({favoritePokemons}) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {
                favoritePokemons.map(id => (
                    <FavoriteCardPokemon pokemonId={id} key={id}/>
                ))
            }
        </Grid.Container>
    );
};

export default FavoritePokemons;
