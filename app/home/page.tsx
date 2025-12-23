import Header from "../Component/Header"
import Link from "next/link"

export default function page() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline" style={{ textAlign: "center" }}>Welcome to 67162110273-3 ณัฐกิตติ์ แก้วบุญ Shop</h1>
            
            <Header />

            <Link href="/products">Products</Link>
        </div>
    )
}


