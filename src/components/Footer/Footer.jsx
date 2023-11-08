import React from "react";
import "./footer.css";
import logo from "../../assets/logoy.png";
import { motion } from "framer-motion";
const Footer = () => {
  const navigation = [

    { namerus: "О компании", nameuz: "Kompany haqida", href: "#about_page" },
    { namerus: "Продукция", nameuz: "Mahsulotlar", href: "#personal" },
    { namerus: "Преимущества", nameuz: "Afzalliklar", href: "#lobbi" },
    { namerus: "Сотрудничество", nameuz: "Hamkorlik", href: "#address" },
    { namerus: "Контакты", nameuz: "Biz bilan bog'laning", href: "#contact" },
  ];
  return (
    <footer>
      <div className="footer_wrap">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="footer_logo"
        >
          <img src={logo} alt="" />

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="footer_info d-flex flex-wrap"
        >
          {navigation.map((item) => (
            <a
              key={item.namerus}
              href={item.href}
              className="p-1 text-sm font-semibold leading-6 text-white"
            >
              {item.namerus}
            </a>
          ))}
        </motion.div>
        <div className="footer_social">
          <a
            href="https://www.facebook.com/Dahouz-105002559082786"
            target="_blank"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 0C26.3512 0 30.6047 1.29028 34.2225 3.70767C37.8404 6.12506 40.6602 9.56099 42.3253 13.581C43.9905 17.6009 44.4261 22.0244 43.5773 26.292C42.7284 30.5596 40.6331 34.4796 37.5564 37.5564C34.4796 40.6331 30.5596 42.7284 26.292 43.5773C22.0244 44.4261 17.6009 43.9905 13.581 42.3253C9.56099 40.6602 6.12506 37.8404 3.70767 34.2225C1.29028 30.6047 0 26.3512 0 22C0 16.1652 2.31785 10.5695 6.44365 6.44365C10.5695 2.31785 16.1652 0 22 0V0Z"
                fill="#C99E66"
              />
              <path
                d="M27 18.4904L26.645 22.0104H23.945V31.9994H19.906V22.0104H18V18.4904H19.906V16.2054C19.8993 15.5895 20.0047 14.9776 20.217 14.3994C20.4461 13.7331 20.8709 13.1514 21.436 12.7304C22.1772 12.22 23.0638 11.9635 23.963 11.9994L26.956 12.0224V15.4504H24.783C24.5824 15.4434 24.386 15.5083 24.229 15.6334C24.127 15.7339 24.0484 15.8556 23.9986 15.9899C23.9489 16.1242 23.9292 16.2677 23.941 16.4104V18.4904H27Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/daho.uz/" target="_blank">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                fill="#C99E66"
              />
              <path
                d="M15.8343 32C15.1801 32.0052 14.5368 31.8324 13.9733 31.5C13.3828 31.1554 12.8894 30.6664 12.5393 30.0791C12.1839 29.4935 11.9974 28.821 12.0003 28.136V19.177H17.8003C17.3288 19.8377 17.024 20.6027 16.9121 21.4066C16.8001 22.2106 16.8843 23.0297 17.1573 23.794C17.5263 24.8552 18.2472 25.7582 19.2003 26.353C19.8225 26.7713 20.5324 27.0413 21.2753 27.142C21.5073 27.1738 21.7412 27.1895 21.9753 27.189C22.4799 27.1879 22.9817 27.1141 23.4653 26.97C24.1798 26.7602 24.8389 26.3948 25.3953 25.9C25.959 25.3979 26.3986 24.7718 26.6793 24.071C26.9951 23.3206 27.1287 22.5061 27.0693 21.694C26.9839 20.7877 26.6765 19.9164 26.1743 19.157H31.9743V28.139C31.9782 28.8225 31.796 29.4942 31.4473 30.0821C31.1024 30.6683 30.6098 31.154 30.0187 31.4905C29.4276 31.827 28.7585 32.0027 28.0783 32H15.8343ZM22.0003 26.011C21.3006 26.0174 20.6113 25.8413 20.0003 25.5C19.5525 25.2451 19.1597 24.9039 18.8446 24.4963C18.5294 24.0886 18.2981 23.6226 18.1641 23.125C18.0301 22.6274 17.9961 22.1083 18.0639 21.5975C18.1317 21.0867 18.3001 20.5944 18.5593 20.149C18.9061 19.5518 19.4028 19.0554 20.0003 18.709C20.6014 18.3549 21.2867 18.1694 21.9843 18.172C22.6786 18.1683 23.3607 18.3539 23.9573 18.709C24.5512 19.0578 25.0451 19.5537 25.3913 20.149C25.6521 20.5935 25.822 21.0852 25.8912 21.5958C25.9604 22.1064 25.9275 22.6256 25.7945 23.1234C25.6615 23.6211 25.4309 24.0875 25.1162 24.4955C24.8016 24.9035 24.409 25.245 23.9613 25.5C23.3638 25.8394 22.6875 26.0157 22.0003 26.011V26.011ZM21.9883 19.2C21.477 19.1967 20.9742 19.3307 20.5323 19.588C20.0956 19.8416 19.7321 20.204 19.4773 20.64C19.2228 21.0809 19.0888 21.581 19.0888 22.09C19.0888 22.5991 19.2228 23.0992 19.4773 23.54C19.734 23.9775 20.0968 24.3431 20.5323 24.603C20.9717 24.8677 21.4755 25.0061 21.9883 25.003C22.5001 25.0066 23.0034 24.8722 23.4453 24.614C23.8818 24.3616 24.2454 24.0001 24.5003 23.565C24.7556 23.1219 24.89 22.6195 24.89 22.108C24.89 21.5966 24.7556 21.0942 24.5003 20.651C24.2478 20.2105 23.884 19.8439 23.4453 19.588C23.0032 19.3306 22.5 19.1966 21.9883 19.2V19.2ZM31.9793 18.538H25.8303C25.77 18.541 25.7097 18.5301 25.6541 18.5064C25.5985 18.4827 25.549 18.4467 25.5093 18.401C24.8661 17.808 24.0858 17.3836 23.2383 17.166C22.4102 16.9534 21.5414 16.9575 20.7153 17.178C19.8695 17.4039 19.0908 17.8306 18.4453 18.422C18.4165 18.4554 18.3813 18.4826 18.3418 18.5022C18.3023 18.5218 18.2593 18.5333 18.2153 18.536H12.1383L12.0223 18.514V17.646C12.0223 17.679 12.0223 17.69 12.0153 17.693C12.0083 17.696 12.0003 17.283 12.0003 16.595C11.9975 16.2435 12.0128 15.892 12.0463 15.542C12.0833 14.9966 12.2402 14.466 12.5056 13.9881C12.7711 13.5101 13.1388 13.0967 13.5823 12.777L13.6743 12.754V16.937H14.4743V12.617C14.4638 12.5119 14.4807 12.4058 14.5233 12.309C14.6189 12.2378 14.7282 12.1871 14.8443 12.16L15.0503 12.114V16.937H15.8763V12.023H16.4003V16.937H17.2253V12H28.0783C28.7512 11.9966 29.4126 12.1741 29.9933 12.514C30.5745 12.8516 31.063 13.3278 31.4153 13.9C31.7697 14.462 31.9643 15.1098 31.9783 15.774C31.9933 16.141 32.0003 16.59 32.0003 17.146L31.9933 17.623C31.9853 18.17 31.9813 18.439 31.9793 18.54V18.538ZM28.4853 13.657C28.1443 13.657 27.7933 13.657 27.4123 13.669C27.3272 13.6641 27.2421 13.6779 27.163 13.7095C27.0838 13.7412 27.0126 13.7898 26.9543 13.852C26.8427 13.9864 26.7852 14.1576 26.7933 14.332V16.432C26.7889 16.5176 26.8019 16.6032 26.8315 16.6836C26.861 16.7641 26.9066 16.8377 26.9653 16.9C27.0244 16.9573 27.0945 17.0021 27.1713 17.0317C27.2481 17.0612 27.3301 17.075 27.4123 17.072H29.5233C29.6093 17.0793 29.6958 17.0677 29.7769 17.0382C29.8579 17.0086 29.9316 16.9617 29.9927 16.9008C30.0538 16.8399 30.1009 16.7664 30.1307 16.6855C30.1605 16.6045 30.1723 16.518 30.1653 16.432V14.309C30.1699 14.2233 30.157 14.1375 30.1275 14.0569C30.0979 13.9763 30.0523 13.9025 29.9933 13.84C29.9343 13.7827 29.8642 13.738 29.7874 13.7086C29.7106 13.6792 29.6285 13.6658 29.5463 13.669C29.1733 13.661 28.8263 13.657 28.4853 13.657Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://t.me/dahotashkent" target="_blank">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                fill="#C99E66"
              />
              <path
                d="M19.2764 30.3439L19.6182 25.1807L28.9926 16.7339C29.4076 16.3556 28.9071 16.1725 28.3578 16.502L16.7863 23.8136L11.7818 22.2268C10.7076 21.9216 10.6954 21.177 12.0259 20.6399L31.5193 13.1209C32.4103 12.7181 33.2647 13.3406 32.923 14.7077L29.6029 30.3439C29.371 31.4547 28.6996 31.7232 27.7719 31.2105L22.7186 27.4754L20.2895 29.8312C20.0088 30.112 19.7769 30.3439 19.2764 30.3439V30.3439Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="http://twitter.com/dahotashkent" target="_blank">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                fill="#C99E66"
              />
              <path
                d="M35 14.3631C34.3037 15.3866 33.4348 16.2812 32.432 17.0071V17.6541C32.424 19.3845 32.1049 21.0995 31.49 22.7171C30.8423 24.4109 29.8937 25.9737 28.69 27.3301C27.4174 28.7586 25.8628 29.9081 24.124 30.7061C22.1577 31.5778 20.0278 32.019 17.877 32.0001C16.4669 32.0024 15.0638 31.8034 13.71 31.4091C12.4006 31.0357 11.1513 30.477 10 29.7501C10.4 29.7874 10.809 29.8061 11.227 29.8061C12.3839 29.8103 13.5332 29.62 14.627 29.2431C15.6932 28.8778 16.6949 28.3462 17.595 27.6681C16.5232 27.6414 15.4861 27.2826 14.627 26.6411C13.7745 26.027 13.1432 25.154 12.827 24.1521C13.1378 24.2088 13.4531 24.2369 13.769 24.2361C14.2213 24.2365 14.6719 24.1797 15.11 24.0671C14.3502 23.9145 13.6351 23.5908 13.0191 23.1205C12.4031 22.6503 11.9024 22.0458 11.555 21.3531C11.2057 20.6584 11.0161 19.8944 11 19.1171V19.0321C11.7129 19.4418 12.5179 19.6644 13.34 19.6791C12.6441 19.2192 12.0708 18.5966 11.67 17.8651C11.2621 17.1295 11.0506 16.3012 11.056 15.4601C11.0532 14.5699 11.2898 13.6954 11.741 12.9281C13.0198 14.4725 14.6035 15.7365 16.393 16.6411C18.2291 17.5764 20.242 18.1135 22.3 18.2171C22.2235 17.8375 22.1853 17.4512 22.186 17.0641C22.1783 16.1733 22.4153 15.2975 22.871 14.5321C23.3241 13.7664 23.9681 13.1314 24.74 12.6891C25.5142 12.2338 26.3969 11.9957 27.295 12.0001C28.0018 11.9968 28.7016 12.1405 29.35 12.4221C29.9859 12.6951 30.5587 13.0961 31.033 13.6001C32.1811 13.3809 33.2823 12.9634 34.287 12.3661C34.1025 12.9555 33.8072 13.5043 33.417 13.9831C33.0295 14.461 32.5611 14.8672 32.033 15.1831C33.0568 15.0565 34.0565 14.7802 35 14.3631V14.3631Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/daho-tashkent-393b1b254/"
            target="_blank"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                fill="#C99E66"
              />
              <path
                d="M28.0417 13H16.9583C14.7725 13 13 14.7725 13 16.9583V28.0417C13 30.2275 14.7725 32 16.9583 32H28.0417C30.2283 32 32 30.2275 32 28.0417V16.9583C32 14.7725 30.2283 13 28.0417 13ZM19.3333 28.0417H16.9583V19.3333H19.3333V28.0417ZM18.1458 18.3295C17.3811 18.3295 16.7604 17.7041 16.7604 16.933C16.7604 16.1619 17.3811 15.5365 18.1458 15.5365C18.9106 15.5365 19.5312 16.1619 19.5312 16.933C19.5312 17.7041 18.9114 18.3295 18.1458 18.3295ZM28.8333 28.0417H26.4583V23.6052C26.4583 20.9388 23.2917 21.1407 23.2917 23.6052V28.0417H20.9167V19.3333H23.2917V20.7306C24.3968 18.6834 28.8333 18.5322 28.8333 22.6908V28.0417Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
