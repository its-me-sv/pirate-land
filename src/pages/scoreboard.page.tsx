import React from 'react';
import {useParams} from "react-router-dom";

interface ScoreBoardPageProps {}

const ScoreboardPage: React.FC<ScoreBoardPageProps> = () => {
    const {gameId} = useParams();
    return (
        <div>
            gameId: {gameId}
        </div>
    );
};

export default ScoreboardPage;
