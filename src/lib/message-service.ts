import "server-only";

import crypto from "crypto";
import {
  readDatabase,
  writeDatabase,
  withTimestamps,
  type MessageRecord,
  type UserRecord,
} from "./database";
import { createUser } from "./user-service";

async function seedMessages() {
  const db = await readDatabase();
  if (db.messages.length > 0) {
    return;
  }

  let adminUser: UserRecord | undefined = db.users.find((user) => user.role === "admin");
  if (!adminUser) {
    adminUser = await createUser(
      {
        email: "admin@juana-diaz-hub.local",
        name: "Community Admin",
        provider: "credentials",
        providerId: "seed-admin",
      },
      "admin",
    );
    db.users.push(adminUser);
  }

  let communityUser: UserRecord | undefined = db.users.find((user) => user.email === "community@juana-diaz-hub.local");
  if (!communityUser) {
    communityUser = await createUser({
      email: "community@juana-diaz-hub.local",
      name: "Juana Díaz Studio",
      provider: "credentials",
      providerId: "seed-community",
    });
    db.users.push(communityUser);
  }

  const messages: MessageRecord[] = [
    withTimestamps({
      id: crypto.randomUUID(),
      senderId: communityUser.id,
      recipientId: adminUser.id,
      subject: "Mentor check-in for AI School",
      body:
        "Hola! Just confirming tomorrow's School cohort agenda. Please review the conversational AI lesson draft and share any edits you'd like before we publish.",
    }),
    withTimestamps({
      id: crypto.randomUUID(),
      senderId: adminUser.id,
      recipientId: communityUser.id,
      subject: "Thanks for the update",
      body:
        "Appreciate the reminder. I'll add more practice prompts and confirm with the facilitators before noon.",
      readAt: new Date().toISOString(),
    }),
    withTimestamps({
      id: crypto.randomUUID(),
      senderId: communityUser.id,
      recipientId: adminUser.id,
      subject: "New neighbor introductions",
      body:
        "We welcomed three residents from Barriada Rivera. Could you review their waitlist notes and assign mentors?",
    }),
  ];

  db.messages.push(...messages);
  await writeDatabase(db);
}

export type MessagePreview = {
  id: string;
  subject: string;
  snippet: string;
  senderName: string;
  senderEmail: string;
  createdAt: string;
  read: boolean;
  body: string;
};

export async function listInbox(userId: string): Promise<MessagePreview[]> {
  await seedMessages();
  const db = await readDatabase();
  const usersById = new Map(db.users.map((user) => [user.id, user]));
  return db.messages
    .filter((message) => message.recipientId === userId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .map((message) => {
      const sender = usersById.get(message.senderId);
      return {
        id: message.id,
        subject: message.subject,
        snippet: message.body.slice(0, 120),
        senderName: sender?.name ?? "Community member",
        senderEmail: sender?.email ?? "community@juana-diaz-hub.local",
        createdAt: message.createdAt,
        read: Boolean(message.readAt),
        body: message.body,
      } satisfies MessagePreview;
    });
}
