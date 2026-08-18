import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { freeModelsForProvider, isFreeModelMetadata } from "../shared/aiProviders";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  aiModels: router({
    discover: publicProcedure.input(z.object({ endpoint: z.string().url(), provider: z.string(), apiKey: z.string().optional() })).mutation(async ({ input }) => {
      const response = await fetch(`${input.endpoint.replace(/\/$/, "")}/models`, { headers: input.apiKey ? { Authorization: `Bearer ${input.apiKey}` } : undefined });
      if (!response.ok) throw new Error(`Model discovery returned ${response.status}`);
      const payload = (await response.json()) as { data?: Array<{ id: string; pricing?: { prompt?: string | number; completion?: string | number } }> };
      const models = (payload.data ?? []).filter(isFreeModelMetadata).map((model) => model.id);
      return { models: Array.from(new Set([...models, ...freeModelsForProvider(input.provider)])) };
    }),
  }),
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
