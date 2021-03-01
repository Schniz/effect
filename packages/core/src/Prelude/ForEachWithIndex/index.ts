import type { Covariant } from "../Covariant"
import type * as HKT from "../HKT"
import type { IdentityBoth } from "../IdentityBoth"

export interface ForEachWithIndexFn<F extends HKT.URIS, C = HKT.Auto> {
  <G extends HKT.URIS, GC = HKT.Auto>(G: IdentityBoth<G, GC> & Covariant<G, GC>): <
    GN extends string,
    GK,
    GQ,
    GW,
    GX,
    GI,
    GS,
    GR,
    GE,
    A,
    B,
    FN extends string,
    FK
  >(
    f: (
      k: HKT.IndexFor<F, HKT.OrFix<"K", C, FK>>,
      a: A
    ) => HKT.Kind<G, GC, GK, GQ, GW, GX, GI, GS, GR, GE, B>
  ) => <FQ, FW, FX, FI, FS, FR, FE>(
    fa: HKT.Kind<F, GC, FK, FQ, FW, FX, FI, FS, FR, FE, A>
  ) => HKT.Kind<
    G,
    GC,
    GK,
    GQ,
    GW,
    GX,
    GI,
    GS,
    GR,
    GE,
    HKT.Kind<F, GC, FK, FQ, FW, FX, FI, FS, FR, FE, B>
  >
}

export interface ForEachWithIndex<F extends HKT.URIS, C = HKT.Auto>
  extends HKT.Base<F, C>,
    Covariant<F, C> {
  readonly _ForEachWithIndex: "ForEachWithIndex"
  readonly forEachWithIndexF: ForEachWithIndexFn<F, C>
}

export function implementForEachWithIndexF<F extends HKT.URIS, C = HKT.Auto>(): (
  i: <N extends string, K, Q, W, X, I, S, R, E, A, B, G>(_: {
    A: A
    B: B
    G: G
    N: N
    K: K
    Q: Q
    W: W
    X: X
    I: I
    S: S
    R: R
    E: E
  }) => (
    G: IdentityBoth<HKT.UHKT<G>> & Covariant<HKT.UHKT<G>>
  ) => (
    f: (k: HKT.IndexFor<F, HKT.OrFix<"K", C, K>>, a: A) => HKT.HKT<G, B>
  ) => (
    fa: HKT.Kind<F, C, K, Q, W, X, I, S, R, E, A>
  ) => HKT.HKT<G, HKT.Kind<F, C, K, Q, W, X, I, S, R, E, B>>
) => ForEachWithIndexFn<F, C>
export function implementForEachWithIndexF() {
  return (i: any) => i()
}
