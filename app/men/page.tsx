import Banner from "@/components/banner";

const Page = () => {
	return (
		<main className="min-h-svh w-full">
			<Banner
				url={"/images/male-face-02.jpg"}
				showButton={false}
				title="Refine Your Style: Men's  Collection"
				description="Elevate Every Outfit with Timeless Pieces Crafted for the Modern Gentleman."
				className="md:h-[75svh]"
			/>
			<section className="min-h-svh" />
		</main>
	);
};

export default Page;
