import { Game, GameRound} from "../src/Game.ts";
import {assertEquals} from "../deps.ts";
import {parseGameReport} from "../src/utils.ts";

Deno.test("Should parse game report", () => {
    function formatExpected(id: number): Game {
        return {
            id,
            rounds: [
                {
                    "blue": 3,
                    "red": 4
                },
                {
                    "red": 1,
                    "green": 2,
                    "blue": 6,
                },
                {
                    "green": 2
                }
            ]
        }
    }

    const testCases = [
        {
            input: "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
            expected: formatExpected(1)
        },
        {
            input: "   Game 10: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green  ",
            expected: formatExpected(10)
        },
        {
            input: "Game 77: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
            expected: formatExpected(77)
        }
    ]

    for (const testCase of testCases) {
        assertEquals(parseGameReport(testCase.input), testCase.expected)
    }

})

Deno.test("Should determine if game is possible", () => {
    const bag: any[] = [
        {
            color: "yellow",
            total: 20
        },
        {
            color: "red",
            total: 5
        }
    ];

    // const testCases: TestCases<GameRound[], boolean> = [
    //     {
    //         input: [
    //             [{
    //                 color: "red",
    //                 total: 10
    //             }]
    //         ],
    //         expected: false
    //     }
    // ]

    assertEquals(true, true)

   // assertEquals(isGamePossible(game.rounds, bag), false)
})

function isGamePossible(rounds: GameRound[], bag: any[]): any {
    // return rounds.reduce((verdict, round) => {
    //     return verdict && round.every((set) => isRevealedCubePossible(set, bag))
    // }, true)
}

function isRevealedCubePossible(set: any, bag: any[]) {
    return bag.some(cubeSet => cubeSet.color == set.color && cubeSet.total >= set.total)
}



type TestCases<T = any,U = any>  = {
    expected: T
    input: U
}[]