import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="max-w-screen-xl font-eng font-black mx-auto my-6">
            <Link to={"/"} className="text-xl tracking-[0.015em]">
                Blog
            </Link>
        </header>
    );
}
