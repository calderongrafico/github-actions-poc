// import Image from "next/image";
import styles from "./page.module.css";
import { PhoneNumberUtil } from "google-libphonenumber";

export default function Home() {
  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone: string): boolean => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error: unknown) {
      return false;
    }
  };

  const phoneNumber = "+1 650 253 0000";

  return (
    <div className={styles.page}>
      <h1>{isPhoneValid(phoneNumber) && phoneNumber}</h1>
      
    </div>
  );
}
