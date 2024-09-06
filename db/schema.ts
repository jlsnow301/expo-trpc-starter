import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

// SESSIONS ////////////////////////////////////////////////////////////////////

export const sessionTable = pgTable("session_pex", {
  id: uuid("session_id").defaultRandom().primaryKey(),
  updated: timestamp("updated_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
});

export type Session = typeof sessionTable.$inferSelect;

// HELPFUL PLACEHOLDER ////////////////////////////////////////////////////////
