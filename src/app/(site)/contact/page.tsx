import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto w-full max-w-2xl">
        <ContactForm />
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prefer email? contact@aquatrace.dev
        </p>
      </div>
    </main>
  );
}
