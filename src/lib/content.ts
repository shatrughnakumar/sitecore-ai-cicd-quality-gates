export type ContentCard = {
  title: string;
  description: string;
};

export function normalizeCard(input: unknown): ContentCard | null {
  if (typeof input !== "object" || input === null) return null;
  const { title, description } = input as Record<string, unknown>;
  if (typeof title !== "string" || typeof description !== "string") return null;
  if (!title.trim() || !description.trim()) return null;
  return { title: title.trim(), description: description.trim() };
}

export function getCards(): ContentCard[] {
  const mock: unknown[] = [
    { title: "Validate", description: "Check formatting and code quality." },
    { title: "Verify", description: "Run tests and enforce coverage." },
    { title: "Build", description: "Compile a production-ready application." },
  ];
  return mock.map(normalizeCard).filter((card) => card !== null);
}
