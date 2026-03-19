---
name: Database Design & Migrations
description: Guidelines for designing relational schemas and managing migrations using standard ORMs.
---

# 🗄️ Database Design Skill

This skill provides guidelines for schema normalization, indexing, and migration pipelines for relational databases (PostgreSQL, Supabase, SQLite).

---

## 🛠️ Schema Design Principles

### 1. Normalization (3NF)
Avoid duplicate data. Separate users from tenant data. Use junction tables for many-to-many.

### 2. Indexes
Define clear indexes for foreign keys and frequently queried columns. Skip indexing on columns with low-cardinality unless required for composite keys.

### 3. Date Tracking
Always include:
-   `created_at` timestamp with time zone (computed default `now()`)
-   `updated_at` timestamp with time zone (computed auto-update or triggered).

---

## 📝 Modern ORM Patterns (Prisma / Drizzle)

### Drizzle (TypeScript Edge-native)
Drizzle allows fine-grained SQL control.

```typescript
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});
```

### Prisma (Schema-native)
Prisma is heavy/stable with a single schema file.

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}
```

---

> [!CAUTION]
> Never skip migrations to push directly to production DB schema definitions. Always run a verify-loop on stage!
