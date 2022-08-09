import type { MergeTuple } from "@tsplus/stdlib/data/Tuple"

/**
 * Sequentially zips this effect with the specified effect
 *
 * @tsplus static effect/core/io/Effect.Aspects zipFlattenPar
 * @tsplus pipeable effect/core/io/Effect zipFlattenPar
 * @tsplus pipeable-operator effect/core/io/Effect &
 */
export function zipFlattenPar<R2, E2, A2>(that: Effect<R2, E2, A2>) {
  return <R, E, A>(self: Effect<R, E, A>): Effect<R | R2, E | E2, MergeTuple<A, A2>> =>
    self.zipWithPar(that, Tuple.mergeTuple)
}
