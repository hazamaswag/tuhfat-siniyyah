import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto">
      <header className="py-12">
        <nav className="h-16 px-4 py-4 shadow-md bg-blue-200 fixed top-0 inset-x-0">
          <ul className="flex flex-row justify-between space-x-4 ">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mx-auto w-7/12">
        <Component {...pageProps} />
      </main>

      <footer className="my-10 h-10 text-center border-4">
        Website made with ❤
      </footer>
    </div>
  );
}

export default MyApp;
