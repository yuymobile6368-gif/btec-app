import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background} aria-hidden />

      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>🛠️ ซ่อมไอที</span>
          <p className={styles.brandText}>
            บริการรับซ่อมอุปกรณ์ไอทีออนไลน์
          </p>
        </div>

        <button className={styles.ctaPrimary}>
          ส่งคำขอซ่อม
        </button>
      </header>

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <span className={styles.heroBadge}>
            รับซ่อมทุกอุปกรณ์ไอที
          </span>

          <h1 className={styles.title}>
            ซ่อมเร็ว แม่นยำ <br />
            พร้อมบริการถึงที่
          </h1>

          <p className={styles.lead}>
            ระบบรับซ่อมอุปกรณ์ไอทีออนไลน์สำหรับคอมพิวเตอร์ โน้ตบุ๊ก
            โทรศัพท์ และแก็ดเจ็ตทั่วไป พร้อมทีมช่างผู้เชี่ยวชาญ
            ตอบกลับรวดเร็วและตรวจสอบสถานะงานได้ตลอดเวลา
          </p>

          <div className={styles.heroActions}>
            <button className={styles.ctaPrimary}>
              ส่งคำขอซ่อม
            </button>

            <a
              className={styles.ctaGhost}
              href="#how-it-works"
            >
              ดูขั้นตอน
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>500+</h3>
              <p>งานซ่อมสำเร็จ</p>
            </div>

            <div className={styles.statCard}>
              <h3>98%</h3>
              <p>ลูกค้าพึงพอใจ</p>
            </div>

            <div className={styles.statCard}>
              <h3>24 ชม.</h3>
              <p>ตอบกลับรวดเร็ว</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className={styles.features}
        >
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🛠️</div>
            <h3>ช่างมืออาชีพ</h3>
            <p>
              ผ่านการตรวจสอบและมีประสบการณ์
              พร้อมแก้ไขปัญหาได้อย่างแม่นยำ
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>ตอบกลับรวดเร็ว</h3>
            <p>
              แจ้งรับงาน ประเมินราคา
              และติดตามสถานะได้ทันที
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🚚</div>
            <h3>รับ-ส่งถึงที่</h3>
            <p>
              สะดวกสบายด้วยบริการรับและส่งอุปกรณ์ถึงบ้าน
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className={styles.howItWorks}
        >
          <h2>3 ขั้นตอนง่าย ๆ</h2>

          <ol className={styles.steps}>
            <li>
              <strong>1.</strong>
              กรอกคำขอซ่อม พร้อมรายละเอียดปัญหา
            </li>

            <li>
              <strong>2.</strong>
              เจ้าหน้าที่ติดต่อกลับและประเมินราคา
            </li>

            <li>
              <strong>3.</strong>
              ดำเนินการซ่อมและส่งคืนพร้อมรับประกันงาน
            </li>
          </ol>
        </section>

        {/* HIGHLIGHT */}
        <section className={styles.highlight}>
          <h2>ซ่อมได้ทุกอย่าง</h2>

          <p>
            คอมพิวเตอร์ • โน้ตบุ๊ก • โทรศัพท์ •
            แท็บเล็ต • อุปกรณ์เครือข่าย • เครื่องพิมพ์
            และอุปกรณ์ไอทีทั่วไป
          </p>
        </section>

        {/* TESTIMONIALS */}
        <section className={styles.testimonials}>
          <h2>เสียงจากลูกค้า</h2>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>
                "ส่งโน้ตบุ๊กซ่อมช่วงเช้า
                เย็นก็ใช้งานได้แล้ว ประทับใจมาก"
              </p>
              <strong>- คุณสมชาย</strong>
            </div>

            <div className={styles.testimonial}>
              <p>
                "บริการดี ตอบแชทไว
                แจ้งราคาก่อนซ่อมชัดเจน"
              </p>
              <strong>- คุณอรทัย</strong>
            </div>

            <div className={styles.testimonial}>
              <p>
                "มีบริการรับส่งถึงบ้าน
                สะดวกมากสำหรับคนไม่มีเวลา"
              </p>
              <strong>- คุณวีระ</strong>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2>พร้อมส่งซ่อมหรือยัง?</h2>

          <p>
            แจ้งปัญหาอุปกรณ์ของคุณ
            แล้วให้ทีมงานติดต่อกลับทันที
          </p>

          <button className={styles.ctaPrimary}>
            เริ่มส่งคำขอซ่อม
          </button>
        </section>

        {/* CONTACT */}
        <section className={styles.contact}>
          <h2>ติดต่อเรา</h2>

          <p>📞 02-123-4567</p>
          <p>✉️ support@example.com</p>
          <p>🕒 เปิดบริการทุกวัน 08:00 - 20:00 น.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <small>
          © {new Date().getFullYear()} บริการรับซ่อมอุปกรณ์ไอทีออนไลน์
        </small>
      </footer>
    </div>
  );
}