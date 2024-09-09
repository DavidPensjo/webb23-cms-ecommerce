import Link from "next/link";

const Navbar = ({ config }) => {
  return (
    <div className="border-b border-fill_primary h-2/6">
      <div className="container mx-auto flex h-11 items-center justify-between">
        <div className="flex items-center space-x-9">
          <Link href="/">
            <p className="font-bold cursor-pointer">{config.content.logo}</p>
          </Link>
          <div className="relative group">
            <Link href="/shop-list-page">
              <p className="cursor-pointer">Products</p>
            </Link>
            <div className="bg-white border border-fill_primary absolute left-0 mt-4 p-4 rounded shadow-lg z-10 transition-all ease-in-out duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
              {config.content.products.map((item, index) => (
                <div className="flex w-44" key={index}>
                  <Link href={item.link.url}>
                    <p className="p-2 hover:bg-slate-100 cursor-pointer rounded">
                      {item.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Link href="/about">
            <p className=" cursor-pointer">About</p>
          </Link>
          <div>
            <img
              src={config.content.search_icon}
              className="w-4 h-4"
              alt="Search Icon"
            ></img>
            <div>{/* SEARCH FUNCTION HERE */}</div>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <img
            src={config.content.cart_icon}
            className="w-9 h-5"
            alt="Cart Icon"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
