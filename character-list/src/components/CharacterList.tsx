import React, { FC } from 'react';

export interface Character {
    id: number;
    name: string;
}

type Props = {
    school: string;
    characters: Character[];
}

const CharacterList: FC<Props> = (props) => {
    const {school, characters} = props;
    return (
    <div>
        <div>{school}</div>
        <ol>
            {characters.map((c) => {
                return <li key={c.id}>{c.name}</li>
            })}
        </ol>
    </div>
    )
}

export default CharacterList;