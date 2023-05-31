import styles from "@/styles/equity-loan.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Accordion from "@/components/Accordion"
import Link from "next/link"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Mortgage() {
    const router = useRouter();
    const t = router.locale === 'lt' ? lt : en

    return (
      <IndexLayout>
        <main>
          <section className={styles.pageWrapper}>
            <div className={styles.pageList}>
              <div className={styles.heroItem}>
                <h1 className={styles.title}>
                  {t.equityLoan.heroBlock.title}
                </h1>
                <div className={styles.heroDescription}>
                  <p>{t.equityLoan.heroBlock.description}</p>
                  <ul>
                    <li>{t.equityLoan.heroBlock.bullet1}</li>
                    <li>{t.equityLoan.heroBlock.bullet2}</li>
                    <li>{t.equityLoan.heroBlock.bullet3}</li>
                    <li>{t.equityLoan.heroBlock.bullet4}</li>
                    <li>{t.equityLoan.heroBlock.bullet5}</li>
                    <li>{t.equityLoan.heroBlock.bullet6}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationSection}>
            <div className={styles.innerNavigationLinkList}>
              <Link className={styles.innerNavLink} href="#benefits">
                {t.equityLoan.innerLinkBlock.benefits}
              </Link>
              <Link className={styles.innerNavLink} href="#process">
                {t.equityLoan.innerLinkBlock.process}
              </Link>
              <Link className={styles.innerNavLink} href="/pricelist">
                {t.equityLoan.innerLinkBlock.priceList}
              </Link>
              <Link className={styles.innerNavLink} href="#clientSuport">
                {t.equityLoan.innerLinkBlock.clientSuport}
              </Link>
              <Link className={styles.innerNavLink} href="#faq">
                {t.equityLoan.innerLinkBlock.faq}
              </Link>
            </div>
          </section>
          <section id="benefits" className={styles.benefitsSection}>
            <div className={styles.benefitsWrapper}>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.equityLoan.benefitsArticle.article1.title}
                </h3>
                <div className={styles.benefitsDescription}>
                {t.equityLoan.benefitsArticle.article1.description}
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.equityLoan.benefitsArticle.article2.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.equityLoan.benefitsArticle.article2.description} 
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.equityLoan.benefitsArticle.article3.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.equityLoan.benefitsArticle.article3.description}
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.equityLoan.benefitsArticle.article4.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.equityLoan.benefitsArticle.article4.description}
                </div>
              </div>
            </div>
          </section>
          <section id="process" className={styles.StepsSection}>
            <div className={styles.StepsWrapper}>
                <div className={styles.stepsHeader}>
                  <h3>{t.equityLoan.stepProcess.title}</h3>
                </div>
                <div className={styles.stepsList}>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>1</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.equityLoan.stepProcess.step1.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.equityLoan.stepProcess.step1.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>2</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.equityLoan.stepProcess.step2.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.equityLoan.stepProcess.step2.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>3</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.equityLoan.stepProcess.step3.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.equityLoan.stepProcess.step3.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>4</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.equityLoan.stepProcess.step4.title}</h2>
                        <p>{t.equityLoan.stepProcess.step4.subTitle}</p>
                        <div className={styles.stepsDescription}>
                            <ul>
                              <li>{t.equityLoan.stepProcess.step4.bulletBlock.bullet1}</li>
                              <li>{t.equityLoan.stepProcess.step4.bulletBlock.bullet2}</li>
                              <li>{t.equityLoan.stepProcess.step4.bulletBlock.bullet3}</li>
                            </ul>
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>5</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.equityLoan.stepProcess.step5.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.equityLoan.stepProcess.step5.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>6</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.equityLoan.stepProcess.step6.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.equityLoan.stepProcess.step6.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>7</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.equityLoan.stepProcess.step7.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.equityLoan.stepProcess.step7.description}
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>
          <section id="clientSuport" className={styles.clientSuportSection}>
            <div className={styles.clientSuportWrapper}>
                <h3 className={styles.clientSuportHeader}>{t.equityLoan.clientSuport.title}</h3>
                <div className={styles.clientSuportDescription}>
                  {t.equityLoan.clientSuport.description}
                </div>
            </div>
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t.equityLoan.faq}</h3>
              <div className={styles.faqList}>
                <Accordion accId="1" singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    );
}