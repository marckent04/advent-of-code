export interface Game {
  id: number;
  rounds: GameRound[];
}

export type GameRound = Record<Color, number>;

export type Color = string