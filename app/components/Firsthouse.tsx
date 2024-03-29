import Image from "next/image";
import woodenhut from "@/public/wooden-hut.png";
import { GrMapLocation } from "react-icons/gr";
const Firsthouse = () => {
  return (
    <div className="mt-[73px] flex flex-col">
      <Image src={woodenhut} width={340} height={235} alt="woden hut" />

      <h1 className="text-[15px] font-semibold  text-[#0D2D3A]">
        Wooden hut{" "}
        <span className="ml-[131px] text-[12px] text-[#1E1E1EBD]">
          Rp. 249.000 / Night
        </span>
        <div className="flex items-center text-[#0983B5]">
          <GrMapLocation className="mr-[3px] font-poppins" size="15px" />
          <h2>Merbabu, Central Java</h2>
        </div>
        <div className="flex  items-center font-popins text-[#0D2D3AB0] text-[13px] mt-[9px]">
          <svg
            className="mr-[5px]"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.625 2.14286C5.625 1.57454 5.82254 1.02949 6.17418 0.627628C6.52581 0.225765 7.00272 0 7.5 0C7.99728 0 8.47419 0.225765 8.82582 0.627628C9.17746 1.02949 9.375 1.57454 9.375 2.14286V2.98929C12.0863 3.91071 14.0625 6.78107 14.0625 10.1786C14.0625 10.3207 14.0131 10.4569 13.9252 10.5574C13.8373 10.6578 13.7181 10.7143 13.5938 10.7143H1.40625C1.28193 10.7143 1.1627 10.6578 1.07479 10.5574C0.986886 10.4569 0.9375 10.3207 0.9375 10.1786C0.937589 8.56323 1.39381 6.99106 2.23835 5.69579C3.08288 4.40051 4.27063 3.4513 5.625 2.98929V2.14286ZM7.96875 5.89286C8.36438 5.89286 8.75625 5.89714 9.1575 6.06214C9.54469 6.22071 9.97312 6.54536 10.3912 7.26214C10.4254 7.32067 10.4693 7.37094 10.5205 7.41008C10.5717 7.44921 10.6291 7.47645 10.6894 7.49023C10.7498 7.50401 10.812 7.50406 10.8724 7.49039C10.9327 7.47671 10.9902 7.44958 11.0414 7.41054C11.0926 7.37149 11.1366 7.3213 11.1708 7.26283C11.2051 7.20436 11.2289 7.13875 11.241 7.06975C11.253 7.00075 11.2531 6.92972 11.2411 6.8607C11.2292 6.79168 11.2054 6.72603 11.1713 6.6675C10.6509 5.77607 10.065 5.29607 9.47437 5.05393C8.91094 4.82143 8.37188 4.82143 7.9875 4.82143H7.96875C7.84443 4.82143 7.7252 4.87787 7.63729 4.97834C7.54939 5.0788 7.5 5.21506 7.5 5.35714C7.5 5.49922 7.54939 5.63548 7.63729 5.73595C7.7252 5.83642 7.84443 5.89286 7.96875 5.89286ZM1.40625 11.7857C1.03329 11.7857 0.675604 11.955 0.411881 12.2564C0.148158 12.5578 0 12.9666 0 13.3929C0 13.8191 0.148158 14.2279 0.411881 14.5293C0.675604 14.8307 1.03329 15 1.40625 15H13.5938C13.9667 15 14.3244 14.8307 14.5881 14.5293C14.8518 14.2279 15 13.8191 15 13.3929C15 12.9666 14.8518 12.5578 14.5881 12.2564C14.3244 11.955 13.9667 11.7857 13.5938 11.7857H1.40625Z"
              fill="#0D2D3A"
              fill-opacity="0.81"
            />
          </svg>{" "}
          <h4>All Inclusive</h4>{" "}
          <svg
            className="ml-[10px]"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9545 14.2366C12.9545 14.439 12.8827 14.6332 12.7548 14.7764C12.627 14.9196 12.4536 15 12.2727 15H2.72727C2.54644 15 2.37302 14.9196 2.24515 14.7764C2.11729 14.6332 2.04545 14.439 2.04545 14.2366V7.36577H0L7.04114 0.198763C7.16667 0.0708726 7.33028 0 7.5 0C7.66972 0 7.83333 0.0708726 7.95886 0.198763L15 7.36577H12.9545V14.2366ZM4.09091 7.36577V8.89262C4.5386 8.89262 4.9819 8.99135 5.39551 9.18318C5.80912 9.37501 6.18494 9.65617 6.5015 10.0106C6.81806 10.3651 7.06918 10.7859 7.2405 11.249C7.41182 11.7121 7.5 12.2085 7.5 12.7097H8.86364C8.86364 11.2924 8.3608 9.93317 7.46574 8.93098C6.57068 7.9288 5.35672 7.36577 4.09091 7.36577ZM4.09091 10.4195V12.7097H6.13636C6.13636 12.1023 5.92086 11.5198 5.53726 11.0903C5.15367 10.6608 4.6334 10.4195 4.09091 10.4195Z"
              fill="#0D2D3A"
              fill-opacity="0.81"
            />
          </svg>
          <h4 className="text-[13px] ml-[5px]">Free WiFi</h4>
          <svg
            className="ml-[10px]"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.4C0 14.7319 0.268125 15 0.6 15H14.4C14.7319 15 15 14.7319 15 14.4V6.525H0V14.4ZM14.4 1.35H11.25V0.15C11.25 0.0675 11.1825 0 11.1 0H10.05C9.9675 0 9.9 0.0675 9.9 0.15V1.35H5.1V0.15C5.1 0.0675 5.0325 0 4.95 0H3.9C3.8175 0 3.75 0.0675 3.75 0.15V1.35H0.6C0.268125 1.35 0 1.61813 0 1.95V5.25H15V1.95C15 1.61813 14.7319 1.35 14.4 1.35Z"
              fill="#0D2D3A"
              fill-opacity="0.81"
            />
          </svg>
          <h4 className="text-[13px] ml-[5px]">Free Consultation</h4>
        </div>
      </h1>
    </div>
  );
};

export default Firsthouse;
