import { appleImg } from "./../utils";

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
      </nav>
    </heder>
  );
}

export default NavBar;
