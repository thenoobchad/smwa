import { Faqs } from "@/components/faqs";
import { HamburgerMenu } from "@/components/hamburger-menu";
import { BookOpenCheck, Facebook, GraduationCap, Instagram, Linkedin, MailCheck, MapPinHouse, Phone,  } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
		<main className="w-full mx-auto text-sm relative">
			{/* Header carousel */}

			<div className="px-2 w-full text-center bg-blue-950 py-2">
				{" "}
				<p className="text-white">
					Latest new - Examination for the Second Term begins soon
				</p>
			</div>
			<div className="px-2 w-full text-center text-sm py-2 flex flex-col justify-center items-center gap-1 border-b mb-2 border-blue-950">
				<span className="flex gap-2">
					{" "}
					<MailCheck size={16} />
					Excel Grid International School
				</span>
				<p className="flex gap-2 items-center">
					Follow Us: <Facebook size={15} /> <Linkedin size={15} />{" "}
					<Instagram size={15} />
				</p>
			</div>
			<header className="flex w-full flex-col px-2">
				<div className="flex w-full justify-between">
					<div className="h-20 relative w-20 overflow-hidden">
						<Image
							fill
							src="/images/excel-logo.png"
							alt="logo"
							className="object-cover"
						/>
					</div>

					<HamburgerMenu />
				</div>
				<div className="flex w-full items-center justify-center gap-2 ">
					<span className="flex gap-2">
						<Phone size={18} />
						Call Us:{" "}
					</span>
					<span>08152345415</span>
				</div>
			</header>
			<section className="py-6 px-2">
				<div className="h-70 w-full relative overflow-hidden">
					<Image
						fill
						src="/images/backg.png"
						alt="background"
						className="object-cover w-full h-full"
					/>
				</div>
			</section>

			<section className="py-6 px-2 w-full">
				<div className=" w-full grid gap-4 grid-cols-1 sm:grid-cols-2">
					<div className="flex gap-2 p-4 bg-blue-950 text-white items-center">
						<div className="w-10  bg-blue-900/50 p-1">
							<BookOpenCheck
								strokeWidth={1.6}
								absoluteStrokeWidth
								size={30}
							/>{" "}
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="font-semibold">Standard Curriculum </h4>
							<span className="text-sm text-justify">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Maiores, doloribus inventore voluptate veniam vitae ex!
							</span>
						</div>
					</div>
					<div className="flex gap-2 p-4 bg-blue-950 text-white items-center">
						<div className="w-10 bg-blue-900/50 p-1">
							<GraduationCap
								strokeWidth={1.6}
								absoluteStrokeWidth
								size={30}
							/>{" "}
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="font-semibold">Certified Teachers </h4>
							<span className="text-sm text-justify">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Maiores, doloribus inventore voluptate veniam vitae ex!
							</span>
						</div>
					</div>
					<div className="flex gap-2 p-4  bg-blue-950 text-white items-center">
						<div className="w-10  bg-blue-900/50 p-1">
							<MapPinHouse
								strokeWidth={1.6}
								absoluteStrokeWidth
								size={30}
							/>{" "}
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="font-semibold">Conducive Environment </h4>
							<span className="text-sm text-justify">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Maiores, doloribus inventore voluptate veniam vitae ex!
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

			<footer className="bg-zinc-900 text-white px-2 py-4">
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
