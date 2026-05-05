export default async function TestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>
      <h1>Test Page: {slug}</h1>
      <p>This is a test of dynamic routing.</p>
    </div>
  );
}
