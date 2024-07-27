// src/app/layout.tsx
import { ReactNode } from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import './globals.css'

type LayoutProps = {
	children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang='en'>
			<head>
				<title>My Single Page App</title>
				<meta
					name='description'
					content='Description of my single page Next.js app'
				/>
			</head>
			<body>
				<div className='container'>
					<Header />
					<main>
						<Contact />
					</main>
				</div>
			</body>
		</html>
	)
}
