/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        create: procedure.input($Schema.CarInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).car.create(input as any))),

        delete: procedure.input($Schema.CarInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).car.delete(input as any))),

        findFirst: procedure.input($Schema.CarInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).car.findFirst(input as any))),

        findMany: procedure.input($Schema.CarInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).car.findMany(input as any))),

        findUnique: procedure.input($Schema.CarInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).car.findUnique(input as any))),

        update: procedure.input($Schema.CarInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).car.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.CarCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CarCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CarGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CarGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CarCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CarCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CarGetPayload<T>, Context>) => Promise<Prisma.CarGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CarDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CarDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CarGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CarGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CarDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CarDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CarGetPayload<T>, Context>) => Promise<Prisma.CarGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CarFindFirstArgs, TData = Prisma.CarGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CarFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CarGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CarFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CarFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CarGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CarGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CarFindManyArgs, TData = Array<Prisma.CarGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.CarFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CarGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CarFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CarFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CarGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CarGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CarFindUniqueArgs, TData = Prisma.CarGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CarFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CarGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CarFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CarFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CarGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CarGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.CarUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CarUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CarGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CarGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CarUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CarUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CarGetPayload<T>, Context>) => Promise<Prisma.CarGetPayload<T>>
            };

    };
}
