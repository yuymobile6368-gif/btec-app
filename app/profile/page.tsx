import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>วรัญญ อนุสาตร์</h1>
        <p className={styles.subtitle}>ปวส.1 — ผู้พัฒนาเว็บ</p>
      </header>

      <main className={styles.main}>
        <section className={styles.bio}>
          <h2>เกี่ยวกับ</h2>
          <p>
            ผมเป็นนักพัฒนาเว็บโฟกัสที่การสร้างประสบการณ์ใช้งานบนมือถือเป็นหลัก
            ทำงานกับ Next.js และ JavaScript เป็นหลัก พร้อมความรู้ด้านเทคโนโลยีทั่วไปและการเขียนโปรแกรม
          </p>
        </section>

        <section className={styles.skills}>
          <h2>ความเชี่ยวชาญ</h2>
          <ul>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>Technology</li>
            <li>Programming</li>
            <li>ซ่อมได้ทุกอย่าง (อุปกรณ์ไอที)</li>
          </ul>
        </section>

        <section className={styles.contact}>
          <h2>ติดต่อ</h2>
          <p>อีเมล: waranya@example.com</p>
          <p>เบอร์ติดต่อ: 08x-xxx-xxxx</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <small>© {new Date().getFullYear()} วรัญญ อนุสาตร์</small>
      </footer>
    </div>
  );
}
