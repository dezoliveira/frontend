import Image from "next/image"
import Link from "next/link"
import styles from '../page.module.scss'
import logoImg from '/public/logo.svg'

export default function Signup() {
	return (
		<>
			<div className={styles.containerCenter}>
				<Image
					src={logoImg}
					alt="Logo da pizzaria"
				/>

				<section className={styles.login}>
					<h1>Criando a sua conta</h1>
					<form>
						{/* nome */}
						<input
            	type='text'
            	required
            	name="name"
            	placeholder="Digite seu nome..."
            	className={styles.input}
          	/>

						{/* email */}
						<input
							type='email'
							required
							name="email"
							placeholder="Digite seu email..."
							className={styles.input}
						/>

						{/* password */}
						<input
							type="password"
							required
							name="password"
							placeholder="*************"
							className={styles.input}
						/>

						<button type="submit" className={styles.button}>
							Cadastrar
						</button>
					</form>

					<Link href="/" className={styles.text}>
						Já possui uma conta ? Faça Login
					</Link>

				</section>

			</div>
		</>
	)
}