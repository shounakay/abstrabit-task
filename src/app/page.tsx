import { Portfolio } from "./_components/Portfolio";
import { BANK_INFO, INFO_CARDS } from "./_components/helpers";
import { BankCard } from "./_components/BankCard";
import { Faq } from "./_components/Faq";
import { InfoCard } from "./_components/InfoCard";
import { MaturityTimeline } from "./_components/MaturityTimeline";

export default function Home() {
  return (
    <main className="flex min-h-full xl:items-start lg:items-center flex-col 2xl:px-36 xl:px-24 gap-5 py-8 bg-black-haze-50">
      <div className="md:self-center 2xl:self-start">
        <h5 className="text-neutral-800 font-2xl font-semibold">
          Welcome, Shounak Chavan
        </h5>
      </div>
      <div className="flex w-full justify-center 2xl:justify-normal items-center gap-7 flex-wrap">
        <Portfolio />
        <section className="2xl:w-[760px] xl:w-[700px] bg-white flex flex-col gap-3 rounded-md 2xl:px-7 px-2 xl:px-4 py-4 text-neutral-700 shadow-xl">
          <h5 className="font-semibold text-sm">FD Maturity Timeline</h5>
          <MaturityTimeline />
        </section>
      </div>
      <section className="flex w-full gap-6 flex-wrap">
        <div className="flex basis-full 2xl:basis-[860px] items-center 2xl:items-start flex-col gap-7">
          <div className="flex gap-10 flex-wrap justify-center">
            {BANK_INFO.map((bank) => (
              <BankCard {...bank} key={bank.bankName} />
            ))}
          </div>
          <Faq />
        </div>
        <div className="flex flex-col items-center xl:items-start basis-[600px]  xl:basis-[200px]">
          {INFO_CARDS.map((info) => (
            <InfoCard key={info.cardName} {...info} />
          ))}
        </div>
      </section>
    </main>
  );
}
