import Footer from "./Footer";
import NavBar from "./NavBar";

import Head from "next/head";

export default function Layout({children}){
	return(
		<>
		<Head>
			<link rel="shortcut icon" href="/image/favicon.ico"/>
			<title>PokeNext</title>
		</Head>
			<NavBar/>
			<main className="main-container">{children}</main>
			<Footer />
		</>
	)
}