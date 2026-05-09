
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Election
 * 
 */
export type Election = $Result.DefaultSelection<Prisma.$ElectionPayload>
/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>
/**
 * Model ElectionCandidate
 * 
 */
export type ElectionCandidate = $Result.DefaultSelection<Prisma.$ElectionCandidatePayload>
/**
 * Model StateResult
 * 
 */
export type StateResult = $Result.DefaultSelection<Prisma.$StateResultPayload>
/**
 * Model StateResultCandidate
 * 
 */
export type StateResultCandidate = $Result.DefaultSelection<Prisma.$StateResultCandidatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Elections
 * const elections = await prisma.election.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Elections
   * const elections = await prisma.election.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.election`: Exposes CRUD operations for the **Election** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elections
    * const elections = await prisma.election.findMany()
    * ```
    */
  get election(): Prisma.ElectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.electionCandidate`: Exposes CRUD operations for the **ElectionCandidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ElectionCandidates
    * const electionCandidates = await prisma.electionCandidate.findMany()
    * ```
    */
  get electionCandidate(): Prisma.ElectionCandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stateResult`: Exposes CRUD operations for the **StateResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StateResults
    * const stateResults = await prisma.stateResult.findMany()
    * ```
    */
  get stateResult(): Prisma.StateResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stateResultCandidate`: Exposes CRUD operations for the **StateResultCandidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StateResultCandidates
    * const stateResultCandidates = await prisma.stateResultCandidate.findMany()
    * ```
    */
  get stateResultCandidate(): Prisma.StateResultCandidateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Election: 'Election',
    Candidate: 'Candidate',
    ElectionCandidate: 'ElectionCandidate',
    StateResult: 'StateResult',
    StateResultCandidate: 'StateResultCandidate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "election" | "candidate" | "electionCandidate" | "stateResult" | "stateResultCandidate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Election: {
        payload: Prisma.$ElectionPayload<ExtArgs>
        fields: Prisma.ElectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          findFirst: {
            args: Prisma.ElectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          findMany: {
            args: Prisma.ElectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          create: {
            args: Prisma.ElectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          createMany: {
            args: Prisma.ElectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          delete: {
            args: Prisma.ElectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          update: {
            args: Prisma.ElectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          deleteMany: {
            args: Prisma.ElectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          upsert: {
            args: Prisma.ElectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          aggregate: {
            args: Prisma.ElectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElection>
          }
          groupBy: {
            args: Prisma.ElectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElectionCountArgs<ExtArgs>
            result: $Utils.Optional<ElectionCountAggregateOutputType> | number
          }
        }
      }
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
      ElectionCandidate: {
        payload: Prisma.$ElectionCandidatePayload<ExtArgs>
        fields: Prisma.ElectionCandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectionCandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectionCandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload>
          }
          findFirst: {
            args: Prisma.ElectionCandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectionCandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload>
          }
          findMany: {
            args: Prisma.ElectionCandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload>[]
          }
          create: {
            args: Prisma.ElectionCandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload>
          }
          createMany: {
            args: Prisma.ElectionCandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElectionCandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload>[]
          }
          delete: {
            args: Prisma.ElectionCandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload>
          }
          update: {
            args: Prisma.ElectionCandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload>
          }
          deleteMany: {
            args: Prisma.ElectionCandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElectionCandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElectionCandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload>[]
          }
          upsert: {
            args: Prisma.ElectionCandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionCandidatePayload>
          }
          aggregate: {
            args: Prisma.ElectionCandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElectionCandidate>
          }
          groupBy: {
            args: Prisma.ElectionCandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElectionCandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElectionCandidateCountArgs<ExtArgs>
            result: $Utils.Optional<ElectionCandidateCountAggregateOutputType> | number
          }
        }
      }
      StateResult: {
        payload: Prisma.$StateResultPayload<ExtArgs>
        fields: Prisma.StateResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload>
          }
          findFirst: {
            args: Prisma.StateResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload>
          }
          findMany: {
            args: Prisma.StateResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload>[]
          }
          create: {
            args: Prisma.StateResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload>
          }
          createMany: {
            args: Prisma.StateResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload>[]
          }
          delete: {
            args: Prisma.StateResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload>
          }
          update: {
            args: Prisma.StateResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload>
          }
          deleteMany: {
            args: Prisma.StateResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload>[]
          }
          upsert: {
            args: Prisma.StateResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultPayload>
          }
          aggregate: {
            args: Prisma.StateResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStateResult>
          }
          groupBy: {
            args: Prisma.StateResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateResultCountArgs<ExtArgs>
            result: $Utils.Optional<StateResultCountAggregateOutputType> | number
          }
        }
      }
      StateResultCandidate: {
        payload: Prisma.$StateResultCandidatePayload<ExtArgs>
        fields: Prisma.StateResultCandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateResultCandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateResultCandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload>
          }
          findFirst: {
            args: Prisma.StateResultCandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateResultCandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload>
          }
          findMany: {
            args: Prisma.StateResultCandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload>[]
          }
          create: {
            args: Prisma.StateResultCandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload>
          }
          createMany: {
            args: Prisma.StateResultCandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateResultCandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload>[]
          }
          delete: {
            args: Prisma.StateResultCandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload>
          }
          update: {
            args: Prisma.StateResultCandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload>
          }
          deleteMany: {
            args: Prisma.StateResultCandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateResultCandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateResultCandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload>[]
          }
          upsert: {
            args: Prisma.StateResultCandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateResultCandidatePayload>
          }
          aggregate: {
            args: Prisma.StateResultCandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStateResultCandidate>
          }
          groupBy: {
            args: Prisma.StateResultCandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateResultCandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateResultCandidateCountArgs<ExtArgs>
            result: $Utils.Optional<StateResultCandidateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    election?: ElectionOmit
    candidate?: CandidateOmit
    electionCandidate?: ElectionCandidateOmit
    stateResult?: StateResultOmit
    stateResultCandidate?: StateResultCandidateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ElectionCountOutputType
   */

  export type ElectionCountOutputType = {
    election_candidates: number
    state_results: number
  }

  export type ElectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election_candidates?: boolean | ElectionCountOutputTypeCountElection_candidatesArgs
    state_results?: boolean | ElectionCountOutputTypeCountState_resultsArgs
  }

  // Custom InputTypes
  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCountOutputType
     */
    select?: ElectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountElection_candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionCandidateWhereInput
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountState_resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateResultWhereInput
  }


  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    election_candidates: number
  }

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election_candidates?: boolean | CandidateCountOutputTypeCountElection_candidatesArgs
  }

  // Custom InputTypes
  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCountOutputType
     */
    select?: CandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountElection_candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionCandidateWhereInput
  }


  /**
   * Count Type ElectionCandidateCountOutputType
   */

  export type ElectionCandidateCountOutputType = {
    state_result_candidates: number
  }

  export type ElectionCandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state_result_candidates?: boolean | ElectionCandidateCountOutputTypeCountState_result_candidatesArgs
  }

  // Custom InputTypes
  /**
   * ElectionCandidateCountOutputType without action
   */
  export type ElectionCandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidateCountOutputType
     */
    select?: ElectionCandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ElectionCandidateCountOutputType without action
   */
  export type ElectionCandidateCountOutputTypeCountState_result_candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateResultCandidateWhereInput
  }


  /**
   * Count Type StateResultCountOutputType
   */

  export type StateResultCountOutputType = {
    state_result_candidates: number
  }

  export type StateResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state_result_candidates?: boolean | StateResultCountOutputTypeCountState_result_candidatesArgs
  }

  // Custom InputTypes
  /**
   * StateResultCountOutputType without action
   */
  export type StateResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCountOutputType
     */
    select?: StateResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateResultCountOutputType without action
   */
  export type StateResultCountOutputTypeCountState_result_candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateResultCandidateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Election
   */

  export type AggregateElection = {
    _count: ElectionCountAggregateOutputType | null
    _avg: ElectionAvgAggregateOutputType | null
    _sum: ElectionSumAggregateOutputType | null
    _min: ElectionMinAggregateOutputType | null
    _max: ElectionMaxAggregateOutputType | null
  }

  export type ElectionAvgAggregateOutputType = {
    year: number | null
    total_ev: number | null
    majority_ev: number | null
  }

  export type ElectionSumAggregateOutputType = {
    year: number | null
    total_ev: number | null
    majority_ev: number | null
  }

  export type ElectionMinAggregateOutputType = {
    year: number | null
    total_ev: number | null
    majority_ev: number | null
  }

  export type ElectionMaxAggregateOutputType = {
    year: number | null
    total_ev: number | null
    majority_ev: number | null
  }

  export type ElectionCountAggregateOutputType = {
    year: number
    total_ev: number
    majority_ev: number
    _all: number
  }


  export type ElectionAvgAggregateInputType = {
    year?: true
    total_ev?: true
    majority_ev?: true
  }

  export type ElectionSumAggregateInputType = {
    year?: true
    total_ev?: true
    majority_ev?: true
  }

  export type ElectionMinAggregateInputType = {
    year?: true
    total_ev?: true
    majority_ev?: true
  }

  export type ElectionMaxAggregateInputType = {
    year?: true
    total_ev?: true
    majority_ev?: true
  }

  export type ElectionCountAggregateInputType = {
    year?: true
    total_ev?: true
    majority_ev?: true
    _all?: true
  }

  export type ElectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Election to aggregate.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Elections
    **/
    _count?: true | ElectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectionMaxAggregateInputType
  }

  export type GetElectionAggregateType<T extends ElectionAggregateArgs> = {
        [P in keyof T & keyof AggregateElection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElection[P]>
      : GetScalarType<T[P], AggregateElection[P]>
  }




  export type ElectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionWhereInput
    orderBy?: ElectionOrderByWithAggregationInput | ElectionOrderByWithAggregationInput[]
    by: ElectionScalarFieldEnum[] | ElectionScalarFieldEnum
    having?: ElectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectionCountAggregateInputType | true
    _avg?: ElectionAvgAggregateInputType
    _sum?: ElectionSumAggregateInputType
    _min?: ElectionMinAggregateInputType
    _max?: ElectionMaxAggregateInputType
  }

  export type ElectionGroupByOutputType = {
    year: number
    total_ev: number
    majority_ev: number
    _count: ElectionCountAggregateOutputType | null
    _avg: ElectionAvgAggregateOutputType | null
    _sum: ElectionSumAggregateOutputType | null
    _min: ElectionMinAggregateOutputType | null
    _max: ElectionMaxAggregateOutputType | null
  }

  type GetElectionGroupByPayload<T extends ElectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectionGroupByOutputType[P]>
            : GetScalarType<T[P], ElectionGroupByOutputType[P]>
        }
      >
    >


  export type ElectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    year?: boolean
    total_ev?: boolean
    majority_ev?: boolean
    election_candidates?: boolean | Election$election_candidatesArgs<ExtArgs>
    state_results?: boolean | Election$state_resultsArgs<ExtArgs>
    _count?: boolean | ElectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    year?: boolean
    total_ev?: boolean
    majority_ev?: boolean
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    year?: boolean
    total_ev?: boolean
    majority_ev?: boolean
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectScalar = {
    year?: boolean
    total_ev?: boolean
    majority_ev?: boolean
  }

  export type ElectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"year" | "total_ev" | "majority_ev", ExtArgs["result"]["election"]>
  export type ElectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election_candidates?: boolean | Election$election_candidatesArgs<ExtArgs>
    state_results?: boolean | Election$state_resultsArgs<ExtArgs>
    _count?: boolean | ElectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ElectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ElectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ElectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Election"
    objects: {
      election_candidates: Prisma.$ElectionCandidatePayload<ExtArgs>[]
      state_results: Prisma.$StateResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      year: number
      total_ev: number
      majority_ev: number
    }, ExtArgs["result"]["election"]>
    composites: {}
  }

  type ElectionGetPayload<S extends boolean | null | undefined | ElectionDefaultArgs> = $Result.GetResult<Prisma.$ElectionPayload, S>

  type ElectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElectionCountAggregateInputType | true
    }

  export interface ElectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Election'], meta: { name: 'Election' } }
    /**
     * Find zero or one Election that matches the filter.
     * @param {ElectionFindUniqueArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElectionFindUniqueArgs>(args: SelectSubset<T, ElectionFindUniqueArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Election that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElectionFindUniqueOrThrowArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ElectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Election that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindFirstArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElectionFindFirstArgs>(args?: SelectSubset<T, ElectionFindFirstArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Election that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindFirstOrThrowArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ElectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elections
     * const elections = await prisma.election.findMany()
     * 
     * // Get first 10 Elections
     * const elections = await prisma.election.findMany({ take: 10 })
     * 
     * // Only select the `year`
     * const electionWithYearOnly = await prisma.election.findMany({ select: { year: true } })
     * 
     */
    findMany<T extends ElectionFindManyArgs>(args?: SelectSubset<T, ElectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Election.
     * @param {ElectionCreateArgs} args - Arguments to create a Election.
     * @example
     * // Create one Election
     * const Election = await prisma.election.create({
     *   data: {
     *     // ... data to create a Election
     *   }
     * })
     * 
     */
    create<T extends ElectionCreateArgs>(args: SelectSubset<T, ElectionCreateArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elections.
     * @param {ElectionCreateManyArgs} args - Arguments to create many Elections.
     * @example
     * // Create many Elections
     * const election = await prisma.election.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElectionCreateManyArgs>(args?: SelectSubset<T, ElectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Elections and returns the data saved in the database.
     * @param {ElectionCreateManyAndReturnArgs} args - Arguments to create many Elections.
     * @example
     * // Create many Elections
     * const election = await prisma.election.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Elections and only return the `year`
     * const electionWithYearOnly = await prisma.election.createManyAndReturn({
     *   select: { year: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ElectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Election.
     * @param {ElectionDeleteArgs} args - Arguments to delete one Election.
     * @example
     * // Delete one Election
     * const Election = await prisma.election.delete({
     *   where: {
     *     // ... filter to delete one Election
     *   }
     * })
     * 
     */
    delete<T extends ElectionDeleteArgs>(args: SelectSubset<T, ElectionDeleteArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Election.
     * @param {ElectionUpdateArgs} args - Arguments to update one Election.
     * @example
     * // Update one Election
     * const election = await prisma.election.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElectionUpdateArgs>(args: SelectSubset<T, ElectionUpdateArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elections.
     * @param {ElectionDeleteManyArgs} args - Arguments to filter Elections to delete.
     * @example
     * // Delete a few Elections
     * const { count } = await prisma.election.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElectionDeleteManyArgs>(args?: SelectSubset<T, ElectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elections
     * const election = await prisma.election.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElectionUpdateManyArgs>(args: SelectSubset<T, ElectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elections and returns the data updated in the database.
     * @param {ElectionUpdateManyAndReturnArgs} args - Arguments to update many Elections.
     * @example
     * // Update many Elections
     * const election = await prisma.election.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Elections and only return the `year`
     * const electionWithYearOnly = await prisma.election.updateManyAndReturn({
     *   select: { year: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ElectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ElectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Election.
     * @param {ElectionUpsertArgs} args - Arguments to update or create a Election.
     * @example
     * // Update or create a Election
     * const election = await prisma.election.upsert({
     *   create: {
     *     // ... data to create a Election
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Election we want to update
     *   }
     * })
     */
    upsert<T extends ElectionUpsertArgs>(args: SelectSubset<T, ElectionUpsertArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCountArgs} args - Arguments to filter Elections to count.
     * @example
     * // Count the number of Elections
     * const count = await prisma.election.count({
     *   where: {
     *     // ... the filter for the Elections we want to count
     *   }
     * })
    **/
    count<T extends ElectionCountArgs>(
      args?: Subset<T, ElectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Election.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElectionAggregateArgs>(args: Subset<T, ElectionAggregateArgs>): Prisma.PrismaPromise<GetElectionAggregateType<T>>

    /**
     * Group by Election.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectionGroupByArgs['orderBy'] }
        : { orderBy?: ElectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Election model
   */
  readonly fields: ElectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Election.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election_candidates<T extends Election$election_candidatesArgs<ExtArgs> = {}>(args?: Subset<T, Election$election_candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    state_results<T extends Election$state_resultsArgs<ExtArgs> = {}>(args?: Subset<T, Election$state_resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Election model
   */
  interface ElectionFieldRefs {
    readonly year: FieldRef<"Election", 'Int'>
    readonly total_ev: FieldRef<"Election", 'Int'>
    readonly majority_ev: FieldRef<"Election", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Election findUnique
   */
  export type ElectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election findUniqueOrThrow
   */
  export type ElectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election findFirst
   */
  export type ElectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election findFirstOrThrow
   */
  export type ElectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election findMany
   */
  export type ElectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Elections to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election create
   */
  export type ElectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Election.
     */
    data: XOR<ElectionCreateInput, ElectionUncheckedCreateInput>
  }

  /**
   * Election createMany
   */
  export type ElectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Elections.
     */
    data: ElectionCreateManyInput | ElectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Election createManyAndReturn
   */
  export type ElectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * The data used to create many Elections.
     */
    data: ElectionCreateManyInput | ElectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Election update
   */
  export type ElectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Election.
     */
    data: XOR<ElectionUpdateInput, ElectionUncheckedUpdateInput>
    /**
     * Choose, which Election to update.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election updateMany
   */
  export type ElectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Elections.
     */
    data: XOR<ElectionUpdateManyMutationInput, ElectionUncheckedUpdateManyInput>
    /**
     * Filter which Elections to update
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to update.
     */
    limit?: number
  }

  /**
   * Election updateManyAndReturn
   */
  export type ElectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * The data used to update Elections.
     */
    data: XOR<ElectionUpdateManyMutationInput, ElectionUncheckedUpdateManyInput>
    /**
     * Filter which Elections to update
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to update.
     */
    limit?: number
  }

  /**
   * Election upsert
   */
  export type ElectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Election to update in case it exists.
     */
    where: ElectionWhereUniqueInput
    /**
     * In case the Election found by the `where` argument doesn't exist, create a new Election with this data.
     */
    create: XOR<ElectionCreateInput, ElectionUncheckedCreateInput>
    /**
     * In case the Election was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectionUpdateInput, ElectionUncheckedUpdateInput>
  }

  /**
   * Election delete
   */
  export type ElectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter which Election to delete.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election deleteMany
   */
  export type ElectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elections to delete
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to delete.
     */
    limit?: number
  }

  /**
   * Election.election_candidates
   */
  export type Election$election_candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    where?: ElectionCandidateWhereInput
    orderBy?: ElectionCandidateOrderByWithRelationInput | ElectionCandidateOrderByWithRelationInput[]
    cursor?: ElectionCandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectionCandidateScalarFieldEnum | ElectionCandidateScalarFieldEnum[]
  }

  /**
   * Election.state_results
   */
  export type Election$state_resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
    where?: StateResultWhereInput
    orderBy?: StateResultOrderByWithRelationInput | StateResultOrderByWithRelationInput[]
    cursor?: StateResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StateResultScalarFieldEnum | StateResultScalarFieldEnum[]
  }

  /**
   * Election without action
   */
  export type ElectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
  }


  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _avg: CandidateAvgAggregateOutputType | null
    _sum: CandidateSumAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateAvgAggregateOutputType = {
    id: number | null
  }

  export type CandidateSumAggregateOutputType = {
    id: number | null
  }

  export type CandidateMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CandidateMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CandidateCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CandidateAvgAggregateInputType = {
    id?: true
  }

  export type CandidateSumAggregateInputType = {
    id?: true
  }

  export type CandidateMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CandidateMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CandidateCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _avg?: CandidateAvgAggregateInputType
    _sum?: CandidateSumAggregateInputType
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id: number
    name: string
    _count: CandidateCountAggregateOutputType | null
    _avg: CandidateAvgAggregateOutputType | null
    _sum: CandidateSumAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    election_candidates?: boolean | Candidate$election_candidatesArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election_candidates?: boolean | Candidate$election_candidatesArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      election_candidates: Prisma.$ElectionCandidatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidateCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidateUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election_candidates<T extends Candidate$election_candidatesArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$election_candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id: FieldRef<"Candidate", 'Int'>
    readonly name: FieldRef<"Candidate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate createManyAndReturn
   */
  export type CandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate updateManyAndReturn
   */
  export type CandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate.election_candidates
   */
  export type Candidate$election_candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    where?: ElectionCandidateWhereInput
    orderBy?: ElectionCandidateOrderByWithRelationInput | ElectionCandidateOrderByWithRelationInput[]
    cursor?: ElectionCandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectionCandidateScalarFieldEnum | ElectionCandidateScalarFieldEnum[]
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
  }


  /**
   * Model ElectionCandidate
   */

  export type AggregateElectionCandidate = {
    _count: ElectionCandidateCountAggregateOutputType | null
    _avg: ElectionCandidateAvgAggregateOutputType | null
    _sum: ElectionCandidateSumAggregateOutputType | null
    _min: ElectionCandidateMinAggregateOutputType | null
    _max: ElectionCandidateMaxAggregateOutputType | null
  }

  export type ElectionCandidateAvgAggregateOutputType = {
    id: number | null
    election_year: number | null
    candidate_id: number | null
    total_ev: number | null
  }

  export type ElectionCandidateSumAggregateOutputType = {
    id: number | null
    election_year: number | null
    candidate_id: number | null
    total_ev: number | null
  }

  export type ElectionCandidateMinAggregateOutputType = {
    id: number | null
    election_year: number | null
    candidate_id: number | null
    role: string | null
    total_ev: number | null
    is_winner: boolean | null
    party: string | null
  }

  export type ElectionCandidateMaxAggregateOutputType = {
    id: number | null
    election_year: number | null
    candidate_id: number | null
    role: string | null
    total_ev: number | null
    is_winner: boolean | null
    party: string | null
  }

  export type ElectionCandidateCountAggregateOutputType = {
    id: number
    election_year: number
    candidate_id: number
    role: number
    total_ev: number
    is_winner: number
    party: number
    _all: number
  }


  export type ElectionCandidateAvgAggregateInputType = {
    id?: true
    election_year?: true
    candidate_id?: true
    total_ev?: true
  }

  export type ElectionCandidateSumAggregateInputType = {
    id?: true
    election_year?: true
    candidate_id?: true
    total_ev?: true
  }

  export type ElectionCandidateMinAggregateInputType = {
    id?: true
    election_year?: true
    candidate_id?: true
    role?: true
    total_ev?: true
    is_winner?: true
    party?: true
  }

  export type ElectionCandidateMaxAggregateInputType = {
    id?: true
    election_year?: true
    candidate_id?: true
    role?: true
    total_ev?: true
    is_winner?: true
    party?: true
  }

  export type ElectionCandidateCountAggregateInputType = {
    id?: true
    election_year?: true
    candidate_id?: true
    role?: true
    total_ev?: true
    is_winner?: true
    party?: true
    _all?: true
  }

  export type ElectionCandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElectionCandidate to aggregate.
     */
    where?: ElectionCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionCandidates to fetch.
     */
    orderBy?: ElectionCandidateOrderByWithRelationInput | ElectionCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectionCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ElectionCandidates
    **/
    _count?: true | ElectionCandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElectionCandidateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElectionCandidateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectionCandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectionCandidateMaxAggregateInputType
  }

  export type GetElectionCandidateAggregateType<T extends ElectionCandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateElectionCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElectionCandidate[P]>
      : GetScalarType<T[P], AggregateElectionCandidate[P]>
  }




  export type ElectionCandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionCandidateWhereInput
    orderBy?: ElectionCandidateOrderByWithAggregationInput | ElectionCandidateOrderByWithAggregationInput[]
    by: ElectionCandidateScalarFieldEnum[] | ElectionCandidateScalarFieldEnum
    having?: ElectionCandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectionCandidateCountAggregateInputType | true
    _avg?: ElectionCandidateAvgAggregateInputType
    _sum?: ElectionCandidateSumAggregateInputType
    _min?: ElectionCandidateMinAggregateInputType
    _max?: ElectionCandidateMaxAggregateInputType
  }

  export type ElectionCandidateGroupByOutputType = {
    id: number
    election_year: number
    candidate_id: number
    role: string
    total_ev: number
    is_winner: boolean
    party: string
    _count: ElectionCandidateCountAggregateOutputType | null
    _avg: ElectionCandidateAvgAggregateOutputType | null
    _sum: ElectionCandidateSumAggregateOutputType | null
    _min: ElectionCandidateMinAggregateOutputType | null
    _max: ElectionCandidateMaxAggregateOutputType | null
  }

  type GetElectionCandidateGroupByPayload<T extends ElectionCandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionCandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectionCandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectionCandidateGroupByOutputType[P]>
            : GetScalarType<T[P], ElectionCandidateGroupByOutputType[P]>
        }
      >
    >


  export type ElectionCandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    election_year?: boolean
    candidate_id?: boolean
    role?: boolean
    total_ev?: boolean
    is_winner?: boolean
    party?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    state_result_candidates?: boolean | ElectionCandidate$state_result_candidatesArgs<ExtArgs>
    _count?: boolean | ElectionCandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electionCandidate"]>

  export type ElectionCandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    election_year?: boolean
    candidate_id?: boolean
    role?: boolean
    total_ev?: boolean
    is_winner?: boolean
    party?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electionCandidate"]>

  export type ElectionCandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    election_year?: boolean
    candidate_id?: boolean
    role?: boolean
    total_ev?: boolean
    is_winner?: boolean
    party?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electionCandidate"]>

  export type ElectionCandidateSelectScalar = {
    id?: boolean
    election_year?: boolean
    candidate_id?: boolean
    role?: boolean
    total_ev?: boolean
    is_winner?: boolean
    party?: boolean
  }

  export type ElectionCandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "election_year" | "candidate_id" | "role" | "total_ev" | "is_winner" | "party", ExtArgs["result"]["electionCandidate"]>
  export type ElectionCandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    state_result_candidates?: boolean | ElectionCandidate$state_result_candidatesArgs<ExtArgs>
    _count?: boolean | ElectionCandidateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ElectionCandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type ElectionCandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $ElectionCandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ElectionCandidate"
    objects: {
      election: Prisma.$ElectionPayload<ExtArgs>
      candidate: Prisma.$CandidatePayload<ExtArgs>
      state_result_candidates: Prisma.$StateResultCandidatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      election_year: number
      candidate_id: number
      role: string
      total_ev: number
      is_winner: boolean
      party: string
    }, ExtArgs["result"]["electionCandidate"]>
    composites: {}
  }

  type ElectionCandidateGetPayload<S extends boolean | null | undefined | ElectionCandidateDefaultArgs> = $Result.GetResult<Prisma.$ElectionCandidatePayload, S>

  type ElectionCandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElectionCandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElectionCandidateCountAggregateInputType | true
    }

  export interface ElectionCandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ElectionCandidate'], meta: { name: 'ElectionCandidate' } }
    /**
     * Find zero or one ElectionCandidate that matches the filter.
     * @param {ElectionCandidateFindUniqueArgs} args - Arguments to find a ElectionCandidate
     * @example
     * // Get one ElectionCandidate
     * const electionCandidate = await prisma.electionCandidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElectionCandidateFindUniqueArgs>(args: SelectSubset<T, ElectionCandidateFindUniqueArgs<ExtArgs>>): Prisma__ElectionCandidateClient<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ElectionCandidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElectionCandidateFindUniqueOrThrowArgs} args - Arguments to find a ElectionCandidate
     * @example
     * // Get one ElectionCandidate
     * const electionCandidate = await prisma.electionCandidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElectionCandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, ElectionCandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElectionCandidateClient<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElectionCandidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCandidateFindFirstArgs} args - Arguments to find a ElectionCandidate
     * @example
     * // Get one ElectionCandidate
     * const electionCandidate = await prisma.electionCandidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElectionCandidateFindFirstArgs>(args?: SelectSubset<T, ElectionCandidateFindFirstArgs<ExtArgs>>): Prisma__ElectionCandidateClient<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElectionCandidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCandidateFindFirstOrThrowArgs} args - Arguments to find a ElectionCandidate
     * @example
     * // Get one ElectionCandidate
     * const electionCandidate = await prisma.electionCandidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElectionCandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, ElectionCandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElectionCandidateClient<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ElectionCandidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ElectionCandidates
     * const electionCandidates = await prisma.electionCandidate.findMany()
     * 
     * // Get first 10 ElectionCandidates
     * const electionCandidates = await prisma.electionCandidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const electionCandidateWithIdOnly = await prisma.electionCandidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElectionCandidateFindManyArgs>(args?: SelectSubset<T, ElectionCandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ElectionCandidate.
     * @param {ElectionCandidateCreateArgs} args - Arguments to create a ElectionCandidate.
     * @example
     * // Create one ElectionCandidate
     * const ElectionCandidate = await prisma.electionCandidate.create({
     *   data: {
     *     // ... data to create a ElectionCandidate
     *   }
     * })
     * 
     */
    create<T extends ElectionCandidateCreateArgs>(args: SelectSubset<T, ElectionCandidateCreateArgs<ExtArgs>>): Prisma__ElectionCandidateClient<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ElectionCandidates.
     * @param {ElectionCandidateCreateManyArgs} args - Arguments to create many ElectionCandidates.
     * @example
     * // Create many ElectionCandidates
     * const electionCandidate = await prisma.electionCandidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElectionCandidateCreateManyArgs>(args?: SelectSubset<T, ElectionCandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ElectionCandidates and returns the data saved in the database.
     * @param {ElectionCandidateCreateManyAndReturnArgs} args - Arguments to create many ElectionCandidates.
     * @example
     * // Create many ElectionCandidates
     * const electionCandidate = await prisma.electionCandidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ElectionCandidates and only return the `id`
     * const electionCandidateWithIdOnly = await prisma.electionCandidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElectionCandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, ElectionCandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ElectionCandidate.
     * @param {ElectionCandidateDeleteArgs} args - Arguments to delete one ElectionCandidate.
     * @example
     * // Delete one ElectionCandidate
     * const ElectionCandidate = await prisma.electionCandidate.delete({
     *   where: {
     *     // ... filter to delete one ElectionCandidate
     *   }
     * })
     * 
     */
    delete<T extends ElectionCandidateDeleteArgs>(args: SelectSubset<T, ElectionCandidateDeleteArgs<ExtArgs>>): Prisma__ElectionCandidateClient<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ElectionCandidate.
     * @param {ElectionCandidateUpdateArgs} args - Arguments to update one ElectionCandidate.
     * @example
     * // Update one ElectionCandidate
     * const electionCandidate = await prisma.electionCandidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElectionCandidateUpdateArgs>(args: SelectSubset<T, ElectionCandidateUpdateArgs<ExtArgs>>): Prisma__ElectionCandidateClient<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ElectionCandidates.
     * @param {ElectionCandidateDeleteManyArgs} args - Arguments to filter ElectionCandidates to delete.
     * @example
     * // Delete a few ElectionCandidates
     * const { count } = await prisma.electionCandidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElectionCandidateDeleteManyArgs>(args?: SelectSubset<T, ElectionCandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElectionCandidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ElectionCandidates
     * const electionCandidate = await prisma.electionCandidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElectionCandidateUpdateManyArgs>(args: SelectSubset<T, ElectionCandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElectionCandidates and returns the data updated in the database.
     * @param {ElectionCandidateUpdateManyAndReturnArgs} args - Arguments to update many ElectionCandidates.
     * @example
     * // Update many ElectionCandidates
     * const electionCandidate = await prisma.electionCandidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ElectionCandidates and only return the `id`
     * const electionCandidateWithIdOnly = await prisma.electionCandidate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ElectionCandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, ElectionCandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ElectionCandidate.
     * @param {ElectionCandidateUpsertArgs} args - Arguments to update or create a ElectionCandidate.
     * @example
     * // Update or create a ElectionCandidate
     * const electionCandidate = await prisma.electionCandidate.upsert({
     *   create: {
     *     // ... data to create a ElectionCandidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ElectionCandidate we want to update
     *   }
     * })
     */
    upsert<T extends ElectionCandidateUpsertArgs>(args: SelectSubset<T, ElectionCandidateUpsertArgs<ExtArgs>>): Prisma__ElectionCandidateClient<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ElectionCandidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCandidateCountArgs} args - Arguments to filter ElectionCandidates to count.
     * @example
     * // Count the number of ElectionCandidates
     * const count = await prisma.electionCandidate.count({
     *   where: {
     *     // ... the filter for the ElectionCandidates we want to count
     *   }
     * })
    **/
    count<T extends ElectionCandidateCountArgs>(
      args?: Subset<T, ElectionCandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionCandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ElectionCandidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElectionCandidateAggregateArgs>(args: Subset<T, ElectionCandidateAggregateArgs>): Prisma.PrismaPromise<GetElectionCandidateAggregateType<T>>

    /**
     * Group by ElectionCandidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElectionCandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectionCandidateGroupByArgs['orderBy'] }
        : { orderBy?: ElectionCandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElectionCandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectionCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ElectionCandidate model
   */
  readonly fields: ElectionCandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ElectionCandidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectionCandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    state_result_candidates<T extends ElectionCandidate$state_result_candidatesArgs<ExtArgs> = {}>(args?: Subset<T, ElectionCandidate$state_result_candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ElectionCandidate model
   */
  interface ElectionCandidateFieldRefs {
    readonly id: FieldRef<"ElectionCandidate", 'Int'>
    readonly election_year: FieldRef<"ElectionCandidate", 'Int'>
    readonly candidate_id: FieldRef<"ElectionCandidate", 'Int'>
    readonly role: FieldRef<"ElectionCandidate", 'String'>
    readonly total_ev: FieldRef<"ElectionCandidate", 'Int'>
    readonly is_winner: FieldRef<"ElectionCandidate", 'Boolean'>
    readonly party: FieldRef<"ElectionCandidate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ElectionCandidate findUnique
   */
  export type ElectionCandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    /**
     * Filter, which ElectionCandidate to fetch.
     */
    where: ElectionCandidateWhereUniqueInput
  }

  /**
   * ElectionCandidate findUniqueOrThrow
   */
  export type ElectionCandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    /**
     * Filter, which ElectionCandidate to fetch.
     */
    where: ElectionCandidateWhereUniqueInput
  }

  /**
   * ElectionCandidate findFirst
   */
  export type ElectionCandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    /**
     * Filter, which ElectionCandidate to fetch.
     */
    where?: ElectionCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionCandidates to fetch.
     */
    orderBy?: ElectionCandidateOrderByWithRelationInput | ElectionCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElectionCandidates.
     */
    cursor?: ElectionCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectionCandidates.
     */
    distinct?: ElectionCandidateScalarFieldEnum | ElectionCandidateScalarFieldEnum[]
  }

  /**
   * ElectionCandidate findFirstOrThrow
   */
  export type ElectionCandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    /**
     * Filter, which ElectionCandidate to fetch.
     */
    where?: ElectionCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionCandidates to fetch.
     */
    orderBy?: ElectionCandidateOrderByWithRelationInput | ElectionCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElectionCandidates.
     */
    cursor?: ElectionCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectionCandidates.
     */
    distinct?: ElectionCandidateScalarFieldEnum | ElectionCandidateScalarFieldEnum[]
  }

  /**
   * ElectionCandidate findMany
   */
  export type ElectionCandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    /**
     * Filter, which ElectionCandidates to fetch.
     */
    where?: ElectionCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionCandidates to fetch.
     */
    orderBy?: ElectionCandidateOrderByWithRelationInput | ElectionCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ElectionCandidates.
     */
    cursor?: ElectionCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionCandidates.
     */
    skip?: number
    distinct?: ElectionCandidateScalarFieldEnum | ElectionCandidateScalarFieldEnum[]
  }

  /**
   * ElectionCandidate create
   */
  export type ElectionCandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a ElectionCandidate.
     */
    data: XOR<ElectionCandidateCreateInput, ElectionCandidateUncheckedCreateInput>
  }

  /**
   * ElectionCandidate createMany
   */
  export type ElectionCandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ElectionCandidates.
     */
    data: ElectionCandidateCreateManyInput | ElectionCandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ElectionCandidate createManyAndReturn
   */
  export type ElectionCandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * The data used to create many ElectionCandidates.
     */
    data: ElectionCandidateCreateManyInput | ElectionCandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ElectionCandidate update
   */
  export type ElectionCandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a ElectionCandidate.
     */
    data: XOR<ElectionCandidateUpdateInput, ElectionCandidateUncheckedUpdateInput>
    /**
     * Choose, which ElectionCandidate to update.
     */
    where: ElectionCandidateWhereUniqueInput
  }

  /**
   * ElectionCandidate updateMany
   */
  export type ElectionCandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ElectionCandidates.
     */
    data: XOR<ElectionCandidateUpdateManyMutationInput, ElectionCandidateUncheckedUpdateManyInput>
    /**
     * Filter which ElectionCandidates to update
     */
    where?: ElectionCandidateWhereInput
    /**
     * Limit how many ElectionCandidates to update.
     */
    limit?: number
  }

  /**
   * ElectionCandidate updateManyAndReturn
   */
  export type ElectionCandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * The data used to update ElectionCandidates.
     */
    data: XOR<ElectionCandidateUpdateManyMutationInput, ElectionCandidateUncheckedUpdateManyInput>
    /**
     * Filter which ElectionCandidates to update
     */
    where?: ElectionCandidateWhereInput
    /**
     * Limit how many ElectionCandidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ElectionCandidate upsert
   */
  export type ElectionCandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the ElectionCandidate to update in case it exists.
     */
    where: ElectionCandidateWhereUniqueInput
    /**
     * In case the ElectionCandidate found by the `where` argument doesn't exist, create a new ElectionCandidate with this data.
     */
    create: XOR<ElectionCandidateCreateInput, ElectionCandidateUncheckedCreateInput>
    /**
     * In case the ElectionCandidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectionCandidateUpdateInput, ElectionCandidateUncheckedUpdateInput>
  }

  /**
   * ElectionCandidate delete
   */
  export type ElectionCandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
    /**
     * Filter which ElectionCandidate to delete.
     */
    where: ElectionCandidateWhereUniqueInput
  }

  /**
   * ElectionCandidate deleteMany
   */
  export type ElectionCandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElectionCandidates to delete
     */
    where?: ElectionCandidateWhereInput
    /**
     * Limit how many ElectionCandidates to delete.
     */
    limit?: number
  }

  /**
   * ElectionCandidate.state_result_candidates
   */
  export type ElectionCandidate$state_result_candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    where?: StateResultCandidateWhereInput
    orderBy?: StateResultCandidateOrderByWithRelationInput | StateResultCandidateOrderByWithRelationInput[]
    cursor?: StateResultCandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StateResultCandidateScalarFieldEnum | StateResultCandidateScalarFieldEnum[]
  }

  /**
   * ElectionCandidate without action
   */
  export type ElectionCandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCandidate
     */
    select?: ElectionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionCandidate
     */
    omit?: ElectionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionCandidateInclude<ExtArgs> | null
  }


  /**
   * Model StateResult
   */

  export type AggregateStateResult = {
    _count: StateResultCountAggregateOutputType | null
    _avg: StateResultAvgAggregateOutputType | null
    _sum: StateResultSumAggregateOutputType | null
    _min: StateResultMinAggregateOutputType | null
    _max: StateResultMaxAggregateOutputType | null
  }

  export type StateResultAvgAggregateOutputType = {
    id: number | null
    election_year: number | null
    total_ev: number | null
  }

  export type StateResultSumAggregateOutputType = {
    id: number | null
    election_year: number | null
    total_ev: number | null
  }

  export type StateResultMinAggregateOutputType = {
    id: number | null
    election_year: number | null
    state_name: string | null
    total_ev: number | null
  }

  export type StateResultMaxAggregateOutputType = {
    id: number | null
    election_year: number | null
    state_name: string | null
    total_ev: number | null
  }

  export type StateResultCountAggregateOutputType = {
    id: number
    election_year: number
    state_name: number
    total_ev: number
    _all: number
  }


  export type StateResultAvgAggregateInputType = {
    id?: true
    election_year?: true
    total_ev?: true
  }

  export type StateResultSumAggregateInputType = {
    id?: true
    election_year?: true
    total_ev?: true
  }

  export type StateResultMinAggregateInputType = {
    id?: true
    election_year?: true
    state_name?: true
    total_ev?: true
  }

  export type StateResultMaxAggregateInputType = {
    id?: true
    election_year?: true
    state_name?: true
    total_ev?: true
  }

  export type StateResultCountAggregateInputType = {
    id?: true
    election_year?: true
    state_name?: true
    total_ev?: true
    _all?: true
  }

  export type StateResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StateResult to aggregate.
     */
    where?: StateResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateResults to fetch.
     */
    orderBy?: StateResultOrderByWithRelationInput | StateResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StateResults
    **/
    _count?: true | StateResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateResultMaxAggregateInputType
  }

  export type GetStateResultAggregateType<T extends StateResultAggregateArgs> = {
        [P in keyof T & keyof AggregateStateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStateResult[P]>
      : GetScalarType<T[P], AggregateStateResult[P]>
  }




  export type StateResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateResultWhereInput
    orderBy?: StateResultOrderByWithAggregationInput | StateResultOrderByWithAggregationInput[]
    by: StateResultScalarFieldEnum[] | StateResultScalarFieldEnum
    having?: StateResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateResultCountAggregateInputType | true
    _avg?: StateResultAvgAggregateInputType
    _sum?: StateResultSumAggregateInputType
    _min?: StateResultMinAggregateInputType
    _max?: StateResultMaxAggregateInputType
  }

  export type StateResultGroupByOutputType = {
    id: number
    election_year: number
    state_name: string
    total_ev: number
    _count: StateResultCountAggregateOutputType | null
    _avg: StateResultAvgAggregateOutputType | null
    _sum: StateResultSumAggregateOutputType | null
    _min: StateResultMinAggregateOutputType | null
    _max: StateResultMaxAggregateOutputType | null
  }

  type GetStateResultGroupByPayload<T extends StateResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateResultGroupByOutputType[P]>
            : GetScalarType<T[P], StateResultGroupByOutputType[P]>
        }
      >
    >


  export type StateResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    election_year?: boolean
    state_name?: boolean
    total_ev?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    state_result_candidates?: boolean | StateResult$state_result_candidatesArgs<ExtArgs>
    _count?: boolean | StateResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stateResult"]>

  export type StateResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    election_year?: boolean
    state_name?: boolean
    total_ev?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stateResult"]>

  export type StateResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    election_year?: boolean
    state_name?: boolean
    total_ev?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stateResult"]>

  export type StateResultSelectScalar = {
    id?: boolean
    election_year?: boolean
    state_name?: boolean
    total_ev?: boolean
  }

  export type StateResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "election_year" | "state_name" | "total_ev", ExtArgs["result"]["stateResult"]>
  export type StateResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    state_result_candidates?: boolean | StateResult$state_result_candidatesArgs<ExtArgs>
    _count?: boolean | StateResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StateResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }
  export type StateResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }

  export type $StateResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StateResult"
    objects: {
      election: Prisma.$ElectionPayload<ExtArgs>
      state_result_candidates: Prisma.$StateResultCandidatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      election_year: number
      state_name: string
      total_ev: number
    }, ExtArgs["result"]["stateResult"]>
    composites: {}
  }

  type StateResultGetPayload<S extends boolean | null | undefined | StateResultDefaultArgs> = $Result.GetResult<Prisma.$StateResultPayload, S>

  type StateResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateResultCountAggregateInputType | true
    }

  export interface StateResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StateResult'], meta: { name: 'StateResult' } }
    /**
     * Find zero or one StateResult that matches the filter.
     * @param {StateResultFindUniqueArgs} args - Arguments to find a StateResult
     * @example
     * // Get one StateResult
     * const stateResult = await prisma.stateResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateResultFindUniqueArgs>(args: SelectSubset<T, StateResultFindUniqueArgs<ExtArgs>>): Prisma__StateResultClient<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StateResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateResultFindUniqueOrThrowArgs} args - Arguments to find a StateResult
     * @example
     * // Get one StateResult
     * const stateResult = await prisma.stateResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateResultFindUniqueOrThrowArgs>(args: SelectSubset<T, StateResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateResultClient<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StateResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultFindFirstArgs} args - Arguments to find a StateResult
     * @example
     * // Get one StateResult
     * const stateResult = await prisma.stateResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateResultFindFirstArgs>(args?: SelectSubset<T, StateResultFindFirstArgs<ExtArgs>>): Prisma__StateResultClient<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StateResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultFindFirstOrThrowArgs} args - Arguments to find a StateResult
     * @example
     * // Get one StateResult
     * const stateResult = await prisma.stateResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateResultFindFirstOrThrowArgs>(args?: SelectSubset<T, StateResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateResultClient<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StateResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StateResults
     * const stateResults = await prisma.stateResult.findMany()
     * 
     * // Get first 10 StateResults
     * const stateResults = await prisma.stateResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateResultWithIdOnly = await prisma.stateResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateResultFindManyArgs>(args?: SelectSubset<T, StateResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StateResult.
     * @param {StateResultCreateArgs} args - Arguments to create a StateResult.
     * @example
     * // Create one StateResult
     * const StateResult = await prisma.stateResult.create({
     *   data: {
     *     // ... data to create a StateResult
     *   }
     * })
     * 
     */
    create<T extends StateResultCreateArgs>(args: SelectSubset<T, StateResultCreateArgs<ExtArgs>>): Prisma__StateResultClient<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StateResults.
     * @param {StateResultCreateManyArgs} args - Arguments to create many StateResults.
     * @example
     * // Create many StateResults
     * const stateResult = await prisma.stateResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateResultCreateManyArgs>(args?: SelectSubset<T, StateResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StateResults and returns the data saved in the database.
     * @param {StateResultCreateManyAndReturnArgs} args - Arguments to create many StateResults.
     * @example
     * // Create many StateResults
     * const stateResult = await prisma.stateResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StateResults and only return the `id`
     * const stateResultWithIdOnly = await prisma.stateResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateResultCreateManyAndReturnArgs>(args?: SelectSubset<T, StateResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StateResult.
     * @param {StateResultDeleteArgs} args - Arguments to delete one StateResult.
     * @example
     * // Delete one StateResult
     * const StateResult = await prisma.stateResult.delete({
     *   where: {
     *     // ... filter to delete one StateResult
     *   }
     * })
     * 
     */
    delete<T extends StateResultDeleteArgs>(args: SelectSubset<T, StateResultDeleteArgs<ExtArgs>>): Prisma__StateResultClient<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StateResult.
     * @param {StateResultUpdateArgs} args - Arguments to update one StateResult.
     * @example
     * // Update one StateResult
     * const stateResult = await prisma.stateResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateResultUpdateArgs>(args: SelectSubset<T, StateResultUpdateArgs<ExtArgs>>): Prisma__StateResultClient<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StateResults.
     * @param {StateResultDeleteManyArgs} args - Arguments to filter StateResults to delete.
     * @example
     * // Delete a few StateResults
     * const { count } = await prisma.stateResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateResultDeleteManyArgs>(args?: SelectSubset<T, StateResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StateResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StateResults
     * const stateResult = await prisma.stateResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateResultUpdateManyArgs>(args: SelectSubset<T, StateResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StateResults and returns the data updated in the database.
     * @param {StateResultUpdateManyAndReturnArgs} args - Arguments to update many StateResults.
     * @example
     * // Update many StateResults
     * const stateResult = await prisma.stateResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StateResults and only return the `id`
     * const stateResultWithIdOnly = await prisma.stateResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StateResultUpdateManyAndReturnArgs>(args: SelectSubset<T, StateResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StateResult.
     * @param {StateResultUpsertArgs} args - Arguments to update or create a StateResult.
     * @example
     * // Update or create a StateResult
     * const stateResult = await prisma.stateResult.upsert({
     *   create: {
     *     // ... data to create a StateResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StateResult we want to update
     *   }
     * })
     */
    upsert<T extends StateResultUpsertArgs>(args: SelectSubset<T, StateResultUpsertArgs<ExtArgs>>): Prisma__StateResultClient<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StateResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultCountArgs} args - Arguments to filter StateResults to count.
     * @example
     * // Count the number of StateResults
     * const count = await prisma.stateResult.count({
     *   where: {
     *     // ... the filter for the StateResults we want to count
     *   }
     * })
    **/
    count<T extends StateResultCountArgs>(
      args?: Subset<T, StateResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StateResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateResultAggregateArgs>(args: Subset<T, StateResultAggregateArgs>): Prisma.PrismaPromise<GetStateResultAggregateType<T>>

    /**
     * Group by StateResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StateResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateResultGroupByArgs['orderBy'] }
        : { orderBy?: StateResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StateResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StateResult model
   */
  readonly fields: StateResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StateResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    state_result_candidates<T extends StateResult$state_result_candidatesArgs<ExtArgs> = {}>(args?: Subset<T, StateResult$state_result_candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StateResult model
   */
  interface StateResultFieldRefs {
    readonly id: FieldRef<"StateResult", 'Int'>
    readonly election_year: FieldRef<"StateResult", 'Int'>
    readonly state_name: FieldRef<"StateResult", 'String'>
    readonly total_ev: FieldRef<"StateResult", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StateResult findUnique
   */
  export type StateResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
    /**
     * Filter, which StateResult to fetch.
     */
    where: StateResultWhereUniqueInput
  }

  /**
   * StateResult findUniqueOrThrow
   */
  export type StateResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
    /**
     * Filter, which StateResult to fetch.
     */
    where: StateResultWhereUniqueInput
  }

  /**
   * StateResult findFirst
   */
  export type StateResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
    /**
     * Filter, which StateResult to fetch.
     */
    where?: StateResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateResults to fetch.
     */
    orderBy?: StateResultOrderByWithRelationInput | StateResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StateResults.
     */
    cursor?: StateResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StateResults.
     */
    distinct?: StateResultScalarFieldEnum | StateResultScalarFieldEnum[]
  }

  /**
   * StateResult findFirstOrThrow
   */
  export type StateResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
    /**
     * Filter, which StateResult to fetch.
     */
    where?: StateResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateResults to fetch.
     */
    orderBy?: StateResultOrderByWithRelationInput | StateResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StateResults.
     */
    cursor?: StateResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StateResults.
     */
    distinct?: StateResultScalarFieldEnum | StateResultScalarFieldEnum[]
  }

  /**
   * StateResult findMany
   */
  export type StateResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
    /**
     * Filter, which StateResults to fetch.
     */
    where?: StateResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateResults to fetch.
     */
    orderBy?: StateResultOrderByWithRelationInput | StateResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StateResults.
     */
    cursor?: StateResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateResults.
     */
    skip?: number
    distinct?: StateResultScalarFieldEnum | StateResultScalarFieldEnum[]
  }

  /**
   * StateResult create
   */
  export type StateResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
    /**
     * The data needed to create a StateResult.
     */
    data: XOR<StateResultCreateInput, StateResultUncheckedCreateInput>
  }

  /**
   * StateResult createMany
   */
  export type StateResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StateResults.
     */
    data: StateResultCreateManyInput | StateResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StateResult createManyAndReturn
   */
  export type StateResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * The data used to create many StateResults.
     */
    data: StateResultCreateManyInput | StateResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StateResult update
   */
  export type StateResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
    /**
     * The data needed to update a StateResult.
     */
    data: XOR<StateResultUpdateInput, StateResultUncheckedUpdateInput>
    /**
     * Choose, which StateResult to update.
     */
    where: StateResultWhereUniqueInput
  }

  /**
   * StateResult updateMany
   */
  export type StateResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StateResults.
     */
    data: XOR<StateResultUpdateManyMutationInput, StateResultUncheckedUpdateManyInput>
    /**
     * Filter which StateResults to update
     */
    where?: StateResultWhereInput
    /**
     * Limit how many StateResults to update.
     */
    limit?: number
  }

  /**
   * StateResult updateManyAndReturn
   */
  export type StateResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * The data used to update StateResults.
     */
    data: XOR<StateResultUpdateManyMutationInput, StateResultUncheckedUpdateManyInput>
    /**
     * Filter which StateResults to update
     */
    where?: StateResultWhereInput
    /**
     * Limit how many StateResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StateResult upsert
   */
  export type StateResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
    /**
     * The filter to search for the StateResult to update in case it exists.
     */
    where: StateResultWhereUniqueInput
    /**
     * In case the StateResult found by the `where` argument doesn't exist, create a new StateResult with this data.
     */
    create: XOR<StateResultCreateInput, StateResultUncheckedCreateInput>
    /**
     * In case the StateResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateResultUpdateInput, StateResultUncheckedUpdateInput>
  }

  /**
   * StateResult delete
   */
  export type StateResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
    /**
     * Filter which StateResult to delete.
     */
    where: StateResultWhereUniqueInput
  }

  /**
   * StateResult deleteMany
   */
  export type StateResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StateResults to delete
     */
    where?: StateResultWhereInput
    /**
     * Limit how many StateResults to delete.
     */
    limit?: number
  }

  /**
   * StateResult.state_result_candidates
   */
  export type StateResult$state_result_candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    where?: StateResultCandidateWhereInput
    orderBy?: StateResultCandidateOrderByWithRelationInput | StateResultCandidateOrderByWithRelationInput[]
    cursor?: StateResultCandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StateResultCandidateScalarFieldEnum | StateResultCandidateScalarFieldEnum[]
  }

  /**
   * StateResult without action
   */
  export type StateResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResult
     */
    select?: StateResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResult
     */
    omit?: StateResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultInclude<ExtArgs> | null
  }


  /**
   * Model StateResultCandidate
   */

  export type AggregateStateResultCandidate = {
    _count: StateResultCandidateCountAggregateOutputType | null
    _avg: StateResultCandidateAvgAggregateOutputType | null
    _sum: StateResultCandidateSumAggregateOutputType | null
    _min: StateResultCandidateMinAggregateOutputType | null
    _max: StateResultCandidateMaxAggregateOutputType | null
  }

  export type StateResultCandidateAvgAggregateOutputType = {
    id: number | null
    state_result_id: number | null
    election_candidate_id: number | null
    ev_count: number | null
  }

  export type StateResultCandidateSumAggregateOutputType = {
    id: number | null
    state_result_id: number | null
    election_candidate_id: number | null
    ev_count: number | null
  }

  export type StateResultCandidateMinAggregateOutputType = {
    id: number | null
    state_result_id: number | null
    election_candidate_id: number | null
    ev_count: number | null
  }

  export type StateResultCandidateMaxAggregateOutputType = {
    id: number | null
    state_result_id: number | null
    election_candidate_id: number | null
    ev_count: number | null
  }

  export type StateResultCandidateCountAggregateOutputType = {
    id: number
    state_result_id: number
    election_candidate_id: number
    ev_count: number
    _all: number
  }


  export type StateResultCandidateAvgAggregateInputType = {
    id?: true
    state_result_id?: true
    election_candidate_id?: true
    ev_count?: true
  }

  export type StateResultCandidateSumAggregateInputType = {
    id?: true
    state_result_id?: true
    election_candidate_id?: true
    ev_count?: true
  }

  export type StateResultCandidateMinAggregateInputType = {
    id?: true
    state_result_id?: true
    election_candidate_id?: true
    ev_count?: true
  }

  export type StateResultCandidateMaxAggregateInputType = {
    id?: true
    state_result_id?: true
    election_candidate_id?: true
    ev_count?: true
  }

  export type StateResultCandidateCountAggregateInputType = {
    id?: true
    state_result_id?: true
    election_candidate_id?: true
    ev_count?: true
    _all?: true
  }

  export type StateResultCandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StateResultCandidate to aggregate.
     */
    where?: StateResultCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateResultCandidates to fetch.
     */
    orderBy?: StateResultCandidateOrderByWithRelationInput | StateResultCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateResultCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateResultCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateResultCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StateResultCandidates
    **/
    _count?: true | StateResultCandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateResultCandidateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateResultCandidateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateResultCandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateResultCandidateMaxAggregateInputType
  }

  export type GetStateResultCandidateAggregateType<T extends StateResultCandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateStateResultCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStateResultCandidate[P]>
      : GetScalarType<T[P], AggregateStateResultCandidate[P]>
  }




  export type StateResultCandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateResultCandidateWhereInput
    orderBy?: StateResultCandidateOrderByWithAggregationInput | StateResultCandidateOrderByWithAggregationInput[]
    by: StateResultCandidateScalarFieldEnum[] | StateResultCandidateScalarFieldEnum
    having?: StateResultCandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateResultCandidateCountAggregateInputType | true
    _avg?: StateResultCandidateAvgAggregateInputType
    _sum?: StateResultCandidateSumAggregateInputType
    _min?: StateResultCandidateMinAggregateInputType
    _max?: StateResultCandidateMaxAggregateInputType
  }

  export type StateResultCandidateGroupByOutputType = {
    id: number
    state_result_id: number
    election_candidate_id: number
    ev_count: number
    _count: StateResultCandidateCountAggregateOutputType | null
    _avg: StateResultCandidateAvgAggregateOutputType | null
    _sum: StateResultCandidateSumAggregateOutputType | null
    _min: StateResultCandidateMinAggregateOutputType | null
    _max: StateResultCandidateMaxAggregateOutputType | null
  }

  type GetStateResultCandidateGroupByPayload<T extends StateResultCandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateResultCandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateResultCandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateResultCandidateGroupByOutputType[P]>
            : GetScalarType<T[P], StateResultCandidateGroupByOutputType[P]>
        }
      >
    >


  export type StateResultCandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state_result_id?: boolean
    election_candidate_id?: boolean
    ev_count?: boolean
    state_result?: boolean | StateResultDefaultArgs<ExtArgs>
    election_candidate?: boolean | ElectionCandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stateResultCandidate"]>

  export type StateResultCandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state_result_id?: boolean
    election_candidate_id?: boolean
    ev_count?: boolean
    state_result?: boolean | StateResultDefaultArgs<ExtArgs>
    election_candidate?: boolean | ElectionCandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stateResultCandidate"]>

  export type StateResultCandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state_result_id?: boolean
    election_candidate_id?: boolean
    ev_count?: boolean
    state_result?: boolean | StateResultDefaultArgs<ExtArgs>
    election_candidate?: boolean | ElectionCandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stateResultCandidate"]>

  export type StateResultCandidateSelectScalar = {
    id?: boolean
    state_result_id?: boolean
    election_candidate_id?: boolean
    ev_count?: boolean
  }

  export type StateResultCandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "state_result_id" | "election_candidate_id" | "ev_count", ExtArgs["result"]["stateResultCandidate"]>
  export type StateResultCandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state_result?: boolean | StateResultDefaultArgs<ExtArgs>
    election_candidate?: boolean | ElectionCandidateDefaultArgs<ExtArgs>
  }
  export type StateResultCandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state_result?: boolean | StateResultDefaultArgs<ExtArgs>
    election_candidate?: boolean | ElectionCandidateDefaultArgs<ExtArgs>
  }
  export type StateResultCandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state_result?: boolean | StateResultDefaultArgs<ExtArgs>
    election_candidate?: boolean | ElectionCandidateDefaultArgs<ExtArgs>
  }

  export type $StateResultCandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StateResultCandidate"
    objects: {
      state_result: Prisma.$StateResultPayload<ExtArgs>
      election_candidate: Prisma.$ElectionCandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      state_result_id: number
      election_candidate_id: number
      ev_count: number
    }, ExtArgs["result"]["stateResultCandidate"]>
    composites: {}
  }

  type StateResultCandidateGetPayload<S extends boolean | null | undefined | StateResultCandidateDefaultArgs> = $Result.GetResult<Prisma.$StateResultCandidatePayload, S>

  type StateResultCandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateResultCandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateResultCandidateCountAggregateInputType | true
    }

  export interface StateResultCandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StateResultCandidate'], meta: { name: 'StateResultCandidate' } }
    /**
     * Find zero or one StateResultCandidate that matches the filter.
     * @param {StateResultCandidateFindUniqueArgs} args - Arguments to find a StateResultCandidate
     * @example
     * // Get one StateResultCandidate
     * const stateResultCandidate = await prisma.stateResultCandidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateResultCandidateFindUniqueArgs>(args: SelectSubset<T, StateResultCandidateFindUniqueArgs<ExtArgs>>): Prisma__StateResultCandidateClient<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StateResultCandidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateResultCandidateFindUniqueOrThrowArgs} args - Arguments to find a StateResultCandidate
     * @example
     * // Get one StateResultCandidate
     * const stateResultCandidate = await prisma.stateResultCandidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateResultCandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateResultCandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateResultCandidateClient<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StateResultCandidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultCandidateFindFirstArgs} args - Arguments to find a StateResultCandidate
     * @example
     * // Get one StateResultCandidate
     * const stateResultCandidate = await prisma.stateResultCandidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateResultCandidateFindFirstArgs>(args?: SelectSubset<T, StateResultCandidateFindFirstArgs<ExtArgs>>): Prisma__StateResultCandidateClient<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StateResultCandidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultCandidateFindFirstOrThrowArgs} args - Arguments to find a StateResultCandidate
     * @example
     * // Get one StateResultCandidate
     * const stateResultCandidate = await prisma.stateResultCandidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateResultCandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateResultCandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateResultCandidateClient<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StateResultCandidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultCandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StateResultCandidates
     * const stateResultCandidates = await prisma.stateResultCandidate.findMany()
     * 
     * // Get first 10 StateResultCandidates
     * const stateResultCandidates = await prisma.stateResultCandidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateResultCandidateWithIdOnly = await prisma.stateResultCandidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateResultCandidateFindManyArgs>(args?: SelectSubset<T, StateResultCandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StateResultCandidate.
     * @param {StateResultCandidateCreateArgs} args - Arguments to create a StateResultCandidate.
     * @example
     * // Create one StateResultCandidate
     * const StateResultCandidate = await prisma.stateResultCandidate.create({
     *   data: {
     *     // ... data to create a StateResultCandidate
     *   }
     * })
     * 
     */
    create<T extends StateResultCandidateCreateArgs>(args: SelectSubset<T, StateResultCandidateCreateArgs<ExtArgs>>): Prisma__StateResultCandidateClient<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StateResultCandidates.
     * @param {StateResultCandidateCreateManyArgs} args - Arguments to create many StateResultCandidates.
     * @example
     * // Create many StateResultCandidates
     * const stateResultCandidate = await prisma.stateResultCandidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateResultCandidateCreateManyArgs>(args?: SelectSubset<T, StateResultCandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StateResultCandidates and returns the data saved in the database.
     * @param {StateResultCandidateCreateManyAndReturnArgs} args - Arguments to create many StateResultCandidates.
     * @example
     * // Create many StateResultCandidates
     * const stateResultCandidate = await prisma.stateResultCandidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StateResultCandidates and only return the `id`
     * const stateResultCandidateWithIdOnly = await prisma.stateResultCandidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateResultCandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, StateResultCandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StateResultCandidate.
     * @param {StateResultCandidateDeleteArgs} args - Arguments to delete one StateResultCandidate.
     * @example
     * // Delete one StateResultCandidate
     * const StateResultCandidate = await prisma.stateResultCandidate.delete({
     *   where: {
     *     // ... filter to delete one StateResultCandidate
     *   }
     * })
     * 
     */
    delete<T extends StateResultCandidateDeleteArgs>(args: SelectSubset<T, StateResultCandidateDeleteArgs<ExtArgs>>): Prisma__StateResultCandidateClient<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StateResultCandidate.
     * @param {StateResultCandidateUpdateArgs} args - Arguments to update one StateResultCandidate.
     * @example
     * // Update one StateResultCandidate
     * const stateResultCandidate = await prisma.stateResultCandidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateResultCandidateUpdateArgs>(args: SelectSubset<T, StateResultCandidateUpdateArgs<ExtArgs>>): Prisma__StateResultCandidateClient<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StateResultCandidates.
     * @param {StateResultCandidateDeleteManyArgs} args - Arguments to filter StateResultCandidates to delete.
     * @example
     * // Delete a few StateResultCandidates
     * const { count } = await prisma.stateResultCandidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateResultCandidateDeleteManyArgs>(args?: SelectSubset<T, StateResultCandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StateResultCandidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultCandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StateResultCandidates
     * const stateResultCandidate = await prisma.stateResultCandidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateResultCandidateUpdateManyArgs>(args: SelectSubset<T, StateResultCandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StateResultCandidates and returns the data updated in the database.
     * @param {StateResultCandidateUpdateManyAndReturnArgs} args - Arguments to update many StateResultCandidates.
     * @example
     * // Update many StateResultCandidates
     * const stateResultCandidate = await prisma.stateResultCandidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StateResultCandidates and only return the `id`
     * const stateResultCandidateWithIdOnly = await prisma.stateResultCandidate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StateResultCandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, StateResultCandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StateResultCandidate.
     * @param {StateResultCandidateUpsertArgs} args - Arguments to update or create a StateResultCandidate.
     * @example
     * // Update or create a StateResultCandidate
     * const stateResultCandidate = await prisma.stateResultCandidate.upsert({
     *   create: {
     *     // ... data to create a StateResultCandidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StateResultCandidate we want to update
     *   }
     * })
     */
    upsert<T extends StateResultCandidateUpsertArgs>(args: SelectSubset<T, StateResultCandidateUpsertArgs<ExtArgs>>): Prisma__StateResultCandidateClient<$Result.GetResult<Prisma.$StateResultCandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StateResultCandidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultCandidateCountArgs} args - Arguments to filter StateResultCandidates to count.
     * @example
     * // Count the number of StateResultCandidates
     * const count = await prisma.stateResultCandidate.count({
     *   where: {
     *     // ... the filter for the StateResultCandidates we want to count
     *   }
     * })
    **/
    count<T extends StateResultCandidateCountArgs>(
      args?: Subset<T, StateResultCandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateResultCandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StateResultCandidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultCandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateResultCandidateAggregateArgs>(args: Subset<T, StateResultCandidateAggregateArgs>): Prisma.PrismaPromise<GetStateResultCandidateAggregateType<T>>

    /**
     * Group by StateResultCandidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateResultCandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StateResultCandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateResultCandidateGroupByArgs['orderBy'] }
        : { orderBy?: StateResultCandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StateResultCandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateResultCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StateResultCandidate model
   */
  readonly fields: StateResultCandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StateResultCandidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateResultCandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state_result<T extends StateResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateResultDefaultArgs<ExtArgs>>): Prisma__StateResultClient<$Result.GetResult<Prisma.$StateResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    election_candidate<T extends ElectionCandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionCandidateDefaultArgs<ExtArgs>>): Prisma__ElectionCandidateClient<$Result.GetResult<Prisma.$ElectionCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StateResultCandidate model
   */
  interface StateResultCandidateFieldRefs {
    readonly id: FieldRef<"StateResultCandidate", 'Int'>
    readonly state_result_id: FieldRef<"StateResultCandidate", 'Int'>
    readonly election_candidate_id: FieldRef<"StateResultCandidate", 'Int'>
    readonly ev_count: FieldRef<"StateResultCandidate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StateResultCandidate findUnique
   */
  export type StateResultCandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    /**
     * Filter, which StateResultCandidate to fetch.
     */
    where: StateResultCandidateWhereUniqueInput
  }

  /**
   * StateResultCandidate findUniqueOrThrow
   */
  export type StateResultCandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    /**
     * Filter, which StateResultCandidate to fetch.
     */
    where: StateResultCandidateWhereUniqueInput
  }

  /**
   * StateResultCandidate findFirst
   */
  export type StateResultCandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    /**
     * Filter, which StateResultCandidate to fetch.
     */
    where?: StateResultCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateResultCandidates to fetch.
     */
    orderBy?: StateResultCandidateOrderByWithRelationInput | StateResultCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StateResultCandidates.
     */
    cursor?: StateResultCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateResultCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateResultCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StateResultCandidates.
     */
    distinct?: StateResultCandidateScalarFieldEnum | StateResultCandidateScalarFieldEnum[]
  }

  /**
   * StateResultCandidate findFirstOrThrow
   */
  export type StateResultCandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    /**
     * Filter, which StateResultCandidate to fetch.
     */
    where?: StateResultCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateResultCandidates to fetch.
     */
    orderBy?: StateResultCandidateOrderByWithRelationInput | StateResultCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StateResultCandidates.
     */
    cursor?: StateResultCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateResultCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateResultCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StateResultCandidates.
     */
    distinct?: StateResultCandidateScalarFieldEnum | StateResultCandidateScalarFieldEnum[]
  }

  /**
   * StateResultCandidate findMany
   */
  export type StateResultCandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    /**
     * Filter, which StateResultCandidates to fetch.
     */
    where?: StateResultCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateResultCandidates to fetch.
     */
    orderBy?: StateResultCandidateOrderByWithRelationInput | StateResultCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StateResultCandidates.
     */
    cursor?: StateResultCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateResultCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateResultCandidates.
     */
    skip?: number
    distinct?: StateResultCandidateScalarFieldEnum | StateResultCandidateScalarFieldEnum[]
  }

  /**
   * StateResultCandidate create
   */
  export type StateResultCandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a StateResultCandidate.
     */
    data: XOR<StateResultCandidateCreateInput, StateResultCandidateUncheckedCreateInput>
  }

  /**
   * StateResultCandidate createMany
   */
  export type StateResultCandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StateResultCandidates.
     */
    data: StateResultCandidateCreateManyInput | StateResultCandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StateResultCandidate createManyAndReturn
   */
  export type StateResultCandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * The data used to create many StateResultCandidates.
     */
    data: StateResultCandidateCreateManyInput | StateResultCandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StateResultCandidate update
   */
  export type StateResultCandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a StateResultCandidate.
     */
    data: XOR<StateResultCandidateUpdateInput, StateResultCandidateUncheckedUpdateInput>
    /**
     * Choose, which StateResultCandidate to update.
     */
    where: StateResultCandidateWhereUniqueInput
  }

  /**
   * StateResultCandidate updateMany
   */
  export type StateResultCandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StateResultCandidates.
     */
    data: XOR<StateResultCandidateUpdateManyMutationInput, StateResultCandidateUncheckedUpdateManyInput>
    /**
     * Filter which StateResultCandidates to update
     */
    where?: StateResultCandidateWhereInput
    /**
     * Limit how many StateResultCandidates to update.
     */
    limit?: number
  }

  /**
   * StateResultCandidate updateManyAndReturn
   */
  export type StateResultCandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * The data used to update StateResultCandidates.
     */
    data: XOR<StateResultCandidateUpdateManyMutationInput, StateResultCandidateUncheckedUpdateManyInput>
    /**
     * Filter which StateResultCandidates to update
     */
    where?: StateResultCandidateWhereInput
    /**
     * Limit how many StateResultCandidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StateResultCandidate upsert
   */
  export type StateResultCandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the StateResultCandidate to update in case it exists.
     */
    where: StateResultCandidateWhereUniqueInput
    /**
     * In case the StateResultCandidate found by the `where` argument doesn't exist, create a new StateResultCandidate with this data.
     */
    create: XOR<StateResultCandidateCreateInput, StateResultCandidateUncheckedCreateInput>
    /**
     * In case the StateResultCandidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateResultCandidateUpdateInput, StateResultCandidateUncheckedUpdateInput>
  }

  /**
   * StateResultCandidate delete
   */
  export type StateResultCandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
    /**
     * Filter which StateResultCandidate to delete.
     */
    where: StateResultCandidateWhereUniqueInput
  }

  /**
   * StateResultCandidate deleteMany
   */
  export type StateResultCandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StateResultCandidates to delete
     */
    where?: StateResultCandidateWhereInput
    /**
     * Limit how many StateResultCandidates to delete.
     */
    limit?: number
  }

  /**
   * StateResultCandidate without action
   */
  export type StateResultCandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateResultCandidate
     */
    select?: StateResultCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateResultCandidate
     */
    omit?: StateResultCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateResultCandidateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ElectionScalarFieldEnum: {
    year: 'year',
    total_ev: 'total_ev',
    majority_ev: 'majority_ev'
  };

  export type ElectionScalarFieldEnum = (typeof ElectionScalarFieldEnum)[keyof typeof ElectionScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const ElectionCandidateScalarFieldEnum: {
    id: 'id',
    election_year: 'election_year',
    candidate_id: 'candidate_id',
    role: 'role',
    total_ev: 'total_ev',
    is_winner: 'is_winner',
    party: 'party'
  };

  export type ElectionCandidateScalarFieldEnum = (typeof ElectionCandidateScalarFieldEnum)[keyof typeof ElectionCandidateScalarFieldEnum]


  export const StateResultScalarFieldEnum: {
    id: 'id',
    election_year: 'election_year',
    state_name: 'state_name',
    total_ev: 'total_ev'
  };

  export type StateResultScalarFieldEnum = (typeof StateResultScalarFieldEnum)[keyof typeof StateResultScalarFieldEnum]


  export const StateResultCandidateScalarFieldEnum: {
    id: 'id',
    state_result_id: 'state_result_id',
    election_candidate_id: 'election_candidate_id',
    ev_count: 'ev_count'
  };

  export type StateResultCandidateScalarFieldEnum = (typeof StateResultCandidateScalarFieldEnum)[keyof typeof StateResultCandidateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ElectionWhereInput = {
    AND?: ElectionWhereInput | ElectionWhereInput[]
    OR?: ElectionWhereInput[]
    NOT?: ElectionWhereInput | ElectionWhereInput[]
    year?: IntFilter<"Election"> | number
    total_ev?: IntFilter<"Election"> | number
    majority_ev?: IntFilter<"Election"> | number
    election_candidates?: ElectionCandidateListRelationFilter
    state_results?: StateResultListRelationFilter
  }

  export type ElectionOrderByWithRelationInput = {
    year?: SortOrder
    total_ev?: SortOrder
    majority_ev?: SortOrder
    election_candidates?: ElectionCandidateOrderByRelationAggregateInput
    state_results?: StateResultOrderByRelationAggregateInput
  }

  export type ElectionWhereUniqueInput = Prisma.AtLeast<{
    year?: number
    AND?: ElectionWhereInput | ElectionWhereInput[]
    OR?: ElectionWhereInput[]
    NOT?: ElectionWhereInput | ElectionWhereInput[]
    total_ev?: IntFilter<"Election"> | number
    majority_ev?: IntFilter<"Election"> | number
    election_candidates?: ElectionCandidateListRelationFilter
    state_results?: StateResultListRelationFilter
  }, "year">

  export type ElectionOrderByWithAggregationInput = {
    year?: SortOrder
    total_ev?: SortOrder
    majority_ev?: SortOrder
    _count?: ElectionCountOrderByAggregateInput
    _avg?: ElectionAvgOrderByAggregateInput
    _max?: ElectionMaxOrderByAggregateInput
    _min?: ElectionMinOrderByAggregateInput
    _sum?: ElectionSumOrderByAggregateInput
  }

  export type ElectionScalarWhereWithAggregatesInput = {
    AND?: ElectionScalarWhereWithAggregatesInput | ElectionScalarWhereWithAggregatesInput[]
    OR?: ElectionScalarWhereWithAggregatesInput[]
    NOT?: ElectionScalarWhereWithAggregatesInput | ElectionScalarWhereWithAggregatesInput[]
    year?: IntWithAggregatesFilter<"Election"> | number
    total_ev?: IntWithAggregatesFilter<"Election"> | number
    majority_ev?: IntWithAggregatesFilter<"Election"> | number
  }

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id?: IntFilter<"Candidate"> | number
    name?: StringFilter<"Candidate"> | string
    election_candidates?: ElectionCandidateListRelationFilter
  }

  export type CandidateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    election_candidates?: ElectionCandidateOrderByRelationAggregateInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    name?: StringFilter<"Candidate"> | string
    election_candidates?: ElectionCandidateListRelationFilter
  }, "id">

  export type CandidateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _avg?: CandidateAvgOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
    _sum?: CandidateSumOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Candidate"> | number
    name?: StringWithAggregatesFilter<"Candidate"> | string
  }

  export type ElectionCandidateWhereInput = {
    AND?: ElectionCandidateWhereInput | ElectionCandidateWhereInput[]
    OR?: ElectionCandidateWhereInput[]
    NOT?: ElectionCandidateWhereInput | ElectionCandidateWhereInput[]
    id?: IntFilter<"ElectionCandidate"> | number
    election_year?: IntFilter<"ElectionCandidate"> | number
    candidate_id?: IntFilter<"ElectionCandidate"> | number
    role?: StringFilter<"ElectionCandidate"> | string
    total_ev?: IntFilter<"ElectionCandidate"> | number
    is_winner?: BoolFilter<"ElectionCandidate"> | boolean
    party?: StringFilter<"ElectionCandidate"> | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    state_result_candidates?: StateResultCandidateListRelationFilter
  }

  export type ElectionCandidateOrderByWithRelationInput = {
    id?: SortOrder
    election_year?: SortOrder
    candidate_id?: SortOrder
    role?: SortOrder
    total_ev?: SortOrder
    is_winner?: SortOrder
    party?: SortOrder
    election?: ElectionOrderByWithRelationInput
    candidate?: CandidateOrderByWithRelationInput
    state_result_candidates?: StateResultCandidateOrderByRelationAggregateInput
  }

  export type ElectionCandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ElectionCandidateWhereInput | ElectionCandidateWhereInput[]
    OR?: ElectionCandidateWhereInput[]
    NOT?: ElectionCandidateWhereInput | ElectionCandidateWhereInput[]
    election_year?: IntFilter<"ElectionCandidate"> | number
    candidate_id?: IntFilter<"ElectionCandidate"> | number
    role?: StringFilter<"ElectionCandidate"> | string
    total_ev?: IntFilter<"ElectionCandidate"> | number
    is_winner?: BoolFilter<"ElectionCandidate"> | boolean
    party?: StringFilter<"ElectionCandidate"> | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    state_result_candidates?: StateResultCandidateListRelationFilter
  }, "id">

  export type ElectionCandidateOrderByWithAggregationInput = {
    id?: SortOrder
    election_year?: SortOrder
    candidate_id?: SortOrder
    role?: SortOrder
    total_ev?: SortOrder
    is_winner?: SortOrder
    party?: SortOrder
    _count?: ElectionCandidateCountOrderByAggregateInput
    _avg?: ElectionCandidateAvgOrderByAggregateInput
    _max?: ElectionCandidateMaxOrderByAggregateInput
    _min?: ElectionCandidateMinOrderByAggregateInput
    _sum?: ElectionCandidateSumOrderByAggregateInput
  }

  export type ElectionCandidateScalarWhereWithAggregatesInput = {
    AND?: ElectionCandidateScalarWhereWithAggregatesInput | ElectionCandidateScalarWhereWithAggregatesInput[]
    OR?: ElectionCandidateScalarWhereWithAggregatesInput[]
    NOT?: ElectionCandidateScalarWhereWithAggregatesInput | ElectionCandidateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ElectionCandidate"> | number
    election_year?: IntWithAggregatesFilter<"ElectionCandidate"> | number
    candidate_id?: IntWithAggregatesFilter<"ElectionCandidate"> | number
    role?: StringWithAggregatesFilter<"ElectionCandidate"> | string
    total_ev?: IntWithAggregatesFilter<"ElectionCandidate"> | number
    is_winner?: BoolWithAggregatesFilter<"ElectionCandidate"> | boolean
    party?: StringWithAggregatesFilter<"ElectionCandidate"> | string
  }

  export type StateResultWhereInput = {
    AND?: StateResultWhereInput | StateResultWhereInput[]
    OR?: StateResultWhereInput[]
    NOT?: StateResultWhereInput | StateResultWhereInput[]
    id?: IntFilter<"StateResult"> | number
    election_year?: IntFilter<"StateResult"> | number
    state_name?: StringFilter<"StateResult"> | string
    total_ev?: IntFilter<"StateResult"> | number
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    state_result_candidates?: StateResultCandidateListRelationFilter
  }

  export type StateResultOrderByWithRelationInput = {
    id?: SortOrder
    election_year?: SortOrder
    state_name?: SortOrder
    total_ev?: SortOrder
    election?: ElectionOrderByWithRelationInput
    state_result_candidates?: StateResultCandidateOrderByRelationAggregateInput
  }

  export type StateResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StateResultWhereInput | StateResultWhereInput[]
    OR?: StateResultWhereInput[]
    NOT?: StateResultWhereInput | StateResultWhereInput[]
    election_year?: IntFilter<"StateResult"> | number
    state_name?: StringFilter<"StateResult"> | string
    total_ev?: IntFilter<"StateResult"> | number
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    state_result_candidates?: StateResultCandidateListRelationFilter
  }, "id">

  export type StateResultOrderByWithAggregationInput = {
    id?: SortOrder
    election_year?: SortOrder
    state_name?: SortOrder
    total_ev?: SortOrder
    _count?: StateResultCountOrderByAggregateInput
    _avg?: StateResultAvgOrderByAggregateInput
    _max?: StateResultMaxOrderByAggregateInput
    _min?: StateResultMinOrderByAggregateInput
    _sum?: StateResultSumOrderByAggregateInput
  }

  export type StateResultScalarWhereWithAggregatesInput = {
    AND?: StateResultScalarWhereWithAggregatesInput | StateResultScalarWhereWithAggregatesInput[]
    OR?: StateResultScalarWhereWithAggregatesInput[]
    NOT?: StateResultScalarWhereWithAggregatesInput | StateResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StateResult"> | number
    election_year?: IntWithAggregatesFilter<"StateResult"> | number
    state_name?: StringWithAggregatesFilter<"StateResult"> | string
    total_ev?: IntWithAggregatesFilter<"StateResult"> | number
  }

  export type StateResultCandidateWhereInput = {
    AND?: StateResultCandidateWhereInput | StateResultCandidateWhereInput[]
    OR?: StateResultCandidateWhereInput[]
    NOT?: StateResultCandidateWhereInput | StateResultCandidateWhereInput[]
    id?: IntFilter<"StateResultCandidate"> | number
    state_result_id?: IntFilter<"StateResultCandidate"> | number
    election_candidate_id?: IntFilter<"StateResultCandidate"> | number
    ev_count?: IntFilter<"StateResultCandidate"> | number
    state_result?: XOR<StateResultScalarRelationFilter, StateResultWhereInput>
    election_candidate?: XOR<ElectionCandidateScalarRelationFilter, ElectionCandidateWhereInput>
  }

  export type StateResultCandidateOrderByWithRelationInput = {
    id?: SortOrder
    state_result_id?: SortOrder
    election_candidate_id?: SortOrder
    ev_count?: SortOrder
    state_result?: StateResultOrderByWithRelationInput
    election_candidate?: ElectionCandidateOrderByWithRelationInput
  }

  export type StateResultCandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StateResultCandidateWhereInput | StateResultCandidateWhereInput[]
    OR?: StateResultCandidateWhereInput[]
    NOT?: StateResultCandidateWhereInput | StateResultCandidateWhereInput[]
    state_result_id?: IntFilter<"StateResultCandidate"> | number
    election_candidate_id?: IntFilter<"StateResultCandidate"> | number
    ev_count?: IntFilter<"StateResultCandidate"> | number
    state_result?: XOR<StateResultScalarRelationFilter, StateResultWhereInput>
    election_candidate?: XOR<ElectionCandidateScalarRelationFilter, ElectionCandidateWhereInput>
  }, "id">

  export type StateResultCandidateOrderByWithAggregationInput = {
    id?: SortOrder
    state_result_id?: SortOrder
    election_candidate_id?: SortOrder
    ev_count?: SortOrder
    _count?: StateResultCandidateCountOrderByAggregateInput
    _avg?: StateResultCandidateAvgOrderByAggregateInput
    _max?: StateResultCandidateMaxOrderByAggregateInput
    _min?: StateResultCandidateMinOrderByAggregateInput
    _sum?: StateResultCandidateSumOrderByAggregateInput
  }

  export type StateResultCandidateScalarWhereWithAggregatesInput = {
    AND?: StateResultCandidateScalarWhereWithAggregatesInput | StateResultCandidateScalarWhereWithAggregatesInput[]
    OR?: StateResultCandidateScalarWhereWithAggregatesInput[]
    NOT?: StateResultCandidateScalarWhereWithAggregatesInput | StateResultCandidateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StateResultCandidate"> | number
    state_result_id?: IntWithAggregatesFilter<"StateResultCandidate"> | number
    election_candidate_id?: IntWithAggregatesFilter<"StateResultCandidate"> | number
    ev_count?: IntWithAggregatesFilter<"StateResultCandidate"> | number
  }

  export type ElectionCreateInput = {
    year: number
    total_ev: number
    majority_ev: number
    election_candidates?: ElectionCandidateCreateNestedManyWithoutElectionInput
    state_results?: StateResultCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateInput = {
    year: number
    total_ev: number
    majority_ev: number
    election_candidates?: ElectionCandidateUncheckedCreateNestedManyWithoutElectionInput
    state_results?: StateResultUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    total_ev?: IntFieldUpdateOperationsInput | number
    majority_ev?: IntFieldUpdateOperationsInput | number
    election_candidates?: ElectionCandidateUpdateManyWithoutElectionNestedInput
    state_results?: StateResultUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    total_ev?: IntFieldUpdateOperationsInput | number
    majority_ev?: IntFieldUpdateOperationsInput | number
    election_candidates?: ElectionCandidateUncheckedUpdateManyWithoutElectionNestedInput
    state_results?: StateResultUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ElectionCreateManyInput = {
    year: number
    total_ev: number
    majority_ev: number
  }

  export type ElectionUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    total_ev?: IntFieldUpdateOperationsInput | number
    majority_ev?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionUncheckedUpdateManyInput = {
    year?: IntFieldUpdateOperationsInput | number
    total_ev?: IntFieldUpdateOperationsInput | number
    majority_ev?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateCreateInput = {
    name: string
    election_candidates?: ElectionCandidateCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateInput = {
    id?: number
    name: string
    election_candidates?: ElectionCandidateUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    election_candidates?: ElectionCandidateUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    election_candidates?: ElectionCandidateUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateManyInput = {
    id?: number
    name: string
  }

  export type CandidateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ElectionCandidateCreateInput = {
    role: string
    total_ev: number
    is_winner: boolean
    party: string
    election: ElectionCreateNestedOneWithoutElection_candidatesInput
    candidate: CandidateCreateNestedOneWithoutElection_candidatesInput
    state_result_candidates?: StateResultCandidateCreateNestedManyWithoutElection_candidateInput
  }

  export type ElectionCandidateUncheckedCreateInput = {
    id?: number
    election_year: number
    candidate_id: number
    role: string
    total_ev: number
    is_winner: boolean
    party: string
    state_result_candidates?: StateResultCandidateUncheckedCreateNestedManyWithoutElection_candidateInput
  }

  export type ElectionCandidateUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
    election?: ElectionUpdateOneRequiredWithoutElection_candidatesNestedInput
    candidate?: CandidateUpdateOneRequiredWithoutElection_candidatesNestedInput
    state_result_candidates?: StateResultCandidateUpdateManyWithoutElection_candidateNestedInput
  }

  export type ElectionCandidateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    election_year?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
    state_result_candidates?: StateResultCandidateUncheckedUpdateManyWithoutElection_candidateNestedInput
  }

  export type ElectionCandidateCreateManyInput = {
    id?: number
    election_year: number
    candidate_id: number
    role: string
    total_ev: number
    is_winner: boolean
    party: string
  }

  export type ElectionCandidateUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
  }

  export type ElectionCandidateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    election_year?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
  }

  export type StateResultCreateInput = {
    state_name: string
    total_ev: number
    election: ElectionCreateNestedOneWithoutState_resultsInput
    state_result_candidates?: StateResultCandidateCreateNestedManyWithoutState_resultInput
  }

  export type StateResultUncheckedCreateInput = {
    id?: number
    election_year: number
    state_name: string
    total_ev: number
    state_result_candidates?: StateResultCandidateUncheckedCreateNestedManyWithoutState_resultInput
  }

  export type StateResultUpdateInput = {
    state_name?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    election?: ElectionUpdateOneRequiredWithoutState_resultsNestedInput
    state_result_candidates?: StateResultCandidateUpdateManyWithoutState_resultNestedInput
  }

  export type StateResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    election_year?: IntFieldUpdateOperationsInput | number
    state_name?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    state_result_candidates?: StateResultCandidateUncheckedUpdateManyWithoutState_resultNestedInput
  }

  export type StateResultCreateManyInput = {
    id?: number
    election_year: number
    state_name: string
    total_ev: number
  }

  export type StateResultUpdateManyMutationInput = {
    state_name?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
  }

  export type StateResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    election_year?: IntFieldUpdateOperationsInput | number
    state_name?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
  }

  export type StateResultCandidateCreateInput = {
    ev_count: number
    state_result: StateResultCreateNestedOneWithoutState_result_candidatesInput
    election_candidate: ElectionCandidateCreateNestedOneWithoutState_result_candidatesInput
  }

  export type StateResultCandidateUncheckedCreateInput = {
    id?: number
    state_result_id: number
    election_candidate_id: number
    ev_count: number
  }

  export type StateResultCandidateUpdateInput = {
    ev_count?: IntFieldUpdateOperationsInput | number
    state_result?: StateResultUpdateOneRequiredWithoutState_result_candidatesNestedInput
    election_candidate?: ElectionCandidateUpdateOneRequiredWithoutState_result_candidatesNestedInput
  }

  export type StateResultCandidateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_result_id?: IntFieldUpdateOperationsInput | number
    election_candidate_id?: IntFieldUpdateOperationsInput | number
    ev_count?: IntFieldUpdateOperationsInput | number
  }

  export type StateResultCandidateCreateManyInput = {
    id?: number
    state_result_id: number
    election_candidate_id: number
    ev_count: number
  }

  export type StateResultCandidateUpdateManyMutationInput = {
    ev_count?: IntFieldUpdateOperationsInput | number
  }

  export type StateResultCandidateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_result_id?: IntFieldUpdateOperationsInput | number
    election_candidate_id?: IntFieldUpdateOperationsInput | number
    ev_count?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ElectionCandidateListRelationFilter = {
    every?: ElectionCandidateWhereInput
    some?: ElectionCandidateWhereInput
    none?: ElectionCandidateWhereInput
  }

  export type StateResultListRelationFilter = {
    every?: StateResultWhereInput
    some?: StateResultWhereInput
    none?: StateResultWhereInput
  }

  export type ElectionCandidateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElectionCountOrderByAggregateInput = {
    year?: SortOrder
    total_ev?: SortOrder
    majority_ev?: SortOrder
  }

  export type ElectionAvgOrderByAggregateInput = {
    year?: SortOrder
    total_ev?: SortOrder
    majority_ev?: SortOrder
  }

  export type ElectionMaxOrderByAggregateInput = {
    year?: SortOrder
    total_ev?: SortOrder
    majority_ev?: SortOrder
  }

  export type ElectionMinOrderByAggregateInput = {
    year?: SortOrder
    total_ev?: SortOrder
    majority_ev?: SortOrder
  }

  export type ElectionSumOrderByAggregateInput = {
    year?: SortOrder
    total_ev?: SortOrder
    majority_ev?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CandidateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CandidateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CandidateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ElectionScalarRelationFilter = {
    is?: ElectionWhereInput
    isNot?: ElectionWhereInput
  }

  export type CandidateScalarRelationFilter = {
    is?: CandidateWhereInput
    isNot?: CandidateWhereInput
  }

  export type StateResultCandidateListRelationFilter = {
    every?: StateResultCandidateWhereInput
    some?: StateResultCandidateWhereInput
    none?: StateResultCandidateWhereInput
  }

  export type StateResultCandidateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElectionCandidateCountOrderByAggregateInput = {
    id?: SortOrder
    election_year?: SortOrder
    candidate_id?: SortOrder
    role?: SortOrder
    total_ev?: SortOrder
    is_winner?: SortOrder
    party?: SortOrder
  }

  export type ElectionCandidateAvgOrderByAggregateInput = {
    id?: SortOrder
    election_year?: SortOrder
    candidate_id?: SortOrder
    total_ev?: SortOrder
  }

  export type ElectionCandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    election_year?: SortOrder
    candidate_id?: SortOrder
    role?: SortOrder
    total_ev?: SortOrder
    is_winner?: SortOrder
    party?: SortOrder
  }

  export type ElectionCandidateMinOrderByAggregateInput = {
    id?: SortOrder
    election_year?: SortOrder
    candidate_id?: SortOrder
    role?: SortOrder
    total_ev?: SortOrder
    is_winner?: SortOrder
    party?: SortOrder
  }

  export type ElectionCandidateSumOrderByAggregateInput = {
    id?: SortOrder
    election_year?: SortOrder
    candidate_id?: SortOrder
    total_ev?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StateResultCountOrderByAggregateInput = {
    id?: SortOrder
    election_year?: SortOrder
    state_name?: SortOrder
    total_ev?: SortOrder
  }

  export type StateResultAvgOrderByAggregateInput = {
    id?: SortOrder
    election_year?: SortOrder
    total_ev?: SortOrder
  }

  export type StateResultMaxOrderByAggregateInput = {
    id?: SortOrder
    election_year?: SortOrder
    state_name?: SortOrder
    total_ev?: SortOrder
  }

  export type StateResultMinOrderByAggregateInput = {
    id?: SortOrder
    election_year?: SortOrder
    state_name?: SortOrder
    total_ev?: SortOrder
  }

  export type StateResultSumOrderByAggregateInput = {
    id?: SortOrder
    election_year?: SortOrder
    total_ev?: SortOrder
  }

  export type StateResultScalarRelationFilter = {
    is?: StateResultWhereInput
    isNot?: StateResultWhereInput
  }

  export type ElectionCandidateScalarRelationFilter = {
    is?: ElectionCandidateWhereInput
    isNot?: ElectionCandidateWhereInput
  }

  export type StateResultCandidateCountOrderByAggregateInput = {
    id?: SortOrder
    state_result_id?: SortOrder
    election_candidate_id?: SortOrder
    ev_count?: SortOrder
  }

  export type StateResultCandidateAvgOrderByAggregateInput = {
    id?: SortOrder
    state_result_id?: SortOrder
    election_candidate_id?: SortOrder
    ev_count?: SortOrder
  }

  export type StateResultCandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    state_result_id?: SortOrder
    election_candidate_id?: SortOrder
    ev_count?: SortOrder
  }

  export type StateResultCandidateMinOrderByAggregateInput = {
    id?: SortOrder
    state_result_id?: SortOrder
    election_candidate_id?: SortOrder
    ev_count?: SortOrder
  }

  export type StateResultCandidateSumOrderByAggregateInput = {
    id?: SortOrder
    state_result_id?: SortOrder
    election_candidate_id?: SortOrder
    ev_count?: SortOrder
  }

  export type ElectionCandidateCreateNestedManyWithoutElectionInput = {
    create?: XOR<ElectionCandidateCreateWithoutElectionInput, ElectionCandidateUncheckedCreateWithoutElectionInput> | ElectionCandidateCreateWithoutElectionInput[] | ElectionCandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: ElectionCandidateCreateOrConnectWithoutElectionInput | ElectionCandidateCreateOrConnectWithoutElectionInput[]
    createMany?: ElectionCandidateCreateManyElectionInputEnvelope
    connect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
  }

  export type StateResultCreateNestedManyWithoutElectionInput = {
    create?: XOR<StateResultCreateWithoutElectionInput, StateResultUncheckedCreateWithoutElectionInput> | StateResultCreateWithoutElectionInput[] | StateResultUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: StateResultCreateOrConnectWithoutElectionInput | StateResultCreateOrConnectWithoutElectionInput[]
    createMany?: StateResultCreateManyElectionInputEnvelope
    connect?: StateResultWhereUniqueInput | StateResultWhereUniqueInput[]
  }

  export type ElectionCandidateUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<ElectionCandidateCreateWithoutElectionInput, ElectionCandidateUncheckedCreateWithoutElectionInput> | ElectionCandidateCreateWithoutElectionInput[] | ElectionCandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: ElectionCandidateCreateOrConnectWithoutElectionInput | ElectionCandidateCreateOrConnectWithoutElectionInput[]
    createMany?: ElectionCandidateCreateManyElectionInputEnvelope
    connect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
  }

  export type StateResultUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<StateResultCreateWithoutElectionInput, StateResultUncheckedCreateWithoutElectionInput> | StateResultCreateWithoutElectionInput[] | StateResultUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: StateResultCreateOrConnectWithoutElectionInput | StateResultCreateOrConnectWithoutElectionInput[]
    createMany?: StateResultCreateManyElectionInputEnvelope
    connect?: StateResultWhereUniqueInput | StateResultWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ElectionCandidateUpdateManyWithoutElectionNestedInput = {
    create?: XOR<ElectionCandidateCreateWithoutElectionInput, ElectionCandidateUncheckedCreateWithoutElectionInput> | ElectionCandidateCreateWithoutElectionInput[] | ElectionCandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: ElectionCandidateCreateOrConnectWithoutElectionInput | ElectionCandidateCreateOrConnectWithoutElectionInput[]
    upsert?: ElectionCandidateUpsertWithWhereUniqueWithoutElectionInput | ElectionCandidateUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: ElectionCandidateCreateManyElectionInputEnvelope
    set?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    disconnect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    delete?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    connect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    update?: ElectionCandidateUpdateWithWhereUniqueWithoutElectionInput | ElectionCandidateUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: ElectionCandidateUpdateManyWithWhereWithoutElectionInput | ElectionCandidateUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: ElectionCandidateScalarWhereInput | ElectionCandidateScalarWhereInput[]
  }

  export type StateResultUpdateManyWithoutElectionNestedInput = {
    create?: XOR<StateResultCreateWithoutElectionInput, StateResultUncheckedCreateWithoutElectionInput> | StateResultCreateWithoutElectionInput[] | StateResultUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: StateResultCreateOrConnectWithoutElectionInput | StateResultCreateOrConnectWithoutElectionInput[]
    upsert?: StateResultUpsertWithWhereUniqueWithoutElectionInput | StateResultUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: StateResultCreateManyElectionInputEnvelope
    set?: StateResultWhereUniqueInput | StateResultWhereUniqueInput[]
    disconnect?: StateResultWhereUniqueInput | StateResultWhereUniqueInput[]
    delete?: StateResultWhereUniqueInput | StateResultWhereUniqueInput[]
    connect?: StateResultWhereUniqueInput | StateResultWhereUniqueInput[]
    update?: StateResultUpdateWithWhereUniqueWithoutElectionInput | StateResultUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: StateResultUpdateManyWithWhereWithoutElectionInput | StateResultUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: StateResultScalarWhereInput | StateResultScalarWhereInput[]
  }

  export type ElectionCandidateUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<ElectionCandidateCreateWithoutElectionInput, ElectionCandidateUncheckedCreateWithoutElectionInput> | ElectionCandidateCreateWithoutElectionInput[] | ElectionCandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: ElectionCandidateCreateOrConnectWithoutElectionInput | ElectionCandidateCreateOrConnectWithoutElectionInput[]
    upsert?: ElectionCandidateUpsertWithWhereUniqueWithoutElectionInput | ElectionCandidateUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: ElectionCandidateCreateManyElectionInputEnvelope
    set?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    disconnect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    delete?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    connect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    update?: ElectionCandidateUpdateWithWhereUniqueWithoutElectionInput | ElectionCandidateUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: ElectionCandidateUpdateManyWithWhereWithoutElectionInput | ElectionCandidateUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: ElectionCandidateScalarWhereInput | ElectionCandidateScalarWhereInput[]
  }

  export type StateResultUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<StateResultCreateWithoutElectionInput, StateResultUncheckedCreateWithoutElectionInput> | StateResultCreateWithoutElectionInput[] | StateResultUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: StateResultCreateOrConnectWithoutElectionInput | StateResultCreateOrConnectWithoutElectionInput[]
    upsert?: StateResultUpsertWithWhereUniqueWithoutElectionInput | StateResultUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: StateResultCreateManyElectionInputEnvelope
    set?: StateResultWhereUniqueInput | StateResultWhereUniqueInput[]
    disconnect?: StateResultWhereUniqueInput | StateResultWhereUniqueInput[]
    delete?: StateResultWhereUniqueInput | StateResultWhereUniqueInput[]
    connect?: StateResultWhereUniqueInput | StateResultWhereUniqueInput[]
    update?: StateResultUpdateWithWhereUniqueWithoutElectionInput | StateResultUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: StateResultUpdateManyWithWhereWithoutElectionInput | StateResultUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: StateResultScalarWhereInput | StateResultScalarWhereInput[]
  }

  export type ElectionCandidateCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ElectionCandidateCreateWithoutCandidateInput, ElectionCandidateUncheckedCreateWithoutCandidateInput> | ElectionCandidateCreateWithoutCandidateInput[] | ElectionCandidateUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ElectionCandidateCreateOrConnectWithoutCandidateInput | ElectionCandidateCreateOrConnectWithoutCandidateInput[]
    createMany?: ElectionCandidateCreateManyCandidateInputEnvelope
    connect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
  }

  export type ElectionCandidateUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ElectionCandidateCreateWithoutCandidateInput, ElectionCandidateUncheckedCreateWithoutCandidateInput> | ElectionCandidateCreateWithoutCandidateInput[] | ElectionCandidateUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ElectionCandidateCreateOrConnectWithoutCandidateInput | ElectionCandidateCreateOrConnectWithoutCandidateInput[]
    createMany?: ElectionCandidateCreateManyCandidateInputEnvelope
    connect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ElectionCandidateUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ElectionCandidateCreateWithoutCandidateInput, ElectionCandidateUncheckedCreateWithoutCandidateInput> | ElectionCandidateCreateWithoutCandidateInput[] | ElectionCandidateUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ElectionCandidateCreateOrConnectWithoutCandidateInput | ElectionCandidateCreateOrConnectWithoutCandidateInput[]
    upsert?: ElectionCandidateUpsertWithWhereUniqueWithoutCandidateInput | ElectionCandidateUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ElectionCandidateCreateManyCandidateInputEnvelope
    set?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    disconnect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    delete?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    connect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    update?: ElectionCandidateUpdateWithWhereUniqueWithoutCandidateInput | ElectionCandidateUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ElectionCandidateUpdateManyWithWhereWithoutCandidateInput | ElectionCandidateUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ElectionCandidateScalarWhereInput | ElectionCandidateScalarWhereInput[]
  }

  export type ElectionCandidateUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ElectionCandidateCreateWithoutCandidateInput, ElectionCandidateUncheckedCreateWithoutCandidateInput> | ElectionCandidateCreateWithoutCandidateInput[] | ElectionCandidateUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ElectionCandidateCreateOrConnectWithoutCandidateInput | ElectionCandidateCreateOrConnectWithoutCandidateInput[]
    upsert?: ElectionCandidateUpsertWithWhereUniqueWithoutCandidateInput | ElectionCandidateUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ElectionCandidateCreateManyCandidateInputEnvelope
    set?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    disconnect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    delete?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    connect?: ElectionCandidateWhereUniqueInput | ElectionCandidateWhereUniqueInput[]
    update?: ElectionCandidateUpdateWithWhereUniqueWithoutCandidateInput | ElectionCandidateUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ElectionCandidateUpdateManyWithWhereWithoutCandidateInput | ElectionCandidateUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ElectionCandidateScalarWhereInput | ElectionCandidateScalarWhereInput[]
  }

  export type ElectionCreateNestedOneWithoutElection_candidatesInput = {
    create?: XOR<ElectionCreateWithoutElection_candidatesInput, ElectionUncheckedCreateWithoutElection_candidatesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutElection_candidatesInput
    connect?: ElectionWhereUniqueInput
  }

  export type CandidateCreateNestedOneWithoutElection_candidatesInput = {
    create?: XOR<CandidateCreateWithoutElection_candidatesInput, CandidateUncheckedCreateWithoutElection_candidatesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutElection_candidatesInput
    connect?: CandidateWhereUniqueInput
  }

  export type StateResultCandidateCreateNestedManyWithoutElection_candidateInput = {
    create?: XOR<StateResultCandidateCreateWithoutElection_candidateInput, StateResultCandidateUncheckedCreateWithoutElection_candidateInput> | StateResultCandidateCreateWithoutElection_candidateInput[] | StateResultCandidateUncheckedCreateWithoutElection_candidateInput[]
    connectOrCreate?: StateResultCandidateCreateOrConnectWithoutElection_candidateInput | StateResultCandidateCreateOrConnectWithoutElection_candidateInput[]
    createMany?: StateResultCandidateCreateManyElection_candidateInputEnvelope
    connect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
  }

  export type StateResultCandidateUncheckedCreateNestedManyWithoutElection_candidateInput = {
    create?: XOR<StateResultCandidateCreateWithoutElection_candidateInput, StateResultCandidateUncheckedCreateWithoutElection_candidateInput> | StateResultCandidateCreateWithoutElection_candidateInput[] | StateResultCandidateUncheckedCreateWithoutElection_candidateInput[]
    connectOrCreate?: StateResultCandidateCreateOrConnectWithoutElection_candidateInput | StateResultCandidateCreateOrConnectWithoutElection_candidateInput[]
    createMany?: StateResultCandidateCreateManyElection_candidateInputEnvelope
    connect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ElectionUpdateOneRequiredWithoutElection_candidatesNestedInput = {
    create?: XOR<ElectionCreateWithoutElection_candidatesInput, ElectionUncheckedCreateWithoutElection_candidatesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutElection_candidatesInput
    upsert?: ElectionUpsertWithoutElection_candidatesInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutElection_candidatesInput, ElectionUpdateWithoutElection_candidatesInput>, ElectionUncheckedUpdateWithoutElection_candidatesInput>
  }

  export type CandidateUpdateOneRequiredWithoutElection_candidatesNestedInput = {
    create?: XOR<CandidateCreateWithoutElection_candidatesInput, CandidateUncheckedCreateWithoutElection_candidatesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutElection_candidatesInput
    upsert?: CandidateUpsertWithoutElection_candidatesInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutElection_candidatesInput, CandidateUpdateWithoutElection_candidatesInput>, CandidateUncheckedUpdateWithoutElection_candidatesInput>
  }

  export type StateResultCandidateUpdateManyWithoutElection_candidateNestedInput = {
    create?: XOR<StateResultCandidateCreateWithoutElection_candidateInput, StateResultCandidateUncheckedCreateWithoutElection_candidateInput> | StateResultCandidateCreateWithoutElection_candidateInput[] | StateResultCandidateUncheckedCreateWithoutElection_candidateInput[]
    connectOrCreate?: StateResultCandidateCreateOrConnectWithoutElection_candidateInput | StateResultCandidateCreateOrConnectWithoutElection_candidateInput[]
    upsert?: StateResultCandidateUpsertWithWhereUniqueWithoutElection_candidateInput | StateResultCandidateUpsertWithWhereUniqueWithoutElection_candidateInput[]
    createMany?: StateResultCandidateCreateManyElection_candidateInputEnvelope
    set?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    disconnect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    delete?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    connect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    update?: StateResultCandidateUpdateWithWhereUniqueWithoutElection_candidateInput | StateResultCandidateUpdateWithWhereUniqueWithoutElection_candidateInput[]
    updateMany?: StateResultCandidateUpdateManyWithWhereWithoutElection_candidateInput | StateResultCandidateUpdateManyWithWhereWithoutElection_candidateInput[]
    deleteMany?: StateResultCandidateScalarWhereInput | StateResultCandidateScalarWhereInput[]
  }

  export type StateResultCandidateUncheckedUpdateManyWithoutElection_candidateNestedInput = {
    create?: XOR<StateResultCandidateCreateWithoutElection_candidateInput, StateResultCandidateUncheckedCreateWithoutElection_candidateInput> | StateResultCandidateCreateWithoutElection_candidateInput[] | StateResultCandidateUncheckedCreateWithoutElection_candidateInput[]
    connectOrCreate?: StateResultCandidateCreateOrConnectWithoutElection_candidateInput | StateResultCandidateCreateOrConnectWithoutElection_candidateInput[]
    upsert?: StateResultCandidateUpsertWithWhereUniqueWithoutElection_candidateInput | StateResultCandidateUpsertWithWhereUniqueWithoutElection_candidateInput[]
    createMany?: StateResultCandidateCreateManyElection_candidateInputEnvelope
    set?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    disconnect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    delete?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    connect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    update?: StateResultCandidateUpdateWithWhereUniqueWithoutElection_candidateInput | StateResultCandidateUpdateWithWhereUniqueWithoutElection_candidateInput[]
    updateMany?: StateResultCandidateUpdateManyWithWhereWithoutElection_candidateInput | StateResultCandidateUpdateManyWithWhereWithoutElection_candidateInput[]
    deleteMany?: StateResultCandidateScalarWhereInput | StateResultCandidateScalarWhereInput[]
  }

  export type ElectionCreateNestedOneWithoutState_resultsInput = {
    create?: XOR<ElectionCreateWithoutState_resultsInput, ElectionUncheckedCreateWithoutState_resultsInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutState_resultsInput
    connect?: ElectionWhereUniqueInput
  }

  export type StateResultCandidateCreateNestedManyWithoutState_resultInput = {
    create?: XOR<StateResultCandidateCreateWithoutState_resultInput, StateResultCandidateUncheckedCreateWithoutState_resultInput> | StateResultCandidateCreateWithoutState_resultInput[] | StateResultCandidateUncheckedCreateWithoutState_resultInput[]
    connectOrCreate?: StateResultCandidateCreateOrConnectWithoutState_resultInput | StateResultCandidateCreateOrConnectWithoutState_resultInput[]
    createMany?: StateResultCandidateCreateManyState_resultInputEnvelope
    connect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
  }

  export type StateResultCandidateUncheckedCreateNestedManyWithoutState_resultInput = {
    create?: XOR<StateResultCandidateCreateWithoutState_resultInput, StateResultCandidateUncheckedCreateWithoutState_resultInput> | StateResultCandidateCreateWithoutState_resultInput[] | StateResultCandidateUncheckedCreateWithoutState_resultInput[]
    connectOrCreate?: StateResultCandidateCreateOrConnectWithoutState_resultInput | StateResultCandidateCreateOrConnectWithoutState_resultInput[]
    createMany?: StateResultCandidateCreateManyState_resultInputEnvelope
    connect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
  }

  export type ElectionUpdateOneRequiredWithoutState_resultsNestedInput = {
    create?: XOR<ElectionCreateWithoutState_resultsInput, ElectionUncheckedCreateWithoutState_resultsInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutState_resultsInput
    upsert?: ElectionUpsertWithoutState_resultsInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutState_resultsInput, ElectionUpdateWithoutState_resultsInput>, ElectionUncheckedUpdateWithoutState_resultsInput>
  }

  export type StateResultCandidateUpdateManyWithoutState_resultNestedInput = {
    create?: XOR<StateResultCandidateCreateWithoutState_resultInput, StateResultCandidateUncheckedCreateWithoutState_resultInput> | StateResultCandidateCreateWithoutState_resultInput[] | StateResultCandidateUncheckedCreateWithoutState_resultInput[]
    connectOrCreate?: StateResultCandidateCreateOrConnectWithoutState_resultInput | StateResultCandidateCreateOrConnectWithoutState_resultInput[]
    upsert?: StateResultCandidateUpsertWithWhereUniqueWithoutState_resultInput | StateResultCandidateUpsertWithWhereUniqueWithoutState_resultInput[]
    createMany?: StateResultCandidateCreateManyState_resultInputEnvelope
    set?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    disconnect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    delete?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    connect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    update?: StateResultCandidateUpdateWithWhereUniqueWithoutState_resultInput | StateResultCandidateUpdateWithWhereUniqueWithoutState_resultInput[]
    updateMany?: StateResultCandidateUpdateManyWithWhereWithoutState_resultInput | StateResultCandidateUpdateManyWithWhereWithoutState_resultInput[]
    deleteMany?: StateResultCandidateScalarWhereInput | StateResultCandidateScalarWhereInput[]
  }

  export type StateResultCandidateUncheckedUpdateManyWithoutState_resultNestedInput = {
    create?: XOR<StateResultCandidateCreateWithoutState_resultInput, StateResultCandidateUncheckedCreateWithoutState_resultInput> | StateResultCandidateCreateWithoutState_resultInput[] | StateResultCandidateUncheckedCreateWithoutState_resultInput[]
    connectOrCreate?: StateResultCandidateCreateOrConnectWithoutState_resultInput | StateResultCandidateCreateOrConnectWithoutState_resultInput[]
    upsert?: StateResultCandidateUpsertWithWhereUniqueWithoutState_resultInput | StateResultCandidateUpsertWithWhereUniqueWithoutState_resultInput[]
    createMany?: StateResultCandidateCreateManyState_resultInputEnvelope
    set?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    disconnect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    delete?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    connect?: StateResultCandidateWhereUniqueInput | StateResultCandidateWhereUniqueInput[]
    update?: StateResultCandidateUpdateWithWhereUniqueWithoutState_resultInput | StateResultCandidateUpdateWithWhereUniqueWithoutState_resultInput[]
    updateMany?: StateResultCandidateUpdateManyWithWhereWithoutState_resultInput | StateResultCandidateUpdateManyWithWhereWithoutState_resultInput[]
    deleteMany?: StateResultCandidateScalarWhereInput | StateResultCandidateScalarWhereInput[]
  }

  export type StateResultCreateNestedOneWithoutState_result_candidatesInput = {
    create?: XOR<StateResultCreateWithoutState_result_candidatesInput, StateResultUncheckedCreateWithoutState_result_candidatesInput>
    connectOrCreate?: StateResultCreateOrConnectWithoutState_result_candidatesInput
    connect?: StateResultWhereUniqueInput
  }

  export type ElectionCandidateCreateNestedOneWithoutState_result_candidatesInput = {
    create?: XOR<ElectionCandidateCreateWithoutState_result_candidatesInput, ElectionCandidateUncheckedCreateWithoutState_result_candidatesInput>
    connectOrCreate?: ElectionCandidateCreateOrConnectWithoutState_result_candidatesInput
    connect?: ElectionCandidateWhereUniqueInput
  }

  export type StateResultUpdateOneRequiredWithoutState_result_candidatesNestedInput = {
    create?: XOR<StateResultCreateWithoutState_result_candidatesInput, StateResultUncheckedCreateWithoutState_result_candidatesInput>
    connectOrCreate?: StateResultCreateOrConnectWithoutState_result_candidatesInput
    upsert?: StateResultUpsertWithoutState_result_candidatesInput
    connect?: StateResultWhereUniqueInput
    update?: XOR<XOR<StateResultUpdateToOneWithWhereWithoutState_result_candidatesInput, StateResultUpdateWithoutState_result_candidatesInput>, StateResultUncheckedUpdateWithoutState_result_candidatesInput>
  }

  export type ElectionCandidateUpdateOneRequiredWithoutState_result_candidatesNestedInput = {
    create?: XOR<ElectionCandidateCreateWithoutState_result_candidatesInput, ElectionCandidateUncheckedCreateWithoutState_result_candidatesInput>
    connectOrCreate?: ElectionCandidateCreateOrConnectWithoutState_result_candidatesInput
    upsert?: ElectionCandidateUpsertWithoutState_result_candidatesInput
    connect?: ElectionCandidateWhereUniqueInput
    update?: XOR<XOR<ElectionCandidateUpdateToOneWithWhereWithoutState_result_candidatesInput, ElectionCandidateUpdateWithoutState_result_candidatesInput>, ElectionCandidateUncheckedUpdateWithoutState_result_candidatesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ElectionCandidateCreateWithoutElectionInput = {
    role: string
    total_ev: number
    is_winner: boolean
    party: string
    candidate: CandidateCreateNestedOneWithoutElection_candidatesInput
    state_result_candidates?: StateResultCandidateCreateNestedManyWithoutElection_candidateInput
  }

  export type ElectionCandidateUncheckedCreateWithoutElectionInput = {
    id?: number
    candidate_id: number
    role: string
    total_ev: number
    is_winner: boolean
    party: string
    state_result_candidates?: StateResultCandidateUncheckedCreateNestedManyWithoutElection_candidateInput
  }

  export type ElectionCandidateCreateOrConnectWithoutElectionInput = {
    where: ElectionCandidateWhereUniqueInput
    create: XOR<ElectionCandidateCreateWithoutElectionInput, ElectionCandidateUncheckedCreateWithoutElectionInput>
  }

  export type ElectionCandidateCreateManyElectionInputEnvelope = {
    data: ElectionCandidateCreateManyElectionInput | ElectionCandidateCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type StateResultCreateWithoutElectionInput = {
    state_name: string
    total_ev: number
    state_result_candidates?: StateResultCandidateCreateNestedManyWithoutState_resultInput
  }

  export type StateResultUncheckedCreateWithoutElectionInput = {
    id?: number
    state_name: string
    total_ev: number
    state_result_candidates?: StateResultCandidateUncheckedCreateNestedManyWithoutState_resultInput
  }

  export type StateResultCreateOrConnectWithoutElectionInput = {
    where: StateResultWhereUniqueInput
    create: XOR<StateResultCreateWithoutElectionInput, StateResultUncheckedCreateWithoutElectionInput>
  }

  export type StateResultCreateManyElectionInputEnvelope = {
    data: StateResultCreateManyElectionInput | StateResultCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type ElectionCandidateUpsertWithWhereUniqueWithoutElectionInput = {
    where: ElectionCandidateWhereUniqueInput
    update: XOR<ElectionCandidateUpdateWithoutElectionInput, ElectionCandidateUncheckedUpdateWithoutElectionInput>
    create: XOR<ElectionCandidateCreateWithoutElectionInput, ElectionCandidateUncheckedCreateWithoutElectionInput>
  }

  export type ElectionCandidateUpdateWithWhereUniqueWithoutElectionInput = {
    where: ElectionCandidateWhereUniqueInput
    data: XOR<ElectionCandidateUpdateWithoutElectionInput, ElectionCandidateUncheckedUpdateWithoutElectionInput>
  }

  export type ElectionCandidateUpdateManyWithWhereWithoutElectionInput = {
    where: ElectionCandidateScalarWhereInput
    data: XOR<ElectionCandidateUpdateManyMutationInput, ElectionCandidateUncheckedUpdateManyWithoutElectionInput>
  }

  export type ElectionCandidateScalarWhereInput = {
    AND?: ElectionCandidateScalarWhereInput | ElectionCandidateScalarWhereInput[]
    OR?: ElectionCandidateScalarWhereInput[]
    NOT?: ElectionCandidateScalarWhereInput | ElectionCandidateScalarWhereInput[]
    id?: IntFilter<"ElectionCandidate"> | number
    election_year?: IntFilter<"ElectionCandidate"> | number
    candidate_id?: IntFilter<"ElectionCandidate"> | number
    role?: StringFilter<"ElectionCandidate"> | string
    total_ev?: IntFilter<"ElectionCandidate"> | number
    is_winner?: BoolFilter<"ElectionCandidate"> | boolean
    party?: StringFilter<"ElectionCandidate"> | string
  }

  export type StateResultUpsertWithWhereUniqueWithoutElectionInput = {
    where: StateResultWhereUniqueInput
    update: XOR<StateResultUpdateWithoutElectionInput, StateResultUncheckedUpdateWithoutElectionInput>
    create: XOR<StateResultCreateWithoutElectionInput, StateResultUncheckedCreateWithoutElectionInput>
  }

  export type StateResultUpdateWithWhereUniqueWithoutElectionInput = {
    where: StateResultWhereUniqueInput
    data: XOR<StateResultUpdateWithoutElectionInput, StateResultUncheckedUpdateWithoutElectionInput>
  }

  export type StateResultUpdateManyWithWhereWithoutElectionInput = {
    where: StateResultScalarWhereInput
    data: XOR<StateResultUpdateManyMutationInput, StateResultUncheckedUpdateManyWithoutElectionInput>
  }

  export type StateResultScalarWhereInput = {
    AND?: StateResultScalarWhereInput | StateResultScalarWhereInput[]
    OR?: StateResultScalarWhereInput[]
    NOT?: StateResultScalarWhereInput | StateResultScalarWhereInput[]
    id?: IntFilter<"StateResult"> | number
    election_year?: IntFilter<"StateResult"> | number
    state_name?: StringFilter<"StateResult"> | string
    total_ev?: IntFilter<"StateResult"> | number
  }

  export type ElectionCandidateCreateWithoutCandidateInput = {
    role: string
    total_ev: number
    is_winner: boolean
    party: string
    election: ElectionCreateNestedOneWithoutElection_candidatesInput
    state_result_candidates?: StateResultCandidateCreateNestedManyWithoutElection_candidateInput
  }

  export type ElectionCandidateUncheckedCreateWithoutCandidateInput = {
    id?: number
    election_year: number
    role: string
    total_ev: number
    is_winner: boolean
    party: string
    state_result_candidates?: StateResultCandidateUncheckedCreateNestedManyWithoutElection_candidateInput
  }

  export type ElectionCandidateCreateOrConnectWithoutCandidateInput = {
    where: ElectionCandidateWhereUniqueInput
    create: XOR<ElectionCandidateCreateWithoutCandidateInput, ElectionCandidateUncheckedCreateWithoutCandidateInput>
  }

  export type ElectionCandidateCreateManyCandidateInputEnvelope = {
    data: ElectionCandidateCreateManyCandidateInput | ElectionCandidateCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type ElectionCandidateUpsertWithWhereUniqueWithoutCandidateInput = {
    where: ElectionCandidateWhereUniqueInput
    update: XOR<ElectionCandidateUpdateWithoutCandidateInput, ElectionCandidateUncheckedUpdateWithoutCandidateInput>
    create: XOR<ElectionCandidateCreateWithoutCandidateInput, ElectionCandidateUncheckedCreateWithoutCandidateInput>
  }

  export type ElectionCandidateUpdateWithWhereUniqueWithoutCandidateInput = {
    where: ElectionCandidateWhereUniqueInput
    data: XOR<ElectionCandidateUpdateWithoutCandidateInput, ElectionCandidateUncheckedUpdateWithoutCandidateInput>
  }

  export type ElectionCandidateUpdateManyWithWhereWithoutCandidateInput = {
    where: ElectionCandidateScalarWhereInput
    data: XOR<ElectionCandidateUpdateManyMutationInput, ElectionCandidateUncheckedUpdateManyWithoutCandidateInput>
  }

  export type ElectionCreateWithoutElection_candidatesInput = {
    year: number
    total_ev: number
    majority_ev: number
    state_results?: StateResultCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutElection_candidatesInput = {
    year: number
    total_ev: number
    majority_ev: number
    state_results?: StateResultUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutElection_candidatesInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutElection_candidatesInput, ElectionUncheckedCreateWithoutElection_candidatesInput>
  }

  export type CandidateCreateWithoutElection_candidatesInput = {
    name: string
  }

  export type CandidateUncheckedCreateWithoutElection_candidatesInput = {
    id?: number
    name: string
  }

  export type CandidateCreateOrConnectWithoutElection_candidatesInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutElection_candidatesInput, CandidateUncheckedCreateWithoutElection_candidatesInput>
  }

  export type StateResultCandidateCreateWithoutElection_candidateInput = {
    ev_count: number
    state_result: StateResultCreateNestedOneWithoutState_result_candidatesInput
  }

  export type StateResultCandidateUncheckedCreateWithoutElection_candidateInput = {
    id?: number
    state_result_id: number
    ev_count: number
  }

  export type StateResultCandidateCreateOrConnectWithoutElection_candidateInput = {
    where: StateResultCandidateWhereUniqueInput
    create: XOR<StateResultCandidateCreateWithoutElection_candidateInput, StateResultCandidateUncheckedCreateWithoutElection_candidateInput>
  }

  export type StateResultCandidateCreateManyElection_candidateInputEnvelope = {
    data: StateResultCandidateCreateManyElection_candidateInput | StateResultCandidateCreateManyElection_candidateInput[]
    skipDuplicates?: boolean
  }

  export type ElectionUpsertWithoutElection_candidatesInput = {
    update: XOR<ElectionUpdateWithoutElection_candidatesInput, ElectionUncheckedUpdateWithoutElection_candidatesInput>
    create: XOR<ElectionCreateWithoutElection_candidatesInput, ElectionUncheckedCreateWithoutElection_candidatesInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutElection_candidatesInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutElection_candidatesInput, ElectionUncheckedUpdateWithoutElection_candidatesInput>
  }

  export type ElectionUpdateWithoutElection_candidatesInput = {
    year?: IntFieldUpdateOperationsInput | number
    total_ev?: IntFieldUpdateOperationsInput | number
    majority_ev?: IntFieldUpdateOperationsInput | number
    state_results?: StateResultUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutElection_candidatesInput = {
    year?: IntFieldUpdateOperationsInput | number
    total_ev?: IntFieldUpdateOperationsInput | number
    majority_ev?: IntFieldUpdateOperationsInput | number
    state_results?: StateResultUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type CandidateUpsertWithoutElection_candidatesInput = {
    update: XOR<CandidateUpdateWithoutElection_candidatesInput, CandidateUncheckedUpdateWithoutElection_candidatesInput>
    create: XOR<CandidateCreateWithoutElection_candidatesInput, CandidateUncheckedCreateWithoutElection_candidatesInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutElection_candidatesInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutElection_candidatesInput, CandidateUncheckedUpdateWithoutElection_candidatesInput>
  }

  export type CandidateUpdateWithoutElection_candidatesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateUncheckedUpdateWithoutElection_candidatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateResultCandidateUpsertWithWhereUniqueWithoutElection_candidateInput = {
    where: StateResultCandidateWhereUniqueInput
    update: XOR<StateResultCandidateUpdateWithoutElection_candidateInput, StateResultCandidateUncheckedUpdateWithoutElection_candidateInput>
    create: XOR<StateResultCandidateCreateWithoutElection_candidateInput, StateResultCandidateUncheckedCreateWithoutElection_candidateInput>
  }

  export type StateResultCandidateUpdateWithWhereUniqueWithoutElection_candidateInput = {
    where: StateResultCandidateWhereUniqueInput
    data: XOR<StateResultCandidateUpdateWithoutElection_candidateInput, StateResultCandidateUncheckedUpdateWithoutElection_candidateInput>
  }

  export type StateResultCandidateUpdateManyWithWhereWithoutElection_candidateInput = {
    where: StateResultCandidateScalarWhereInput
    data: XOR<StateResultCandidateUpdateManyMutationInput, StateResultCandidateUncheckedUpdateManyWithoutElection_candidateInput>
  }

  export type StateResultCandidateScalarWhereInput = {
    AND?: StateResultCandidateScalarWhereInput | StateResultCandidateScalarWhereInput[]
    OR?: StateResultCandidateScalarWhereInput[]
    NOT?: StateResultCandidateScalarWhereInput | StateResultCandidateScalarWhereInput[]
    id?: IntFilter<"StateResultCandidate"> | number
    state_result_id?: IntFilter<"StateResultCandidate"> | number
    election_candidate_id?: IntFilter<"StateResultCandidate"> | number
    ev_count?: IntFilter<"StateResultCandidate"> | number
  }

  export type ElectionCreateWithoutState_resultsInput = {
    year: number
    total_ev: number
    majority_ev: number
    election_candidates?: ElectionCandidateCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutState_resultsInput = {
    year: number
    total_ev: number
    majority_ev: number
    election_candidates?: ElectionCandidateUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutState_resultsInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutState_resultsInput, ElectionUncheckedCreateWithoutState_resultsInput>
  }

  export type StateResultCandidateCreateWithoutState_resultInput = {
    ev_count: number
    election_candidate: ElectionCandidateCreateNestedOneWithoutState_result_candidatesInput
  }

  export type StateResultCandidateUncheckedCreateWithoutState_resultInput = {
    id?: number
    election_candidate_id: number
    ev_count: number
  }

  export type StateResultCandidateCreateOrConnectWithoutState_resultInput = {
    where: StateResultCandidateWhereUniqueInput
    create: XOR<StateResultCandidateCreateWithoutState_resultInput, StateResultCandidateUncheckedCreateWithoutState_resultInput>
  }

  export type StateResultCandidateCreateManyState_resultInputEnvelope = {
    data: StateResultCandidateCreateManyState_resultInput | StateResultCandidateCreateManyState_resultInput[]
    skipDuplicates?: boolean
  }

  export type ElectionUpsertWithoutState_resultsInput = {
    update: XOR<ElectionUpdateWithoutState_resultsInput, ElectionUncheckedUpdateWithoutState_resultsInput>
    create: XOR<ElectionCreateWithoutState_resultsInput, ElectionUncheckedCreateWithoutState_resultsInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutState_resultsInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutState_resultsInput, ElectionUncheckedUpdateWithoutState_resultsInput>
  }

  export type ElectionUpdateWithoutState_resultsInput = {
    year?: IntFieldUpdateOperationsInput | number
    total_ev?: IntFieldUpdateOperationsInput | number
    majority_ev?: IntFieldUpdateOperationsInput | number
    election_candidates?: ElectionCandidateUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutState_resultsInput = {
    year?: IntFieldUpdateOperationsInput | number
    total_ev?: IntFieldUpdateOperationsInput | number
    majority_ev?: IntFieldUpdateOperationsInput | number
    election_candidates?: ElectionCandidateUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type StateResultCandidateUpsertWithWhereUniqueWithoutState_resultInput = {
    where: StateResultCandidateWhereUniqueInput
    update: XOR<StateResultCandidateUpdateWithoutState_resultInput, StateResultCandidateUncheckedUpdateWithoutState_resultInput>
    create: XOR<StateResultCandidateCreateWithoutState_resultInput, StateResultCandidateUncheckedCreateWithoutState_resultInput>
  }

  export type StateResultCandidateUpdateWithWhereUniqueWithoutState_resultInput = {
    where: StateResultCandidateWhereUniqueInput
    data: XOR<StateResultCandidateUpdateWithoutState_resultInput, StateResultCandidateUncheckedUpdateWithoutState_resultInput>
  }

  export type StateResultCandidateUpdateManyWithWhereWithoutState_resultInput = {
    where: StateResultCandidateScalarWhereInput
    data: XOR<StateResultCandidateUpdateManyMutationInput, StateResultCandidateUncheckedUpdateManyWithoutState_resultInput>
  }

  export type StateResultCreateWithoutState_result_candidatesInput = {
    state_name: string
    total_ev: number
    election: ElectionCreateNestedOneWithoutState_resultsInput
  }

  export type StateResultUncheckedCreateWithoutState_result_candidatesInput = {
    id?: number
    election_year: number
    state_name: string
    total_ev: number
  }

  export type StateResultCreateOrConnectWithoutState_result_candidatesInput = {
    where: StateResultWhereUniqueInput
    create: XOR<StateResultCreateWithoutState_result_candidatesInput, StateResultUncheckedCreateWithoutState_result_candidatesInput>
  }

  export type ElectionCandidateCreateWithoutState_result_candidatesInput = {
    role: string
    total_ev: number
    is_winner: boolean
    party: string
    election: ElectionCreateNestedOneWithoutElection_candidatesInput
    candidate: CandidateCreateNestedOneWithoutElection_candidatesInput
  }

  export type ElectionCandidateUncheckedCreateWithoutState_result_candidatesInput = {
    id?: number
    election_year: number
    candidate_id: number
    role: string
    total_ev: number
    is_winner: boolean
    party: string
  }

  export type ElectionCandidateCreateOrConnectWithoutState_result_candidatesInput = {
    where: ElectionCandidateWhereUniqueInput
    create: XOR<ElectionCandidateCreateWithoutState_result_candidatesInput, ElectionCandidateUncheckedCreateWithoutState_result_candidatesInput>
  }

  export type StateResultUpsertWithoutState_result_candidatesInput = {
    update: XOR<StateResultUpdateWithoutState_result_candidatesInput, StateResultUncheckedUpdateWithoutState_result_candidatesInput>
    create: XOR<StateResultCreateWithoutState_result_candidatesInput, StateResultUncheckedCreateWithoutState_result_candidatesInput>
    where?: StateResultWhereInput
  }

  export type StateResultUpdateToOneWithWhereWithoutState_result_candidatesInput = {
    where?: StateResultWhereInput
    data: XOR<StateResultUpdateWithoutState_result_candidatesInput, StateResultUncheckedUpdateWithoutState_result_candidatesInput>
  }

  export type StateResultUpdateWithoutState_result_candidatesInput = {
    state_name?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    election?: ElectionUpdateOneRequiredWithoutState_resultsNestedInput
  }

  export type StateResultUncheckedUpdateWithoutState_result_candidatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    election_year?: IntFieldUpdateOperationsInput | number
    state_name?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionCandidateUpsertWithoutState_result_candidatesInput = {
    update: XOR<ElectionCandidateUpdateWithoutState_result_candidatesInput, ElectionCandidateUncheckedUpdateWithoutState_result_candidatesInput>
    create: XOR<ElectionCandidateCreateWithoutState_result_candidatesInput, ElectionCandidateUncheckedCreateWithoutState_result_candidatesInput>
    where?: ElectionCandidateWhereInput
  }

  export type ElectionCandidateUpdateToOneWithWhereWithoutState_result_candidatesInput = {
    where?: ElectionCandidateWhereInput
    data: XOR<ElectionCandidateUpdateWithoutState_result_candidatesInput, ElectionCandidateUncheckedUpdateWithoutState_result_candidatesInput>
  }

  export type ElectionCandidateUpdateWithoutState_result_candidatesInput = {
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
    election?: ElectionUpdateOneRequiredWithoutElection_candidatesNestedInput
    candidate?: CandidateUpdateOneRequiredWithoutElection_candidatesNestedInput
  }

  export type ElectionCandidateUncheckedUpdateWithoutState_result_candidatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    election_year?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
  }

  export type ElectionCandidateCreateManyElectionInput = {
    id?: number
    candidate_id: number
    role: string
    total_ev: number
    is_winner: boolean
    party: string
  }

  export type StateResultCreateManyElectionInput = {
    id?: number
    state_name: string
    total_ev: number
  }

  export type ElectionCandidateUpdateWithoutElectionInput = {
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
    candidate?: CandidateUpdateOneRequiredWithoutElection_candidatesNestedInput
    state_result_candidates?: StateResultCandidateUpdateManyWithoutElection_candidateNestedInput
  }

  export type ElectionCandidateUncheckedUpdateWithoutElectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
    state_result_candidates?: StateResultCandidateUncheckedUpdateManyWithoutElection_candidateNestedInput
  }

  export type ElectionCandidateUncheckedUpdateManyWithoutElectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
  }

  export type StateResultUpdateWithoutElectionInput = {
    state_name?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    state_result_candidates?: StateResultCandidateUpdateManyWithoutState_resultNestedInput
  }

  export type StateResultUncheckedUpdateWithoutElectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_name?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    state_result_candidates?: StateResultCandidateUncheckedUpdateManyWithoutState_resultNestedInput
  }

  export type StateResultUncheckedUpdateManyWithoutElectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_name?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionCandidateCreateManyCandidateInput = {
    id?: number
    election_year: number
    role: string
    total_ev: number
    is_winner: boolean
    party: string
  }

  export type ElectionCandidateUpdateWithoutCandidateInput = {
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
    election?: ElectionUpdateOneRequiredWithoutElection_candidatesNestedInput
    state_result_candidates?: StateResultCandidateUpdateManyWithoutElection_candidateNestedInput
  }

  export type ElectionCandidateUncheckedUpdateWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    election_year?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
    state_result_candidates?: StateResultCandidateUncheckedUpdateManyWithoutElection_candidateNestedInput
  }

  export type ElectionCandidateUncheckedUpdateManyWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    election_year?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    total_ev?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    party?: StringFieldUpdateOperationsInput | string
  }

  export type StateResultCandidateCreateManyElection_candidateInput = {
    id?: number
    state_result_id: number
    ev_count: number
  }

  export type StateResultCandidateUpdateWithoutElection_candidateInput = {
    ev_count?: IntFieldUpdateOperationsInput | number
    state_result?: StateResultUpdateOneRequiredWithoutState_result_candidatesNestedInput
  }

  export type StateResultCandidateUncheckedUpdateWithoutElection_candidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_result_id?: IntFieldUpdateOperationsInput | number
    ev_count?: IntFieldUpdateOperationsInput | number
  }

  export type StateResultCandidateUncheckedUpdateManyWithoutElection_candidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_result_id?: IntFieldUpdateOperationsInput | number
    ev_count?: IntFieldUpdateOperationsInput | number
  }

  export type StateResultCandidateCreateManyState_resultInput = {
    id?: number
    election_candidate_id: number
    ev_count: number
  }

  export type StateResultCandidateUpdateWithoutState_resultInput = {
    ev_count?: IntFieldUpdateOperationsInput | number
    election_candidate?: ElectionCandidateUpdateOneRequiredWithoutState_result_candidatesNestedInput
  }

  export type StateResultCandidateUncheckedUpdateWithoutState_resultInput = {
    id?: IntFieldUpdateOperationsInput | number
    election_candidate_id?: IntFieldUpdateOperationsInput | number
    ev_count?: IntFieldUpdateOperationsInput | number
  }

  export type StateResultCandidateUncheckedUpdateManyWithoutState_resultInput = {
    id?: IntFieldUpdateOperationsInput | number
    election_candidate_id?: IntFieldUpdateOperationsInput | number
    ev_count?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}