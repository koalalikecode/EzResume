import ResumeThumbnail from "@/components/shared/ResumeThumbnail";
import Image from "next/image";
import heartIcon from "@/icon/heart.svg";
import AuthenContainer from "@/components/home/AuthenContainer";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <>
      <header className="max-w-7xl mx-auto px-8 py-5 flex items-center">
        <p className="font-bold text-xl">EzResume</p>
        <div className="w-full flex items-center pl-12 md:pl-24 gap-4 md:gap-12">
          <a className="link link-hover" href="#pricing">
            Pricing
          </a>
          <a className="link link-hover hidden sm:inline" href="#demo">
            Demo
          </a>
          <a className="link link-hover" href="#testimonials">
            Wall of love
          </a>
        </div>
        <AuthenContainer user={data.user} />
      </header>
      <main className="min-h-main">
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
          <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
            <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
              <a
                href="https://github.com/koalalikecode/EzResume"
                target="_blank"
                className="btn btn-neutral md:btn-sm tracking-normal mb-4"
              >
                Star me on Github {">"}
              </a>
              <span className="relative">Build your resume</span>
              <span className="whitespace-nowrap relative ">
                <span className="mr-3 sm:mr-4 md:mr-5">in minutes,</span>
                <span className=" relative whitespace-nowrap">
                  <span className="absolute bg-accent -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                  <span className="relative text-accent-content">
                    not hours
                  </span>
                </span>
              </span>
            </h1>
            <p className="text-lg opacity-80 leading-relaxed">
              The resume builder tool with all you need to create professional
              resumes that will get you to be hired $.
            </p>
            <Link href={"/dashboard"} className="space-y-4">
              <button
                className="btn btn-primary group btn-wide plausible-event-name=Checkout"
                title="Go to your dashboard"
              >
                Get your resume
              </button>
            </Link>
          </div>
          <div className="relative max-md:-m-4 max-w-xl lg:w-full">
            <div className="absolute left-0 top-10">
              <ResumeThumbnail className="w-[255px] min-w-[255px] h-[360px] bg-error" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-5">
              <ResumeThumbnail className="w-[255px] min-w-[255px] h-[360px] bg-neutral" />
            </div>
            <div className="absolute right-0 top-0">
              <ResumeThumbnail className="w-[255px] min-w-[255px] h-[360px] bg-secondary" />
            </div>
          </div>
        </section>
      </main>
      <footer className="">
        <p className="flex gap-1 justify-center mb-4">
          {" "}
          Make with
          <Image src={heartIcon} alt="love" width={20} height={20} /> by
          <a
            href="https://github.com/koalalikecode"
            target="_blank"
            className="link link-hover link-accent"
          >
            koalalikecode
          </a>
        </p>
      </footer>
    </>
  );
}
