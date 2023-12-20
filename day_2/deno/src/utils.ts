import {Game, GameRound} from "./Game.ts";

export function parseGameReport(text: string): Game {
    const [details, game] = text.split(":")
    const id = details.trim().split(" ")[1]

    const roundsReported = game.trim().split(";")

    const rounds = roundsReported.map<GameRound>(parseRoundReport)

    return {
        id: Number.parseInt(id),
        rounds
    }
}

function parseRoundReport(roundReport: string): GameRound {
        const cubesRevealedReported = roundReport.split(",")

        return cubesRevealedReported.reduce((record, cube) => {
            const [total, color] =  cube.trim().split(" ")

            return {
                ...record,
                [color]: Number.parseInt(total)
            }
        }, {} as GameRound)
}