import Image from 'next/image'
import style from './styles/Header.module.css'

export default function Header() {
	return (
		<header>
			<div
				className={`items-center text-center flex flex-col  ${style.headerContent}`}
			>
				<div className='flex justify-center'>
					<h1 className={style.hiddenHeading}>goldmen</h1>
					<Image
						src='/logo.png'
						width={200}
						height={200}
						alt='Picture of the author'
						className={style.imageLogo}
					/>
				</div>
				<div className={style.textContent}>
					<p>
						<span className={style.goldmenColor}>golDMen</span> — Ваш гид в мире
						мужской моды. <br></br>
						Наш магазин предлагает ассортимент одежды и аксессуаров для мужчин.
						<br></br>
						Каждая вещь в нашем каталоге тщательно отобрана, чтобы обеспечить
						вам максимальный комфорт и стиль. <br></br> От деловых встреч до
						повседневных прогулок — с golDMen вы всегда будете выглядеть на
						высоте.<br></br> Откройте для себя мир качественной мужской одежды и
						найдите свой идеальный стиль с golDMen.
					</p>
				</div>

				<div className={style.divider}></div>
			</div>
		</header>
	)
}
