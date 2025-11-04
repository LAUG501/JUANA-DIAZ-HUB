import AiLabView from "../../components/ai/AiLabView";
import { listProviders, listUsage } from "../../lib/ai-service";

export const dynamic = "force-dynamic";

export default async function AiLabPage() {
  const [providers, usage] = await Promise.all([listProviders(), listUsage()]);

  return <AiLabView providers={providers} usage={usage} />;
}
