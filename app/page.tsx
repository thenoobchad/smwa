import { Faqs } from "@/components/faqs";
import { HamburgerMenu } from "@/components/hamburger-menu";
import { BetweenHorizonalEnd, BookOpenCheck, GraduationCap, MailCheck, Phone, } from "lucide-react";
import Image from "next/image";
import 'animate.css';
import { HeroSlider } from "@/components/hero-slider";


export default function Home() {
	return (
		<main className="w-full mx-auto text-sm relative min-h-screen">
			{/* Header carousel */}

			<div className="px-2 w-full text-center bg-[#4c0121] py-2">
				{" "}
				<p className="text-white">
					Latest new - Examination for the Second Term begins soon
				</p>
			</div>
			<header className="px-2 w-full text-center text-sm py-3 flex justify-between items-center gap-1 border-blue-950">
				<div className="h-20 relative w-20 overflow-hidden">
					<Image
						fill
						src="/images/excel-logo.png"
						alt="logo"
						className="object-cover"
					/>
				</div>

				<div>

					<span className="flex gap-2 items-center">
						{" "}
						<MailCheck size={16} />
						Excel Grid International School
					</span>

					<div className="flex w-full items-center justify-center gap-2 ">
						<span className="flex gap-2">
							<Phone size={18} />
							Call Us:{" "}
						</span>
						<span>08152345415</span>
					</div>
				</div>

				<HamburgerMenu />
			</header>

			<section className=" relative">


				<HeroSlider />


			</section>

			<section className="py-6 px-2 w-full">
				<div className=" w-full grid gap-4 grid-cols-1 sm:grid-cols-2">
					<div className="flex gap-2 p-4  items-center bg-blue-100">
						<div className="w-12 h-12 text-white rounded-full bg-blue-700  p-2">
							<BookOpenCheck
								strokeWidth={2}
								absoluteStrokeWidth
								size={30}
							/>{" "}
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="font-semibold text-blue-700 text-[16px] uppercase">Standard Curriculum </h4>
							<span className="text-sm text-justify text-blue-700 ">
								A rigorous academic framework designed to meet global benchmarks and prepare students for future success.
							</span>
						</div>
					</div>
					<div className="flex gap-2 p-4 bg-orange-100 items-center">
						<div className="w-12 h-12 text-white bg-orange-700 p-2 rounded-full">
							<GraduationCap
								strokeWidth={2}
								absoluteStrokeWidth
								size={30}
							/>{" "}
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="font-semibold  text-[16px] text-orange-700  uppercase">Certified Teachers </h4>
							<span className="text-sm text-justify">
								Led by a team of qualified educators committed to academic excellence and personalized mentorship.
							</span>
						</div>
					</div>
					<div className="flex gap-2 p-4 items-center bg-yellow-100">
						<div className="min-w-12 h-12  bg-yellow-700  text-white rounded-full p-2 ">
							<BetweenHorizonalEnd
								strokeWidth={2}
								absoluteStrokeWidth
								size={30}
							/>{" "}
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="font-semibold text-yellow-700 uppercase  text-[16px]">Conducive Environment </h4>
							<span className="text-sm text-justify text-yellow-700">
								Adequate facilities and safe, distraction-free spaces engineered to optimize the learning experience.
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* EXCEL INTRO */}

			<section className="py-6 px-2 w-full">
				<div className="flex flex-col w-full justify-center items-center">
					<h4 className="text-2xl py-1 uppercase font-bold">
						Excel Grid International School
					</h4>
					<div>
						<p className="text-justify">
							Excelgrid Foundation School was established in 2009 with Excel
							Nursery and Primary School, PortHarcort, Rivers, Nigeria
						</p>

						<p className="text-justify">
							Our Aim at Excelgrid Foundation School is to be widely acclaimed
							as a school that trains and turns out students who have been
							adequately prepared for tertiary education and life.
						</p>

						<p className="text-justify">
							Our Mission at Excelgrid Foundation School is to produce future
							leaders with excellence as mode of living.
						</p>
					</div>
				</div>
			</section>

			<section className="py-6 px-2 w-full">
				<div className="flex flex-col w-full justify-center items-center">
					<h4 className="text-xl py-2 uppercase font-bold">
						Frequently Asked Questions
					</h4>
					<Faqs />
				</div>
			</section>

			<footer className="bg-zinc-900 text-white px-2 py-4 mt-auto relative">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
					<div className="flex flex-col">
						<p>
							Carscar Street, Nkpor Rumuolumeni Port Harcourt, Rivers, Nigeria
						</p>
						<p className="flex flex-col">
							<span>0815285143</span>
							<span>chinyereelueme@gmail.com</span>
						</p>
					</div>
					<div>
						<h4>About Us</h4>
						<ul>
							<li>Home</li>
							<li>About Us</li>
							<li>Academics</li>
							<li>Contact</li>
						</ul>
					</div>
					<div>
						<h4>Admissions</h4>
						<p>Admission Process</p>
					</div>
					<div>
						<h4>Academics</h4>
						<ul>
							<li>Early Years</li>
							<li>Primary</li>
							<li></li>Secondary
						</ul>
					</div>
				</div>
				<div className="flex items-center w-full justify-center py-2 border-t border-zinc-400 text-sm">
					<p>
						Copyright All Right Reserved 2024. Excelgrid Foundation School, Port
						Harcourt, NIgeria
					</p>
				</div>
			</footer>
		</main>
	);
}
