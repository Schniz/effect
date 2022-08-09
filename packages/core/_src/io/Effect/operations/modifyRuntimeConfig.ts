/**
 * A combinator that runs the specified effect with the runtime configuration
 * modified with the specified function.
 *
 * @tsplus static effect/core/io/Effect.Aspects modifyRuntimeConfig
 * @tsplus pipeable effect/core/io/Effect modifyRuntimeConfig
 */
export function modifyRuntimeConfig(f: (runtimeConfig: RuntimeConfig) => RuntimeConfig) {
  return <R, E, A>(self: Effect<R, E, A>): Effect<R, E, A> =>
    Effect.runtimeConfig.flatMap((runtimeConfig) => self.withRuntimeConfig(f(runtimeConfig)))
}
