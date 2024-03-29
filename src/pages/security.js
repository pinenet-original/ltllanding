import styles from "@/styles/security.module.scss";
import Accordion from "@/components/Accordion";
import IndexLayout from "@/Layouts/IndexLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getCurrentAccFAQ } from "@/store/faqList/faqList.slice";

export default function Security() {
  const { t } = useTranslation("common");
  const faqData = useSelector(getCurrentAccFAQ);

  return (
    <IndexLayout>
      <main>
        <section className={styles.securityPage}>
          <div className={styles.securityPageWrapper}>
            <h1>{t("security.title")}</h1>
            <div className={styles.securityPageDescription}>
              {t("security.description")}
            </div>
            <ol>
              <li>{t("security.bullet1")}</li>
              <li>
                {t("security.bullet2")}{" "}
                <Link
                  href="http://www.iidraudimas.lt"
                  target="_blank"
                  className="readMoreLink"
                >
                  www.iidraudimas.lt
                </Link>
              </li>
              <li>{t("security.bullet3")}</li>
              <li>{t("security.bullet4")}</li>
              <li>{t("security.bullet5")}</li>
              <li>{t("security.bullet6")}</li>
              <li>{t("security.bullet7")}</li>
            </ol>
            <p className={styles.subDescription}>
              {t("security.subDescription")}
            </p>
            <p>{t("security.credits")}</p>
          </div>
        </section>
      </main>
    </IndexLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
