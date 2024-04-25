import { appleImg, bagImg, searchImg } from "./../utils";

function NavBar() {
  return (
    <heder>
      <nav>
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div>
          {["iPhones", "Macbooks", "Tablets"].map((nav) => (
            <div key={nav}>{nav}</div>
          ))}
        </div>

        <div>
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </heder>
  );
}

export default NavBar;
