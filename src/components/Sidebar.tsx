
type Props = {}

export default function Sidebar({ }: Props) {

    const pathname = window.location.pathname;

    console.log('Current Path:', pathname);

    return (
        <aside className="hidden md:flex flex-col w-64 bg-black text-white p-6">
            <h1 className="text-2xl font-bold">LAD</h1>
            <nav className="mt-10 flex-1">
                <ul className="space-y-4">
                    <li>
                        <a href="/" className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition ${pathname === '/' ? 'bg-gray-700' : ''}`}>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/products" className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition ${pathname === '/products' ? 'bg-gray-700' : ''}`}>
                            Products
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}