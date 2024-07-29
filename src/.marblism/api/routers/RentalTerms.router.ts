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

        create: procedure.input($Schema.RentalTermsInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).rentalTerms.create(input as any))),

        delete: procedure.input($Schema.RentalTermsInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).rentalTerms.delete(input as any))),

        findFirst: procedure.input($Schema.RentalTermsInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).rentalTerms.findFirst(input as any))),

        findMany: procedure.input($Schema.RentalTermsInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).rentalTerms.findMany(input as any))),

        findUnique: procedure.input($Schema.RentalTermsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).rentalTerms.findUnique(input as any))),

        update: procedure.input($Schema.RentalTermsInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).rentalTerms.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.RentalTermsCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RentalTermsCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RentalTermsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RentalTermsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RentalTermsCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RentalTermsCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RentalTermsGetPayload<T>, Context>) => Promise<Prisma.RentalTermsGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RentalTermsDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RentalTermsDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RentalTermsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RentalTermsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RentalTermsDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RentalTermsDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RentalTermsGetPayload<T>, Context>) => Promise<Prisma.RentalTermsGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RentalTermsFindFirstArgs, TData = Prisma.RentalTermsGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RentalTermsFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RentalTermsGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RentalTermsFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RentalTermsFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RentalTermsGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RentalTermsGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RentalTermsFindManyArgs, TData = Array<Prisma.RentalTermsGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.RentalTermsFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RentalTermsGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RentalTermsFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RentalTermsFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RentalTermsGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RentalTermsGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RentalTermsFindUniqueArgs, TData = Prisma.RentalTermsGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RentalTermsFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RentalTermsGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RentalTermsFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RentalTermsFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RentalTermsGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RentalTermsGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.RentalTermsUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RentalTermsUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RentalTermsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RentalTermsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RentalTermsUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RentalTermsUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RentalTermsGetPayload<T>, Context>) => Promise<Prisma.RentalTermsGetPayload<T>>
            };

    };
}
