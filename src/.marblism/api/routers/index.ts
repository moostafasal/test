/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createBookingRouter from "./Booking.router";
import createCarRouter from "./Car.router";
import createPaymentRouter from "./Payment.router";
import createCustomerSupportRouter from "./CustomerSupport.router";
import createAdminRouter from "./Admin.router";
import createRentalTermsRouter from "./RentalTerms.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as BookingClientType } from "./Booking.router";
import { ClientType as CarClientType } from "./Car.router";
import { ClientType as PaymentClientType } from "./Payment.router";
import { ClientType as CustomerSupportClientType } from "./CustomerSupport.router";
import { ClientType as AdminClientType } from "./Admin.router";
import { ClientType as RentalTermsClientType } from "./RentalTerms.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        booking: createBookingRouter(router, procedure),
        car: createCarRouter(router, procedure),
        payment: createPaymentRouter(router, procedure),
        customerSupport: createCustomerSupportRouter(router, procedure),
        admin: createAdminRouter(router, procedure),
        rentalTerms: createRentalTermsRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    booking: BookingClientType<AppRouter>;
    car: CarClientType<AppRouter>;
    payment: PaymentClientType<AppRouter>;
    customerSupport: CustomerSupportClientType<AppRouter>;
    admin: AdminClientType<AppRouter>;
    rentalTerms: RentalTermsClientType<AppRouter>;
}
