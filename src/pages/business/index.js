import IndexLayout from "@/Layouts/IndexLayout";
import SimpleSlider from "@/components/BusinessIndexSlider";
import IndexNews from "@/components/IndexNews";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ArticleImg1 from "@../../../public/assets/images/article1.png";
import ArticleImg2 from "@../../../public/assets/images/article2.png";
import ArticleImg3 from "@../../../public/assets/images/article3.png";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.heroblock}>
            <SimpleSlider />
          </section>
          <section className={styles.beneficialArticles}>
            <div className="container">
              <article className={styles.beneficialArticle}>
                <div className={styles.imageBlock}>
                  <Image
                    src={ArticleImg1}
                    alt="Available Jobs"
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
                <div className={styles.articleBlock}>
                  <h2>{t("businessIndexPage.articleBlock.article1.title")}</h2>
                  <p>
                    {t("businessIndexPage.articleBlock.article1.description")}
                  </p>
                </div>
              </article>

              <article className={styles.beneficialArticleMirror}>
                <div className={styles.imageBlock}>
                  <Image
                    src={ArticleImg2}
                    alt="Available Jobs"
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
                <div className={styles.articleBlock}>
                  <h2>{t("businessIndexPage.articleBlock.article2.title")}</h2>
                  <p>
                    {t("businessIndexPage.articleBlock.article2.description")}
                  </p>
                </div>
              </article>
              <article className={styles.beneficialArticle}>
                <div className={styles.imageBlock}>
                  <Image
                    src={ArticleImg3}
                    alt="Available Jobs"
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
                <div className={styles.articleBlock}>
                  <h2>{t("businessIndexPage.articleBlock.article3.title")}</h2>
                  <p>
                    {t("businessIndexPage.articleBlock.article3.description")}
                  </p>
                </div>
              </article>
            </div>
          </section>
          <section className={styles.bulletPoints}>
            <div className="container">
              <h2>{t("businessIndexPage.bulletsBlock.title")}</h2>
              <ul>
                <li>{t("businessIndexPage.bulletsBlock.bullet1")}</li>
                <li>{t("businessIndexPage.bulletsBlock.bullet2")}</li>
                <li>{t("businessIndexPage.bulletsBlock.bullet3")}</li>
                <li>{t("businessIndexPage.bulletsBlock.bullet4")}</li>
              </ul>
            </div>
          </section>
          <section id="news" className={styles.newsSection}>
            <IndexNews />
          </section>
        </main>
      </IndexLayout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
