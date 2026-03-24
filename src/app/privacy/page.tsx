import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="font-display text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-light mb-8">Our privacy policy is being prepared and will be available soon.</p>
        <Link href="/" className="text-primary hover:text-primary-light transition-colors font-semibold">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
