
function Navbar() {
  return (
    <div className="flex bg-violet-700 py-4">
      <img
        src="https://www.change-networks.com/public/front_assets/img/logo.png"
        alt=""
        className="w-10 h-10 ml-4 "
      />

      <div className="mx-4">
        <ul className="flex justify-end gap-4 cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* dark and light mode */}
    </div>
  );
}

export default Navbar;
