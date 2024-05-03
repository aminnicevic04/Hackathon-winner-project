import { Footer } from "flowbite-react";

function MyFooter() {
  return (
    <Footer
      container
      className="bg-[#02010a] rounded-none flex flex-col items-center justify-end text-stone-500"
    >
      <Footer.Copyright href="#" by=" UTUN" year={2024} />
      <Footer.LinkGroup className="flex gap-4">
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default MyFooter;
