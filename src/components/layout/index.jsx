import ButtonOutlined from "@/components/nestable/ButtonOutlined";
import ButtonSecondary from "@/components/nestable/ButtonSecondary";

//Uses config set global components for the layout
export default function Layout({ config, children }) {
    //Create at least a header and footer component
    //Use console.log to determine blok object structure if unsure...
    return (
        <>
            <header></header>
            <main>{children}
            <ButtonOutlined blok={{ button_text: "H", link: "#" }} />
            <ButtonSecondary blok={{ button_text: "Shop All", link: "#" }} />
            <ButtonSecondary blok={{ button_text: "Go to products", link: "#" }} />

            </main>
            <footer></footer>
        </>
    );
}