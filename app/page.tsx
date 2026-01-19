import { HamburgerMenu } from "@/components/hamburger-menu";
import { ActivitySquare, BookOpenCheck, Facebook, Instagram, Linkedin, MailCheck, TentTree, UserRoundPen } from "lucide-react";


export default function Home() {
  return (
		<main className="w-full mx-auto max-w-5xl text-sm">
			{/* Header carousel */}

			<div className="px-2 w-full text-center bg-blue-950 py-2">
				{" "}
				<p className="text-white">
					Latest new - Examination for the Second Term begins soon
				</p>
			</div>
			<div className="px-2 w-full text-center text-xs py-2 flex flex-col justify-center items-center gap-1">
				<span className="flex gap-2">
					{" "}
					<MailCheck size={16} />
					Excel Grid International School
				</span>
				<p className="flex gap-2 ">
					Follow Us: <Facebook size={15} /> <Linkedin size={15} />{" "}
					<Instagram size={15} />
				</p>
			</div>
			<header className="flex w-full flex-col px-2">
				<div className="flex w-full justify-between">
				  <div className="h-15 w-15">
					  <img src="/images/excel-logo.png" alt="logo" className="object-contain"/>
					</div>

					<HamburgerMenu />
				</div>
				<div className="flex flex-col ">
					<span>Call Us</span>
					<span>08152345415</span>
				</div>
			</header>
			<section className="py-6 px-2">
				<div className="h-70 w-full overflow-hidden">
					<img
						src="/images/backg.png"
						alt="background"
						className="object-cover w-full h-full"
					/>
				</div>
			</section>

			<section className="py-6 px-2 w-full">
				<div className=" w-full grid gap-4 grid-cols-2 md:grid-cols-3">
					<div className="flex gap-2 p-4 bg-blue-950 text-white">
						<BookOpenCheck size={30} />{" "}
						<p className="flex flex-col">
							Standard Curriculum{" "}
							<span className="text-xs">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Maiores, doloribus inventore voluptate veniam vitae ex!
							</span>
						</p>
					</div>
					<div className="flex gap-2 p-4 bg-blue-950 text-white">
						<UserRoundPen size={30} />{" "}
						<p className="flex flex-col">
							Certified Teachers{" "}
							<span className="text-xs">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Maiores, doloribus inventore voluptate veniam vitae ex!
							</span>
						</p>
					</div>
					<div className="flex gap-2 p-4  bg-blue-950 text-white">
						<TentTree size={30} />{" "}
						<p className="flex flex-col">
							Conducive Environment{" "}
							<span className="text-xs">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Maiores, doloribus inventore voluptate veniam vitae ex!
							</span>
						</p>
					</div>
				</div>
			</section>

			{/* EXCEL INTRO */}

			<section className="py-6 px-2 w-full">
			  <div className="flex flex-col w-full justify-center items-center">
				  <h4 className="text-2xl py-1 uppercase font-bold">Excel Grid International School</h4>
				  <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium iste commodi sequi. Nam ea alias architecto quae. Nulla at quaerat vero corrupti, recusandae, fugiat, nihil esse sit consequatur perspiciatis quidem consequuntur illo distinctio consectetur saepe doloremque quibusdam dolorem modi debitis.</p>
				</div>
		  </section>
		  
		  <footer>
			  <div></div>
		  </footer>
		</main>
	);
}
