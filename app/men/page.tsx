import Banner from "@/components/banner";

const Page = () => {
	return (
		<main className="min-h-svh w-full container">
			<Banner
				url={"/images/male-face-02.jpg"}
				showButton={false}
				title="Refine Your Style: Men's  Collection"
				description="Elevate Every Outfit with Timeless Pieces Crafted for the Modern Gentleman."
				className="md:h-[75svh]"
			/>
			<section className="min-h-svh">
				<h2 className="subheader">Products</h2>
			</section>
		</main>
	);
};

export default Page;
