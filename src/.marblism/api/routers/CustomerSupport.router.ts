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

        create: procedure.input($Schema.CustomerSupportInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customerSupport.create(input as any))),

        delete: procedure.input($Schema.CustomerSupportInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customerSupport.delete(input as any))),

        findFirst: procedure.input($Schema.CustomerSupportInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).customerSupport.findFirst(input as any))),

        findMany: procedure.input($Schema.CustomerSupportInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).customerSupport.findMany(input as any))),

        findUnique: procedure.input($Schema.CustomerSupportInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).customerSupport.findUnique(input as any))),

        update: procedure.input($Schema.CustomerSupportInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customerSupport.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.CustomerSupportCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomerSupportCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CustomerSupportGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CustomerSupportGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomerSupportCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomerSupportCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CustomerSupportGetPayload<T>, Context>) => Promise<Prisma.CustomerSupportGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CustomerSupportDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomerSupportDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CustomerSupportGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CustomerSupportGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomerSupportDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomerSupportDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CustomerSupportGetPayload<T>, Context>) => Promise<Prisma.CustomerSupportGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CustomerSupportFindFirstArgs, TData = Prisma.CustomerSupportGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CustomerSupportFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CustomerSupportGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CustomerSupportFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CustomerSupportFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CustomerSupportGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CustomerSupportGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CustomerSupportFindManyArgs, TData = Array<Prisma.CustomerSupportGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.CustomerSupportFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CustomerSupportGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CustomerSupportFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CustomerSupportFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CustomerSupportGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CustomerSupportGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CustomerSupportFindUniqueArgs, TData = Prisma.CustomerSupportGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CustomerSupportFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CustomerSupportGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CustomerSupportFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CustomerSupportFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CustomerSupportGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CustomerSupportGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.CustomerSupportUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomerSupportUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CustomerSupportGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CustomerSupportGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomerSupportUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomerSupportUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CustomerSupportGetPayload<T>, Context>) => Promise<Prisma.CustomerSupportGetPayload<T>>
            };

    };
}
