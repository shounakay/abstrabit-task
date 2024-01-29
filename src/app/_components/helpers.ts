import utkarsh from "../../../public/utkarsh.png";
import checkUtkarsh from "../../../public/check-utkarsh.svg";
import bajaj from "@/../public/bajaj.png";
import checkBajaj from "@/../public/check-bajaj.svg";
import mahindra from "@/../public/mahindra.png";
import checkMahindra from "@/../public/check-mahindra.svg";
import shriram from "@/../public/shriram.png";
import checkShriram from "@/../public/check-shriram.svg";

export const BANK_INFO = [
  {
    bankName: "Utkarsh Small Finance Bank",
    checkList: ["Highest Interest Rate", "RBI Insured"],
    interest: "9.10% p.a",
    bgColor: "bg-magnolia-50",
    primaryBg: "bg-pigment-indigo-900",
    secondaryBg: "bg-[#efddff]",
    logo: utkarsh,
    checkImg: checkUtkarsh,
  },
  {
    bankName: "Bajaj Finserve",
    checkList: ["Crisil AAA Rated", "No Video KYC required"],
    interest: "8.80% p.a",
    bgColor: "bg-[#EFF6FF]",
    primaryBg: "bg-[#0072BB]",
    secondaryBg: "bg-[#7ccdfd]",
    logo: bajaj,
    checkImg: checkBajaj,
  },
  {
    bankName: "Shriram Finance",
    checkList: ["Crisil AAA Rated", "No Video KYC required"],
    interest: "8.80% p.a",
    bgColor: "bg-[#F4F4F4]",
    primaryBg: "bg-[#010101]",
    secondaryBg: "bg-[#b7bbc2]",
    logo: shriram,
    checkImg: checkShriram,
  },
  {
    bankName: "Mahindra Finance",
    checkList: ["Crisil AAA Rated", "No Video KYC required"],
    interest: "8.80% p.a",
    bgColor: "bg-[#FFEFEF]",
    primaryBg: "bg-[#FF0000]",
    secondaryBg: "bg-[#ffc0c0]",
    logo: mahindra,
    checkImg: checkMahindra,
  },
];

export const INFO_CARDS = [
  {
    fdPlan: "Utkarsh SF Bank FD Plan 2",
    depositAmt: "Rs. 20,000",
    tennure: "2 Years",
    interestRate: "9.10%",
    cardName: "Video KYC",
    calendarName: "Scheduled on",
    date: "28 Oct, 2023",
    btnPrimary: "Complete Now",
    secondaryBtn: "Reschedule",
  },
  {
    fdPlan: "Bajaj Finserver Corp FD 1",
    depositAmt: "Rs. 25,000",
    tennure: "18 Months",
    interestRate: "8.10%",
    cardName: "Pending Payment",
    calendarName: "Pay By",
    date: "30 Oct, 2023",
    btnPrimary: "Pay Now",
    secondaryBtn: "Cancel Application",
  },
  {
    fdPlan: "Shriram Finance Corp FD 1",
    depositAmt: "Rs. 25,000",
    tennure: "18 Months",
    interestRate: "8.10%",
    cardName: "Upcoming FD Maturity",
    calendarName: "Renew by",
    date: "30 Oct, 2023",
    btnPrimary: "Renew Now",
    secondaryBtn: "Compare other FDs",
  },
];
