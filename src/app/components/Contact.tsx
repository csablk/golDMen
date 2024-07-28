import style from './styles/Contacts.module.css'

export default function Contact() {
	return (
		<section className={style.section}>
			<div className='text-center'>
				<div className={style.contactTitle}>
					<h2>Связаться с нами</h2>
				</div>

				<div className={style.divider}></div>

				<div className='flex flex-col justify-center text-center items-center'>
					<ol className={style.contactsList}>
						<li className={style.addressText}>
							<p>
								<a href='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%BE,+93,+%D0%9D%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA,+%D0%9A%D0%B0%D0%B1%D0%B0%D1%80%D0%B4%D0%B8%D0%BD%D0%BE-%D0%91%D0%B0%D0%BB%D0%BA%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D0%A0%D0%B5%D1%81%D0%BF.,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+360017/@43.4894961,43.5831106,17z/data=!3m1!4b1!4m6!3m5!1s0x405a06b41d89699d:0xb398d93a6e24e75f!8m2!3d43.4894961!4d43.5831106!16s%2Fg%2F11vkgppthf?entry=ttu'>
									ул. Головко 93
								</a>
							</p>
							<div className={style.contactLine}>|</div>
						</li>
						<li>
							<p>
								<a
									href='https://www.instagram.com/goldmen.store07'
									target='_blank'
									rel='noopener noreferrer'
									className={style.instaText}
								>
									goldmen.store07
								</a>
							</p>
							<div className={style.contactLine}>|</div>
						</li>
						<li className={style.phoneText}>
							<p>
								<a href='tel:+79187252800'>+7 918 725-28-00</a>
							</p>
						</li>
					</ol>
				</div>

				<div className='mt-12 text-center items-center flex justify-center flex-col'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.6153987415573!2d43.583110600000005!3d43.4894961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405a06b41d89699d%3A0xb398d93a6e24e75f!2z0YPQuy4g0JPQvtC70L7QstC60L4sIDkzLCDQndCw0LvRjNGH0LjQuiwg0JrQsNCx0LDRgNC00LjQvdC-LdCR0LDQu9C60LDRgNGB0LrQsNGPINCg0LXRgdC_Liwg0KDQvtGB0YHQuNGPLCAzNjAwMTc!5e0!3m2!1sru!2snl!4v1722041832826!5m2!1sru!2snl'
						width='660'
						height='350'
						style={{ borderRadius: '10px' }}
						allowFullScreen
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>
			<div></div>
		</section>
	)
}
