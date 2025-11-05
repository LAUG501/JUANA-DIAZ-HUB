import { redirect } from "next/navigation";
import MessageCenter from "@/components/messages/MessageCenter";
import { getSession } from "@/lib/auth";
import { listInbox } from "@/lib/message-service";

export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login?reason=auth&returnTo=/messages");
  }
  const messages = await listInbox(session.id);
  return <MessageCenter messages={messages} />;
}
