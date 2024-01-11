// import { ReactNode } from "react";
import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <div>
        <h1>About us </h1>
        <ul>
            <li><Link href="/about/contacts">Team</Link></li>
            <li><Link href="/about/team">Contacts</Link></li>
        </ul>
        {children}
    </div>
}
