"use client";
import Image from "next/image";
import wolfLogo from "../../../public/company_images/wolf.png";
import twitch from "../../../public/company_images/twitch.png";
import logitech from "../../../public/company_images/logitech.png";
import intel from "../../../public/company_images/intel.png";
import ubisoft from "../../../public/company_images/ubisoft.png";
import windows from "../../../public/company_images/Windows.png";
import ps from "../../../public/company_images/ps.png";
import xbox from "../../../public/company_images/xbox.png";
import steam from "../../../public/company_images/steam.png";
import epic from "../../../public/company_images/spic.png";
import {
  FaFacebook,
  FaDiscord,
  FaXTwitter,
  FaReddit,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa6";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "../reveal/Reveal";

const navbarBtns = [
  {
    id: 1,
    label: "Creators",
    href: "/",
    items: [
      {
        title: "DESTOP APPS",
        info: [
          { info_name: "app creator", href: "/" },
          { info_name: "app document", href: "/" },
          { info_name: "supported game", href: "/" },
          { info_name: "author discord", href: "/" },
        ],
        icons: "",
      },
      {
        title: "MODS",
        info: [
          { info_name: "publish a mod", href: "/" },
          { info_name: "mod documentation", href: "/" },
          { info_name: "suggest a feature", href: "/" },
          { info_name: "dev discord", href: "/" },
        ],
        icons: "",
      },
      {
        title: "GAME SERVERS",
        info: [{ info_name: "Monetize your server", href: "/" }],
        icons: "",
      },
    ],
  },
  {
    id: 2,
    label: "Gamers",
    href: "/",
  },
  { id: 3, label: "Game Studios", href: "/" },
  { id: 4, label: "Advertisers", href: "/" },
  { id: 5, label: "Company", href: "/" },
  { id: 6, label: "Careers", href: "/" },
];

const playingAmount = [
  { amount: "1B", title: "Yearly Downloads" },
  { amount: "14M", title: "Monthly Active Users" },
  { amount: "178k", title: "In-Game creators" },
  { amount: "1,500+", title: "Game Supported" },
];

const advertisersSlice = [
  {
    id: 1,
    title: "PC Gamer",
    des: "the sims 4 partnering wit curseforge for official mode support",
    read: "read now",
  },
  {
    id: 2,
    title: "VentureBeat",
    des: "the sims 4 partnering wit curseforge for official mode support",
    read: "read now",
  },
  {
    id: 3,
    title: "Digiday",
    des: "the sims 4 partnering wit curseforge for official mode support",
    read: "read now",
  },
  {
    id: 4,
    title: "The Washington Post",
    des: "the sims 4 partnering wit curseforge for official mode support",
    read: "read now",
  },
  {
    id: 5,
    title: "Forbes",
    des: "the sims 4 partnering wit curseforge for official mode support",
    read: "read now",
  },
  {
    id: 6,
    title: "FastCompany",
    des: "the sims 4 partnering wit curseforge for official mode support",
    read: "read now",
  },
];
const DashBoard = () => {
  const ref = useRef<HTMLVideoElement>(null);

  const [slide, setSlide] = useState(0);
  const [animate, setAnimate] = useState(true);
  const VISIBLE = 4;
  const loopItems = [
    ...advertisersSlice,
    ...advertisersSlice.slice(0, VISIBLE),
  ];
  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => s + 1), 5000);
    return () => clearInterval(timer);
  }, [slide]);

  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true)),
    );
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    if (slide >= advertisersSlice.length) {
      setAnimate(false);
      setSlide(0);
    }
  };

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="h-full relative">
      <nav className="h-25 bg-[#171717] flex justify-between px-4 sticky top-0 z-50">
        <button
          className="flex items-center cursor-pointer"
          onClick={() => scrollTop()}
        >
          <Image
            src={wolfLogo}
            width={100}
            alt="wolf-logo"
            className="object-contain"
          />
          <span className="text-3xl font-heading tracking-wider font-semibold">
            Meanwolf
          </span>
        </button>
        <div className="flex gap-20 items-center">
          {navbarBtns.map((btn) => (
            <div
              key={btn.id}
              className="relative group h-full flex items-center"
            >
              <Link
                href={btn.href}
                className="relative text-taupe-300 font-body cursor-pointer transition-colors hover:text-gray-200
              after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-red-400
              after:origin-left after:scale-x-0 after:transition-transform after:duration-300
              hover:after:scale-x-100 flex gap-2 tracking-wider items-center"
              >
                {btn.label}
                {btn.items && (
                  <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                )}
              </Link>
              {btn.items && (
                <div
                  className="absolute top-full left-0 z-50 flex gap-12 w-max bg-[#171717] border border-white/10 p-6
                invisible opacity-0 translate-y-2 transition-all duration-200
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
                >
                  {btn.items.map((i) => (
                    <div key={i.title} className="flex flex-col gap-3 min-w-40">
                      <p className="font-heading font-semibold text-white tracking-wider">
                        {i.title}
                      </p>
                      {i.info?.map((i) => (
                        <Link
                          key={i.info_name}
                          href={i.href}
                          className="font-body text-gray-400 capitalize hover:text-red-400 transition-colors"
                        >
                          {i.info_name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="text-xl font-body font-semibold border py-2 px-10 hover:bg-red-400 hover:border-red-400 cursor-pointer transition-colors duration-300">
            Appstore
          </button>
        </div>
      </nav>
      {/* section1 */}
      <section className="relative h-[calc(100vh-6.25rem)] w-full overflow-hidden">
        <video
          ref={ref}
          src="/background_videos/video1.mp4"
          poster="/background_videos/video1-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

        <div className="absolute left-50 top-1/2 -translate-y-1/2 max-w-xl flex flex-col gap-6">
          <Reveal>
            <h1 className="font-heading text-6xl font-bold leading-tight">
              Build, share and play{" "}
              <span className="text-red-400">in-game apps</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-xl text-gray-300">
              Join millions of gamers and creators using Meanwolf every day.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex gap-4">
              <button className="bg-red-400 hover:bg-red-500 px-8 py-3 font-semibold text-lg transition-colors cursor-pointer">
                Get started
              </button>
            </div>
          </Reveal>
        </div>
        <div className="absolute left-50  bottom-0 flex w-full">
          <Reveal delay={400}>
            <div className="flex items-center">
              <p className="text-3xl font-body font-semibold text-taupe-400">
                Trusted by :
              </p>
              <span className="flex items-center gap-15 ml-10 mt-2">
                <Image
                  src={logitech}
                  alt="logitech"
                  className="object-cover h-40 w-30"
                />
                <Image
                  src={twitch}
                  alt="twitch"
                  className="object-cover h-30 w-30"
                />
                <Image
                  src={intel}
                  alt="twitch"
                  className="object-cover h-30 w-30"
                />
                <Image
                  src={ubisoft}
                  alt="twitch"
                  className="object-contain h-40 w-40"
                />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* section2 */}
      <section className="relative h-[calc(100vh-6.25rem)] w-full overflow-hidden">
        <video
          src="/background_videos/video2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute right-50 top-1/2 -translate-y-1/2 max-w-xl flex flex-col gap-6">
          <Reveal>
            <h1 className="font-heading text-6xl font-bold leading-tight">
              Cross-Platform{" "}
              <span className="text-red-400 whitespace-nowrap">
                Modding as a Service
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-xl text-gray-300">
              CurseForge API, SDK, and plugins allow any studio to integrate
              mods into their games in a safe, curated and easy way.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex gap-4">
              <button className="bg-red-400 hover:bg-red-500 px-8 py-3 font-semibold text-lg transition-colors cursor-pointer">
                Integrate curseforge
              </button>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-25 right-15">
          <Reveal delay={400}>
            <span className="flex gap-10 items-center">
              <Image
                src={windows}
                alt="windows-logo"
                className="h-12 w-auto object-cover"
              />
              <Image
                src={ps}
                alt="windows-logo"
                className="h-12 w-auto object-cover"
              />
              <Image
                src={xbox}
                alt="windows-logo"
                className="h-13 w-auto object-cotain"
              />
              <Image
                src={steam}
                alt="windows-logo"
                className="h-12 w-auto object-cotain"
              />
              <Image
                src={epic}
                alt="windows-logo"
                className="h-12 w-auto object-cotain"
              />
            </span>
          </Reveal>
        </div>
      </section>

      {/* section3 */}
      <section className="relative h-[calc(100vh-6.25rem)] w-full overflow-hidden">
        <video
          src="/background_videos/video4.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

        <div className="absolute left-50 top-1/2 -translate-y-1/2 max-w-xl flex flex-col gap-6">
          <Reveal>
            <h1 className="font-heading text-6xl font-bold leading-tight w-3xl ">
              {`Overwolf is the World's Leading Ecosystem for In-Game Creations & Content`}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-xl text-gray-300">
              We empower over 178K in-game creators to turn their passion into a
              real profession - giving them everything they need to create
              unique gaming experiences for top AAA titles.
            </p>
          </Reveal>
        </div>
        <div className="absolute left-50 bottom-15 flex w-full ">
          <span className="w-full flex justify-center items-center gap-35 ml-10 mt-2">
            {playingAmount.map((p) => (
              <div key={p.title} className="flex flex-col gap-4">
                <Reveal delay={400}>
                  <p className="font-body text-red-400 text-5xl font-semibold">
                    {p.amount}
                  </p>
                  <p className="font-body">{p.title}</p>
                </Reveal>
              </div>
            ))}
          </span>
        </div>
      </section>

      {/* section4 */}
      <section className="relative h-[calc(100vh-6.25rem)] w-full overflow-hidden bg-black">
        <video
          src="/background_videos/video3.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute right-0 top-0 w-3/5 h-full object-cover"
        />
        <div className="absolute left-50 top-1/2 -translate-y-1/2 max-w-xl flex flex-col gap-6">
          <Reveal>
            <h1 className="font-heading text-6xl font-bold leading-tight">
              Gaming Payments Done Right{" "}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-xl text-gray-300">
              The all-in-one monetization platform designed to grow your game’s
              revenue.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex gap-4">
              <button className="bg-red-400 hover:bg-red-500 px-8 py-3 font-semibold text-lg transition-colors cursor-pointer">
                Discover
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* section 5 */}
      <section className="py-20 px-50">
        <div className="overflow-hidden">
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${slide * (100 / VISIBLE)}%)` }}
          >
            {loopItems.map((a) => (
              <div key={a.id} className="w-1/4 shrink-0 px-3">
                <div className="h-full p-6 flex flex-col gap-4 transition-colors space-y-15">
                  <p className="font-heading text-2xl font-bold text-red-400 text-center">
                    {a.title}
                  </p>
                  <p className="font-body text-lg text-gray-300 first-letter:uppercase flex-1 text-center">
                    {a.des}
                  </p>
                  <Link
                    href="/"
                    className="font-body uppercase tracking-wider text-sm hover:text-red-400 transition-colors text-center"
                  >
                    {a.read} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {advertisersSlice.map((a) => (
            <button
              key={a.id}
              onClick={() => setSlide(a.id)}
              aria-label={`Go to slide ${a.id + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                a.id === slide % advertisersSlice.length
                  ? "w-8 bg-red-400"
                  : "w-3 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>
      {/* footer */}
      <footer className="flex justify-between items-center bg-neutral-900 h-40">
        <div className="flex items-center">
          <Image
            src={wolfLogo}
            alt="wolf-logo"
            className="h-40 w-auto object-contain"
          />
          <div className="space-y-4">
            <div className="flex items-center gap-2 ">
              <FaRegCopyright className="h-5 w-auto text-neutral-400 hover:text-white transition duration-200" />
              <p className="text-xl text-neutral-400 font-body hover:text-white transition duration-200">
                2026 Meanwolf. All rights reserved.
              </p>
            </div>
            <p className="text-xl text-neutral-400 font-body hover:text-white transition duration-200">
              By Mr.Phanthavy Litthavong
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <FaFacebook className="h-10 w-auto text-neutral-400 hover:text-white cursor-pointer transition duration-200" />
          <FaDiscord className="h-12 w-auto text-neutral-400 hover:text-white cursor-pointer transition duration-200" />
          <FaXTwitter className="h-10 w-auto text-neutral-400 hover:text-white cursor-pointer transition duration-200" />
          <FaReddit className="h-10 w-auto text-neutral-400 hover:text-white cursor-pointer transition duration-200" />
          <FaLinkedin className="h-11 w-auto text-neutral-400 hover:text-white cursor-pointer transition duration-200" />
        </div>
      </footer>
    </div>
  );
};
export default DashBoard;
