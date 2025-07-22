import { SearchBar } from "./SearchBar";

export function SiteHeader() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Кейін API немесе filter қосасың
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm dark:bg-gray-950/95">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <span className="text-xl font-serif tracking-wide">Classic Threads</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" prefetch={false}>Shop</Link>
          <Link href="#" prefetch={false}>New Arrivals</Link>
          <Link href="#" prefetch={false}>Sale</Link>
          <Link href="#" prefetch={false}>About</Link>
          <Link href="#" prefetch={false}>Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </header>
  );
}
