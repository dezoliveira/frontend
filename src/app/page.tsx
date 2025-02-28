import { api } from '@/services/api'
import styles from './page.module.scss'
import logoImg from '/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Page() {
  async function handleLogin(formData: FormData) {
    "use server"

    const email = formData.get("email")
    const password = formData.get("password")

    if (email === '' || password === '') {
      return
    }

    try {
      const response = await api.post("/session", {
        email: email,
        password: password
      })

      if (!response.data.token) {
        return
      }

    } catch(err) {
      console.log(err)
      return
    }

    redirect("/dashboard")
  }

  return (
    <div className={styles.containerCenter}>
      <Image
        src={logoImg}
        alt="Logo da pizzaria"
      />

      <section className={styles.login}>
        <form action={handleLogin}>
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
            Acessar
          </button>
        </form>

        <Link href="/signup" className={styles.text}>
          Não possui uma conta ? Cadastre-se
        </Link>

      </section>

    </div>
  )
}