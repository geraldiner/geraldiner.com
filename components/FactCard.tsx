import { TinaMarkdown } from "tinacms/dist/rich-text";
import Card, { DROP_SHADOW_DIRECTION } from "./Card";

export default function FactCard({ item }: { item: any }) {
  const { fact, details, isTrue } = item;
  return (
    <Card
      color={isTrue ? "green" : "red"}
      dropShadowDirection={DROP_SHADOW_DIRECTION.BOTTOM}
    >
      <h3 className="mb-4">
        {isTrue ? "✅" : "❌"} {fact}
      </h3>
      <TinaMarkdown content={details} />
    </Card>
  );
}
