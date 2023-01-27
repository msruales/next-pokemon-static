import {SmallPokemon} from '@/interfaces';
import {FC} from 'react';
import {Card, Grid, Row, Text} from '@nextui-org/react';
import {useRouter} from 'next/router';

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({pokemon}) => {
    const {img, name, id} = pokemon;
    const router = useRouter();
    const onClick = () => {
        router.push(`/name/${name}`);
    };

    return (
        <Grid
            xs={6}
            sm={3}
            md={2}
            xl={1}
            key={pokemon.id}
        >
            <Card isHoverable isPressable onPress={onClick}>
                <Card.Body css={{p: 2}}>
                    <Card.Image
                        width="100%"
                        height={140}
                        src={img}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform="capitalize">{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
