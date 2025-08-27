export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-center">
        © {new Date().getFullYear()} NextShop — All rights reserved.
      </div>
    </footer>
  );
}
