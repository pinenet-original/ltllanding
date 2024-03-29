import styles from "@/styles/current-account.module.scss";
import businessStyle from "@/styles/business.current-account.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Steper from "@/components/Steper";
import { currentAccountSteperData } from "@/common/stepersData";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroMobile from "../../../public/assets/images/currentAccount_Hero_mobile.png";
import BackBtn from "../../../public/assets/images/backBtn.png";
import { businessCurrentAccountInnerLinkList } from "@/common/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ClientSupport from "@/components/ClientSupport";
import { useSelector } from "react-redux";
import { getCurrentAccFAQ } from "@/store/faqList/faqList.slice";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Mortgage() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const faqData = useSelector(getCurrentAccFAQ);

  const handleBack = () => {
    router.back();
  };

  return (
    <IndexLayout>
      <main className={businessStyle.currentAccountPage}>
        <section className={businessStyle.pageWrapper}>
          <div className={businessStyle.pageList}>
            <div className="breadcrumbs_Wrapper">
              <Breadcrumbs
                business={true}
                area={`${t("headerNavLinks.payments")}`}
                page={`${t("headerNavLinks.currentAccount")}`}
              />
            </div>
            <div className={businessStyle.heroItem}>
              <div className={businessStyle.imgBlock}>
                <Image
                  src={BackBtn}
                  alt={"Hero Mobile"}
                  style={{ width: "24", height: "12" }}
                  className={[
                    businessStyle.heroImage,
                    businessStyle.backBtn,
                  ].join(" ")}
                  onClick={handleBack}
                />
                <Image
                  src={HeroMobile}
                  alt={"Hero Mobile"}
                  style={{ width: "70%", height: "auto" }}
                  className={businessStyle.heroImage}
                />
              </div>
              <h1 className={businessStyle.title}>
                {t("business.currentAccount.heroBlock.title")}
              </h1>
              <div className={businessStyle.description}>
                <p>{t("business.currentAccount.heroBlock.description")}</p>
                <ul>
                  <li>{t("privetCurrentAccount.heroBlock.bullet1")}</li>
                  <li>{t("privetCurrentAccount.heroBlock.bullet2")}</li>
                  <li>{t("privetCurrentAccount.heroBlock.bullet3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationSection}>
          <InnerLinks innerLinksData={businessCurrentAccountInnerLinkList} />
        </section>
        <section id="benefits" className={styles.articleSection}>
          <div className={styles.articleWrapper}>
            <div className={styles.articleList}>
              <div className={styles.articleItem}>
                <h2 className={styles.articleItemTitle}>
                  {t("business.currentAccount.benefitsArticle.article1.title")}
                </h2>
                <div className={styles.articleItemDescription}>
                  {t(
                    "business.currentAccount.benefitsArticle.article1.description"
                  )}
                </div>
              </div>
              <div className={styles.articleItem}>
                <h2 className={styles.articleItemTitle}>
                  {t("business.currentAccount.benefitsArticle.article2.title")}
                </h2>
                <div className={styles.articleItemDescription}>
                  {t(
                    "business.currentAccount.benefitsArticle.article2.description"
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="process" className={styles.stepsSection}>
          <div className={styles.stepsWrapper}>
            <div className={styles.stepsHeader}>
              <h3>{t("business.currentAccount.stepProcess.title")}</h3>
            </div>
            <Steper steperData={currentAccountSteperData} />
          </div>
        </section>
        <section id="clientSuport" className={styles.clientSuportSection}>
          <ClientSupport />
        </section>
        <section id="faq" className={styles.faqSection}>
          {!!faqData.data && (
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>
                {t("privetCurrentAccount.faq")}
              </h3>
              <div className={styles.faqList}>
                <Accordion faqData={faqData.data} singleLevel="true" />
              </div>
            </div>
          )}
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
