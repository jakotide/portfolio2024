import React, { useEffect } from "react";
import styles from "./heroheader.module.scss";
import { motion, useAnimation } from "framer-motion";
import { opacityRevealThree } from "./anim";

export const HeroHeader = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <motion.h1
      className={styles.hero__header}
      variants={opacityRevealThree}
      initial="initial"
      animate={controls}
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 958 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.664 65.632C29.664 70.4107 29.3653 74.5493 28.768 78.048C28.256 81.4613 27.3173 84.2773 25.952 86.496C24.672 88.7147 22.9227 90.3787 20.704 91.488C18.4853 92.512 15.7547 93.024 12.512 93.024C9.78133 93.024 7.60533 92.4267 5.984 91.232C4.448 89.952 3.25333 88.3307 2.4 86.368C1.54667 84.32 0.992 82.1013 0.736 79.712C0.565333 77.3227 0.48 74.976 0.48 72.672V63.968H1.632V72.672C1.632 77.7067 2.10133 81.5467 3.04 84.192C3.97867 86.8373 5.04533 88.7573 6.24 89.952C7.52 91.0613 8.75733 91.7013 9.952 91.872C11.232 91.9573 12.1707 92 12.768 92C15.4987 92 17.376 89.8667 18.4 85.6C19.424 81.248 19.936 74.592 19.936 65.632V2.91199C15.1573 3.08266 11.0187 3.76533 7.52 4.96C4.10667 6.06933 1.76 8.37333 0.48 11.872V1.632H29.664V65.632ZM86.349 57.312C80.8877 57.824 76.4077 58.976 72.909 60.768C69.4103 62.4747 66.509 64.5227 64.205 66.912C61.9863 69.216 60.237 71.7333 58.957 74.464C57.677 77.1093 56.525 79.584 55.501 81.888C54.9037 83.5093 54.2637 85.0027 53.581 86.368C52.9837 87.7333 52.301 88.8853 51.533 89.824C50.765 90.7627 49.869 91.488 48.845 92C47.821 92.5973 46.5837 92.8533 45.133 92.768C44.7063 92.6827 44.365 92.5973 44.109 92.512C43.853 92.512 43.5117 92.2987 43.085 91.872C39.5863 90.336 38.1783 86.624 38.861 80.736C39.2023 77.92 39.7997 74.7627 40.653 71.264C41.5917 67.68 42.829 63.84 44.365 59.744C46.0717 55.136 48.0343 50.3147 50.253 45.28C52.4717 40.16 54.8183 35.0827 57.293 30.048C59.7677 24.928 62.285 19.936 64.845 15.072C67.405 10.208 69.9223 5.72799 72.397 1.632H73.293L111.565 92H100.813L86.349 57.312ZM67.149 12.64C65.1863 16.3947 63.181 20.2773 61.133 24.288C59.1703 28.2987 57.2077 32.352 55.245 36.448C53.3677 40.4587 51.5757 44.4693 49.869 48.48C48.1623 52.4907 46.6263 56.3307 45.261 60C43.725 64.096 42.4877 67.8933 41.549 71.392C40.6957 74.8907 40.0983 78.0053 39.757 80.736C39.5863 83.3813 39.757 85.6427 40.269 87.52C40.8663 89.312 41.933 90.464 43.469 90.976C43.8957 91.1467 44.1943 91.2747 44.365 91.36C44.621 91.36 44.9197 91.4453 45.261 91.616C47.821 91.7867 49.741 90.9333 51.021 89.056C52.301 87.0933 53.453 84.6187 54.477 81.632C55.501 79.2427 56.6957 76.6827 58.061 73.952C59.4263 71.2213 61.2183 68.6613 63.437 66.272C65.741 63.7973 68.685 61.664 72.269 59.872C75.853 58.08 80.4183 56.928 85.965 56.416L67.149 12.64ZM150.816 42.848C148.853 42.848 147.104 43.232 145.568 44C144.117 44.6827 142.837 45.4933 141.728 46.432C140.704 47.3707 139.851 48.3947 139.168 49.504C138.485 50.528 138.016 51.3387 137.76 51.936C135.371 57.3973 133.493 63.328 132.128 69.728C130.848 76.128 130.208 83.552 130.208 92H120.48V1.632H130.208V75.616C130.976 69.728 132.128 64.352 133.664 59.488C135.2 54.624 137.077 50.0587 139.296 45.792C141.6 41.5253 144.16 37.4293 146.976 33.504C149.877 29.5787 153.035 25.6107 156.448 21.6C158.837 18.6987 160.757 15.968 162.208 13.408C162.805 12.2987 163.317 11.1893 163.744 10.08C164.256 8.97066 164.597 7.90399 164.768 6.88C164.939 5.77066 164.896 4.78933 164.64 3.936C164.384 2.99733 163.829 2.22933 162.976 1.632H184.224C182.005 2.05866 179.744 2.95466 177.44 4.31999C175.221 5.6 173.173 6.92266 171.296 8.28799C169.504 9.65333 168.011 10.8907 166.816 12C165.621 13.024 164.981 13.536 164.896 13.536C159.861 19.2533 155.296 24.672 151.2 29.792C147.104 34.912 143.52 40.3733 140.448 46.176C141.557 45.0667 142.965 44.0853 144.672 43.232C146.379 42.2933 148.427 41.824 150.816 41.824C155.253 41.824 158.965 42.6773 161.952 44.384C164.939 46.0053 167.456 48.1813 169.504 50.912C171.552 53.5573 173.301 56.5867 174.752 60C176.288 63.328 177.781 66.656 179.232 69.984C180.512 72.8 181.749 75.488 182.944 78.048C184.224 80.608 185.547 82.8693 186.912 84.832C188.363 86.7093 189.941 88.2027 191.648 89.312C193.44 90.4213 195.445 90.976 197.664 90.976V92C191.861 92 187.125 91.3173 183.456 89.952C179.787 88.5013 176.885 86.624 174.752 84.32C172.619 82.016 171.04 79.4133 170.016 76.512C168.992 73.5253 168.181 70.496 167.584 67.424C167.072 64.352 166.56 61.3653 166.048 58.464C165.621 55.4773 164.853 52.832 163.744 50.528C162.72 48.224 161.227 46.3893 159.264 45.024C157.301 43.5733 154.485 42.848 150.816 42.848ZM221.147 2.91199C227.12 1.20533 233.051 0.82133 238.939 1.75999C244.912 2.61333 250.374 4.53333 255.323 7.52C260.358 10.4213 264.71 14.2613 268.379 19.04C272.134 23.8187 274.779 29.2373 276.315 35.296C278.022 41.2693 278.448 47.2427 277.595 53.216C276.742 59.104 274.864 64.608 271.963 69.728C269.062 74.7627 265.222 79.1573 260.443 82.912C255.75 86.5813 250.374 89.2267 244.315 90.848C238.256 92.5547 232.283 92.9813 226.395 92.128C220.507 91.2747 215.046 89.3973 210.011 86.496C205.062 83.5947 200.71 79.7547 196.955 74.976C193.2 70.1973 190.512 64.736 188.891 58.592C187.27 52.5333 186.886 46.5173 187.739 40.544C188.678 34.5707 190.598 29.0667 193.499 24.032C196.486 18.9973 200.326 14.6453 205.019 10.976C209.712 7.22133 215.088 4.53333 221.147 2.91199ZM221.275 3.936C215.814 5.38667 211.334 7.98933 207.835 11.744C204.422 15.4133 201.862 19.7227 200.155 24.672C198.448 29.6213 197.552 34.8693 197.467 40.416C197.382 45.8773 197.979 51.04 199.259 55.904C200.539 60.768 202.587 65.5467 205.403 70.24C208.219 74.9333 211.59 78.9867 215.515 82.4C219.44 85.728 223.835 88.2027 228.699 89.824C233.563 91.36 238.683 91.4027 244.059 89.952C249.52 88.5867 254 86.0267 257.499 82.272C260.998 78.432 263.6 74.0373 265.307 69.088C267.099 64.1387 268.038 58.9333 268.123 53.472C268.294 47.9253 267.739 42.72 266.459 37.856C265.179 32.9067 263.131 28.0853 260.315 23.392C257.499 18.6987 254.086 14.6453 250.075 11.232C246.15 7.81866 241.712 5.38667 236.763 3.936C231.899 2.4 226.736 2.4 221.275 3.936ZM324.993 42.208C329.004 42.464 332.673 43.0613 336.001 44C339.414 44.9387 342.316 46.3467 344.705 48.224C347.18 50.1013 349.1 52.576 350.465 55.648C351.83 58.6347 352.513 62.3893 352.513 66.912C352.513 72.032 351.617 76.2133 349.825 79.456C348.033 82.6987 345.558 85.2587 342.401 87.136C339.244 89.0133 335.532 90.2933 331.265 90.976C326.998 91.6587 322.39 92 317.441 92H287.105V1.632H309.249C314.028 1.632 318.508 2.016 322.689 2.784C326.956 3.552 330.625 4.74666 333.697 6.368C336.854 7.98933 339.329 10.1227 341.121 12.768C342.913 15.328 343.809 18.4427 343.809 22.112C343.809 25.0133 343.297 27.5733 342.273 29.792C341.334 32.0107 340.012 33.9733 338.305 35.68C336.598 37.3013 334.593 38.6667 332.289 39.776C329.985 40.8853 327.553 41.696 324.993 42.208ZM342.529 66.912C342.529 61.1947 341.718 56.7147 340.097 53.472C338.561 50.2293 336.556 47.84 334.081 46.304C331.692 44.6827 329.004 43.7013 326.017 43.36C323.116 43.0187 320.257 42.848 317.441 42.848C314.454 42.848 311.596 42.0373 308.865 40.416C306.22 38.7947 303.958 36.4907 302.081 33.504C300.886 31.7973 299.905 29.8773 299.137 27.744C298.369 25.5253 297.729 23.1787 297.217 20.704V90.976H316.417C319.318 90.976 322.305 90.8053 325.377 90.464C328.449 90.1227 331.265 89.184 333.825 87.648C336.385 86.0267 338.476 83.6373 340.097 80.48C341.718 77.2373 342.529 72.7147 342.529 66.912ZM333.825 22.112C333.825 18.4427 333.1 15.3707 331.649 12.896C330.284 10.4213 328.449 8.416 326.145 6.88C323.841 5.344 321.196 4.23466 318.209 3.55199C315.308 2.86933 312.321 2.52799 309.249 2.52799H297.217V10.976C297.217 15.4133 297.729 19.5093 298.753 23.264C299.777 26.9333 301.228 30.1333 303.105 32.864C304.897 35.7653 306.988 37.984 309.377 39.52C311.852 41.056 314.54 41.824 317.441 41.824C319.574 41.824 321.622 41.4827 323.585 40.8C325.548 40.032 327.297 38.8373 328.833 37.216C330.369 35.5947 331.564 33.5467 332.417 31.072C333.356 28.5973 333.825 25.6107 333.825 22.112ZM427.694 2.52799C424.281 2.52799 421.166 2.65599 418.35 2.91199C415.534 3.08266 412.889 3.46666 410.414 4.064C408.025 4.66133 405.763 5.55733 403.63 6.752C401.497 7.86133 399.363 9.43999 397.23 11.488V1.504H468.014V11.488C465.795 9.43999 463.619 7.86133 461.486 6.752C459.353 5.55733 457.049 4.66133 454.574 4.064C452.185 3.46666 449.582 3.08266 446.766 2.91199C444.035 2.65599 440.963 2.52799 437.55 2.52799V92H427.694V2.52799ZM476.98 1.632H486.58V92H476.98V1.632ZM524.664 92H495.48V1.632H524.664C530.808 1.632 536.568 2.82666 541.944 5.216C547.405 7.52 552.141 10.72 556.152 14.816C560.248 18.912 563.491 23.7333 565.88 29.28C568.269 34.7413 569.464 40.6293 569.464 46.944C569.464 53.2587 568.269 59.1467 565.88 64.608C563.491 70.0693 560.248 74.848 556.152 78.944C552.141 82.9547 547.405 86.1547 541.944 88.544C536.568 90.848 530.808 92 524.664 92ZM505.464 90.976H524.664C529.528 90.976 534.093 89.824 538.36 87.52C542.712 85.216 546.467 82.1013 549.624 78.176C552.867 74.1653 555.384 69.5147 557.176 64.224C559.053 58.848 559.992 53.088 559.992 46.944C559.992 40.8 559.053 35.04 557.176 29.664C555.384 24.288 552.867 19.5947 549.624 15.584C546.467 11.5733 542.712 8.416 538.36 6.112C534.093 3.72266 529.528 2.52799 524.664 2.52799H505.464V90.976ZM588.336 90.976H609.968C615.6 90.976 620.165 89.6107 623.664 86.88C627.163 84.1493 630.064 79.5413 632.368 73.056L629.424 92H578.48V1.632H630.192V11.872C627.888 9.73866 625.669 8.032 623.536 6.752C621.488 5.472 619.269 4.53333 616.88 3.936C614.576 3.33866 611.973 2.95466 609.072 2.784C606.171 2.61333 602.757 2.52799 598.832 2.52799H588.336V23.264C588.336 27.616 588.891 31.2 590 34.016C591.109 36.7467 592.773 38.88 594.992 40.416C597.211 41.952 599.984 43.0187 603.312 43.616C606.64 44.128 610.48 44.384 614.832 44.384V54.496C612.955 52.3627 610.693 50.6987 608.048 49.504C605.403 48.3093 602.757 47.0293 600.112 45.664C597.552 44.2133 595.163 42.464 592.944 40.416C590.811 38.368 589.275 35.4667 588.336 31.712V90.976ZM718.923 1.632V92H709.195V4.70399C704.928 6.496 701.259 9.35467 698.187 13.28C695.2 17.2053 692.683 21.7707 690.635 26.976C688.587 32.096 686.966 37.6427 685.771 43.616C684.576 49.5893 683.638 55.52 682.955 61.408C682.358 67.296 681.974 72.8853 681.803 78.176C681.632 83.4667 681.547 88.0747 681.547 92H680.267L645.707 12.384L642.123 3.936V92H641.355V1.632H651.979L681.163 69.088C681.59 64.224 682.187 59.1893 682.955 53.984C683.723 48.6933 684.747 43.5733 686.027 38.624C687.307 33.5893 688.886 28.8533 690.763 24.416C692.64 19.8933 694.902 15.968 697.547 12.64C700.278 9.22666 703.392 6.53866 706.891 4.576C710.39 2.61333 714.4 1.632 718.923 1.632ZM775.599 57.312C770.138 57.824 765.658 58.976 762.159 60.768C758.66 62.4747 755.759 64.5227 753.455 66.912C751.236 69.216 749.487 71.7333 748.207 74.464C746.927 77.1093 745.775 79.584 744.751 81.888C744.154 83.5093 743.514 85.0027 742.831 86.368C742.234 87.7333 741.551 88.8853 740.783 89.824C740.015 90.7627 739.119 91.488 738.095 92C737.071 92.5973 735.834 92.8533 734.383 92.768C733.956 92.6827 733.615 92.5973 733.359 92.512C733.103 92.512 732.762 92.2987 732.335 91.872C728.836 90.336 727.428 86.624 728.111 80.736C728.452 77.92 729.05 74.7627 729.903 71.264C730.842 67.68 732.079 63.84 733.615 59.744C735.322 55.136 737.284 50.3147 739.503 45.28C741.722 40.16 744.068 35.0827 746.543 30.048C749.018 24.928 751.535 19.936 754.095 15.072C756.655 10.208 759.172 5.72799 761.647 1.632H762.543L800.815 92H790.063L775.599 57.312ZM756.399 12.64C754.436 16.3947 752.431 20.2773 750.383 24.288C748.42 28.2987 746.458 32.352 744.495 36.448C742.618 40.4587 740.826 44.4693 739.119 48.48C737.412 52.4907 735.876 56.3307 734.511 60C732.975 64.096 731.738 67.8933 730.799 71.392C729.946 74.8907 729.348 78.0053 729.007 80.736C728.836 83.3813 729.007 85.6427 729.519 87.52C730.116 89.312 731.183 90.464 732.719 90.976C733.146 91.1467 733.444 91.2747 733.615 91.36C733.871 91.36 734.17 91.4453 734.511 91.616C737.071 91.7867 738.991 90.9333 740.271 89.056C741.551 87.0933 742.703 84.6187 743.727 81.632C744.751 79.2427 745.946 76.6827 747.311 73.952C748.676 71.2213 750.468 68.6613 752.687 66.272C754.991 63.7973 757.935 61.664 761.519 59.872C765.103 58.08 769.668 56.928 775.215 56.416L756.399 12.64ZM819.33 1.632C822.829 1.632 826.114 2.272 829.186 3.55199C832.343 4.74666 835.245 6.49599 837.89 8.8C840.621 11.0187 843.095 13.7067 845.314 16.864C847.618 19.936 849.709 23.3067 851.586 26.976C855.426 33.9733 858.413 41.696 860.546 50.144C862.765 58.5067 864.343 66.8267 865.282 75.104V1.632H874.882V92H865.282C865.282 86.88 864.983 81.5467 864.386 76C863.789 70.368 862.893 64.736 861.698 59.104C860.503 53.472 859.01 47.968 857.218 42.592C855.511 37.1307 853.463 32.096 851.074 27.488C849.111 23.8187 847.021 20.4907 844.802 17.504C842.583 14.432 840.151 11.7867 837.506 9.56799C834.861 7.34933 832.002 5.64266 828.93 4.448C825.943 3.16799 822.743 2.52799 819.33 2.52799V92H809.73V1.632H819.33ZM913.039 92H883.855V1.632H913.039C919.183 1.632 924.943 2.82666 930.319 5.216C935.78 7.52 940.516 10.72 944.527 14.816C948.623 18.912 951.866 23.7333 954.255 29.28C956.644 34.7413 957.839 40.6293 957.839 46.944C957.839 53.2587 956.644 59.1467 954.255 64.608C951.866 70.0693 948.623 74.848 944.527 78.944C940.516 82.9547 935.78 86.1547 930.319 88.544C924.943 90.848 919.183 92 913.039 92ZM893.839 90.976H913.039C917.903 90.976 922.468 89.824 926.735 87.52C931.087 85.216 934.842 82.1013 937.999 78.176C941.242 74.1653 943.759 69.5147 945.551 64.224C947.428 58.848 948.367 53.088 948.367 46.944C948.367 40.8 947.428 35.04 945.551 29.664C943.759 24.288 941.242 19.5947 937.999 15.584C934.842 11.5733 931.087 8.416 926.735 6.112C922.468 3.72266 917.903 2.52799 913.039 2.52799H893.839V90.976Z"
          fill="#171717"
        />
      </svg>
    </motion.h1>
  );
};
